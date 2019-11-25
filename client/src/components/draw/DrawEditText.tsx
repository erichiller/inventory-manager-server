import { KonvaEventObject } from 'konva/types/Node';
import { Component } from 'react';
import Form, { FormComponentProps } from 'antd/lib/form';
import { DISPLAY } from '../../types/enums';
import React from 'react';
import { Modal, AutoComplete } from 'antd';
import CheckboxGroup from 'antd/lib/checkbox/Group';
import { ItemHardwareFastenerBolt, ItemHardwareFastenerBoltSelectColumn } from '../../types/graphql';
import { LabelText, FormatOptionsT } from '../../lib/LabelConstituent';
import { DrawContext } from './LabelDraw';
import { GenericItem } from '../../types/Generics';

interface LabelDrawEditTextProps extends FormComponentProps {
    event?: KonvaEventObject<MouseEvent>;
    item?: GenericItem;
    labelText: LabelText;
    visibleHandler: (display?: DISPLAY) => void;
    changeHandler: (newValue: any, labelText: LabelText) => void;
}

interface LabelDrawEditTextFormState {
    currentFormatOptions: CheckedFormatOptionsT;
    currentLabelText: LabelText;
}

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
        };

        // constructor(props: LabelDrawEditTextProps) {
        //     super(props);
        // }
        onCancel = () => {
            this.props.visibleHandler(DISPLAY.HIDDEN);
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
            return Object.keys( ItemHardwareFastenerBoltSelectColumn ).map( col => `{{${col.toLowerCase()}}}`);
        }
        get formatOptions(): CheckedFormatOptionsT {
            return [
                "bold",
                "italic",
                "underline"
            ];
        }
        get textSizeOptions(): string[] {
            return [
                "4", "5", "6", "8", "9", "10", "11", "12", "14", "18", "24", "30"
            ];
        }

        onChangeFormatOptions = (checked: CheckedFormatOptionsT) => {

        }

        render() {
            const { event, visibleHandler, form, item, changeHandler , labelText} = this.props;
            const { getFieldDecorator, setFieldsValue } = form;
            const { currentLabelText } = this.state;

            console.log('this.props.visible', visibleHandler());
            console.log('this.props.item', item);
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
                        </Modal>;
                    }}
                </DrawContext.Consumer>
            );
        }
    }



);