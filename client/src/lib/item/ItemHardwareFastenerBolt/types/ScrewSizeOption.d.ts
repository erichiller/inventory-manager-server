/**
 * thread pitches for fine and coarse varieties
 **/
// export interface IScrewThreadDiameterDefinition {
//     /** ie. 6-40 */
//     fine: number;
//     /** ie. 6-32 */
//     coarse: number;
// }

import { EnumHardwareFastenerThreadLabelEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFastenerHeadEnum, EnumHardwareFastenerThreadStandardEnum } from "../../../types/graphql";

// export type ThreadOptionT = Record<keyof typeof EnumHardwareFastenerThreadTypeEnum, number | null>;

/**
 * @pattern ^[0-9.]+mm$
 */
export type MetricUnit = string;

/**
 * @pattern ^[0-9.]+in$
 */
type USCustomarySystemUnit = string;

export type DriveType<U> = Record<keyof typeof EnumHardwareFastenerDriveEnum, U>;


type HeadDefinition<U> = Record<keyof typeof EnumHardwareFastenerHeadEnum, {
    drive: Partial<DriveType<U>>;
}>;

/**
 * @propertyNames {"pattern": "^[0-9.]+$"}
 **/
type PitchDefinitions = { [ pitch: string ]: {
    label?: EnumHardwareFastenerThreadLabelEnum;
    tolerance?: any; // TODO
};};

interface DiameterDefinitionBase<U> {
    /** whether this diameter appears on the standardized/first choice list */
    common: boolean;
    pitch: PitchDefinitions;
    hardness?: any; // TODO
    head: Partial<HeadDefinition<U>>;
    standard: EnumHardwareFastenerThreadStandardEnum;
}

/**
 * screw definitions for metric and imperial (uscs)
 **/
export interface IScrewSizeDefinition {
    /**
     * ISO
     * @propertyNames {"pattern": "^M[0-9.]+$"}
     **/
    metric: { [ diameter: string ]: Partial<DiameterDefinitionBase<MetricUnit>>; };
    /** 
     * United States Customary System 
     * @propertyNames {"pattern": "^((#[0-9]{1,2})|([1-9]+(\\+[1-9]+)?(\\/[0-9]+)?))$"}
     **/
    usc: { [ diameter: string ]: Partial<DiameterDefinitionBase<USCustomarySystemUnit>>; };
}

export type SchemaDefinition<T> = { $schema: string; } & T;

export type ScrewSizeSchema = SchemaDefinition<IScrewSizeDefinition>;

// "m1.6": {
        //     pitch: {
        //         extra_sizes?: [ 0.x, 0.y ],
        //         "extra_fine": 0.2, // these are the "named" sizes
        //         "fine": 0.3,
        //         "coarse": 0.35
        //     }
        // },
// start actual
