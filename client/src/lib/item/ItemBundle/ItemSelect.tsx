import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker } from "antd";
import moment from 'moment';



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth } from "../../UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrderByDateRangeQuery, useGetItemsQuery } from "../../types/graphql";


interface OptionT {
    value: string;
    label?: string | ReactElement;
}
// interface ItemInputProps extends InputProps {
interface ItemInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: OptionT;
    onChange?: ( event: OptionT ) => void;
}
/**
 * Form Select Input for arbitrary ENUM
 */
export const ItemInput: React.FC<ItemInputProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ valueText, setValueText ] = useState<string>();
    const [ dateString, setDateString ] = useState<string>( moment().format( 'YYYY-MM' ) );
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
    //     setValue( value );
    //     if ( onChange ) {
    //         onChange( value, option );
    //     }
    // };
    console.log( "useGetOrderByDateRangeQuery", dateString );
    const { data, loading, error } = useGetItemsQuery( {
        variables: {
        }
    } );
    useEffect( () => {
        if ( !loading && !error ) {
            setOptions( data.order.map( v => {
                return {
                    value: v.id.toString(),
                    label: <span className="orderOption">
                        {v.vendor && v.vendor.url ? <div><img src={`${ v.vendor?.url }/favicon.ico`} /></div> : null}
                        <span>{v.vendor.name}</span>
                        <span>{v.total_cost}</span>
                        <span>#{v.vendor_order_id}</span>
                    </span>
                };
            } ) );
        }
    }, [ loading, data ] );
    const handleSearch = ( value: OptionT ): void => {
        // const parsedValue = parseScrewSizeInputOptionData( value );
        // console.log( { method: 'ScrewSizeInput', f: 'handleSearch', value, parsedValue } );
        // setValueText( value );
        // setOptionsDataArr( getScrewSizeOptions( parsedValue ) );
        // setOptions( eliminateArrayDuplicates( getScrewSizeOptions( parsedValue ) ).map( d => {
        // const dStr = constructOptionValue( d );
        // return { value: dStr };
        // return <Select.Option key={dStr} value={dStr}>{dStr}</Select.Option>;
        // } ) );
        // onChange( parsedValue );
    };
    return (
        <div className="ItemInput">
            <AutoComplete
                options={options}
                onChange={( str, opt ) => handleSearch( opt as OptionT )}
                dropdownMatchSelectWidth={220}
            >
                <Input
                    ref={props.forwardRef}
                    spellCheck={false}
                    {...remainingProps}
                />
            </AutoComplete>
            <DatePicker.MonthPicker
                defaultValue={moment()}
                onChange={( d, dateString ) => {
                    console.log( "setting dateString to ", dateString );
                    setDateString( dateString );
                }}
            />
        </div>
    );
};