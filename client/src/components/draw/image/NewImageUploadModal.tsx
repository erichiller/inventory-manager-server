import { FormComponentProps } from "antd/lib/form";
import React from 'react';
import { LabelImage } from "../LabelConstituent";
import { Form, Spin, AutoComplete, Icon, Select, Input, message, Modal } from "antd";
import { ItemHardwareFastenerBoltSelectColumn, InsertIconComponent, GeticonDocument, EnumIconCategoryEnum, EnumIconCategorySelectColumn, Item } from "../../../types/graphql";
import { display } from "../../ItemTable";
import { DrawContext } from "../LabelDraw";





interface NewImageUploadModalProps extends FormComponentProps {
    labelImage: LabelImage;
    width?: number;
    item?: Pick<NonNullable<Item>, 'id' | 'name' >;
    visibleHandler: ( display?: display ) => void;
    changeHandler: ( newValue: any, labelText: LabelImage ) => void;
}


interface NewImageUploadModalState {
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

export const NewImageUploadModal = Form.create<NewImageUploadModalProps>(
    {
        name: 'form_in_modal',
        onFieldsChange ( props, changedFields ) {
            console.log("NewImageUploadModal changedfields", changedFields);
            let normalizedChanged: { [key: string]: any } = {};
            Object.keys( changedFields ).forEach( key => normalizedChanged[key] = changedFields[ key ].value );
            props.changeHandler( normalizedChanged , props.labelImage );
        },
    }
)(
    class NewImageUploadModal extends React.Component<NewImageUploadModalProps, NewImageUploadModalState> {

        state: NewImageUploadModalState = {
            imageUrl: undefined
        }

        /**
         * setFile processes the input file (from the input type=file in render) and adds to state as a base64 encoded string (data URL)
         */
        setFile () {
            var preview = document.querySelector( 'img' );
            var file = ( document.querySelector( 'input[type=file]' ) as any ).files[ 0 ];
            var reader = new FileReader();

            reader.addEventListener( "load", () => {
                console.log( "readAsDataURL.result", reader.result );
                this.setState( { imageUrl: reader.result as string } );
                this.props.changeHandler( { data: reader.result }, this.props.labelImage );
                // preview.src = reader.result as string ;
            }, false );

            if ( file ) {
                reader.readAsDataURL( file );
            }
        }

        get autocompleteFieldValues (): string[] {
            // return Object.keys( EnumIconCategoryEnum ).map( col => col.toLowerCase() );
            return Object.values( EnumIconCategoryEnum );
        }
        onCancel = () => {
            this.props.visibleHandler( display.HIDDEN );
        }

        render () {
            const {
                labelImage,
                form,
                width
            } = this.props;
            const { getFieldDecorator, setFieldsValue } = form;



            return <DrawContext.Consumer>
                {( { commitLabelImage } ) => {
                    return <Modal
                        visible
                        title="Upload New Image"
                        okText="Upload"
                        onCancel={this.onCancel}
                        onOk={() => { commitLabelImage( labelImage ); this.onCancel(); }}
                        width={width ? width : 350}
                    >
                        <InsertIconComponent
                            refetchQueries={[ {
                                query: GeticonDocument
                            } ]}
                            onCompleted={() => message.success( "Successfully added image." )}
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
                                                category: labelImage.category,
                                                description: labelImage.description,
                                                label: labelImage.label,
                                                mimeData: this.state.imageUrl
                                                // mimeData: labelImage.data
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
                                        <Form
                                            layout="inline"
                                            // onSubmit={(e) => this.props.validateFields((err, values) => {
                                            //     if ( err ){
                                            //         message.error(err);
                                            //     }
                                            //     values.forEach( (key, val) => {
                                            //         this.props.labelImage[key] = val;
                                            //     });
                                            // }) }
                                        >
                                            <Form.Item label="Label">
                                                {getFieldDecorator( 'label', {
                                                    rules: [ { required: true, message: 'Please enter a label' } ],
                                                } )( <Input placeholder="Label (title)" /> )}
                                            </Form.Item>
                                            <Form.Item label="Description">
                                                {getFieldDecorator( 'description', {
                                                    rules: [ { required: false, message: 'Description (optional)' } ],
                                                } )( <Input placeholder="Description" /> )}
                                            </Form.Item>
                                            <Form.Item label="Category">
                                                {getFieldDecorator( 'category', {
                                                    rules: [ { required: true, message: 'Please select category.' } ],
                                                } )( <Select
                                                    filterOption={( input, option ) =>
                                                        option.props.children.toString().toLowerCase().indexOf( input.toLowerCase() ) >= 0
                                                    }
                                                    style={{width: '180px'}}
                                                >
                                                    {this.autocompleteFieldValues.map( category => <Select.Option key={category} value={category}>{category}</Select.Option> )}
                                                </Select> )}
                                            </Form.Item>
                                            <br />
                                            <input
                                                name="file" id="file"
                                                className="inputfile"
                                                type="file"
                                                multiple
                                                required
                                                style={{
                                                    display: 'none',
                                                    width: '0.1px',
                                                    height: '0.1px',
                                                    opacity: 0,
                                                    overflow: 'hidden',
                                                    position: 'absolute',
                                                    zIndex: -1
                                                }}
                                                onChange={() => this.setFile()}
                                            />
                                            <label htmlFor="file" className="ant-btn ant-btn-primary" style={{ paddingTop: '3px' }}>
                                                <Icon type="upload" style={{ margin: '2px', fontSize: '18px', marginRight: '3px' }} />
                                                Upload
                                            </label>
                                        </Form>
                                    </Spin>
                                );
                            }}
                        </InsertIconComponent>
                    </Modal>
                }}
            </DrawContext.Consumer>
        }
    } );