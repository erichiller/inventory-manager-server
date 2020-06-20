import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetVendorItemsLazyQuery, useSearchVendorItemsLazyQuery, useSearchVendorItemsQuery } from "../../lib/types/graphql";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}
type VT = SelectValue;

interface VendorItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    onChange?: ( id: number ) => void;
}
/**
 * Form Select Input for VendorItems
 */
export const VendorItemSelect: React.FC<VendorItemSelectProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ searchText, setSearchText ] = useState<string>("");
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const { data, loading, error } = useVendorItemSearchQuery( {
    //     variables: {
    //         search_text: `*${ searchText }*`
    //     }
    // } );
    // const [ runQuery, { called, data, error, loading } ] = useSearchVendorItemsLazyQuery( {
    const { data, error, loading } = useSearchVendorItemsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            search_string: `${ searchText }%`
        }
        // skip: state.loading
    });
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "VendorItemSelect", "action": "useEffect", event: "loading and error ok", data } );
            setOptions( data.vendorItem.map( v => {
                console.log( "outputting option", v );
                return {
                    id: v.id,
                    value: v.id,
                    label: <span className="vendorItemOption">
                        {v && v.url ? <div><img src={`${ v.url }/favicon.ico`} /></div> : null}
                        <span>{v.name}</span>
                        <span>{v.url}</span>
                        {/* <span>#{v.vendorItem_order_id}</span> */}
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) );
        }
    }, [ loading, data ] );
    return (
        <div 
        >
            <Select
                filterOption={false}
                showSearch={true}
                // className="VendorItemSelect"
                placeholder="type to search VendorItems"
                onSearch={value => {
                    console.log( { event: "onSearch", setSearchText: value } );
                    setSearchText( value ); 
                    // runQuery( {
                    //     variables: {
                    //         search_string: `${ value }%`
                    //     }
                    // } );
                }}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    let vendorItem_id: number = null;
                    if ( typeof value === "number" ) {
                        vendorItem_id = value;
                    } else if ( typeof value === "string" ) {
                        vendorItem_id = parseInt( value );
                    } else if ( "key" in value ) {
                        vendorItem_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    // } else if ( Array.isArray( value ) && value.length > 0 ) {
                        // value.forEach( e => typeof e === "number" ? arrayOfNumbers.push( e ) : arrayOfNumbers.push( parseInt( e ) ) );
                    }
                    onChange( vendorItem_id );
                }}
                options={options}
                {...( value ? { defaultValue: props.value } : {} )}
                />
            {/* >
                {...options.map( v => {
                    console.log( "select with options", v );
                    return <Select.Option key={v.id} value={v.id.toString()}>{v.label}</Select.Option>;
                } )}
            </Select> */}
        </div>
    );
};