import { EnumUnitEnum } from "../../../types/graphql";
import { ScrewSizeInputOptionData } from "./ScrewSizeInput";
import { UnitPrefixT } from "../types/types";

export const screwSizeRegex = /(?<unitPrefix>[mM#]?)(?<diameter>[/0-9\.]*)-?(?<pitch>[0-9\.]*)x?(?<length>[/0-9\.]*)/;


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
export function getUnitPrefixFromUnitSystem ( unit: EnumUnitEnum ): UnitPrefixT | '' {
    console.log( { func: 'getUnitPrefixFromUnitSystem', unit } );
    switch ( unit ) {
        case EnumUnitEnum.metric:
            return 'M';
        default:
            return '';
    }
}

/**
 * Accept an option string and return the unit prefix and diameter
 * @param optionString string which would normally be fed into ScrewSizeInput Option. Of the form `<unitPrefix><diameter>-<pitch>-<length>`
 */
export function getUnitPrefixAndDiameterFromOptionString ( optionString: string ): Pick< ScrewSizeInputOptionData, 'prefix' | 'thread_diameter' | 'thread_diameter_label' | 'unit'> {
    let r = screwSizeRegex.exec( optionString );
    let prefix = r.groups.unitPrefix.toUpperCase() as UnitPrefixT;
    if ( r && Object.keys( r ).includes( 'groups' ) ) {
        return { 
            prefix: prefix,
            thread_diameter: parseFloat(r.groups.diameter),
            thread_diameter_label: `${prefix}${r.groups.diameter}`,
            unit: getUnitSystemFromUnitPrefix(prefix)
        };
    }
}