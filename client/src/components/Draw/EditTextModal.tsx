import type { KonvaEventObject } from 'konva/types/Node';
import { Component, useContext, useState } from 'react';
import { DISPLAY } from '~lib/types/enums';
import React from 'react';
import { Modal, AutoComplete, Form, Checkbox, Mentions } from 'antd';
// import CheckboxGroup from 'antd/lib/checkbox/Group';
import { LabelText, FormatOptionsT } from '~lib/LabelConstituent';
import { Item } from '~lib/Item';

interface EditTextModalProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item<any>;
    labelText: LabelText;
    visibleHandler: ( display: null ) => void;
    changeHandler: ( newValue: any, labelText: LabelText ) => void;
    commitLabelText: ( labelText: LabelText ) => void;
}

type CheckedFormatOptionsT = FormatOptionsT[];

// interface OptionsType {
//     value?: string | number;
//     label?: React.ReactNode;
//     key?: string | number;
//     disabled?: boolean;
// }

interface OptionType {
    value: string;
}
type OptionsType = OptionType[];

// export default Form.create<DrawEditTextProps>(
//     {
//         name: 'form_in_modal',
//         onFieldsChange(props, changedFields) {
//             props.changeHandler(changedFields, props.labelText);
//         },
//     }
// )(

const textSizeOptions: OptionsType = [ "12", "14", "18", "20", "22", "24", "28", "36", "48" ].map( sizeOption => {
    return {
        value: sizeOption
    };
});

const formatOptions = [
    "bold",
    "italic",
    "underline"
];

export const EditTextModal: React.FC<EditTextModalProps> = ( props ) => {
    // const { event, visibleHandler, item, changeHandler, labelText } = props;

    console.log( 'DrawEditText props:\n', props );


    const [ labelText, setLabelText ] = useState<LabelText>( props.labelText.simpleObject as LabelText);
    const [ currentMentionPrefix, setCurrentMentionPrefix ] = useState<string>('');

    const onCancel = () => {
        props.visibleHandler( null );
    };

    const onChange = ( currentValue ) => {
        if ( currentValue.length > 1 && currentValue.substr(-2) == '{{'){
            // found {{
            setCurrentMentionPrefix( '{{' );
            console.log( 'onChange, setPrefix to {{', currentValue );
        } else if ( currentValue.length > 0 && currentValue.substr( -1 ) == '{' ) {
            // found {
            setCurrentMentionPrefix( '{' );
            console.log( 'onChange, setPrefix to {', currentValue );
        }
    };

    console.log("labelText", labelText)

    let drawWidth = 725;
    return <Modal
        visible
        title={"Text"}
        okText="Ok"
        onCancel={onCancel}
        onOk={() => { props.commitLabelText( labelText ); onCancel(); }}
        width={drawWidth + 25}
    >
        <Form
            name="basic"
            initialValues={labelText}
            onValuesChange={(changedValues) => {
                console.log("onValuesChange", {changedValues});
                props.changeHandler(changedValues, props.labelText)
            }}
            layout="horizontal"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 15 }}
        >
            <Form.Item
                name="text"
                label="Text"
                rules={[ { required: true, message: 'Enter text, use {{prop}} to enter an item property' } ]} 
                
            >
                <Mentions
                    rows={3}
                    placeholder="Enter text, use {{prop}} to enter an item property"
                    style={{ width: '100%' }}
                    prefix='{'
                    split=''
                    autoFocus
                    onChange={onChange}
                >
                    {( props.item.labelProps || []).map( key =>
                        <Mentions.Option key={key.toString()} value={
                            '{{'.substring(currentMentionPrefix.length, 2)
                             + key.toString()
                             + '}}'
                        }>
                            <b>{key.toString()}</b>: <i>{props.item[key]}</i>
                        </Mentions.Option>
                    )}
                </Mentions>
                {/* <AutoComplete
                    style={{ width: 400 }}
                    options={autocompleteFieldValues}
                /> */}
            </Form.Item>
            <Form.Item name="fontSize" label="Text Size">
                <AutoComplete
                    style={{ width: 100 }}
                    options={textSizeOptions}
                />
            </Form.Item>
            <Form.Item name="formatOptions" label="Format Options" >
                <Checkbox.Group
                    options={formatOptions}
                // disabled
                // defaultValue={[ 'Apple' ]}
                // onChange={onChange}
                />
                {/* <CheckboxGroup
                            options={formatOptions}
                        // onChange={this.onChangeFormatOptions}
                        /> */}
            </Form.Item>
        </Form>
    </Modal>;


    // const { currentLabelText } = this.state;

    // return <span>HELLO</span>;

    // state: DrawEditTextFormState = {
    //     currentFormatOptions: [],
    //     currentLabelText: null
    // };

    // constructor(props: DrawEditTextProps) {
    //     super(props);
    // }
    // onCancel = () => {
    //     this.props.visibleHandler(DISPLAY.HIDDEN);
    // };
    // // onFormChange = (value: any): void => {
    // //     console.log("onFormChange in DrawEditText", value, this.props.form.getFieldsValue());
    // //     let currentLabelText: LabelText;
    // //     if (!this.state.currentLabelText) {
    // //         console.log("onFormChange creating new LabelText")
    // //         currentLabelText = new LabelText();
    // //     } else {
    // //         currentLabelText = this.state.currentLabelText;
    // //     }
    // //     currentLabelText.text = this.props.form.getFieldValue("text");
    // //     currentLabelText.size = this.props.form.getFieldValue("size");
    // //     this.setState({
    // //         currentLabelText: currentLabelText
    // //     })
    // //     console.log("onFormChange getFieldsValue", this.props.form.getFieldsValue());
    // //     this.props.changeHandler(currentLabelText);
    // //     //             .foreach( (key, value) => {
    // //     //                 console.log("field values", "key:", key, "value:", value);
    // //     // // this.state.currentLabelText
    // //     //             }) 
    // // }

    // get autocompleteFieldValues(): string[] {
    //     return Object.keys( ItemHardwareFastenerScrewMachineSelectColumn ).map( col => `{{${col.toLowerCase()}}}`);
    // }
    // get formatOptions(): CheckedFormatOptionsT {
    //     return [
    //         "bold",
    //         "italic",
    //         "underline"
    //     ];
    // }
    // get textSizeOptions(): string[] {
    //     return [
    //        
    //     ];
    // }

    // onChangeFormatOptions = (checked: CheckedFormatOptionsT) => {

    // };

    // render() {

};


