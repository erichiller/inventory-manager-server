import { SelectProps } from "antd/lib/select";
import React, { useState } from "react";
import { Select } from "antd";


import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { toTitleCase } from "../../../UtilityFunctions";
import { IconMapT } from "../icon";

interface EnumSelectProps<T extends string> extends SelectProps<T> {
    enumKeys: string[];
    iconMap?: IconMapT<T>;
}
/**
 * Form Select Input for arbitrary ENUM
 */
export const EnumSelect = ( props: EnumSelectProps<string> ) => {
    const { onChange, enumKeys, iconMap, ...remainingProps } = props;
    const [ value, setValue ] = useState<string>( props.value );
    const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };
    return (
        <div className={iconMap ? "enumIconSelect" : ""}>
            <Select
                showSearch
                onKeyDown={( e ) => {
                    if ( e.nativeEvent.keyCode === 13 ) {
                        e.preventDefault(); // keep Enter from submitting form within Selects so that autofill options can be triggered and selected.
                    }
                }}
                onChange={triggerChange}
                options={enumKeys.map( k => {
                    let Icon = iconMap ? iconMap[ k ] : null;
                    console.log( { cls: 'EnumSelect', enumKeys, iconMap, k } );
                    return {
                        value: k,
                        label: <span className={iconMap ? "enumIconSelectOption" : ""}><div>{Icon ? <Icon /> : null}</div><span>{toTitleCase( k )}</span></span>,
                    };
                } )}
                {...remainingProps}
            />
        </div>
    );
};