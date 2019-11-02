import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import { Select, Icon, Spin, Button } from 'antd';
import { display } from '../ItemTable';
import React from 'react';
import { Modal } from 'antd';
import { ItemsHardwareFastenerBolt, InsertIconComponent, withGetIcons, GetIconsProps, EnumIconCategoryEnum, InsertIconDocument, GetIconsDocument } from '../../types/graphql';
import { LabelImage } from './LabelConstituent';
import { DrawContext } from './LabelDraw';

import '../../styles/fileInput.scss';

interface LabelAddImageProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: ItemsHardwareFastenerBolt;
    labelImage: LabelImage;
    visibleHandler: ( display?: display ) => void;
    changeHandler: ( newValue: any, labelImage: LabelImage ) => void;
}

interface LabelAddImageState {

}


export default withGetIcons<LabelAddImageProps, LabelAddImageState>()(
    class LabelAddImage extends Component<GetIconsProps<LabelAddImageProps>, LabelAddImageState> {

        onCancel = () => {
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
                    {( { commitLabelImage } ) => {
                        return <Modal
                            visible
                            title={"Image"}
                            okText="Make it so"
                            onCancel={this.onCancel}
                            onOk={() => { commitLabelImage( labelImage ); this.onClose(); }}
                            width={drawWidth + 25}
                        >
                            <Select
                                style={{ width: 240 }}
                                placeholder="custom dropdown render"
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

                            <NewImageButton
                                buttonLabel="Add New Image"
                                labelImage={labelImage}
                            />
                        </Modal>;
                    }}
                </DrawContext.Consumer>
            );
        }
    }
);

interface NewImageButtonProps {
    buttonLabel: string;
    labelImage: LabelImage;
    // onClick: ( boolean ) => void;
}


interface NewImageButtonState {
    loading: boolean;
    imageUrl?: string;
}

{/* {( uploadFiles, { loading, called, data, error } ) => (
                    <Dropzone onDrop={async files => {
                        console.log( "files", files );
                        const { data: { uploadFiles: uploads } } = await uploadFiles(
                             { variables: { files } } 
                             );
                        console.log( "uploads", uploads );
                    }}>
                        {( { getRootProps, getInputProps, isDragActive } ) => (
                            <Spin spinning={loading} >
                                <section>
                                    <div {...getRootProps()} style={dropzoneStyle}>
                                        <input {...getInputProps()} />
                                        <p>{isDragActive ? "Dropzone" : 'Click me or drag a file to upload!'}</p>
                                    </div>
                                </section>
                            </Spin>
                        )}
                    </Dropzone>
                )} */}

export class NewImageButton extends React.Component<NewImageButtonProps, NewImageButtonState> {
    state: NewImageButtonState = {
        loading: false
    };

    // handleChange = info => {
    //     console.log( "NewImageButton . handleChange", info );
    //     if ( info.file.status === 'uploading' ) {
    //         console.log( "NewImageButton . handleChange is uploading", info );
    //         this.setState( { loading: true } );
    //         return;
    //     }
    //     if ( info.file.status === 'done' ) {
    //         console.log( "NewImageButton . handleChange is done", info );
    //         // Get this url from response in real world.
    //         getBase64( info.file.originFileObj, imageUrl =>
    //             this.setState( {
    //                 imageUrl,
    //                 loading: false,
    //             } ),
    //         );
    //     }
    // }
    // transformFile ( file ) {
    //     console.log( "NewImageButton . transformFile", file );
    //     return new Promise( resolve => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL( file );
    //         reader.onload = () => {
    //             const canvas = document.createElement( 'canvas' );
    //             const img = document.createElement( 'img' );
    //             img.src = reader.result as string;
    //             img.onload = () => {
    //                 const ctx = canvas.getContext( '2d' );
    //                 ctx.drawImage( img, 0, 0 );
    //                 ctx.fillStyle = 'red';
    //                 ctx.textBaseline = 'middle';
    //                 ctx.fillText( 'Ant Design', 20, 20 );
    //                 canvas.toBlob( resolve );
    //             };
    //         };
    //     } );
    // }
    // onSuccess = () => { }


    previewFile () {
        var preview = document.querySelector( 'img' );
        var file = ( document.querySelector( 'input[type=file]' ) as any ).files[ 0 ];
        var reader = new FileReader();

        reader.addEventListener( "load", () => {
            console.log( "readAsDataURL.result", reader.result );
            this.setState( { imageUrl: reader.result as string } );

            // preview.src = reader.result as string ;
        }, false );

        if ( file ) {
            reader.readAsDataURL( file );
        }
    }

    render () {
        const {
            labelImage,
            buttonLabel,
            // onClick 
        } = this.props;


        return (
            <InsertIconComponent
                refetchQueries={[ {
                    query: GetIconsDocument
                } ]}
            // onCompleted={() => this.setState({loading})} 
            >
                {( sendData, { loading, called, data, error } ) => {
                    console.log( "init", { loading, data, error, called } );
                    console.log( "image", this.props.labelImage );
                    if ( called != true && this.props.labelImage != null && this.state.imageUrl ) {
                        console.log( "PointEditModal Component sendData()" );
                        sendData(
                            {
                                variables:
                                {
                                    id: labelImage.id,
                                    category: EnumIconCategoryEnum.HARDWAREFASTENER,
                                    mimeData: this.state.imageUrl
                                    // buffer: buffer.map( col => col.map( row => Array.from( row ) ) )
                                }
                            } );
                        console.log( "called != true", { loading, data, error, called } );
                        // this.setState({
                        //     values: undefined
                        // })
                        // console.log({ loading, data, error, called, mutate});

                    }
                    if ( loading ) {
                        console.log( "SendBuffer data loading" );
                    }
                    if ( data ) {
                        console.log( "SendBuffer data received", data );
                    }
                    return (
                        <Spin spinning={loading}>
                            {/* <div className="ant-upload ant-upload-select ant-upload-select-text"> */}
                            {/* <span className="ant-upload" role="button"> */}
                            {/* <input type="file" accept="" style={{display: 'none'}} /> */}
                            <input
                                name="file" id="file"
                                className="inputfile"
                                type="file"
                                multiple
                                required
                                style={{ display: 'none' }}
                                onChange={() => this.previewFile()}
                            />
                            <label htmlFor="file">
                                <strong>Choose a file</strong>
                                {/* <button type="button" className="ant-btn"> */}
                                    {/* <i aria-label="icon: upload" className="anticon anticon-upload"> */}
                                        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z">
                                            </path>
                                        </svg>
                                    {/* </i> */}
                                    {/* <span> Click to Upload</span> */}
                                {/* </button> */}
                            </label>
                            {/* </span> */}
                            {/* </div> */}
                            {/* <Button loading={this.state.loading}>
                                <Icon type='plus' />
                                <div className="ant-upload-text">{buttonLabel}</div>
                            </Button> */}
                        </Spin>
                    );
                    // < Button icon="picture" onClick={() => onClick( true )} id={buttonLabel} >{buttonLabel}</Button>
                }}
            </InsertIconComponent>


            // const uploadButton = (

            // );
            //     const { imageUrl } = this.state;
            //     return (
            //         <Upload
            //             name="avatar"
            //             listType="picture-card"
            //             className="avatar-uploader"
            //             showUploadList={false}
            //             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            //             beforeUpload={beforeUpload}
            //             onChange={this.handleChange}
            //         >
            //             {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            //         </Upload>
            //     );
            // }
        )
    }
}