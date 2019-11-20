import * as React from 'react';
import { withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, Item, ItemHardwareFastenerBolt } from '../../types/graphql';
import Form, { FormComponentProps } from 'antd/lib/form';
import { DISPLAY } from '../../types/enums';
import { Modal, Spin, AutoComplete } from 'antd';
import CheckboxGroup from 'antd/lib/checkbox/Group';



type ItemEditProps<T extends Omit<Item, '__typename'>> = Omit<T, '__typename'> & FormComponentProps & {
    visibleHandler: ( display?: DISPLAY ) => void;
};

interface ItemEditState { }

export const EditHardwareFastenerBolt = Form.create<ItemEditProps<ItemHardwareFastenerBolt>>(
    {
        name: 'form_in_modal',
        onFieldsChange ( props, changedFields ) {
            console.log( "EditHardwareFastenerBolt changedfields", changedFields );
            // let normalizedChanged: { [ key: string ]: any } = {};
            // Object.keys( changedFields ).forEach( key => normalizedChanged[ key ] = changedFields[ key ].value );
            // props.changeHandler( normalizedChanged, props.labelImage );
        },
    }
)( withItemHardwareFastenerBolt()(
    class extends React.Component<ItemHardwareFastenerBoltProps<ItemEditProps<ItemHardwareFastenerBolt>>, ItemEditState> {

        onCancel = () => {
            this.props.visibleHandler( DISPLAY.HIDDEN );
        }

        // get autocompleteFieldValues (): string[] {
        //     return Object.keys( ItemHardwareFastenerBoltSelectColumn ).map( col => `{{${ col.toLowerCase() }}}` );
        // }
        // get textSizeOptions (): string[] {
        //     return [
        //         "4", "5", "6", "8", "9", "10", "11", "12", "14", "18", "24", "30"
        //     ];
        // }
        render () {
            const { visibleHandler, form } = this.props;
            let drawWidth = 350;
            const { getFieldDecorator, setFieldsValue } = form;


            return ( <Modal
                visible
                title={"Text"}
                okText="Edit"
                onCancel={this.onCancel}
                onOk={() => { commit( ); this.onCancel(); }}
                width={drawWidth + 25}
            >
                <Spin spinning={this.props.data.loading} >
                <Form
                    layout="inline"
                >
                    <Form.Item label="Text">
                        {getFieldDecorator( 'text', {
                            rules: [ { required: true, message: 'Please enter text' } ],
                        } )( <AutoComplete
                            style={{ width: 400 }}
                            // onChange={this.onFormChange}
                            dataSource={this.autocompleteFieldValues}
                        /> )}
                    </Form.Item>
                    <Form.Item label="Text Size">
                        {getFieldDecorator( 'text_size' )(
                            <AutoComplete
                                style={{ width: 100 }}
                                // onChange={this.onFormChange}
                                dataSource={this.textSizeOptions}
                            /> )}
                    </Form.Item>
                    <Form.Item label="Format Options">
                        {getFieldDecorator( 'format_options', {
                            initialValue: this.state.currentFormatOptions
                        } )(
                            <CheckboxGroup
                                options={this.formatOptions}
                            // onChange={this.onChangeFormatOptions}
                            />,
                        )}
                        {/* {setFieldsValue(this.)} */}
                    </Form.Item>
                </Form>
                </Spin>
            </Modal>
            );
        }

    }
) )