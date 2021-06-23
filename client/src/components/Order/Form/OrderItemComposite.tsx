import React from 'react';
import { Input } from 'antd';
import { OrderItem as OrderItemGql } from '~lib/types/graphql';

import { SubType, toMinimumFixed, PartialNullable, transparentLog } from '~lib/UtilityFunctions';
import { InputProps } from 'antd/lib/input';
import { OrderItemSelect, OrderItemSelectSingleValue } from './OrderItemSelect';
import { Integer } from '~lib/types/uint8';
import { VendorItemSelect, VendorItemSelectValue } from '~components/Vendor/VendorItemSelect';
import { ManufacturerItemSelect, ManufacturerItemSelectValue } from '~components/Manufacturer/ManufacturerItemSelect';
import { ShipmentSelect, ShipmentSelectValue, ShipmentAdditionalOption } from '~components/Shipment/ShipmentSelect';
import { ManufacturerItemFormT } from '~components/Manufacturer/ManufacturerItemFormModal';


interface OrderItemCompositeValue extends PartialNullable<SubType<OrderItemGql, string | undefined | null | number>> {
    vendor_item: VendorItemSelectValue;
    manufacturer_item: ManufacturerItemFormT;
    shipment: ShipmentSelectValue;
    item_id: number;
}

// let foo: SubType<OrderItemGql, Partial<string | undefined | null | number>>;
// foo.i



// interface fooI {
//     prop1: string;
//     prop2?: string;
// }

// let foo: SubType<fooI, string | undefined>;
// foo.

interface OrderItemCompositeProps extends Omit<InputProps, 'value' | 'onChange' | 'form' > {
    value?: OrderItemCompositeValue;
    onChange?: ( item: Partial<OrderItemCompositeValue> ) => void;
    vendorId: Integer;
    /** Array of Shipments that have been created locally and not yet posted to GraphQL */
    additionalShipmentOptions?: ShipmentAdditionalOption[];

    // form?: FormInstance<any>;
}

/**
 * This Modal is for controlling the OrderItem entry
 * @param props ItemBundleEditFormProps
 */
export const OrderItemComposite: React.FC<OrderItemCompositeProps> = React.forwardRef( ( props, _ ) => {
    const { onChange } = props;
    console.log( "OrderItemComposite received props", props );

    const setItemId = ( value: OrderItemSelectSingleValue ) => {
        console.log( { c: 'OrderItemComposite', f: "setItem", value } );
        // if ( value == null ){
        //     onChange( {
        //         ...props.value,
        //         item_id: null,
                
        //     })
        // }
        onChange( {
            ...props.value,
            ...( value == null ?
                {} :
                typeof value === "number" ?
                    {
                        item_id: value
                    } :
                    value.item_id ? 
                        {
                            item_id: value.item_id,
                            manufacturer_item_id: value.manufacturer_item_id,
                            vendor_item_id: value.vendor_item_id,
                        } 
                        : {}
            )
        } );
    };

    const setQuantity = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemComposite', f: "setQuantity", event_value: event.target.value } );
        onChange( {
            ...props.value,
            quantity: parseInt( event.target.value )
        } );
    };
    const setSerialNo = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemComposite', f: "setSerialNo", event_value: event.target.value } );
        onChange( {
            ...props.value,
            serial_no: event.target.value
        } );
    };
    const setCostItem = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemComposite', f: "setCostItem", event_value: event.target.value } );
        onChange( {
            ...props.value,
            cost_item: parseFloat( event.target.value )
        } );
    };
    const setCostTax = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemComposite', f: "setCostTax", event_value: event.target.value } );
        onChange( {
            ...props.value,
            cost_tax: parseFloat( event.target.value )
        } );
    };
    const setCostTotal = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log( { c: 'OrderItemComposite', f: "setCostTotal", event_value: event.target.value } );
        onChange( {
            ...props.value,
            cost_total: parseFloat( event.target.value )
        } );
    };
    const setVendorItem = ( vendor_item: Partial<VendorItemSelectValue> ) => {
        console.log( { c: 'OrderItemComposite', f: "setVendorItem", vendor_item } );
        onChange( {
            ...props.value,
            ...( vendor_item.id
                ? { vendor_item_id: vendor_item.id, vendor_item: undefined }
                : { vendor_item: vendor_item, vendor_item_id: undefined } )
        } );
    };
    const setManufacturerItem = ( manufacturer_item: ManufacturerItemSelectValue ) => {
        console.log( { c: 'OrderItemComposite', f: "setManufacturerItem", manufacturer_item } );
        onChange( {
            ...props.value,
            ...( typeof manufacturer_item === "number"
                ? { manufacturer_item_id: manufacturer_item, manufacturer_item: undefined }
                : { manufacturer_item: manufacturer_item, manufacturer_item_id: undefined } )
        } );
    };
    const setShipment = ( shipment: ShipmentSelectValue ) => {
        onChange( {
            ...props.value,
            ...transparentLog( { c: 'OrderItemComposite', f: "setShipment", shipment },
                ( shipment.id
                    ? { shipment_id: shipment.id, shipment: undefined }
                    : { shipment: shipment, shipment_id: undefined } )
            )
        } );
    };

    return (
        <div className="OrderItemComposite">

            <span id="OrderItemSelectContainer">
                <OrderItemSelect placeholder="Search for Item"
                    mode="single"
                    onChange={setItemId}
                    suffixIcon={props.suffix}
                    vendorId={props.vendorId}
                    defaultValue={ props.value && props.value.item_id ? { 
                        id: props.value?.item_id, 
                        vendor_item_id: props.value?.vendor_item_id, 
                        manufacturer_item_id: props.value?.manufacturer_item_id 
                    } : null}
                />

                <span id="ItemExtraInfo">
                    <VendorItemSelect
                        vendor_id={props.vendorId}
                        item_id={props.value?.item_id}
                        defaultValue={props.value?.vendor_item_id || props.value?.vendor_item}
                        onChange={setVendorItem} />

                    <ManufacturerItemSelect
                        defaultItemId={props.value?.item_id}
                        defaultValue={props.value?.manufacturer_item_id || props.value?.manufacturer_item }
                        // defaultItemId={props.value?.item_id}
                        // defaultValue={props.value?.manufacturer_item_id || props.value?.manufacturer_item}
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
                placeholder="Qty"
                required />
            <span id="cost_item">
                <Input name="cost_item"
                    defaultValue={toMinimumFixed( props.value?.cost_item, 2 )}
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
                    defaultValue={toMinimumFixed( props.value?.cost_tax, 2 )}
                    type="number"
                    step="0.01"
                    min="0"
                    prefix="$"
                    onChange={setCostTax}
                    placeholder="tax" />
            </span>

            {/* TODO: auto-calculate `cost_total` from `cost_tax` and `cost_item` */}
            {/* TODO: OR calculate when the user hits a _Calculator_ button */}
            <span id="cost_total">
                <Input name="cost_total"
                    defaultValue={toMinimumFixed( props.value?.cost_total, 2 )}
                    type="number"
                    step="0.01"
                    min="0"
                    prefix="$"
                    onChange={setCostTotal}
                    placeholder="total" />
            </span >

            <ShipmentSelect
                excludeOrderInput
                additionalShipmentOptions={props.additionalShipmentOptions}
                defaultValue={props.value?.shipment_id || props.value?.shipment}
                onChange={setShipment} />

        </div>
    );
} );