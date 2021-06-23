import { SelectProps } from "antd/lib/select";
import React, { useState } from "react";
import { Select } from "antd";


import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { preventEnterKeyDefault, toTitleCase } from "~lib/UtilityFunctions";
import { IconMapT } from "../Icon/Index";
import { SVGReactFC, PNGReactFC } from "~/styles/icon";

interface EnumSelectProps<T extends string | string[]> extends SelectProps<T> {
    enumKeys: string[];
    iconMap?: IconMapT< T extends string ? T : string >;
}
/**
 * Form Select Input for arbitrary ENUM
 */
export const EnumSelect = ( props: EnumSelectProps<string | string[]> ) => {
    const { onChange, enumKeys, iconMap, ...remainingProps } = props;
    const [ value, setValue ] = useState<string | string[]>( props.value );
    const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };
    let carriedOverProps = remainingProps;
    if( carriedOverProps.value === null && carriedOverProps.mode === "multiple"  ){
        console.log( "EnumSelect empty" );

        carriedOverProps.value = [];
    }
    console.log( "EnumSelect", remainingProps );
    return (
        <div className={iconMap ? "enumIconSelect" : ""}>
            <Select
                showSearch
                onKeyDown={preventEnterKeyDefault}
                onChange={triggerChange}
                options={enumKeys.map( k => {
                    let Icon = iconMap ? iconMap[ k ] : null;
                    // let Icon: PNGReactFC;
                    // let Icon: SVGReactFC;
                    // console.log( { cls: 'EnumSelect', enumKeys, iconMap, k } );
                    return {
                        value: k,
                        label: <span className={iconMap ? "enumIconSelectOption" : ""}><div>{Icon ? <Icon /> : null}</div><span>{toTitleCase( k )}</span></span>,
                    };
                } )}
                {...carriedOverProps}
            />
        </div>
    );
};