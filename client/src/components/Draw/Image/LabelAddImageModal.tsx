import type { KonvaEventObject } from 'konva/types/Node';
import { Component, useState, useEffect } from 'react';
import { Select, Tooltip, Button } from 'antd';
import { DISPLAY } from '~lib/types/enums';
import React from 'react';
import { Modal } from 'antd';
import { useGetIconsQuery } from '~lib/types/graphql';
import { Item } from '~lib/Item';
import { LabelImage } from '~lib/LabelConstituent';
import { DrawContext } from '~components/Draw/LabelDraw';
import { StopOutlined, UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { QueryResultTypePlus } from '~lib/UtilityFunctions';


interface LabelAddImageProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item<any>;
    labelImage: LabelImage;
    visibleHandler: ( display?: DISPLAY ) => void;
    changeHandler: ( newValue: any, labelImage: LabelImage ) => void;
}

interface LabelAddImageState {

}


// export default withGetIcons<LabelAddImageProps, LabelAddImageState>()(
export const LabelAddImageModal: React.FC<LabelAddImageProps> = ( props ) => {

    const [ icons, setIcons ] = useState < QueryResultTypePlus<typeof useGetIconsQuery>[]>([]);

    const handleCancel = () => {
        /// REMOVE ELEMENT /// REVERT ///
        onClose();
    };

    const onClose = () => {
        props.visibleHandler( DISPLAY.HIDDEN );
    };

    let { data, loading, error} = useGetIconsQuery( { } );

    useEffect( () => {
        if ( data ){
            setIcons(data.icon);
        }
    }, [ data, loading, error ]);

    const getLabelImageSelectedObj: ( id: string ) => LabelImage = ( id ) => {
        if ( data.icon ) {
            for ( let i = 0; i < data.icon.length; i++ ) {
                let icon = data.icon[ i ];
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
            // props.data.icon.forEach( icon => {
            //     console.log( "checking labelImage uuid: ", icon.id );

            //     if ( icon.id == id ){
            //         console.log( "returning labelImage by uuid: ", icon.id );

            //         return icon;
            //     }
            // });
        }
        console.log( "!! RETURNING NULL !!" );
        return null;

    };

    const onChange = ( value: string ) => {

        console.log( "looking up labelImage by value: ", value );
        props.changeHandler(
            getLabelImageSelectedObj( value ),
            props.labelImage
        );
    };

    const makeSvgElement = ( icon: QueryResultTypePlus<typeof useGetIconsQuery> ) => {
        // makeSvgElement = ( icon: Partial<CustomIcon> ) => {
        return <img width={50} src={icon.data} />;
    };

    const {
        event,
        visibleHandler,
        item,
        changeHandler,
        labelImage } = props;



    console.log( 'props.visible', visibleHandler() );
    // console.log('state.visible', visibleHandler(), state.visible == display.VISIBLE ? true : false)
    console.log( 'props.item', item );
    let drawWidth = 725;
    return (
        <DrawContext.Consumer>
            {( { commitLabelImage, displayImageUploadModal } ) => {
                return (
                    <Modal
                        visible
                        title={"Image"}
                        onCancel={handleCancel}
                        onOk={() => { commitLabelImage( labelImage ); onClose(); }}
                        footer={[
                            <Tooltip placement="top" title="Return to Items">
                                <Button key="cancel" danger={true} onClick={handleCancel}>
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
                                <Button key="add" type="primary" onClick={() => { commitLabelImage( labelImage ); onClose(); }}>
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
                            onChange={onChange}
                            id="image-select"
                        //                     dropdownRender={menu => (
                        //                         <div>
                        //                             {menu}
                        //                             <Divider style={{ margin: '4px 0' }} />
                        //                             <div
                        //                                 style={{ padding: '4px 8px', cursor: 'pointer' }}
                        //                                 onMouseDown={e => e.preventDefault()}
                        //                                 onClick={commitLabelImage}

                        //                             >
                        //                                 <Icon type="plus" /> Add item
                        // </div>
                        //                         </div>
                        //                     )}
                        >
                            {console.log( "DrawAddImage", data )}
                            {icons.map( icon => (
                                <Select.Option
                                    value={icon.id}
                                    key={icon.id}
                                // value={`${ icon.id }.${icon.category }.${ icon.label } ${ icon.description }`}
                                >
                                    {/* <Icon type="file-image" /> */}
                                    {/* <Icon component={icon.data as any} /> */}
                                    {/* <Icon component={makeSvgElement( icon ) as any} /> */}
                                    {makeSvgElement( icon )}
                                    {icon.title || icon.description ? `${ icon.title } ${ icon.description }` : icon.id}
                                </Select.Option>
                            ) ) }
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
};
