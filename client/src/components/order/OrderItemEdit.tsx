import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip, InputNumber, Switch, Row, Col, Button } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemFormProps } from '../../lib/item/Item';
import { ItemBundle } from '../../lib/types/graphql';
import TextArea from 'antd/lib/input/TextArea';

import { toMinimumFixed, Union } from '../../lib/UtilityFunctions';
import { FormInstance } from 'antd/lib/form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ItemSelect } from '../item/ItemSelect';
import { useForm } from 'antd/lib/form/Form';


interface OrderItemEditFormProps {

}

/**
 * This Modal is for controlling the OrderItem entry
 * @param props ItemBundleEditFormProps
 */
export const OrderItemEditForm: React.FC<OrderItemEditFormProps> = ( props ) => {
    // const { form } = props;
    const form = useForm();

    // useEffect( () => {
    //     screwSizeInputRef.current.focus();
    // }, [ screwSizeInputRef ] );

    // useEffect( () => {
    //     let initProps: Partial<ItemBundle> = {};
    //     if ( !props.thread_direction ) {
    //         initProps.thread_direction = EnumItemHandednessEnum.right;
    //     }
    //     form.setFieldsValue( initProps );
    // } );

    return (
        <React.Fragment>
            <div className="col">
                <Divider key="items" orientation="left">Items</Divider>
                <Form.List name="items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>
                                {fields.map( ( field, index ) => (
                                    <Form.Item
                                        {...field}
                                        label="Bundled Item"
                                        getValueFromEvent={( args ) => {
                                            console.log( 'form getValueFromEvent (Bundled Item)', { field, index, args } );
                                            return args;
                                        }}
                                    >
                                        <ItemSelect placeholder="Search for Item"
                                            // suffix={
                                            //     <MinusCircleOutlined
                                            //         className="dynamic-delete-button"
                                            //         onClick={() => {
                                            //             remove( field.name );
                                            //         }}
                                            //     />
                                            // }
                                        />
                                    </Form.Item>
                                ) )}
                                <Form.Item
                                    label=" "
                                    colon={false}
                                >
                                    <Button
                                        type="dashed"
                                        onClick={() => {
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



