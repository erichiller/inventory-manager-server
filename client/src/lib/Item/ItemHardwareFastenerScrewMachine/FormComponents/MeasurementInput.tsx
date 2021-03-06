import { InputProps } from "antd/lib/input";
import React, { useState, ChangeEvent } from "react";
import { Input } from "antd";
import { EnumUnitKeys, getUnitFromUnitSystem } from "~lib/UtilityFunctions";


interface MeasurementInputProps extends InputProps {
    unit: EnumUnitKeys;
}
export const MeasurementInput: React.FC<MeasurementInputProps> = ( props ) => {
    console.log( { class: 'MeasurementInput', props } );
    const { onChange, unit, ...remainingProps } = props;
    const [ value, setValue ] = useState<string | number | readonly string[]>( props.value );
    const triggerChange = ( ev: ChangeEvent<HTMLInputElement> ) => {
        setValue( ev.target.value );
        if ( onChange ) {
            onChange( ev );
        }
    };
    return (
        // TODO: add ability to input fractions
        <React.Fragment>
            <Input
                placeholder="Select Unit used for Item Values"
                onChange={triggerChange}
                type="number" // number breaks the formatter on InputNumber
                addonAfter={getUnitFromUnitSystem( unit )}
                value={value || props.value}
                className="numberInput"
                {...remainingProps}
            />
        </React.Fragment>
    );
};
