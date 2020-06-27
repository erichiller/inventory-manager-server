import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip, InputNumber, Switch, Row, Col, Button, message } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemFormProps } from '../../lib/item/Item';
import { ItemBundle, OrderItem, VendorItem as VendorItemGql, OrderItemInsertInput, VendorItemInsertInput, ManufacturerItemInsertInput, ShipmentInsertInput } from '../../lib/types/graphql';
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
import { VendorItemSelect } from '../vendor/VendorItemSelect';
import { ManufacturerItemSelect } from '../manufacturer/ManufacturerItemSelect';
import { ShipmentSelect } from '../Shipment/ShipmentSelect';


interface OrderItemDefinition extends Omit<OrderItemInsertInput, 'order_id'> {

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
    console.log("OrderItemInput received props", props);

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
        if ( value && Array.isArray( value ) ) {
            if ( value.length !== 1 ) {
                message.error( "Invalid Input received from ItemSelect" );
            } else {
                item_id = value[ 0 ].item_id;
            }
        }
        onChange( {
            ...props.value,
            item_id: item_id
        } );
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
    const setCostItem = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setCostItem", event.target.value );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setCostTax = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setCostTax", event.target.value );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setCostTotal = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( "setCostTotal", event.target.value );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setVendorItem = ( vendor_item: Partial<VendorItemInsertInput> ) => {
        console.log( "setVendorItem", vendor_item );
        onChange( {
            ...props.value,
            ...( vendor_item.id ? { vendor_item_id: vendor_item.id } : { vendor_item: { data: vendor_item } } )
        } );
    };
    const setManufacturerItem = ( manufacturer_item: Partial<ManufacturerItemInsertInput> ) => {
        console.log( "setManufacturerItem", manufacturer_item );
        onChange( {
            ...props.value,
            ...( manufacturer_item.id ? { manufacturer_item_id: manufacturer_item.id } : { manufacturer_item: { data: manufacturer_item } } )
        } );
    };
    const setShipment = ( shipment: Partial<ShipmentInsertInput> ) => {
        console.log( "setShipment", shipment );
        onChange( {
            ...props.value,
            ...( shipment.id ? { shipment_id: shipment.id } : { shipment: { data: shipment } } )
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
                />
                <span id="ItemExtraInfo">
                    <VendorItemSelect onChange={setVendorItem} />
                    <ManufacturerItemSelect onChange={setManufacturerItem} />
                    <Input name="serial_no" onChange={setSerialNo} placeholder="Serial #" />
                </span>
            </span>
            <Input name="quantity" 
                    defaultValue={props.value.quantity}
                    aria-valuemin={1} 
                    onChange={setQuantity} 
                    placeholder="Qty" />
            <span id="cost_item">
                <Input name="cost_item" 
                        defaultValue={props.value.cost_item}
                        type="number" 
                        step="0.01" 
                        min="0" 
                        prefix="$" 
                        onChange={setCostItem} 
                        placeholder="item" />
            </span>
            <span id="cost_tax">
                <Input name="cost_tax"
                    defaultValue={props.value.cost_tax}
                    type="number"
                    step="0.01"
                    min="0"
                    prefix="$"
                    onChange={setCostTax}
                    placeholder="tax" />
            </span>
            <span id="cost_total">
                <Input name="cost_total"
                    defaultValue={props.value.cost_total}
                    type="number"
                    step="0.01"
                    min="0"
                    prefix="$"
                    onChange={setCostTotal}
                    placeholder="total" />
            </span >
            <ShipmentSelect excludeOrderInput onChange={setShipment} />
        </div>
    );


};