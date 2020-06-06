import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetVendorsLazyQuery } from "../../lib/types/graphql";


interface OptionT {
    label?: string | ReactElement;
    Vendor_id: number;
}
type VT = SelectValue;

interface VendorSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    onChange?: ( Vendor_id: number[] ) => void;
}
/**
 * Form Select Input for Vendors
 */
export const VendorSelect: React.FC<VendorSelectProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const { data, loading, error } = useVendorSearchQuery( {
    //     variables: {
    //         search_text: `*${ searchText }*`
    //     }
    // } );
    const [ runQuery, { called, data, error, loading } ] = useGetVendorsLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
        // skip: state.loading
    });
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "VendorSelect", "action": "useEffect", event: "loading and error ok", data } );
            setOptions( data.vendor.map( v => {
                console.log( "outputting option", v );
                return {
                    Vendor_id: v.id,
                    label: <span className="orderOption">
                        {/* {<v.icon />} */}
                        <span>{v.name}</span>
                        <span>{v.url}</span>
                        {/* <span>#{v.vendor_order_id}</span> */}
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) );
        }
    }, [ loading, data ] );
    return (
        <div className="VendorSelect">
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
                    } else if ( Array.isArray( value ) && value.length > 0 ) {
                        value.forEach( e => typeof e === "number" ? arrayOfNumbers.push( e ) : arrayOfNumbers.push( parseInt( e ) ) );
                    }
                    onChange( arrayOfNumbers );
                }}
            >
                {...options.map( v => {
                    console.log( "select with options", v );
                    return <Select.Option key={v.Vendor_id} value={v.Vendor_id.toString()}>{v.label}</Select.Option>;
                } )}
            </Select>
        </div>
    );
};