import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { Input, Select, Spin, Tooltip } from "antd";



import { Intersection, is, flatArrayObjectProperty, QueryResultTypePlus, filterObject, transparentLog, lengthZeroArrayToNull, PartialNullable, preventEnterKeyDefault } from "~lib/UtilityFunctions";
import {
    useGetItemVariantsQuery, useGetItemVariantByAttachedLazyQuery,
    useGetItemVariantByAttachedQuery
} from "../Order.ops";
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
type TOrderItemSelectValue = number | PartialNullable<QueryResultTypePlus<typeof useGetItemVariantByAttachedQuery>>;

export type OrderItemSelectMultipleValue = Array<TOrderItemSelectValue>;
/** item_id */
export type OrderItemSelectSingleValue = TOrderItemSelectValue;

type OrderItemSelectProps = Intersection<
    Omit<SelectProps<TOrderItemSelectValue | TOrderItemSelectValue[]>, 'value' | 'onChange' | 'mode'>,
    {
        forwardRef?: React.MutableRefObject<Input>;
        value?: TOrderItemSelectValue | TOrderItemSelectValue[];
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

    const calculateDefaults = ( values: Array<typeof props.value> ): [ number[], Exclude<TOrderItemSelectValue, number>[] ] => {
        let _defaultIds: number[] = [];
        let _defaultObjects: Exclude<TOrderItemSelectValue, number>[] = [];
        values.forEach( value => {
            if ( value == null ) {
                //nothing
            } else if ( typeof value === "number" ) {
                _defaultIds.push( value );
            } else if ( typeof value === 'object' && 'id' in value ) {
                _defaultIds.push( value.id );
                _defaultObjects.push( value );
            }
        } );
        return [ _defaultIds, _defaultObjects ];
    };
    let [ defaultIds, defaultObjects ] = calculateDefaults(
        [
            ...( Array.isArray( props.value ) ? props.value : [ props.value ] ),
            ...( Array.isArray( props.defaultValue ) ? props.defaultValue : [ props.defaultValue ] ),
        ] );
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const { data: itemVariantsData, loading: itemVariantsLoading, error: itemVariantsError } = useGetItemVariantsQuery( {
        variables: {
            query_text: '%' + ( searchText ? searchText + '%': '' ),
            prefer_vendor_id: vendorId
        }
    } );
    const [ runDefaultItemQuery, defaultItemQueryResult ] = useGetItemVariantByAttachedLazyQuery();
    console.log( { c: "OrderItemSelect", e: "init", props, data: itemVariantsData, defaultItemQueryResult, defaultIds, defaultObjects, options } );

    useEffect( () => {
        console.log( "OrderItemSelect: calling initial useEffect", defaultItemQueryResult );
        if ( defaultIds && defaultItemQueryResult.called === false ) {
            console.log( "runDefaultItemQuery" );
            runDefaultItemQuery( {
                variables: {
                    item_id: defaultIds,
                    manufacturer_item_id: lengthZeroArrayToNull( flatArrayObjectProperty( defaultObjects, 'manufacturer_item_id' ) ),
                    vendor_item_id: lengthZeroArrayToNull( flatArrayObjectProperty( defaultObjects, 'vendor_item_id' ) ),
                    vendor_id: lengthZeroArrayToNull(
                        transparentLog(
                            { c: "OrderItemSelect", e: "flatArrayObjectProperty", },
                            flatArrayObjectProperty( defaultObjects, 'vendor_id' ) )
                    ),
                    limit: 1
                }
            } );
        }
        if ( itemVariantsData && ( !options || options.length === 0 ) ) {
            console.log( 'OrderItemSelect: data is already present', itemVariantsData, options );
            setOptionsFromVariants( itemVariantsData.item_variant );
        }
        if ( defaultItemQueryResult.data && ( !options || options.length === 0 ) ) {
            console.log( 'OrderItemSelect: defaultItemQueryResult is already present', defaultItemQueryResult, options );
            setOptionsFromVariants( defaultItemQueryResult.data.item_variant );
        }
    }, [] );

    useEffect( () => {
        if ( !itemVariantsLoading && !itemVariantsError && itemVariantsData ) {
            console.log( { c: "OrderItemSelect", f: "useEffect", e: "Variants loading and error ok", data: itemVariantsData, defaultItemQueryResult: defaultItemQueryResult } );
            setOptionsFromVariants( itemVariantsData.item_variant );
        }
    }, [ itemVariantsLoading, itemVariantsData ] );

    useEffect( () => {
        console.log( { c: "OrderItemSelect", f: "useEffect", e: "defaultItemQueryResult change detected", itemVariantsData, defaultItemQueryResult } );
        if ( !defaultItemQueryResult.error && defaultItemQueryResult.data ) {
            console.log( { c: "OrderItemSelect", f: "useEffect", e: "defaultItem loading and error ok", itemVariantsData, defaultItemQueryResult } );
            setOptionsFromVariants( defaultItemQueryResult.data.item_variant );
        }
    }, [ defaultItemQueryResult.loading, defaultItemQueryResult.data ] );

    const setOptionsFromVariants = ( variants: typeof itemVariantsData.item_variant | typeof defaultItemQueryResult.data.item_variant ) => {
        setOptions( priorOptions => {
            let filteredOptions = priorOptions.filter( option => !variants.map( variant => variant.id ).includes( option.variant_id ) );
            let options = [
                ...filteredOptions,
                ...variants.map( v => {
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
                        manufacturer_item_id: v.manufacturer_item_id,
                        vendor_item_id: v.vendor_item_id,
                        label: <Tooltip title={<pre>{JSON.stringify( filterObject( v, [ 'id', 'item_id', 'vendorItem', 'manufacturerItem' ] ), null, 2 )}</pre>}>
                            <span className="orderItemOption">
                                {<item.icon />}
                                <span>{v.name}</span>
                                <span>{v.vendorItem?.vendor_sku || v.vendor?.name}</span>
                                <span>{VendorIcon ? <VendorIcon /> : null}</span>
                                <span>{v.object?.description || v.item_id}</span>
                                <span>{v.manufacturerItem?.manufacturer_product_name || v.manufacturerItem?.manufacturer_product_id || v.manufacturer?.name}</span>
                                <span>{ManufacturerIcon ? <ManufacturerIcon /> : null}</span>
                            </span>
                        </Tooltip>
                    };
                } ) 
            ];
            console.log( { c: "OrderItemSelect", f: "setOptionsFromVariants->setOptions", e: "setting options", priorOptions, filteredOptions, options } );
            return options;
        }

        );
    };

    const optionsToOptionElements: ( opts: typeof options ) => JSX.Element[] = ( opts ) => {
        return opts.map( v => {
            console.log( "select with option", { v, key: v.variant_id | v.item_id } );
            return <Select.Option
                key={v.variant_id || v.item_id}
                value={v.variant_id}>
                {v.label}
            </Select.Option>;
        } );
    };

    const selectedOptionsOnChange = ( selectedOptionValues: OrderItemSelectSingleValue | OrderItemSelectMultipleValue ): void => {
        // const optionLookup
        if ( Array.isArray( selectedOptionValues ) ) {
            onChange(
                transparentLog(
                    {
                        c: "OrderItemSelect",
                        e: "onChange - multiple"
                    },
                    options.filter( el => selectedOptionValues.includes( el.variant_id ) ) )
            );
            return;
        }
        if ( mode == null && is<( input: Exclude<TOrderItemSelectValue, number> ) => void>( onChange, props.mode === null || props.mode === "single" ) ) {
            onChange(
                transparentLog(
                    {
                        c: "OrderItemSelect",
                        e: "onChange - single"
                    },
                    options.find( el => el.variant_id === selectedOptionValues )
                )
            );
        }
    };

    if ( defaultIds &&
        ( Array.isArray( defaultIds ) && defaultIds.length > 0 ) &&
        ( !options || options.length === 0 ) ) {
        return <Spin />;
    }

    if ( defaultItemQueryResult.data?.item_variant ) {
        defaultItemQueryResult.data.item_variant.forEach( obj => {
            console.log(
                {
                    c: "OrderItemSelect",
                    e: "checking if need to change defaultIds"
                }, obj );
            // since the defaultItemQueryResult loads later, the defaultIds must be set to its result
            if ( !defaultIds.includes( obj.id ) ) {
                defaultIds = [ obj.id ];
            }
        } );
    }
    console.log(
        {
            c: "OrderItemSelect",
            e: "changing defaultIds"
        }, defaultIds );

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
                onKeyDown={preventEnterKeyDefault}
                defaultValue={defaultIds}
                onChange={( value, opt ) => {
                    console.log( { cls: 'orderItemSelect', evt: "onChange", value, opt } );
                    selectedOptionsOnChange( value );
                }}
            >
                {...optionsToOptionElements( options )}
            </Select>
        </div>
    );
};