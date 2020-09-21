import React from 'react';
import { Form, Divider, Button, Input, Space, InputNumber } from 'antd';
import { ItemFormProps } from '../Item';

import { Intersection } from '~lib/UtilityFunctions';
import { ItemBundle } from './Index';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ItemSelect } from '~components/Item/ItemSelect';


export interface ItemBundleFormProps extends Intersection<ItemFormProps<ItemBundle>, ItemBundle> {
    //
}


export const ItemBundleForm: React.FC<ItemBundleFormProps> = ( props ) => {
    return (
        <React.Fragment>
            <div className="col">
                {/* <Divider key="items" orientation="left">Items</Divider> */}

                {/* <Form.Item
                    label="Bundled Items"
                    name="items"
                    getValueFromEvent={( args ) => {
                        console.log( 'form getValueFromEvent (items)', args );
                        return args;
                    }}
                >
                    <ItemSelect placeholder="Search for Item" />
                </Form.Item> */}


                <Divider key="Items" orientation="left">Items</Divider>
                <Form.List name="items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>
                                {fields.map( ( field ) => (
                                    <div key={field.key} className="ItemBundleItemEntry">
                                        <Form.Item
                                            {...field}
                                            name={[ field.name, 'item_member_id' ]}
                                            fieldKey={[ field.fieldKey, 'item_member_id' ]}
                                            rules={[ { required: true, message: 'Select Item' } ]}
                                        >
                                            <ItemSelect
                                                placeholder="Item"
                                                mode="single"
                                                suffixIcon={
                                                    <MinusCircleOutlined
                                                        className="dynamic-delete-button"
                                                        onClick={() => {
                                                            remove( field.name );
                                                        }}
                                                    />
                                                }
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            {...field}
                                            name={[ field.name, 'quantity' ]}
                                            fieldKey={[ field.fieldKey, 'quantity' ]}
                                            rules={[ 
                                                { 
                                                    required: true, 
                                                    message: 'Enter quantity of item in this bundle'
                                                }
                                            ]}
                                        >
                                            <InputNumber name="quantity"
                                                type='number'
                                                aria-valuemin={1}
                                                placeholder="Qty"
                                                required />
                                        </Form.Item>
                                    </div>
                                ) )}
                                <Form.Item
                                    label={null}
                                    colon={false}
                                    className="full-width-form-item"
                                >
                                    <Button
                                        key="add_item"
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        onKeyDown={() => {
                                            add();
                                        }}
                                        style={{ width: "100%", textAlign: 'center' }}
                                    >
                                        <PlusOutlined /> Add Item
                                    </Button>
                                </Form.Item>
                            </React.Fragment>
                        );
                    }}
                </Form.List>
            </div>

        </React.Fragment>
    );
};



