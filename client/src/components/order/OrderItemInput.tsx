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
import { OrderItemSelect } from './OrderItemSelect';
import { Integer } from '../../lib/types/uint8';
import { useHistory, useLocation } from 'react-router-dom';
import { VendorItemFormModal } from '../vendor/VendorItemFormModal';
import { VendorItemSelect } from '../vendor/VendorItemSelect';


interface OrderItemDefinition extends Omit<OrderItem, 'order_id'> {

}

interface OrderItemInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    // placeholder:'value' | 'onChange'> {
    // forwardRef?: React.MutableRefObject<Input>;
    value?: OrderItemDefinition;
    // onChange?: ( items: { item_id: number; }[] ) => void;
    onChange?: ( item: OrderItemDefinition ) => void;
    vendorId: Integer;
}

/**
 * This Modal is for controlling the OrderItem entry
 * @param props ItemBundleEditFormProps
 */
export const OrderItemInput: React.FC<OrderItemInputProps> = ( props: OrderItemInputProps ) => {
    const { onChange, ...remainingProps } = props;


    const [ modal, setModal ] = useState<React.ReactElement>( null );
    const history = useHistory();
    const location = useLocation();
    const handleModalChange = ( modal: React.ReactElement ) => {
        if ( modal === null ) {
            history.push( location.pathname );
        }
        setModal( modal );
    };

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

    const setQuantity = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setQuantity", event.target.value );
        onChange( {
            ...props.value,
            quantity: event.target.valueAsNumber
        } );
    };
    const setSerialNo = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setSerialNo", event.target.value );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setVendorItem = ( id: number ) => {
        console.log( "setVendorItem", id );
        onChange( {
            ...props.value,
            vendor_item_id: id
        } );
    };
    const setShipment = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setShipment", event.target.value );
        onChange( {
            ...props.value,
            shipment_id: parseInt(event.target.value)
        } );
    };

    return (
        <div className="OrderItemInput">
            {modal}
            <span id="OrderItemSelectContainer">
                <OrderItemSelect placeholder="Search for Item"
                    mode={null}
                    onChange={setItemId}
                    suffixIcon={props.suffix}
                    vendorId={props.vendorId}
                // suffix={
                //     <MinusCircleOutlined
                //         className="dynamic-delete-button"
                //         onClick={() => {
                //             remove( field.name );
                //         }}
                //     />
                // }
                />
                <span id="ItemExtraInfo">
                    <VendorItemSelect onChange={setVendorItem} />
                    <Input name="manufacturer_item" onChange={setQuantity} placeholder="Manufacturer Item xx" />
                    <Input name="serial_no" onChange={setSerialNo} placeholder="Serial #" />
                </span>
            </span>
            <Input name="quantity" aria-valuemin={1} onChange={setQuantity} placeholder="Qty" />
            {/* <Input name="serial_no" onChange={setSerialNo} placeholder="Serial#" /> */}
            <span id="cost_item"><Input name="cost_item" type="number" step="0.01" min="0" prefix="$" placeholder="item" /></span> {/* TODO: onChange.*/}
            <span id="cost_tax"><Input name="cost_tax" type="number" step="0.01" min="0" prefix="$" placeholder="tax" /></span> {/* TODO: onChange.*/}
            <span id="cost_total"><Input name="cost_total" type="number" step="0.01" min="0" prefix="$" placeholder="total" /></span > {/* TODO: onChange.*/}
            <Input name="shipment" onChange={setShipment} placeholder="Shipment" /> {/* TODO: onChange. Requires separate element*/}
        </div>
    );


};