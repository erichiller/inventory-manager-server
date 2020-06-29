import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Spin } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth, Union, is, parseIntSafe, isNumberArray } from "../../lib/UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery, useGetItemsQuery, useGetItemVariantsQuery, ItemInsertInput, useGetItemLazyQuery, useGetItemsLazyQuery, useGetItemsByIdLazyQuery } from "../../lib/types/graphql";
import { Integer } from "../../lib/types/uint8";
import { Manufacturer } from "../../lib/Manufacturer/Manufacturer";
import { Vendor } from "../../lib/Vendor/Vendor";


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
    let defaultOptionElements: JSX.Element[] = [];
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
    console.log( { c: "OrderItemSelect", e: "init", props, data, loading, error, defaultItemQueryResult, defaultIds, options } );

    useEffect( () => {
        if ( defaultIds && defaultItemQueryResult.called === false ){
            console.log("runDefaultItemQuery")
            runDefaultItemQuery( ); 
        }
    })
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { c: "OrderItemSelect", f: "useEffect", e: "loading and error ok", data } );
            setOptions( data.item_variant.map( v => {
                let ManufacturerIcon = v.manufacturer ? new Manufacturer( v.manufacturer ).icon : null;
                let VendorIcon = v.vendor ? new Vendor( v.vendor ).icon : null;
                console.log( "adding option object for ", {
                    variant_id: v.id,
                    item_id: v.item_id,
                    manufacturer_id: v.manufacturer?.id,
                    vendor_id: v.vendor?.id
                } );
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
                        <span>{ManufacturerIcon ? <ManufacturerIcon /> : null}</span>
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) );
        }
        // URGENT: Also need to add things from past query, still in defaultItemQueryResult.data, but there was never a change.
        if ( !defaultItemQueryResult.loading && !defaultItemQueryResult.error && defaultItemQueryResult.data ) {
            let defaultOptions = defaultItemQueryResult.data.items.map( v => {
                // let ManufacturerIcon = v.manufacturer ? new Manufacturer( v.manufacturer ).icon : null;
                // let VendorIcon = v.vendor ? new Vendor( v.vendor ).icon : null;
                console.log( "adding option object for ", {
                    item_id: v.id,
                    // item_id: v.item_id,
                    // manufacturer_id: v.manufacturer?.id,
                    // vendor_id: v.vendor?.id
                } );
                return {
                    // variant_id: v.id,
                    item_id: v.id,
                    // manufacturer_id: v.manufacturer?.id,
                    // vendor_id: v.vendor?.id,
                    label: <span className="orderItemOption">
                        {/* {<v.icon />} // TODO */}
                        <span>{v.name}</span>
                        {/* <span>{v.vendor?.name}</span> */}<span></span>
                        {/* <span>{VendorIcon ? <VendorIcon /> : null}</span> */}<span></span>

                        <span>{v.object?.description || v.id}</span>
                        {/* <span>{v.manufacturer?.name}</span> */}<span></span>
                        {/* <span>{ManufacturerIcon ? <ManufacturerIcon /> : null}</span> */}<span></span>
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } );
            defaultOptionElements = optionsToOptionElements(defaultOptions);
            setOptions( defaultOptions );
        }
    }, [ loading, data, defaultItemQueryResult.data ] );


    const optionsToOptionElements: ( opts: typeof options ) => JSX.Element[] = ( opts ) => {
        return opts.map( v => {
            console.log( "select with options", v );
            return <Select.Option
                key={v.variant_id | v.item_id} 
                value={v.item_id}>
                {/* value={v.item_id.toString()}> */}
                    {v.label}
                </Select.Option>;
            //TODO - how to encode multi-value item, vendor, manufacturer
        } )
    }

    if ( defaultIds && ( ! options || options.length === 0 ) ){
        return <Spin />
    }

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
                // defaultValue={defaultValue}
                // defaultValue={defaultOptionElements}
                defaultValue={defaultIds}
                // defaultValue={defaultIds.length === 1 ? defaultIds[0].toString() : defaultIds.toString()}
                onChange={( value, opt ) => {
                    // console.log( "onChange", { value, opt } );
                    // let arrayOfItemProps: { item_id: number; }[] = [];
                    // if ( typeof value === "number" ) {
                    //     arrayOfItemProps = [ { item_id: value } ];
                    // } else if ( typeof value === "string" ) {
                    //     arrayOfItemProps = [ { item_id: parseInt( value ) } ];
                    // } else if ( "key" in value ) {
                    //     arrayOfItemProps = [ { item_id: ( typeof value.value === "number" ? value.value : parseInt( value.value ) ) } ];
                    // } else if ( Array.isArray( value ) && value.length > 0 ) {
                    //     value.forEach( e => typeof e === "number" ? arrayOfItemProps.push( { item_id: e } ) : arrayOfItemProps.push( { item_id: parseInt( e ) } ) );
                    // }
                    // onChange( arrayOfItemProps );
                    console.log( { cls: 'orderItemSelect', evt: "onChange", value, opt } );
                    if ( is<( input: number ) => void>( onChange, props.mode === null || props.mode === "single" ) ) {
                        onChange( parseIntSafe( value ) );
                    } else {
                        let arrayOfItemProps: { item_id: number; }[] = [];
                        if ( typeof value === "number" ) {
                            arrayOfItemProps = [ { item_id: value } ];
                        } else if ( typeof value === "string" ) {
                            arrayOfItemProps = [ { item_id: parseInt( value ) } ];
                        // } else if ( "key" in value ) {
                        //     arrayOfItemProps = [ { item_id: ( typeof value.value === "number" ? value.value : parseInt( value.value ) ) } ];
                        // } else if ( Array.isArray( value ) && value.length > 0 ) {
                        //     value.forEach( e => typeof e === "number" ? arrayOfItemProps.push( { item_id: e } ) : arrayOfItemProps.push( { item_id: parseInt( e ) } ) );
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