import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";
import moment from 'moment';



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth } from "../../lib/UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery } from "../../lib/types/graphql";


interface OptionT {
    order_id: string;
    label ?: string | ReactElement;
}
// interface OrderInputProps extends InputProps {
interface OrderInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: OptionT;
    onChange?: ( event: OptionT ) => void;
}
/**
 * Form Select Input for arbitrary ENUM
 */
export const OrderInput: React.FC<OrderInputProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ valueText, setValueText ] = useState<string>();
    const [ dateString, setDateString ] = useState<string>(moment().format('YYYY-MM'));
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
    //     setValue( value );
    //     if ( onChange ) {
    //         onChange( value, option );
    //     }
    // };
    console.log("useGetOrdersByDateRangeQuery", dateString);
    const { data, loading, error } = useGetOrdersByDateRangeQuery( {
        variables: {
            date_start_gte: `${ dateString }-01`,
            date_end_lte: `${ dateString }-${ getDaysInMonth( dateString ) }`
        }
    } );
    useEffect( () => {
        if ( !loading && !error ) {
            setOptions( data.order.map( v => {
                return {
                    order_id: v.id.toString(),
                    label: <span className="orderOption">
                        {v.vendor && v.vendor.url ? <div><img src={`${ v.vendor?.url }/favicon.ico`} /></div> : null }
                        <span>{v.vendor.name}</span>
                        <span>{v.total_cost}</span>
                        <span>#{v.vendor_order_id}</span>
                    </span>
                };
            } ) );
        }
    }, [ loading, data ] );
    const handleSearch = ( value: any ): void => {
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
        onChange( value.value );
    };
    return (
        <div className="OrderInput">
            {/* <AutoComplete
                options={options}
                onChange={( str, opt ) => handleSearch( opt as OptionT )}
                dropdownMatchSelectWidth={220}
            >
                <Input
                    ref={props.forwardRef}
                    spellCheck={false}
                />
            </AutoComplete> */}

            <Select
                options={options.map( v => { return { label: v.label, value: v.order_id.toString() }; } )}
                onChange={( str, opt ) => handleSearch( opt )}
            />
            <DatePicker.MonthPicker
                id="datepicker_monthpicker"
                defaultValue={moment()}
                onChange={( d, dateString ) => {
                    console.log("setting dateString to ", dateString);
                    setDateString( dateString );
                }}
            />
        </div>
    );
};