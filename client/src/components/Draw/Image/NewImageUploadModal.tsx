import React, { useState } from 'react';
import { LabelImage } from "~lib/Label/LabelConstituent";
import { Spin, Select, Input, message, Modal, Form } from "antd";
import { GetIconDocument, EnumItemClassEnum, useInsertIconMutation } from "~lib/types/graphql";
import { Item } from "~lib/Item";
import { UploadOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import { submitFormWithEnterKey } from '~lib/UtilityFunctions';





interface NewImageUploadModalProps {
    labelImage: LabelImage;
    width?: number;
    item?: Pick<NonNullable<Item<any>>, 'id' | 'name'>;
    visibleHandler: ( display?: boolean ) => void;
    changeHandler: ( newValue: any, labelText: LabelImage ) => void;
    commitLabelImage: ( labelImage: LabelImage ) => void;
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
                        {( { getRootProps, GetInputProps, isDragActive } ) => (
                            <Spin spinning={loading} >
                                <section>
                                    <div {...getRootProps()} style={dropzoneStyle}>
                                        <input {...GetInputProps()} />
                                        <p>{isDragActive ? "Dropzone" : 'Click me or drag a file to upload!'}</p>
                                    </div>
                                </section>
                            </Spin>
                        )}
                    </Dropzone>
                )} */}

export const NewImageUploadModal: React.FC<NewImageUploadModalProps> = ( { labelImage, width, commitLabelImage, ...props } ) => {

    const [ state, setState ] = useState<NewImageUploadModalState>( {
        imageUrl: undefined
    } );
    const [ form ] = useForm();

    const [ sendData, { loading, called, data, error } ] = useInsertIconMutation();




    /**
     * setFile processes the input file (from the input type=file in render) and adds to state as a base64 encoded string (data URL)
     */
    function setFile () {
        var preview = document.querySelector( 'img' );
        var file = ( document.querySelector( 'input[type=file]' ) as any ).files[ 0 ];
        var reader = new FileReader();

        reader.addEventListener( "load", () => {
            console.log( "readAsDataURL.result", reader.result );
            setState( { imageUrl: reader.result as string } );
            props.changeHandler( { data: reader.result }, labelImage );
            // preview.src = reader.result as string ;
        }, false );

        if ( file ) {
            reader.readAsDataURL( file );
        }
    }

    const autoCompleteFieldValues: string[] = Object.values( EnumItemClassEnum );

    const onCancel = () => {
        props.visibleHandler( false );
    };

    const onFieldsChange = ( props, changedFields ) => {
        console.log( "NewImageUploadModal changedfields", changedFields );
        let normalizedChanged: { [ key: string ]: any; } = {};
        Object.keys( changedFields ).forEach( key => normalizedChanged[ key ] = changedFields[ key ].value );
        props.changeHandler( normalizedChanged, props.labelImage );
    };

    const onFinish = ( values ) => {
        sendData(
            {
                variables:
                {
                    id: labelImage.id,
                    categories: {
                        data: [ {
                            class: labelImage.class
                        } ]
                    },
                    description: labelImage.description,
                    labels: {
                        data: [ {
                            label_id: labelImage.label,
                        } ]
                    },
                    mimeData: state.imageUrl
                    // mimeData: labelImage.data
                    // buffer: buffer.map( col => col.map( row => Array.from( row ) ) )
                }
            } );
        console.log( "called != true", { loading, data, error, called } );
        // setState({
        //     values: undefined
        // })
        // console.log({ loading, data, error, called, mutate});
    };



    return <Modal
        visible
        title="Upload New Image"
        okText="Upload"
        onCancel={onCancel}
        onOk={() => { form.submit(); commitLabelImage( labelImage ); onCancel(); }}
        width={width ? width : 350}
    >
        <Form
            name="form_in_modal"
            form={form}
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 9 }}
            onKeyPress={submitFormWithEnterKey( form )}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <Spin spinning={loading}>
                <Form.Item
                    label="Label"
                    name="label"
                    rules={[ { required: true, message: 'Please enter a label' } ]}
                >
                    <Input placeholder="Label (title)" />
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[ { required: false, message: 'Description (optional)' } ]}>
                    <Input placeholder="Description" />
                </Form.Item>

                <Form.Item label="Category" name="category" rules={[ { required: true, message: 'Please select category.' } ]} >
                    <Select
                        filterOption={( input, option ) =>
                            option.props.children.toString().toLowerCase().indexOf( input.toLowerCase() ) >= 0
                        }
                        style={{ width: '180px' }}
                    >
                        {autoCompleteFieldValues.map( category => <Select.Option key={category} value={category}>{category}</Select.Option> )}
                    </Select>
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
                    onChange={() => setFile()}
                />
                <label htmlFor="file" className="ant-btn ant-btn-primary" style={{ paddingTop: '3px' }}>
                    <UploadOutlined style={{ margin: '2px', fontSize: '18px', marginRight: '3px' }} />
                        Upload
                    </label>
            </Spin>
        </Form>
    </Modal>;
};