import { SelectProps } from "antd/lib/select";
import React, { useState } from "react";
import { Select } from "antd";


import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';

interface EnumSelectProps<T> extends SelectProps<T> {
    enumKeys: string[];
}
/**
 * Form Select Input for arbitrary ENUM
 */
export const EnumSelect = ( props: EnumSelectProps<string> ) => {
    // export const EnumSelect = <T extends { [ k: string ]: string | number; }> ( props: EnumSelectProps<string> ) => {
    const { onChange, enumKeys, ...remainingProps } = props;
    const [ value, setValue ] = useState<string>( props.value );
    const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };
    return (
        <React.Fragment>
            <Select
                onChange={triggerChange}
                options={enumKeys.map( k => { return { value: k }; } )}
                {...remainingProps}
            />
        </React.Fragment>
    );
};