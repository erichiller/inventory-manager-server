import { KonvaEventObject } from 'konva/types/Node';
import { Component, useContext, useState } from 'react';
import { DISPLAY } from '../../lib/types/enums';
import React from 'react';
import { Modal, AutoComplete, Form, Checkbox } from 'antd';
// import CheckboxGroup from 'antd/lib/checkbox/Group';
import { LabelText, FormatOptionsT } from '../../lib/LabelConstituent';
import { DrawContext } from './LabelDraw';
import { Item } from '../../lib/item';

interface DrawEditTextProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: Item<any>;
    labelText: LabelText;
    visibleHandler: ( display?: DISPLAY ) => void;
    changeHandler: ( newValue: any, labelText: LabelText ) => void;
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

export const DrawEditText: React.FC<DrawEditTextProps> = ( props ) => {
    // const { event, visibleHandler, item, changeHandler, labelText } = props;


    console.log( 'DrawEditText props:\n', props );

    const autocompleteFieldValues: OptionsType = props.item && props.item.labelProps ? props.item.labelProps.map( col => {
        return {
            value: `{{${ col }}}` 
    }}) : [];

    const drawContext = useContext( DrawContext );

    const [ currentFormatOptions, setCurrentFormatOptions ] = useState<CheckedFormatOptionsT>();

    const [ labelText, setLabelText ] = useState<LabelText>(props.labelText);

    const onCancel = () => {
        props.visibleHandler( DISPLAY.HIDDEN );
    };

    let drawWidth = 725;
    return <Modal
        visible
        title={"Text"}
        okText="Ok"
        onCancel={onCancel}
        onOk={() => { drawContext.commitLabelText( labelText ); onCancel(); }}
        width={drawWidth + 25}
    >

        <Form
            layout="inline"
            name="basic"
            initialValues={{ format_options: currentFormatOptions }}
            onValuesChange={(changedValues) => props.changeHandler(changedValues, props.labelText)}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >
            <Form.Item
                rules={[ { required: true, message: 'Please enter text' } ]}
                name="text"
                label="Text" >
                <AutoComplete
                    style={{ width: 400 }}
                    options={autocompleteFieldValues}
                />
            </Form.Item>
            <Form.Item name="text_size" label="Text Size">
                <AutoComplete
                    style={{ width: 100 }}
                    options={textSizeOptions}
                />
            </Form.Item>
            <Form.Item name="format_options" label="Format Options" >
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
    //     return Object.keys( ItemHardwareFastenerBoltSelectColumn ).map( col => `{{${col.toLowerCase()}}}`);
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


