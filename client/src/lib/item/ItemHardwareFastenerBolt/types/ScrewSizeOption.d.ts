/**
 * thread pitches for fine and coarse varieties
 **/
// export interface IScrewThreadDiameterDefinition {
//     /** ie. 6-40 */
//     fine: number;
//     /** ie. 6-32 */
//     coarse: number;
// }

import { EnumHardwareFastenerThreadType, EnumHardwareFastenerThreadTypeEnum } from "../../../types/graphql";

export type ThreadOptionT = Record<keyof typeof EnumHardwareFastenerThreadTypeEnum, number | null>;

/**
 * screw definitions for metric and imperial (uscs)
 **/
export interface IScrewSizeDefinition {
    metric: { [ diameter: number ]: Partial<ThreadOptionT>; };
    /** United States Customary System */
    uscs: { [ diameter: number ]: Partial<ThreadOptionT>; };
}

export type SchemaDefinition<T> = { $schema: string; } & T;

export type ScrewSizeSchema = SchemaDefinition<IScrewSizeDefinition>;