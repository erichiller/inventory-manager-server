import React, { useState } from 'react';
import { Input } from 'antd';
import { OrderItem as OrderItemGql } from '~lib/types/graphql';

import { SubType } from '~lib/UtilityFunctions';
import { InputProps } from 'antd/lib/input';
import { OrderItemSelect, OrderItemSelectSingleValue } from './OrderItemSelect';
import { Integer } from '~lib/types/uint8';
import { useHistory, useLocation } from 'react-router-dom';
import { VendorItemSelect, VendorItemSelectValue } from '~components/Vendor/VendorItemSelect';
import { ManufacturerItemSelect, ManufacturerItemSelectValue } from '~components/Manufacturer/ManufacturerItemSelect';
import { ShipmentSelect, ShipmentSelectValue } from '~components/Shipment/ShipmentSelect';


interface OrderItemInputValue extends Partial<SubType<OrderItemGql, string | number>> {
    vendor_item: VendorItemSelectValue;
    manufacturer_item: ManufacturerItemSelectValue;
    shipment: ShipmentSelectValue;
    item_id: number;
}

interface OrderItemInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    value?: OrderItemInputValue;
    onChange?: ( item: OrderItemInputValue ) => void;
    vendorId: Integer;
}

/**
 * This Modal is for controlling the OrderItem entry
 * @param props ItemBundleEditFormProps
 */
export const OrderItemInput: React.FC<OrderItemInputProps> = ( props: OrderItemInputProps ) => {
    const { onChange } = props;
    console.log("OrderItemInput received props", props);

    const [ modal, setModal ] = useState<React.ReactElement>( undefined );
    const history = useHistory();
    const location = useLocation();

    const setItemId = ( value: OrderItemSelectSingleValue ) => {
        console.log( { c: 'OrderItemInput', f: "setItem", value } );
        onChange( {
            ...props.value,
            item_id: value
        } );
    };

    const setQuantity = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemInput', f: "setQuantity", event_value: event.target.value } );
        onChange( {
            ...props.value,
            quantity: event.target.valueAsNumber
        } );
    };
    const setSerialNo = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemInput', f: "setSerialNo", event_value: event.target.value });
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setCostItem = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemInput', f: "setCostItem", event_value: event.target.value} );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setCostTax = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemInput', f: "setCostTax", event_value: event.target.value} );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setCostTotal = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemInput', f: "setCostTotal", event_value: event.target.value} );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setVendorItem = ( vendor_item: Partial<VendorItemSelectValue> ) => {
        console.log( { c: 'OrderItemInput', f: "setVendorItem", vendor_item });
        onChange( {
            ...props.value,
            ...( vendor_item.id 
                ? { vendor_item_id: vendor_item.id, vendor_item: undefined } 
                : { vendor_item: vendor_item, vendor_item_id: undefined } )
        } );
    };
    const setManufacturerItem = ( manufacturer_item: Partial<ManufacturerItemSelectValue> ) => {
        console.log( { c: 'OrderItemInput', f: "setManufacturerItem", manufacturer_item} );
        onChange( {
            ...props.value,
            ...( manufacturer_item.id 
                ? { manufacturer_item_id: manufacturer_item.id, manufacturer_item: undefined } 
                : { manufacturer_item: manufacturer_item, manufacturer_item_id: undefined } )
        } );
    };
    const setShipment = ( shipment: Partial<ShipmentSelectValue> ) => {
        console.log( { c: 'OrderItemInput', f: "setShipment", shipment });
        onChange( {
            ...props.value,
            ...( shipment.id 
                    ? { shipment_id: shipment.id, shipment: undefined } 
                : { shipment: shipment, shipment_id: undefined } )
        } );
    };

    return (
        <div className="OrderItemInput">
            {modal}

            <span id="OrderItemSelectContainer">
                <OrderItemSelect placeholder="Search for Item"
                    mode="single"
                    onChange={setItemId}
                    suffixIcon={props.suffix}
                    vendorId={props.vendorId}
                    defaultValue={ props.value?.item_id }
                />

                <span id="ItemExtraInfo">
                    {/* TODO: provide `item_id` if known to limit the search of vendor_item */}
                    <VendorItemSelect
                        defaultValue={props.value?.vendor_item_id || props.value?.vendor_item} 
                        onChange={setVendorItem} />


                    {/* TODO: provide `item_id` if known to limit the search of manufacturer_item */}
                    <ManufacturerItemSelect
                        defaultValue={props.value?.manufacturer_item_id || props.value?.manufacturer_item} 
                        onChange={setManufacturerItem} />

                    <Input name="serial_no" 
                        defaultValue={props.value?.serial_no}
                        onChange={setSerialNo} 
                        placeholder="Serial #" />
                </span>
            </span>

            <Input name="quantity" 
                    defaultValue={props.value?.quantity}
                    aria-valuemin={1} 
                    onChange={setQuantity} 
                    placeholder="Qty" />
            <span id="cost_item">
                <Input name="cost_item" 
                        defaultValue={props.value?.cost_item}
                        type="number" 
                        step="0.01" 
                        min="0" 
                        prefix="$" 
                        onChange={setCostItem} 
                        placeholder="item" />
            </span>

            {/* TODO: display (in tooltip?) the tax rate this equals */}
            <span id="cost_tax">
                <Input name="cost_tax"
                    defaultValue={props.value?.cost_tax}
                    type="number"
                    step="0.01"
                    min="0"
                    prefix="$"
                    onChange={setCostTax}
                    placeholder="tax" />
            </span>

            {/* TODO: auto-calculate `cost_total` from `cost_tax` and `cost_item` */}
            <span id="cost_total">
                <Input name="cost_total"
                    defaultValue={props.value?.cost_total}
                    type="number"
                    step="0.01"
                    min="0"
                    prefix="$"
                    onChange={setCostTotal}
                    placeholder="total" />
            </span >

            {/* TODO: Shipments created in one `order_item` for the form should be available to select within all order_items of the form */}
            <ShipmentSelect 
                excludeOrderInput
                defaultValue={props.value?.shipment_id || props.value?.shipment} 
                onChange={setShipment} />

        </div>
    );


};