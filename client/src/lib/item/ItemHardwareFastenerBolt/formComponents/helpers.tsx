import React, { useState, ChangeEvent } from "react";
import { Select, Input, AutoComplete } from "antd";
import { InputProps } from "antd/lib/input";
import { SelectProps } from 'antd/lib/select';


import { EnumUnitEnum } from "../../../types/graphql";
import { EnumUnitKeys, UnitPrefixT } from "../types/types";
import { ScrewSizeInputOptionData } from "./ScrewSizeInput";

export const screwSizeRegex = /(?<unitPrefix>[mM#]?)(?<diameter>[/0-9\.]*)-?(?<pitch>[0-9\.]*)x?(?<length>[/0-9\.]*)/;


/**
 * Accept Unit enum and return the string for representation of the unit system's dimensions
 * @param sys EnumUnit or its keys
 */
export function getUnitFromUnitSystem ( sys: EnumUnitKeys | EnumUnitEnum ) {
    switch ( sys ) {
        case EnumUnitEnum.metric:
        case 'metric':
            return "mm";
        case EnumUnitEnum.usc:
        case 'usc':
            return "in.";
        default:
            return '';
    }
}
/**
 * Convert Prefix of Threading description into Unit System
 * @param prefix can be `'M' | '#' | 'number` ; if typeof prefix is number this is also `EnumUnitEnum.usc` Such as 1/4-20
 */
export function getUnitSystemFromUnitPrefix ( prefix: UnitPrefixT ): EnumUnitEnum {
    prefix = !parseInt( prefix ) ? prefix : '#';
    console.log( { func: 'getUnitSystemFromUnitPrefix', prefix } );
    switch ( prefix ) {
        case 'm':
        case 'M':
            return EnumUnitEnum.metric;
        case '#':
            return EnumUnitEnum.usc;
    }
}

/**
 * Accept an option string and return the unit prefix and diameter
 * @param optionString string which would normally be fed into ScrewSizeInput Option. Of the form `<unitPrefix><diameter>-<pitch>-<length>`
 */
export function getUnitPrefixAndDiameterFromOptionString ( optionString: string ): Pick< ScrewSizeInputOptionData, 'prefix' | 'thread_diameter'> {
    let r = screwSizeRegex.exec( optionString );
    if ( r && Object.keys( r ).includes( 'groups' ) ) {
        return { 
            prefix: r.groups.unitPrefix as UnitPrefixT,
            thread_diameter: parseFloat(r.groups.diameter)
        }
    }
}

/*****************************************************************************/


