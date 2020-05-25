import React, { useState, ChangeEvent, ReactSVGElement, ReactHTMLElement, ReactText, ReactElement } from "react";
import { Select, Input, AutoComplete, Tooltip } from "antd";
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
        case 'M':
            return EnumUnitEnum.metric;
        case '#':
            return EnumUnitEnum.usc;
    }
}
/**
 * Convert Unit to its prefixed representation
 */
export function getUnitPrefixFromUnitSystem ( unit: EnumUnitEnum ): UnitPrefixT {
    console.log( { func: 'getUnitPrefixFromUnitSystem', unit } );
    switch ( unit ) {
        case EnumUnitEnum.metric:
            return 'M';
        default:
            return null;
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
            prefix: r.groups.unitPrefix.toUpperCase() as UnitPrefixT,
            thread_diameter: parseFloat(r.groups.diameter)
        };
    }
}

/*****************************************************************************/

interface FormIconTooltipProps {
    // icon: ReactSVGElement;
    icon: JSX.Element | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text: ReactText | ReactElement;
    label: ReactText | ReactElement;
    additionalClassNames?: [ string ] | string;
}

export const FormIconTooltip: React.FC<FormIconTooltipProps> = ( { icon, text, label} ) => {
    return <Tooltip title={
        <div className="formTooltip">
        {icon}
        <span>{text}</span>
    </div>}>
        <span>
            {label}
        </span>
    </Tooltip>;
};