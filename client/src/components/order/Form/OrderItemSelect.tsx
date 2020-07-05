import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Spin } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth, Union, is, parseIntSafe, isNumberArray } from "~lib/UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery, useGetItemsQuery, useGetItemVariantsQuery, ItemInsertInput, useGetItemLazyQuery, useGetItemsLazyQuery, useGetItemsByIdLazyQuery } from "~lib/types/graphql";
import { Integer } from "~lib/types/uint8";
import { Manufacturer } from "~lib/Manufacturer/Manufacturer";
import { Vendor } from "~lib/Vendor/Vendor";
import { Item } from "~lib/Item";


interface OptionT {
    label?: string | ReactElement;
    variant_id?: number;
    item_id: number;
    vendor_id?: number | null;
    manufacturer_id?: number | null;
}
type VT = number | ItemInsertInput;

export type OrderItemSelectMultipleValue = Array<{ item_id: number; }>;
/** item_id */
export type OrderItemSelectSingleValue = number;

// interface OrderItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
//     forwardRef?: React.MutableRefObject<Input>;
//     value?: VT;
//     vendorId: Integer;
//     onChange?: ( items: OrderItemSelectValue ) => void;
// }


type OrderItemSelectProps = Union<
    Omit<SelectProps<VT>, 'value' | 'onChange' | 'mode'>,
    {
        forwardRef?: React.MutableRefObject<Input>;
        value?: VT;
        vendorId: Integer;
    },
    {
        onChange?: ( items: OrderItemSelectMultipleValue ) => void;
        mode?: undefined | 'multiple' | 'tags';
    } |
    {
        onChange?: ( item_id: OrderItemSelectSingleValue ) => void;
        mode: null | 'single';
    }

>;

/**
 * Form Select Input for Items
 */
