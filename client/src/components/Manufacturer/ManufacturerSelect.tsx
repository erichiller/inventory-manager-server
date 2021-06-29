import { SelectProps, SelectValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { Input, Select } from "antd";



import { OptionData } from 'rc-select/lib/interface';
import { useSearchManufacturersQuery } from "./Manufacturer.ops";
import { preventEnterKeyDefault } from "~lib/UtilityFunctions";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}
type VT = SelectValue;

interface ManufacturerSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    onChange?: ( id: number | null ) => void;
}
/**
 * Form Select Input for Manufacturers
 */
export const ManufacturerSelect: React.FC<ManufacturerSelectProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ searchText, setSearchText ] = useState<string>( "" );
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const { data, loading, error } = useManufacturerSearchQuery( {
    //     variables: {
    //         search_text: `*${ searchText }*`
    //     }
    // } );
    // const [ runQuery, { called, data, error, loading } ] = useSearchManufacturersLazyQuery( {
    const { data, error, loading } = useSearchManufacturersQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            search_string: `${ searchText }%`
        }
        // skip: state.loading
    } );
    useEffect( () => {
        if ( !loading && !error && data ) {
            console.log( { class: "ManufacturerSelect", action: "useEffect", event: "loading and error ok", data } );
            setOptions( data.manufacturer.map( v => {
                console.log( "outputting option", v );
                return {
                    id: v.id,
                    value: v.id,
                    label: <span className="manufacturerOption">
                        {v && v.url ? <div><img src={`${ v.url }/favicon.ico`} /></div> : null}
                        <span>{v.name}</span>
                        {/* <span>{v.url}</span> */}
                        {/* <span>#{v.manufacturer_order_id}</span> */}
                    </span>
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
                // className="ManufacturerSelect"
                placeholder="type to search Manufacturers"
                onSearch={value => {
                    console.log( { event: "onSearch", setSearchText: value } );
                    setSearchText( value ); 
                    // runQuery( {
                    //     variables: {
                    //         search_string: `${ value }%`
                    //     }
                    // } );
                }}
                onKeyDown={preventEnterKeyDefault}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    let manufacturer_id: number | null = null;
                    if ( typeof value === "number" ) {
                        manufacturer_id = value;
                    } else if ( typeof value === "string" ) {
                        manufacturer_id = parseInt( value );
                    } else if ( "key" in value ) {
                        manufacturer_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    // } else if ( Array.isArray( value ) && value.length > 0 ) {
                        // value.forEach( e => typeof e === "number" ? arrayOfNumbers.push( e ) : arrayOfNumbers.push( parseInt( e ) ) );
                    }
                    if ( onChange ){
                        onChange( manufacturer_id );
                    }
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