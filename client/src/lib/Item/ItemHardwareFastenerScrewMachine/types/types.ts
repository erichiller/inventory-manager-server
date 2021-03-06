import { EnumUnitEnum } from "../../../types/graphql";

export interface regexParsedSizeStringI {
    groups: {
        'unitPrefix': 'm' | 'M' | '#';
        'diameter': string;
        'pitch': string;
        'length': string;
    };
}


export type UnitPrefixT = 'M' | '#' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';


export enum EnumItemHardwareFastenerSpecificationsEnum {
    ASME = "ASME",
    DIN = "DIN",
    ISO = "ISO",
    ASTM = 'ASTM',
    Mil_Spec = 'Mil.Spec.',
    Fed_Spec = 'Fed.Spec.',
    NAS = 'NAS',
    JIS = 'JIS'
}

