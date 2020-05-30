import { KonvaEventObject } from 'konva/types/Node';
import { Component, useContext, useState } from 'react';
import { DISPLAY } from '../../lib/types/enums';
import React from 'react';
import { Modal, AutoComplete, Form, Checkbox, Mentions } from 'antd';
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

    const defaultTextSize: number = 36;
    const prefixTrigger = '{{';
    let prefixTriggers: string[] = [ prefixTrigger ];
    for( let i = 0; i<prefixTrigger.length; i++){
        prefixTriggers.push( prefixTrigger.substring(0, i+1));
    }

    console.log( 'DrawEditText props:\n', props );

    // const autocompleteFieldValues: OptionsType = props.item && props.item.labelProps ? props.item.labelProps.map( col => {
    //     return {
    //         value: `{{${ col.toString() }}}` 
    // }}) : [];

    const drawContext = useContext( DrawContext );

    const [ currentFormatOptions, setCurrentFormatOptions ] = useState<CheckedFormatOptionsT>();

    const [ labelText, setLabelText ] = useState<LabelText>( props.labelText );
    const [ currentMentionPrefix, setCurrentMentionPrefix ] = useState<string>('');

    const onCancel = () => {
        props.visibleHandler( DISPLAY.HIDDEN );
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
            // layout="inline"
            name="basic"
            initialValues={{ format_options: currentFormatOptions, text_size: defaultTextSize }}
            onValuesChange={(changedValues) => props.changeHandler(changedValues, props.labelText)}
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 9 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
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
                    // prefix={prefixTriggers}
                    split=''
                    // split="}}"
                    autoFocus
                    // placeholder="input @ to mention people, # to mention tag"
                    // prefix={[ '@', '#' ]}
                    // onSearch={onSearch}
                    // filterOption={p => { console.log( { filterOptionFuncp: p } ); return true; }}
                    // onChange={p => { console.log( { onChange: p } ); return true; }}
                    onChange={onChange}
                >
                    {( props.item.labelProps || []).map( key =>
                        <Mentions.Option key={key.toString()} value={
                            prefixTrigger.substring(currentMentionPrefix.length,prefixTrigger.length)
                            // + currentMentionPrefix
                            // + '>> {'
                            // + currentMentionPrefix.length
                            // + '} {'
                            // + prefixTrigger.length
                            // + '} '
                             + key.toString()
                             + '}}'
                            // + '(' + JSON.stringify({
                            //     prefix: prefixTrigger.substring( currentMentionPrefix.length, prefixTrigger.length),
                            //     currentMentionPrefix_length: currentMentionPrefix.length,
                            //     prefixTrigger_length: prefixTrigger.length,
                            //     currentMentionPrefix
                            // })
                        }>
                            {/* <Select.Option key={key} value={props.item[ key ]}> */}
                            <b>{key.toString()}</b>: <i>{props.item[key]}</i>
                        </Mentions.Option>
                    )}
                </Mentions>
                {/* <AutoComplete
                    style={{ width: 400 }}
                    options={autocompleteFieldValues}
                /> */}
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


