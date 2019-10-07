import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import { Form, Input, Radio, AutoComplete } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { display } from '../ItemTable';
import React from 'react';
import { Modal } from 'antd';
import { ItemsHardwareFastenerBolt, withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltComponent } from '../../queries/types';
import { useQuery } from '@apollo/react-hooks';
import CheckboxGroup from 'antd/lib/checkbox/Group';
import { LabelText, DrawContext, FormatOptionsT } from '../ItemPrint';

interface LabelDrawEditTextProps extends FormComponentProps {
    event?: KonvaEventObject<MouseEvent>
    item?: ItemsHardwareFastenerBolt
    labelText: LabelText
    visibleHandler: (display?: display) => void
    changeHandler: (newValue: any, labelText: LabelText) => void
}

interface LabelDrawEditTextFormState {
    currentFormatOptions: CheckedFormatOptionsT
    currentLabelText: LabelText
}


// class ItemHardware implements Partial<ItemsHardwareFastenerBolt> {

//     // get defaultName() {
//     //     return ""
//     // }

// }


type CheckedFormatOptionsT = FormatOptionsT[];

export default Form.create<LabelDrawEditTextProps>(
    {
        name: 'form_in_modal',
        onFieldsChange(props, changedFields) {
            props.changeHandler(changedFields, props.labelText);
        },
    }
)(
    class LabelDrawEditText extends Component<LabelDrawEditTextProps, LabelDrawEditTextFormState> {



        state: LabelDrawEditTextFormState = {
            currentFormatOptions: [],
            currentLabelText: null
        }

        // constructor(props: LabelDrawEditTextProps) {
        //     super(props);
        // }
        onCancel = () => {

            /// REMOVE ELEMENT /// REVERT ///
            this.props.visibleHandler(display.HIDDEN);
        }
        // onFormChange = (value: any): void => {
        //     console.log("onFormChange in DrawEditText", value, this.props.form.getFieldsValue());
        //     let currentLabelText: LabelText;
        //     if (!this.state.currentLabelText) {
        //         console.log("onFormChange creating new LabelText")
        //         currentLabelText = new LabelText();
        //     } else {
        //         currentLabelText = this.state.currentLabelText;
        //     }
        //     currentLabelText.text = this.props.form.getFieldValue("text");
        //     currentLabelText.size = this.props.form.getFieldValue("size");
        //     this.setState({
        //         currentLabelText: currentLabelText
        //     })
        //     console.log("onFormChange getFieldsValue", this.props.form.getFieldsValue());
        //     this.props.changeHandler(currentLabelText);
        //     //             .foreach( (key, value) => {
        //     //                 console.log("field values", "key:", key, "value:", value);
        //     // // this.state.currentLabelText
        //     //             }) 
        // }

        get autocompleteFieldValues(): string[] {
            return ["eric1", "eric2"]
        }
        get formatOptions(): CheckedFormatOptionsT {
            return [
                "bold",
                "italic",
                "underline"
            ]
        }
        get textSizeOptions(): string[] {
            return [
                "4", "5", "6", "8", "9", "10", "11", "12", "14", "18", "24", "30"
            ]
        }

        onChangeFormatOptions = (checked: CheckedFormatOptionsT) => {

        }

        // _labelTextArray: LabelText[] = [];
        // get labelTextArray(): LabelText[] {
        //     return this._labelTextArray;
        // }
        // set labelTextArray(labelText: LabelText[]){
        //     this._labelTextArray = labelText;
        // }
        // updateLabelTextArray(labelText: LabelText){
        //     this._labelTextArray
        // }


        render() {
            const { event, visibleHandler, form, item, changeHandler , labelText} = this.props
            const { getFieldDecorator, setFieldsValue } = form;
            const { currentLabelText } = this.state;

            console.log('this.props.visible', visibleHandler())
            // console.log('this.state.visible', visibleHandler(), this.state.visible == display.VISIBLE ? true : false)
            console.log('this.props.item', item)
            // if ( visible)
            // console.log('item keys', Object.keys(item))

            // if (!createnew) {
            //     <ItemsHardwareFastenerBoltComponent
            //         variables={{ first: '10' }} // Throws an error!
            //     >
            //         {({ data }) => {
            //             item_data = 
            //         }}
            //     </ItemsHardwareFastenerBoltComponent>

            // }
            // if (!createnew && !item) {
            //     console.error(" this is not a newly created LabelText, nor has an item been passed in for attachment to a new LabelText")
            // }
            let drawWidth = 725;
            return (
                <DrawContext.Consumer>
                    {({ commitLabelText }) => {
                        // {this.labelTextArray = texts;}
                        return <Modal
                            visible
                            title={"Text"}
                            okText="Do thy bidding"
                            onCancel={this.onCancel}
                            onOk={() => { commitLabelText(labelText); this.onCancel(); } }
                            width={drawWidth + 25}
                        >
                            <Form
                                layout="inline"
                            >
                                <Form.Item label="Text">
                                    {getFieldDecorator('text', {
                                        rules: [{ required: true, message: 'Please enter text' }],
                                    })(<AutoComplete
                                        style={{ width: 400 }}
                                        // onChange={this.onFormChange}
                                        dataSource={this.autocompleteFieldValues}
                                    />)}
                                </Form.Item>
                                <Form.Item label="Text Size">
                                    {getFieldDecorator('text_size')(
                                        <AutoComplete
                                            style={{ width: 100 }}
                                            // onChange={this.onFormChange}
                                            dataSource={this.textSizeOptions}
                                        />)}
                                </Form.Item>
                                <Form.Item label="Format Options">
                                    {getFieldDecorator('format_options', {
                                        initialValue: this.state.currentFormatOptions
                                    })(
                                        <CheckboxGroup
                                            options={this.formatOptions}
                                            // onChange={this.onChangeFormatOptions}
                                        />,
                                    )}
                                    {/* {setFieldsValue(this.)} */}
                                </Form.Item>
                            </Form>
                        </Modal>
                    }}
                </DrawContext.Consumer>
            )
        }
    }



)