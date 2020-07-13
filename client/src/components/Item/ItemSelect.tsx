import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth, Intersection, is, parseIntSafe } from "~lib/UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery, useGetItemsQuery, useItemSearchQuery } from "~lib/types/graphql";


interface OptionT {
    label?: string | ReactElement;
    item_id: number;
}
type VT = SelectValue;

export type ItemSelectMultipleProvidesValue = Array<{ item_id: number; }>;

// interface ItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange' | 'mode'> {
//     forwardRef?: React.MutableRefObject<Input>;
//     value?: VT;
//     onChange?: ( items: ItemSelectProvidesValue) => void;
//     mode?: 'multiple' | 'tags' | 'single';
// }



// type VendorItemFormModalProps = Union<{
//     vendorItem: QueryResultTypePlus<typeof useGetVendorItemQuery>;
//     vendorItemId?: null;
// } | {
//     vendorItem?: null;
//     vendorItemId: number;
// } | {
//     vendorItem?: null;
//     vendorItemId?: null;
// }, {
//     visibilityHandler: ( modal: React.ReactElement ) => void;
//     onFinish?: ( values: Partial<UpdateVendorItemMutationVariables> ) => void;
// }>;

type ItemSelectProps = Intersection<
    Omit<SelectProps<VT>, 'value' | 'onChange' | 'mode'>,
    {
        forwardRef?: React.MutableRefObject<Input>;
        value?: VT;
    },
    {
        onChange?: ( items: ItemSelectMultipleProvidesValue ) => void;
        mode?: undefined | 'multiple' | 'tags';
    } |
    {
        onChange?: ( item_id: number ) => void;
        mode: null | 'single';
    }

>;

/**
 * Form Select Input for Items
 * 
 * Set `props.mode=null` or `single` for single input, else defaults to multiple
 */
export const ItemSelect: React.FC<ItemSelectProps> = ( props ) => {
    const { onChange, 
        //value, 
        // ...remainingProps 
    } = props;
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const { data, loading, error } = useItemSearchQuery( {
        variables: {
            search_text: `*${searchText}*`
        }
    } );
    const mode: 'multiple' | 'tags' | null = props.mode === 'single' ? null : ( props.mode ?? 'multiple' );
    console.log( "ItemSelect with mode", mode );
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "ItemSelect", "action": "useEffect", event: "loading and error ok", data } );
            setOptions( data.search.map( v => {
                console.log( "outputting option", v );
                return {
                    item_id: v.id,
                    label: <span className="orderOption">
                        {/* {<v.icon />} */}
                        <span>{v.name}</span>
                        <span>{v.metadata?.description}</span>
                        {/* <span>#{v.vendor_order_id}</span> */}
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) );
        }
    }, [ loading, data ] );
    return (
        <div className={`ItemSelect ${props.className?? ''}`}>
            <Select
                mode={ mode }
                showSearch={true}
                filterOption={false}
                onSearch={value => { console.log( { event: "onSearch", setSearchText: value } ); setSearchText( value ); }}
                suffixIcon={props.suffixIcon}
                placeholder={props.placeholder}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    if ( is < ( input: number ) => void >( onChange, props.mode === null || props.mode === "single" ) ) {
                        onChange( parseIntSafe(value)); 
                    } else {
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
                    }
                }}
            >
                {...options.map( v => {
                    console.log( "select with options", v );
                    return <Select.Option key={v.item_id} value={v.item_id.toString()}>{v.label}</Select.Option>;
                } )}
            </Select>
        </div>
    );
};