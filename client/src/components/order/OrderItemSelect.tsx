import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth } from "../../lib/UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery, useGetItemsQuery, useGetItemVariantsQuery } from "../../lib/types/graphql";
import { Integer } from "../../lib/types/uint8";
import { Manufacturer } from "../../lib/Manufacturer/Manufacturer";
import { Vendor } from "../../lib/Vendor/Vendor";


interface OptionT {
    label?: string | ReactElement;
    variant_id: number;
    item_id: number;
    vendor_id: number | null;
    manufacturer_id: number | null;
}
type VT = SelectValue;

export type OrderItemSelectProvidesValue = Array<{ item_id: number; }>;

interface OrderItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    vendorId: Integer;
    onChange?: ( items: OrderItemSelectProvidesValue ) => void;
}
/**
 * Form Select Input for Items
 */
export const OrderItemSelect: React.FC<OrderItemSelectProps> = ( props ) => {
    const { onChange,
        vendorId
        //value, 
        // ...remainingProps 
    } = props;
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const { data, loading, error } = useGetItemVariantsQuery( {
        variables: {
            query_text: `*${ searchText }*`,
            prefer_vendor_id: vendorId
        }
    } );
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "OrderItemSelect", "action": "useEffect", event: "loading and error ok", data } );
            // let generatedOptions: OptionT[] = [];

            setOptions( data.item_variant.map( v => {
                let ManufacturerIcon = v.manufacturer ? new Manufacturer( v.manufacturer ).icon : null;
                let VendorIcon = v.vendor ? new Vendor( v.vendor ).icon : null;
                console.log( "adding option object for ", {
                    variant_id: v.id,
                    item_id: v.item_id,
                    manufacturer_id: v.manufacturer?.id,
                    vendor_id: v.vendor?.id});
                return {
                    variant_id: v.id,
                    item_id: v.item_id,
                    manufacturer_id: v.manufacturer?.id,
                    vendor_id: v.vendor?.id,
                    label: <span className="orderItemOption">
                        {/* {<v.icon />} // TODO */}
                        <span>{v.name}</span>
                        <span>{v.vendor?.name}</span>
                        <span>{VendorIcon ? <VendorIcon /> : null}</span>

                        <span>{v.object?.description || v.id}</span>
                        <span>{v.manufacturer?.name}</span>
                        <span>{ ManufacturerIcon ? <ManufacturerIcon /> : null}</span>
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            }) );
        }
    }, [ loading, data ] );
    return (
        <div className={`OrderItemSelect ${ props.className ?? '' }`}>
            <Select
                mode={props.mode}
                filterOption={false}
                showSearch={true}
                onSearch={value => { console.log( { event: "onSearch", setSearchText: value } ); setSearchText( value ); }}
                suffixIcon={props.suffixIcon}
                placeholder={props.placeholder}
                dropdownClassName="OrderItemSelectDropdown"
                onKeyDown={( e ) => {
                    if ( e.nativeEvent.keyCode === 13 ) {
                        e.preventDefault(); // keep Enter from submitting form within Selects so that autofill options can be triggered and selected.
                    }
                }}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    let arrayOfItemProps: { item_id: number; }[] = [];
                    if ( typeof value === "number" ) {
                        arrayOfItemProps = [ { item_id: value } ];
                    } else if ( typeof value === "string" ) {
                        arrayOfItemProps = [ { item_id: parseInt( value ) } ];
                    } else if ( "key" in value ) {
                        arrayOfItemProps = [ { item_id: ( typeof value.value === "number" ? value.value : parseInt( value.value ) ) } ];
                    } else if ( Array.isArray( value ) && value.length > 0 ) {
                        value.forEach( e => typeof e === "number" ? arrayOfItemProps.push( { item_id: e } ) : arrayOfItemProps.push( { item_id: parseInt( e ) } ) );
                    }
                    onChange( arrayOfItemProps );
                }}
            >
                {...options.map( v => {
                    console.log( "select with options", v );
                    return <Select.Option key={v.variant_id} value={v.item_id.toString()}>{v.label}</Select.Option>;//TODO - how to encode multi-value item, vendor, manufacturer
                } )}
            </Select>
        </div>
    );
};