export const OrderItemSelect: React.FC<OrderItemSelectProps> = ( props ) => {
    const { onChange,
        vendorId,
        //value, 
        // ...remainingProps 
    } = props;
    const mode: 'multiple' | 'tags' | null = props.mode === 'single' ? null : ( props.mode ?? 'multiple' );
    const defaultIds: number[] = [
        ...(
            typeof props.value === "number" ?
                [ props.value ] : (
                    props.value ? [ props.value.id ] : [] )
        ),
        ...(
            typeof props.defaultValue === "number" ?
                [ props.defaultValue ] : (
                    props.defaultValue ? [ props.defaultValue.id ] : [] )
        )
    ];
    // let defaultOptionElements: JSX.Element[] = [];
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const { data, loading, error } = useGetItemVariantsQuery( {
        variables: {
            query_text: `*${ searchText }*`,
            prefer_vendor_id: vendorId
        }
    } );
    const [ runDefaultItemQuery, defaultItemQueryResult ] = useGetItemsByIdLazyQuery( {
        variables: {
            ids: defaultIds
        }
    } );
    console.log( { c: "OrderItemSelect", e: "init", props, data, defaultItemQueryResult, defaultIds, options } );

    useEffect( () => {
        console.log( "OrderItemSelect: calling initial useEffect", defaultItemQueryResult)
        if ( defaultIds && defaultItemQueryResult.called === false ){
            console.log("runDefaultItemQuery")
            runDefaultItemQuery( ); 
        }
        if ( data && ( !options || options.length === 0 ) ) {
            console.log( 'OrderItemSelect: data is already present', data, options ); 
            setOptionsFromVariants();
        }
        if ( defaultItemQueryResult.data && ( !options || options.length === 0 ) ) {
            console.log( 'OrderItemSelect: defaultItemQueryResult is already present', defaultItemQueryResult, options ); 
            setOptionsFromItems();
        }
    }, [] );

    useEffect( () => {
        if ( !loading && !error && data ) {
            console.log( { c: "OrderItemSelect", f: "useEffect", e: "Variants loading and error ok", data, defaultItemQueryResult: defaultItemQueryResult } );
            setOptionsFromVariants();
        }
    }, [ loading, data ] );

    useEffect( () => {
        console.log( { c: "OrderItemSelect", f: "useEffect", e: "defaultItemQueryResult.data change detected", data, defaultItemQueryResult: defaultItemQueryResult } );
        if ( !defaultItemQueryResult.loading && !defaultItemQueryResult.error && defaultItemQueryResult.data ) {
            console.log( { c: "OrderItemSelect", f: "useEffect", e: "defaultItem loading and error ok", data, defaultItemQueryResult: defaultItemQueryResult } );
            setOptionsFromItems();
        }
    }, [ defaultItemQueryResult.loading, defaultItemQueryResult.data ] );

    const setOptionsFromVariants = () => {
        setOptions( data.item_variant.map( v => {
            let ManufacturerIcon = v.manufacturer ? new Manufacturer( v.manufacturer ).icon : null;
            let VendorIcon = v.vendor ? new Vendor( v.vendor ).icon : null;
            console.log( "adding option object for ", {
                variant_id: v.id,
                item_id: v.item.id,
                manufacturer_id: v.manufacturer?.id,
                vendor_id: v.vendor?.id
            } );
            let item = Item.ItemsFactory( v.item );
            return {
                variant_id: v.id,
                item_id: v.item.id,
                manufacturer_id: v.manufacturer?.id,
                vendor_id: v.vendor?.id,
                label: <span className="orderItemOption">
                    {<item.icon />}
                    <span>{v.name}</span>
                    <span>{v.vendor?.name}</span>
                    <span>{VendorIcon ? <VendorIcon /> : null}</span>
                    <span>{v.object?.description || v.id}</span>
                    <span>{v.manufacturer?.name}</span>
                    <span>{ManufacturerIcon ? <ManufacturerIcon /> : null}</span>
                </span>
                // TODO: Set value to the applicable string, feed value up that is the `order_id`
            };
        } ) );
    }

    const setOptionsFromItems = () => {
        setOptions( defaultItemQueryResult.data.items.map( v => {
            // let ManufacturerIcon = v.manufacturer ? new Manufacturer( v.manufacturer ).icon : null;
            // let VendorIcon = v.vendor ? new Vendor( v.vendor ).icon : null;
            console.log( "adding option object for ", {
                item_id: v.id,
                // item_id: v.item_id,
                // manufacturer_id: v.manufacturer?.id,
                // vendor_id: v.vendor?.id
            } );

            let item = Item.ItemsFactory( v );
            return {
                // variant_id: v.id,
                item_id: v.id,
                // manufacturer_id: v.manufacturer?.id,
                // vendor_id: v.vendor?.id,
                label: <span className="orderItemOption">
                    {<item.icon />}
                    <span>{v.name}</span>
                    {/* <span>{v.vendor?.name}</span> */}<span></span>
                    {/* <span>{VendorIcon ? <VendorIcon /> : null}</span> */}<span></span>

                    <span>{v.object?.description || v.id}</span>
                    {/* <span>{v.manufacturer?.name}</span> */}<span></span>
                    {/* <span>{ManufacturerIcon ? <ManufacturerIcon /> : null}</span> */}<span></span>
                </span>
                // TODO: Set value to the applicable string, feed value up that is the `order_id`
            };
        } ));
    }


    const optionsToOptionElements: ( opts: typeof options ) => JSX.Element[] = ( opts ) => {
        return opts.map( v => {
            console.log( "select with options", v );
            return <Select.Option
                key={v.variant_id | v.item_id} 
                value={v.item_id}>
                    {v.label}
                </Select.Option>;
            //TODO - how to encode multi-value item, vendor, manufacturer
        } )
    }

    if ( defaultIds && ( ! options || options.length === 0 ) ){
        return <Spin />
    }

    // KILL: debug with  /(OrderItemSelect|OrderItemInput)/
    return (
        <div className={`OrderItemSelect ${ props.className ?? '' }`}>
            <Select
                mode={mode}
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
                defaultValue={defaultIds}
                onChange={( value, opt ) => {
                    console.log( { cls: 'orderItemSelect', evt: "onChange", value, opt } );
                    if ( is<( input: number ) => void>( onChange, props.mode === null || props.mode === "single" ) ) {
                        onChange( parseIntSafe( value ) );
                    } else {
                        let arrayOfItemProps: { item_id: number; }[] = [];
                        if ( typeof value === "number" ) {
                            arrayOfItemProps = [ { item_id: value } ];
                        } else if ( typeof value === "string" ) {
                            arrayOfItemProps = [ { item_id: parseInt( value ) } ];
                        }
                        onChange( arrayOfItemProps );
                    }
                }}
            >
                {...optionsToOptionElements(options)}
            </Select>
        </div>
    );
};