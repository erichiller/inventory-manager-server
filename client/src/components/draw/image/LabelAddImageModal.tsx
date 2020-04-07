import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import { Select, Tooltip, Button } from 'antd';
import { DISPLAY } from '../../../lib/types/enums';
import React from 'react';
import { Modal } from 'antd';
import { withGetIcon, GetIconProps, Icon as CustomIcon } from '../../../lib/types/graphql';
import { Item } from '../../../lib/item';
import { LabelImage } from '../../../lib/LabelConstituent';
import { DrawContext } from '../LabelDraw';
import { StopOutlined, UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';


interface LabelAddImageProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item<any>;
    labelImage: LabelImage;
    visibleHandler: ( display?: DISPLAY ) => void;
    changeHandler: ( newValue: any, labelImage: LabelImage ) => void;
}

interface LabelAddImageState {

}


export default withGetIcon<LabelAddImageProps, LabelAddImageState>()(
    class LabelAddImageModal extends Component<GetIconProps<LabelAddImageProps>, LabelAddImageState> {

        handleCancel = () => {
            /// REMOVE ELEMENT /// REVERT ///
            this.onClose();
        };

        onClose = () => {
            this.props.visibleHandler( DISPLAY.HIDDEN );
        };

        getLabelImageSelectedObj ( id: string ): LabelImage {
            if ( this.props.data.icon ) {
                for ( let i = 0; i < this.props.data.icon.length; i++ ) {
                    let icon = this.props.data.icon[ i ];
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
                // this.props.data.icon.forEach( icon => {
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
        };

        makeSvgElement = ( icon: Partial<CustomIcon> ) => {
            return <img width={50} src={icon.data} />;
        };

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
                        return (
                            <Modal
                                visible
                                title={"Image"}
                                onCancel={this.handleCancel}
                                onOk={() => { commitLabelImage( labelImage ); this.onClose(); }}
                                footer={[
                                    <Tooltip placement="top" title="Return to Items">
                                        <Button key="cancel" type="danger" onClick={this.handleCancel}>
                                            <StopOutlined />
                                            Cancel
                                        </Button>
                                    </Tooltip >,
                                    <Tooltip placement="top" title="Add to list for bulk printing later">
                                        <Button key="Upload Image" type="primary" onClick={() => {
                                            displayImageUploadModal( DISPLAY.VISIBLE );
                                            visibleHandler( DISPLAY.HIDDEN );
                                        }} >
                                            {/* <Icon type="plus-circle" /> */}
                                            <UploadOutlined />
                                            Upload New Image
                                        </Button>
                                    </Tooltip>,
                                    <Tooltip placement="top" title="Add image to label">
                                        <Button key="add" type="primary" onClick={() => { commitLabelImage( labelImage ); this.onClose(); }}>
                                            <PlusCircleOutlined />
                                            Add
                                        </Button>
                                    </Tooltip>
                                ]}
                                width={420}
                            >
                                <Select
                                    style={{ width: 370, height: 50 }}
                                    placeholder="Select an Existing Image"
                                    loading={loading}
                                    onChange={this.onChange}
                                    id="image-select"
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
                                    {this.props.data.icon ? this.props.data.icon.map( icon => (
                                        <Select.Option
                                            value={icon.id}
                                            key={icon.id}
                                        // value={`${ icon.id }.${icon.category }.${ icon.label } ${ icon.description }`}
                                        >
                                            {/* <Icon type="file-image" /> */}
                                            {/* <Icon component={icon.data as any} /> */}
                                            {/* <Icon component={this.makeSvgElement( icon ) as any} /> */}
                                            {this.makeSvgElement( icon ) }
                                            {icon.title || icon.description ? `${icon.title} ${icon.description}` : icon.id}
                                        </Select.Option>
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
                            </Modal>
                        );
                    }}
                </DrawContext.Consumer>
            );
        }
    }
);
