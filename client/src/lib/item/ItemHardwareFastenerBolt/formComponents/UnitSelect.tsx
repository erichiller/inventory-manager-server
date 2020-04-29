import { SelectProps } from "antd/lib/select";
import { EnumUnitKeys } from "../types/types";
import React, { useState } from "react";
import { Select } from "antd";
import { EnumUnitEnum } from "../../../types/graphql";

import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';

/**
 * Form Select Input for unit selection (metric or usc)
 */
export const UnitSelect: React.FC<SelectProps<EnumUnitKeys>> = ( props ) => {
    console.log("UnitSelect", {props})
    const { onChange } = props;
    const [ value, setValue ] = useState<EnumUnitKeys>( props.value );
    const triggerChange = ( value: EnumUnitKeys, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };
    if ( value !== props.value ) {
        triggerChange( props.value, null );
    }
    return (
        <React.Fragment>
            <Select
                placeholder="Select Unit used for Item Values"
                value={value || props.value}
                onChange={triggerChange}
                options={Object.keys( EnumUnitEnum ).map( unit => { return { value: unit }; } )}
            />
        </React.Fragment>
    );
};




