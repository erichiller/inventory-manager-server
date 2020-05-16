import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth } from "../../UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery, useGetItemsQuery, useItemSearchQuery } from "../../types/graphql";


interface OptionT {
    label?: string | ReactElement;
    item_id: number;
}
type VT = SelectValue;

interface ItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    onChange?: ( item_id: number[] ) => void;
}
/**
 * Form Select Input for Items
 */
export const ItemSelect: React.FC<ItemSelectProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const { data, loading, error } = useItemSearchQuery( {
        variables: {
            search_text: searchText
        }
    } );
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
        <div className="ItemSelect">
            <Select
                mode="multiple"
                filterOption={false}
                onSearch={value => { console.log( { event: "onSearch", setSearchText: value } ); setSearchText( value ); }}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    let arrayOfNumbers: number[] = [];
                    if ( typeof value === "number" ) {
                        arrayOfNumbers = [ value ];
                    } else if ( typeof value === "string" ) {
                        arrayOfNumbers = [ parseInt( value ) ];
                    } else if ( "key" in value ) {
                        arrayOfNumbers = [ typeof value.value === "number" ? value.value : parseInt( value.value ) ];
                    } else if ( Array.isArray(value) && value.length > 0){
                        value.forEach( e => typeof e === "number" ? arrayOfNumbers.push(e) : arrayOfNumbers.push(parseInt(e)));
                    }
                    onChange( arrayOfNumbers );
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