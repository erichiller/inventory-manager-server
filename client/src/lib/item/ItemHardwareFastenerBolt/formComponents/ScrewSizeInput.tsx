import { EnumUnitEnum, EnumHardwareFastenerThreadTypeEnum } from "../../../types/graphql";
import { getUnitSystemFromUnitPrefix, getUnitPrefixAndDiameterFromOptionString, screwSizeRegex } from "./helpers";
import { UnitPrefixT, EnumUnitKeys } from "../types/types";
import { SelectProps } from "antd/lib/select";
import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { InputProps } from "antd/lib/input";

import ScrewSizeConfig from '../config/ScrewSizeOptions.json';
import { eliminateArrayDuplicates, transparentLog, toTitleCase, filterObjectKeysWithProperty, firstOfArrayOrNull, parseIntSafe, parseFloatSafeWithDefault } from "../../../UtilityFunctions";
import { PitchDefinitions, DiameterDefinitionBase } from "../types/ScrewSizeOption";

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

/**
 * Return false if any are invalid options
 * @param unit 
 * @param prefix 
 * @param diameter 
 */
const validateScrewSizeElements = ( unit: EnumUnitEnum, prefix: UnitPrefixT, diameter: number) => !( !unit || !prefix || !diameter || diameter === NaN );
function getDefaultPitch (
    prefix: UnitPrefixT,
    unit: EnumUnitEnum, 
    diameter: number, 
    thread_type: EnumHardwareFastenerThreadTypeEnum = EnumHardwareFastenerThreadTypeEnum.coarse 
): number {
    console.log( { f: "getDefaultPitch", unit: unit, prefix: prefix, diameter: diameter, compound_diameter: `${ prefix }${ diameter }` } );
    if ( !validateScrewSizeElements(unit, prefix, diameter )){ return null;}

    // return ScrewSizeConfig[ unit ][ `${ prefix }${ diameter }` ].;
    // return ScrewSizeConfig[ 'iso']["M1.8"].pitch["0.2"].label;
    return transparentLog(
        {f: "getDefaultPitch"},
            parseIntSafe(firstOfArrayOrNull(
        filterObjectKeysWithProperty( getPitchDefinitions(unit, prefix, diameter), 'label' ) 
    ) )
    );
}
function getPitchDefinitions(unit: EnumUnitEnum, prefix: UnitPrefixT, diameter: number): PitchDefinitions {
    if ( !validateScrewSizeElements( unit, prefix, diameter ) ) { return null; }
    return ScrewSizeConfig[ unit ][ `${ prefix }${ diameter }` ].pitch as PitchDefinitions;
}
function getThreadType (
    prefix: UnitPrefixT,
    unit: EnumUnitEnum,
    diameter: number, 
    pitch: number
): EnumHardwareFastenerThreadTypeEnum {
    console.log( { f: "getThreadType", unit: unit, prefix: prefix, diameter: diameter, compound_diameter: `${ prefix }${ diameter }`});
    let pitchDefs = getPitchDefinitions(unit, prefix, diameter);
    if ( ! pitchDefs ) { return EnumHardwareFastenerThreadTypeEnum.coarse; } // return default
    for( let pitchOption in ScrewSizeConfig[ unit ][ `${ prefix }${ diameter }` ].pitch ){
        if ( ScrewSizeConfig[ unit ][ `${ prefix }${ diameter }` ].pitch[pitchOption] === pitch){
            return pitchOption as EnumHardwareFastenerThreadTypeEnum;
        }
    }
}
const parseScrewSizeInputOptionData: ( s: string ) => ScrewSizeInputOptionData = ( s ) => {
    if ( !s || typeof s !== "string" || s.length < 1 ) { return null; }
    let r = screwSizeRegex.exec( s );
    if ( r && Object.keys( r ).includes( 'groups' ) ) {
        let prefix = r.groups.unitPrefix.toUpperCase() as UnitPrefixT;
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
        let pitch = parseFloatSafeWithDefault( r.groups.pitch , getDefaultPitch( prefix, unit, diameter ) );
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
    if (v && v.unit){ 
        if ( v.prefix ){ v.prefix = v.prefix.toUpperCase() as UnitPrefixT; } // toUpperCase for more certain matching
        ScrewSizeConfig[v.unit] = Object.fromEntries( Object.keys(ScrewSizeConfig[v.unit]).map( thread_diameter => [thread_diameter.toUpperCase(), ScrewSizeConfig[v.unit][thread_diameter]]) );
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
                obj: ScrewSizeConfig[v.unit],
                v_unit_keys: Object.keys( v[ "unit" ] )
            } );
                // [ `${ v.prefix }${ v.thread_diameter }` ] )})

            let matchingDiameters = Object.keys( ScrewSizeConfig[ v.unit ] ).filter( el => el.startsWith( `${ v.prefix }${ v.thread_diameter }` ) );
            console.log( { msg: 'return1-0', matchingDiameters});
            return transparentLog( { msg: 'return1' }, 
                matchingDiameters
                    .flatMap( thread_diameter_with_prefix => Object.keys(ScrewSizeConfig[ v.unit ][thread_diameter_with_prefix].pitch as PitchDefinitions)
                        .flatMap( thread_pitch => {
                            console.log( { v, thread_diameter_with_prefix, thread_pitch, pitches: ScrewSizeConfig[ v.unit ][ thread_diameter_with_prefix ].pitch } );
                            return {
                                ...v, 
                                thread_diameter: getUnitPrefixAndDiameterFromOptionString( thread_diameter_with_prefix ).thread_diameter,
                                thread_pitch: parseFloatSafeWithDefault( thread_pitch, undefined ),
                                thread_type: ScrewSizeConfig[ v.unit ][ thread_diameter_with_prefix ][ "pitch" ][ thread_pitch ].label ?? undefined,
                                embedded_length: null
                            } 
                        } )
                    )
            )
            ;
        }
        // let ss = Object.keys( ScrewSizeConfig[ v.unit ][ prefixed_thread_diameter ] as DiameterDefinitionBase<any> ) as Array < keyof DiameterDefinitionBase < any >>;
        return transparentLog({ msg: 'return2'}, 
        Object.keys( ScrewSizeConfig[ v.unit ] ).flatMap( prefixed_thread_diameter => {
            prefixed_thread_diameter = prefixed_thread_diameter.toUpperCase();
            return (
                (
                    Object.keys( ScrewSizeConfig[ v.unit ][ prefixed_thread_diameter ][ "pitch" ] ?? [] ) as Array<keyof PitchDefinitions>) ).map(
                ( thread_pitch ) => {
                            console.log( { prefixed_thread_diameter, thread_pitch, v } );
                    let { prefix, thread_diameter } = getUnitPrefixAndDiameterFromOptionString( prefixed_thread_diameter);
                    return {
                        ...v,
                        prefix: prefix,
                        thread_diameter: thread_diameter,
                        thread_pitch: parseFloatSafeWithDefault(thread_pitch, undefined),
                        thread_type: ScrewSizeConfig[ v.unit ][ prefixed_thread_diameter ][ "pitch" ][ thread_pitch ].label ?? undefined,
                        embedded_length: null
                    };
            } )
        } )
        )
        ;
    }
    return [];
}
const constructOptionValue = ( optionData: ScrewSizeInputOptionData ): string => {
    console.log( { method: 'ScrewSizeInput', f: 'constructOptionValue', ...optionData } );
    if ( !optionData ) { return null; }
    // const abbrevUnit = getPrefix( optionData.unit );
    return `${ optionData.prefix.toUpperCase() }${ optionData.thread_diameter ?? '' }` +
        `${ optionData.thread_pitch ? `-${ optionData.thread_pitch }` : '' }` +
        `${ optionData.embedded_length ? `x${ optionData.embedded_length }` : '' }`;
};




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
    const [ valueText, setValueText ] = useState<string>( 'none' ); // TODO: delete ?
    // const [ optionDataArr, setOptionsDataArr ] = useState<ScrewSizeInputOptionData[]>( [] );

    const [ options, setOptions ] = useState<{value: string; label?: string;}[]>( [] );

    const handleSearch = ( value: string ): void => {
        const parsedValue = parseScrewSizeInputOptionData( value );
        console.log( { method: 'ScrewSizeInput', f: 'handleSearch', value, parsedValue } );
        setValueText( value );
        // setOptionsDataArr( getScrewSizeOptions( parsedValue ) );
        setOptions( eliminateArrayDuplicates( getScrewSizeOptions( parsedValue ) ).map( d => {
            const dStr = constructOptionValue( d );
            return { value: dStr };
            // return <Select.Option key={dStr} value={dStr}>{dStr}</Select.Option>;
        } ) );
        onChange( parsedValue );
    };
    console.log( 'TAG', {options} );
    return (
        // TODO: add ability to input fractions
        <React.Fragment>
            <AutoComplete 
                options={options}
                onChange={( str, opt ) => handleSearch( str )}
                >
                <Input
                    ref={props.forwardRef} 
                    spellCheck={false} 
                    onChange={e => handleSearch(e.target.value) } 
                    />
            </AutoComplete>
        </React.Fragment>
    );
};