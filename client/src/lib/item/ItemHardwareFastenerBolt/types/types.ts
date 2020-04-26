import { EnumUnitEnum } from "../../../types/graphql";

export interface regexParsedSizeStringI {
    groups: {
        'unitPrefix': 'm' | 'M' | '#';
        'diameter': string;
        'pitch': string;
        'length': string;
    };
}


export type EnumUnitKeys = keyof typeof EnumUnitEnum;


export type UnitPrefixT = 'M' | 'm' | '#' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';


export enum EnumHardwareFastenerSpecificationsEnum {
    ASME = "ASME",
    DIN = "DIN",
    ISO = "ISO",
    ASTM = 'ASTM',
    Mil_Spec = 'Mil.Spec.',
    Fed_Spec = 'Fed.Spec.',
    NAS = 'NAS',
    JIS = 'JIS'
}

