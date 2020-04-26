import { EnumUnitEnum, EnumHardwareFastenerThreadTypeEnum } from "../../../types/graphql";
import { getUnitSystemFromUnitPrefix } from "./helpers";
import { UnitPrefixT, EnumUnitKeys } from "../types/types";
import { SelectProps } from "antd/lib/select";
import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { InputProps } from "antd/lib/input";



/** string form is <Unit>?<Diameter>-<pitch>x<Length> */
export class ScrewSizeInputOptionData {
    unit: EnumUnitEnum;
    prefix: UnitPrefixT;
    thread_diameter: number;
    embedded_length: number;
    thread_pitch: number;
    numerator?: number;
    denominator?: number;
    thread_type?: EnumHardwareFastenerThreadTypeEnum;
}

// class ScrewSizeInputOptionData implements IScrewSizeInputOptionData {

// }
const constructOptionValue = ( optionData: ScrewSizeInputOptionData ): string => {
    console.log( { method: 'ScrewSizeInput', f: 'constructOptionValue', ...optionData } );
    if ( !optionData ) { return null; }
    // const abbrevUnit = getPrefix( optionData.unit );
    // TODO - REMOVE THIS , calculate
    let unitPrefix = 'M';
    return `${ unitPrefix }${ optionData.thread_diameter }${ optionData.thread_pitch ? `-${ optionData.thread_pitch }` : '' }x${ optionData.embedded_length }`;
};
function getDefaultPitch ( unit: EnumUnitEnum, diameter: number ): number {
    // TODO!
    return 32;
}
const parseScrewSizeInputOptionData: ( s: string ) => ScrewSizeInputOptionData = ( s ) => {
    if ( !s || typeof s !== "string" || s.length < 1 ) { return null; }
    let r = /(?<unitPrefix>[mM#]?)(?<diameter>[/0-9]+)-?(?<pitch>[0-9\.]*)x?(?<length>[/0-9]*)/.exec( s );
    if ( r && Object.keys( r ).includes( 'groups' ) ) {
        let prefix = r.groups.unitPrefix as UnitPrefixT;
        let unit = getUnitSystemFromUnitPrefix( prefix );
        let diameter = parseFloat( r.groups.diameter );
        // TODO: handle fractions here!
        if ( r.groups.diameter.includes( '/' ) ) {
            let f = /(?<numerator>[0-9]+).(?<denominator>[0-9]*)/.exec( r.groups.diameter );
            if ( f && Object.keys( f ).includes( 'groups' ) ) {
                let numer = parseFloat( f.groups.numerator );
                let denom = parseFloat( f.groups.denominator );
                if ( numer && denom ) {
                    diameter = numer / denom;
                }
            }

        }
        let length = parseFloat( r.groups.length );
        let pitch = parseFloat( r.groups.pitch ) ?? getDefaultPitch( unit, diameter );
        console.log( { method: 'parseScrewSizeInputOptionData', diameter, unit, length, pitch, s, r } );
        return {
            prefix,
            unit,
            thread_diameter: diameter,
            embedded_length: length,
            thread_pitch: pitch
        };
    }
    return null;
};
function getScrewSizeOptions ( v: ScrewSizeInputOptionData ): ScrewSizeInputOptionData[] {
    return [];
}
interface ScrewSizeInputProps extends Omit<InputProps, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    unit: EnumUnitKeys;
    value?: ScrewSizeInputOptionData;
    onChange?: ( event: ScrewSizeInputOptionData ) => void;
}
export const ScrewSizeInput: React.FC<ScrewSizeInputProps> = ( props ) => {

    console.log( { m: 'ScrewSizeInput', f: 'init', props_value: props.value, props } );
    const { onChange, value, unit, ...remainingProps } = props;
    // const [ value, setValue ] = useState<ScrewSizeInputOptionData>( props.value );
    const [ valueText, setValueText ] = useState<string>( 'none' );
    const [ optionDataArr, setOptionsDataArr ] = useState<ScrewSizeInputOptionData[]>( [] );

    const handleSearch = ( value: string ): void => {
        const parsedValue = parseScrewSizeInputOptionData( value );
        console.log( { method: 'ScrewSizeInput', f: 'handleSearch', value, parsedValue } );
        setValueText( value );
        setOptionsDataArr( getScrewSizeOptions( parsedValue ) );
        onChange( parsedValue );
    };

    const testInputOnChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        // setValueText( e );
        console.log( 'form testInputOnChange', { t: e.target }, { c: e.currentTarget } );
        // setValueText('reic wasad')
        handleSearch( e.target.value );
        // onChange( { pitch: 5, unit: EnumUnitEnum.metric, length: 6 , diameter: 3 } );

    };

    const options = optionDataArr.map( d => {
        const dStr = constructOptionValue( d );
        return { value: dStr };
        // return <Select.Option key={dStr} value={dStr}>{dStr}</Select.Option>;
    } );

    // let generatedValue = valueText || constructOptionValue( props.value );
    // let generatedValue = valueText || props.value.diameter;
    // let generatedValue = constructOptionValue( props.value ) || valueText;
    // console.log( 'ScrewSizeInput - making value', generatedValue );
    return (
        // TODO: add ability to input fractions
        <React.Fragment>
            <AutoComplete options={options}>
                <Input ref={props.forwardRef} onChange={testInputOnChange} />
            </AutoComplete>
        </React.Fragment>
    );
};