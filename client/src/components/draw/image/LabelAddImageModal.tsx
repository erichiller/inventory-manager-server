import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import { Select, Icon, Spin, Typography, Divider, Form, AutoComplete, Tooltip, Button } from 'antd';
import { display } from '../../ItemTable';
import React from 'react';
import { Modal } from 'antd';
import { ItemsHardwareFastenerBolt, InsertIconComponent, withGetIcons, GetIconsProps, EnumIconCategoryEnum, InsertIconDocument, GetIconsDocument, ItemsHardwareFastenerBoltSelectColumn } from '../../../types/graphql';
import { LabelImage } from '../LabelConstituent';
import { DrawContext } from '../LabelDraw';


interface LabelAddImageProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Items;
    labelImage: LabelImage;
    visibleHandler: ( display?: display ) => void;
    changeHandler: ( newValue: any, labelImage: LabelImage ) => void;
}

interface LabelAddImageState {

}


export default withGetIcons<LabelAddImageProps, LabelAddImageState>()(
    class LabelAddImageModal extends Component<GetIconsProps<LabelAddImageProps>, LabelAddImageState> {

        handleCancel = () => {
            /// REMOVE ELEMENT /// REVERT ///
            this.onClose();
        }

        onClose = () => {
            this.props.visibleHandler( display.HIDDEN );
        }

        getLabelImageSelectedObj ( id: string ): LabelImage {
            if ( this.props.data.icons ) {
                for ( let i = 0; i < this.props.data.icons.length; i++ ) {
                    let icon = this.props.data.icons[ i ];
                    console.log( "checking labelImage uuid: ", icon.id );

                    if ( icon.id == id ) {
                        console.log( "returning labelImage by uuid: ", icon.id );

                        return new LabelImage( {
                            ...icon,
                            width: 50,
                            height: 50
                        } );
                    }
                }
                // this.props.data.icons.forEach( icon => {
                //     console.log( "checking labelImage uuid: ", icon.id );

                //     if ( icon.id == id ){
                //         console.log( "returning labelImage by uuid: ", icon.id );

                //         return icon;
                //     }
                // });
            }
            console.log( "!! RETURNING NULL !!" );
            return null;

        }

        onChange = ( value: string ) => {

            console.log( "looking up labelImage by value: ", value );
            this.props.changeHandler(
                this.getLabelImageSelectedObj( value ),
                this.props.labelImage
            );
        }

        render () {
            const {
                event,
                visibleHandler,
                item,
                changeHandler,
                labelImage } = this.props;

            let { loading, error } = this.props.data!;

            console.log( 'this.props.visible', visibleHandler() );
            // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
            console.log( 'this.props.item', item );
            let drawWidth = 725;
            return (
                <DrawContext.Consumer>
                    {( { commitLabelImage, displayImageUploadModal } ) => {
                        return <Modal
                            visible
                            title={"Image"}
                            onCancel={this.handleCancel}
                            onOk={() => { commitLabelImage( labelImage ); this.onClose(); }}
                            footer={[
                                <Tooltip placement="top" title="Return to Items">
                                    <Button key="cancel" type="danger" onClick={this.handleCancel}>
                                        <Icon type="stop" />
                                        Cancel
                                    </Button>
                                </Tooltip >,
                                <Tooltip placement="top" title="Add to list for bulk printing later">
                                    <Button key="Upload Image" type="primary" onClick={() => { 
                                        displayImageUploadModal( display.VISIBLE );
                                        visibleHandler( display.HIDDEN );
                                        }} >
                                        {/* <Icon type="plus-circle" /> */}
                                        <Icon type="upload" />
                                        Upload New Image
                                    </Button>
                                </Tooltip>,
                                <Tooltip placement="top" title="Add image to label">
                                    <Button key="add" type="primary" onClick={() => { commitLabelImage( labelImage ); this.onClose(); }}>
                                        <Icon type="plus-circle" />
                                        Add
                                    </Button>
                                </Tooltip>
                            ]}
                            width={420}
                        >
                            <Select
                                style={{ width: 370 }}
                                placeholder="Select an Existing Image"
                                loading={loading}
                                onChange={this.onChange}
                            //                     dropdownRender={menu => (
                            //                         <div>
                            //                             {menu}
                            //                             <Divider style={{ margin: '4px 0' }} />
                            //                             <div
                            //                                 style={{ padding: '4px 8px', cursor: 'pointer' }}
                            //                                 onMouseDown={e => e.preventDefault()}
                            //                                 onClick={this.commitLabelImage}

                            //                             >
                            //                                 <Icon type="plus" /> Add item
                            // </div>
                            //                         </div>
                            //                     )}
                            >
                                {console.log( "DrawAddImage", this.props.data )}
                                {this.props.data.icons ? this.props.data.icons.map( icon => (
                                    <Select.Option
                                        value={icon.id}
                                        key={icon.id}
                                    // value={`${ icon.id }.${icon.category }.${ icon.label } ${ icon.description }`}
                                    >{icon.label ? icon.label : icon.id}</Select.Option>
                                ) ) : null}
                            </Select>

                            {/* <Divider />
                            <i><Typography.Text type="secondary">Or create a new image</Typography.Text></i><br />
                            <NewImageUploadModal
                                changeHandler={changeHandler}
                                visibleHandler={visibleHandler}
                                buttonLabel="Upload Image"
                                labelImage={labelImage}
                            /> */}
                        </Modal>;
                    }}
                </DrawContext.Consumer>
            );
        }
    }
);