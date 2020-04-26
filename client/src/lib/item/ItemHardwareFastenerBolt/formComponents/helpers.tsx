import React, { useState, ChangeEvent } from "react";
import { Select, Input, AutoComplete } from "antd";
import { InputProps } from "antd/lib/input";
import { SelectProps } from 'antd/lib/select';


import { EnumUnitEnum } from "../../../types/graphql";
import { EnumUnitKeys, UnitPrefixT } from "../types/types";



export function getUnitFromUnitSystem ( sys: EnumUnitKeys | EnumUnitEnum ) {
    switch ( sys ) {
        case EnumUnitEnum.metric:
        case 'metric':
            return "mm";
        case EnumUnitEnum.usc:
        case 'usc':
            return "in.";
        // return "\"";
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

/*****************************************************************************/


