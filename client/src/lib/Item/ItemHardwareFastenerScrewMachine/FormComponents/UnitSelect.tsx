import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { EnumUnitEnum } from "../../../types/graphql";

import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { EnumUnitKeys } from "../../../types/UtilityTypes";

/**
 * Form Select Input for unit selection (metric or usc)
 */
export const UnitSelect: React.FC<SelectProps<EnumUnitKeys>> = ( props ) => {
    const { onChange } = props;
    const [ value, setValue ] = useState<EnumUnitKeys>( props.value );

    console.log( "UnitSelect", { props }, { value }, value || props.value );

    // useEffect( () => {
    //     console.log( "UnitSelect useEffect", { props, value } )
    //     if ( value !== props.value ) {
    //         console.log( "UnitSelect useEffect triggered", { props, value } );
    //         triggerChange( props.value, null );
    //     }
    // }, [value, props.value])
    useEffect( () => {
        onChange( value, null );
    }, [] );
    useEffect( () => {
        console.log( "UnitSelect useEffect", { props, value } )
        if ( value !== props.value ) {
            console.log( "UnitSelect useEffect triggered", { props, value } );
            // triggerChange( props.value, null );
            setValue( props.value );
        }
    }, [value, props.value])

    const triggerChange = ( value: EnumUnitKeys, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };

    return (
        <React.Fragment>
            <Select
                placeholder="Select Unit used for Item Values"
                // value={props.value || value}
                value={value || props.value}
                onChange={triggerChange}
                options={Object.keys( EnumUnitEnum ).map( unit => { return { value: unit }; } )}
            />
        </React.Fragment>
    );
};




