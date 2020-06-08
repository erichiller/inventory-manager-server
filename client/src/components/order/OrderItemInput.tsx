import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip, InputNumber, Switch, Row, Col, Button, message } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemFormProps } from '../../lib/item/Item';
import { ItemBundle, OrderItem } from '../../lib/types/graphql';
import TextArea from 'antd/lib/input/TextArea';

import { toMinimumFixed, Union } from '../../lib/UtilityFunctions';
import { FormInstance } from 'antd/lib/form';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ItemSelect, ItemSelectProvidesValue } from '../item/ItemSelect';
import { useForm } from 'antd/lib/form/Form';
import { InputProps } from 'antd/lib/input';


interface OrderItemDefinition extends Omit<OrderItem, 'order_id'> {

}

interface OrderItemInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    // placeholder:'value' | 'onChange'> {
    // forwardRef?: React.MutableRefObject<Input>;
    value?: OrderItemDefinition;
    // onChange?: ( items: { item_id: number; }[] ) => void;
    onChange?: ( item: OrderItemDefinition ) => void;
}

/**
 * This Modal is for controlling the OrderItem entry
 * @param props ItemBundleEditFormProps
 */
export const OrderItemInput: React.FC<OrderItemInputProps> = ( props: OrderItemInputProps ) => {
    const { onChange, ...remainingProps } = props;

    // const [ orderItem, setOrderItem ] = useState<OrderItemDefinition>(props.value);

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

    const setItemId = ( value: ItemSelectProvidesValue ) => {
        console.log( "setItem", { value } );
        let item_id: number = null;
        // unpack value from ItemSelect
        if ( value && Array.isArray(value) ){
            if ( value.length !== 1 ){
                message.error("Invalid Input received from ItemSelect");
            } else {
                item_id = value[0].item_id;
            }
        }
        onChange( {
            ...props.value,
            item_id: item_id
        });
    };

    const setQuantity = ( value: number ) => {
        console.log( "setQuantity", { value } );
        onChange( {
            ...props.value,
            quantity: value
        } );
    };
    const setSerialNo = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setSerialNo", event.target.value );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };

    return (
        <div className="OrderItemInput">

            <ItemSelect className="item_id" placeholder="Search for Item"
                mode={null}
                onChange={setItemId}
                suffixIcon={props.suffix}
            // suffix={
            //     <MinusCircleOutlined
            //         className="dynamic-delete-button"
            //         onClick={() => {
            //             remove( field.name );
            //         }}
            //     />
            // }
            />
            <InputNumber className="quantity" name="quantity" aria-valuemin={1} onChange={setQuantity} placeholder="Qty" />
            <Input className="serial_no" name="serial_no" onChange={setSerialNo} placeholder="Serial#" />
            <br />
            <Input name="cost_item" type="number" step="0.01" min="0" prefix="$" />
            <Input name="cost_tax" type="number" step="0.01" min="0" prefix="$" />
            <Input name="cost_total" type="number" step="0.01" min="0" prefix="$" />
            {/* 
            TODO: serial_no
            TODO: shipment_id
                TODO: note shipment_id requires a new modal/form
            TODO: vendor_item_id
                TODO: note vendor_item_id requires a new modal/form
            TODO: cost_item
            TODO: cost_tax
            TODO: cost_total
             */}

        </div>
    );


};