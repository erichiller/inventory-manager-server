import { SelectProps, SelectValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { Select } from "antd";


import { OptionData } from 'rc-select/lib/interface';
import { useSearchVendorsQuery } from "~lib/types/graphql";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}
type VT = SelectValue;

interface VendorSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    // forwardRef?: React.MutableRefObject<Select>;
    value?: VT;
    onChange?: ( id: number ) => void;
}

/**
 * Form Select Input for Vendors
 */
export const VendorSelect: React.FC<VendorSelectProps> = React.forwardRef( (props, ref) => {
    const { onChange, value } = props;
    const [ searchText, setSearchText ] = useState<string>("");
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const { data, loading, error } = useVendorSearchQuery( {
    //     variables: {
    //         search_text: `*${ searchText }*`
    //     }
    // } );
    // const [ runQuery, { called, data, error, loading } ] = useSearchVendorsLazyQuery( {
    const { data, error, loading } = useSearchVendorsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            search_string: `${ searchText }%`
        }
        // skip: state.loading
    });
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "VendorSelect", "action": "useEffect", event: "loading and error ok", data } );
            setOptions( data.vendor.map( v => {
                console.log( "outputting option", v );
                return {
                    id: v.id,
                    value: v.id,
                    label: <span className="vendorOption">
                        {v && v.url ? <div><img src={`${ v.url }/favicon.ico`} /></div> : null}
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
            <Select
                filterOption={false}
                showSearch={true}
                // ref={forwardRef}
                // className="VendorSelect"
                placeholder="type to search Vendors"
                onSearch={value => {
                    console.log( { event: "onSearch", setSearchText: value } );
                    setSearchText( value ); 
                    // runQuery( {
                    //     variables: {
                    //         search_string: `${ value }%`
                    //     }
                    // } );
                }}
                onKeyDown={( e ) => {
                    if ( e.nativeEvent.keyCode === 13 ) {
                        e.preventDefault(); // keep Enter from submitting form within Selects so that autofill options can be triggered and selected.
                    }
                }}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    let vendor_id: number = null;
                    if ( typeof value === "number" ) {
                        vendor_id = value;
                    } else if ( typeof value === "string" ) {
                        vendor_id = parseInt( value );
                    } else if ( "key" in value ) {
                        vendor_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    // } else if ( Array.isArray( value ) && value.length > 0 ) {
                        // value.forEach( e => typeof e === "number" ? arrayOfNumbers.push( e ) : arrayOfNumbers.push( parseInt( e ) ) );
                    }
                    onChange( vendor_id );
                }}
                options={options}
                {...( value ? { defaultValue: props.value } : {} )}
                />
    );
});