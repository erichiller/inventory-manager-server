import { EnumUnitEnum, EnumHardwareFastenerThreadTypeEnum } from "../../../types/graphql";
import { getUnitSystemFromUnitPrefix } from "./helpers";
import { UnitPrefixT, EnumUnitKeys } from "../types/types";
import { SelectProps } from "antd/lib/select";
import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { InputProps } from "antd/lib/input";

import { ThreadOptionT } from '../types/ScrewSizeOption';

import ScrewSizeConfig from '../config/ScrewSizeOptions.json';

console.log( { ScrewSizeConfig} );


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
    return `${ optionData.prefix }${ optionData.thread_diameter }${ optionData.thread_pitch ? `-${ optionData.thread_pitch }` : '' }x${ optionData.embedded_length }`;
};
function getDefaultPitch (
    prefix: UnitPrefixT,
    unit: EnumUnitEnum, 
    diameter: number, 
    thread_type: EnumHardwareFastenerThreadTypeEnum = EnumHardwareFastenerThreadTypeEnum.fine 
): number {
    return ScrewSizeConfig[unit][`${prefix}${diameter}`][thread_type];
}
function getThreadType (
    prefix: UnitPrefixT,
    unit: EnumUnitEnum,
    diameter: number, 
    pitch: number
): EnumHardwareFastenerThreadTypeEnum {
    for( let pitchOption in ScrewSizeConfig[ unit ][ `${ prefix }${ diameter }` ] ){
        if ( ScrewSizeConfig[ unit ][ `${ prefix }${ diameter }` ][pitchOption] === pitch){
            return pitchOption as EnumHardwareFastenerThreadTypeEnum;
        }
    }
}
const parseScrewSizeInputOptionData: ( s: string ) => ScrewSizeInputOptionData = ( s ) => {
    if ( !s || typeof s !== "string" || s.length < 1 ) { return null; }
    let r = /(?<unitPrefix>[mM#]?)(?<diameter>[/0-9]*)-?(?<pitch>[0-9\.]*)x?(?<length>[/0-9]*)/.exec( s );
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
        let pitch = parseFloat( r.groups.pitch ) ?? getDefaultPitch( prefix, unit, diameter );
        console.log( { method: 'parseScrewSizeInputOptionData', diameter, unit, length, pitch, s, r } );
        return {
            prefix,
            unit,
            thread_diameter: diameter,
            embedded_length: length,
            thread_pitch: pitch,
            thread_type: getThreadType( prefix, unit, diameter, pitch)
        };
    }
    return null;
};
function getScrewSizeOptions ( v: ScrewSizeInputOptionData ): ScrewSizeInputOptionData[] {
    if (v.unit){ 
        if ( v.thread_diameter ) { 
            if ( v.thread_pitch ){
                return [v]; // this is as specific as we can get
            }
            if ( v.thread_type ){
                return [{ ...v, thread_pitch: getDefaultPitch( v.prefix, v.unit, v.thread_diameter, v.thread_type ) }];
            }
            console.log( "TAG", {
                v,
                unit: v.unit,
                obj: ScrewSizeConfig[v.unit]
            } );
            console.log( {
                v,
                v_unit: Object.keys( v[ "unit" ] )
            } );
                // [ `${ v.prefix }${ v.thread_diameter }` ] )})
                // TODO: not `v` use `ScrewSizeConfig`
            return Object.keys( v[ v.unit ][ `${ v.prefix }${ v.thread_diameter }`] )
                .map( thread_pitch => { 
                    return {
                        ...v, 
                        thread_pitch: v[v.unit][v.thread_diameter][thread_pitch] 
                    } 
                });
        }
        // TODO: need to handle `prefix`
        return Object.keys( v[ v.unit ] ).map( thread_diameter => v[ v.unit ][ thread_diameter ].map( ( thread_pitch: ThreadOptionT ) => { 
            return { ...v, thread_diameter: thread_diameter, thread_pitch: v[ v.unit ][ thread_diameter ][ thread_pitch ] }; 
        } ) );
    }
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