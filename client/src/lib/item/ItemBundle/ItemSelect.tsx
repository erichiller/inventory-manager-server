import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase, getDaysInMonth } from "../../UtilityFunctions";
import { InputProps } from "antd/lib/input";
import { useGetOrdersByDateRangeQuery, useGetItemsQuery } from "../../types/graphql";


interface OptionT {
    // value: string;
    label?: string | ReactElement;
    item_id: number;
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
    // const [ valueText, setValueText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    // const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
    //     setValue( value );
    //     if ( onChange ) {
    //         onChange( value, option );
    //     }
    // };
    const { data, loading, error } = useGetItemsQuery( {
        variables: {
        }
    } );
    useEffect( () => {
        if ( !loading && !error ) {
            setOptions( data.items.map( v => {
                return {
                    item_id: v.id,
                    label: <span className="orderOption">
                        {/* {<v.icon />} */}
                        <span>{v.name}</span>
                        <span>{v.object?.description}</span>
                        {/* <span>#{v.vendor_order_id}</span> */}
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) );
        }
    }, [ loading, data ] );
    const handleSearch = ( value: any ): void => {
        // const handleSearch = ( value: OptionT ): void => {
        // const parsedValue = parseScrewSizeInputOptionData( value );
        console.log( { method: 'ItemInput', f: 'handleSearch', value } );
        // setValueText( value );
        // setOptionsDataArr( getScrewSizeOptions( parsedValue ) );
        // setOptions( eliminateArrayDuplicates( getScrewSizeOptions( parsedValue ) ).map( d => {
        // const dStr = constructOptionValue( d );
        // return { value: dStr };
        // return <Select.Option key={dStr} value={dStr}>{dStr}</Select.Option>;
        // } ) );
        onChange( value.value );
    };
    return (
        <div className="ItemInput">
            {/* <AutoComplete
                options={options.map( v => { return { label: v.label, value: v.order_id.toString() } })}
                onChange={( str, opt ) => handleSearch( opt )}
                dropdownMatchSelectWidth={220}
            > */}
                {/* <Input
                    ref={props.forwardRef}
                    spellCheck={false}
                    {...remainingProps}
                /> */}
            {/* </AutoComplete> */}
            <Select
                options={options.map( v => { return { label: v.label, value: v.item_id.toString() }; } )}
                onChange={( str, opt ) => handleSearch( opt )}
            />
        </div>
    );
};