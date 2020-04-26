/**
 * thread pitches for fine and coarse varieties
 **/
export interface IScrewThreadDiameterDefinition {
    /** ie. 6-40 */
    fine: number;
    /** ie. 6-32 */
    coarse: number;
}

/**
 * screw definitions for metric and imperial (uscs)
 **/
export interface IScrewSizeDefinition {
    metric: { [ diameter: number]: IScrewThreadDiameterDefinition; };
    /** United States Customary System */
    uscs: { [ diameter: number ]: IScrewThreadDiameterDefinition; };
}

export type SchemaDefinition<T> = { $schema: string } & T;

export type ScrewSizeSchema = SchemaDefinition<IScrewSizeDefinition>;