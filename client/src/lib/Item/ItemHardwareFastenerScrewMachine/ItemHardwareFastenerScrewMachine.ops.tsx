import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type ItemHardwareFastenerScrewMachineFieldsFragment = (
  { __typename?: 'item_hardware_fastener_screw_machine' }
  & Pick<Types.ItemHardwareFastenerScrewMachine, 'id' | 'name' | 'description' | 'unit' | 'thread_length' | 'head_type' | 'drive_type' | 'drive_size' | 'head_diameter' | 'head_height' | 'thread_diameter_label' | 'finish' | 'material' | 'thread_direction' | 'countersunk_angle' | 'tensile_strength' | 'specifications_met' | 'thread_fit' | 'point_type' | 'hardness' | 'strength_class' | 'use_material'>
  & { diameter?: Types.Maybe<(
    { __typename?: 'property_item_hardware_fastener_screw_machine_diameter' }
    & ItemHardwareFastenerScrewMachineDiameterFieldsFragment
  )> }
);

export type ItemHardwareFastenerScrewMachineDiameterFieldsFragment = (
  { __typename?: 'property_item_hardware_fastener_screw_machine_diameter' }
  & Pick<Types.PropertyItemHardwareFastenerScrewMachineDiameter, 'diameter_label' | 'diameter_major' | 'fit' | 'pitch' | 'pitch_label' | 'standard' | 'thread_label' | 'unit'>
);

export type ItemHardwareFastenerScrewMachineQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ItemHardwareFastenerScrewMachineQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'item_hardware_fastener_screw_machine' }
    & ItemHardwareFastenerScrewMachineFieldsFragment
  )> }
);

export type InsertItemHardwareFastenerScrewMachineMutationVariables = Types.Exact<{
  countersunk_angle?: Types.Maybe<Types.Scalars['numeric']>;
  countersunk_height?: Types.Maybe<Types.Scalars['numeric']>;
  description?: Types.Maybe<Types.Scalars['String']>;
  drive_size?: Types.Maybe<Types.Scalars['String']>;
  default_fields?: Types.Maybe<Types.Scalars['jsonb']>;
  drive_type?: Types.Maybe<Types.EnumItemHardwareFastenerDriveEnum>;
  embedded_length?: Types.Maybe<Types.Scalars['numeric']>;
  finish?: Types.Maybe<Types.EnumItemHardwareFinishEnum>;
  hardness?: Types.Maybe<Types.EnumItemHardwareFastenerScrewHardnessEnum>;
  head_diameter?: Types.Maybe<Types.Scalars['numeric']>;
  head_height?: Types.Maybe<Types.Scalars['numeric']>;
  head_type?: Types.Maybe<Types.EnumItemHardwareFastenerScrewHeadEnum>;
  material?: Types.Maybe<Types.EnumItemHardwareFastenerMaterialEnum>;
  name?: Types.Maybe<Types.Scalars['String']>;
  point_type?: Types.Maybe<Types.EnumItemHardwareFastenerScrewMachinePointEnum>;
  specifications_met?: Types.Maybe<Types.Scalars['jsonb']>;
  strength_class?: Types.Maybe<Types.EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  tensile_strength?: Types.Maybe<Types.Scalars['numeric']>;
  thread_diameter_label?: Types.Maybe<Types.Scalars['String']>;
  thread_direction?: Types.Maybe<Types.EnumItemHandednessEnum>;
  thread_fit?: Types.Maybe<Types.EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  thread_length?: Types.Maybe<Types.Scalars['numeric']>;
  thread_pitch?: Types.Maybe<Types.Scalars['numeric']>;
  thread_standard?: Types.Maybe<Types.EnumItemHardwareFastenerThreadStandardEnum>;
  unit?: Types.Maybe<Types.EnumUnitEnum>;
  use_material?: Types.Maybe<Types.EnumItemHardwareUseMaterialEnum>;
}>;


export type InsertItemHardwareFastenerScrewMachineMutation = (
  { __typename?: 'mutation_root' }
  & { insert_item_hardware_fastener_screw_machine_one?: Types.Maybe<(
    { __typename?: 'item_hardware_fastener_screw_machine' }
    & ItemHardwareFastenerScrewMachineFieldsFragment
  )> }
);

export type GetEnumItemHardwareFastenerThreadStandardQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetEnumItemHardwareFastenerThreadStandardQuery = (
  { __typename?: 'query_root' }
  & { enum_item_hardware_fastener_thread_standard: Array<(
    { __typename?: 'enum_item_hardware_fastener_thread_standard' }
    & Pick<Types.EnumItemHardwareFastenerThreadStandard, 'id' | 'description'>
  )> }
);

export type UpdateItemHardwareFastenerScrewMachineMutationVariables = Types.Exact<{
  countersunk_angle?: Types.Maybe<Types.Scalars['numeric']>;
  countersunk_height?: Types.Maybe<Types.Scalars['numeric']>;
  description?: Types.Maybe<Types.Scalars['String']>;
  drive_size?: Types.Maybe<Types.Scalars['String']>;
  default_fields?: Types.Maybe<Types.Scalars['jsonb']>;
  drive_type?: Types.Maybe<Types.EnumItemHardwareFastenerDriveEnum>;
  embedded_length?: Types.Maybe<Types.Scalars['numeric']>;
  finish?: Types.Maybe<Types.EnumItemHardwareFinishEnum>;
  hardness?: Types.Maybe<Types.EnumItemHardwareFastenerScrewHardnessEnum>;
  head_diameter?: Types.Maybe<Types.Scalars['numeric']>;
  head_height?: Types.Maybe<Types.Scalars['numeric']>;
  head_type?: Types.Maybe<Types.EnumItemHardwareFastenerScrewHeadEnum>;
  id: Types.Scalars['Int'];
  material?: Types.Maybe<Types.EnumItemHardwareFastenerMaterialEnum>;
  name?: Types.Maybe<Types.Scalars['String']>;
  point_type?: Types.Maybe<Types.EnumItemHardwareFastenerScrewMachinePointEnum>;
  specifications_met?: Types.Maybe<Types.Scalars['jsonb']>;
  strength_class?: Types.Maybe<Types.EnumItemHardwareFastenerScrewMachineStrengthEnum>;
  tensile_strength?: Types.Maybe<Types.Scalars['numeric']>;
  thread_diameter_label?: Types.Maybe<Types.Scalars['String']>;
  thread_direction?: Types.Maybe<Types.EnumItemHandednessEnum>;
  thread_fit?: Types.Maybe<Types.EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
  thread_length?: Types.Maybe<Types.Scalars['numeric']>;
  thread_pitch?: Types.Maybe<Types.Scalars['numeric']>;
  thread_standard?: Types.Maybe<Types.EnumItemHardwareFastenerThreadStandardEnum>;
  unit?: Types.Maybe<Types.EnumUnitEnum>;
  use_material?: Types.Maybe<Types.EnumItemHardwareUseMaterialEnum>;
}>;


export type UpdateItemHardwareFastenerScrewMachineMutation = (
  { __typename?: 'mutation_root' }
  & { update_item_hardware_fastener_screw_machine_by_pk?: Types.Maybe<(
    { __typename?: 'item_hardware_fastener_screw_machine' }
    & ItemHardwareFastenerScrewMachineFieldsFragment
  )> }
);

export const ItemHardwareFastenerScrewMachineDiameterFieldsFragmentDoc = gql`
    fragment ItemHardwareFastenerScrewMachineDiameterFields on property_item_hardware_fastener_screw_machine_diameter {
  diameter_label
  diameter_major
  fit
  pitch
  pitch_label
  standard
  thread_label
  unit
}
    `;
export const ItemHardwareFastenerScrewMachineFieldsFragmentDoc = gql`
    fragment ItemHardwareFastenerScrewMachineFields on item_hardware_fastener_screw_machine {
  id
  name
  description
  unit
  thread_length
  head_type
  drive_type
  drive_size
  head_diameter
  head_height
  thread_diameter_label
  finish
  material
  thread_direction
  countersunk_angle
  tensile_strength
  specifications_met
  thread_fit
  point_type
  hardness
  strength_class
  use_material
  diameter {
    ...ItemHardwareFastenerScrewMachineDiameterFields
  }
}
    ${ItemHardwareFastenerScrewMachineDiameterFieldsFragmentDoc}`;
export const ItemHardwareFastenerScrewMachineDocument = gql`
    query item_hardware_fastener_screw_machine {
  items: item_hardware_fastener_screw_machine(order_by: {id: asc}) {
    ...ItemHardwareFastenerScrewMachineFields
  }
}
    ${ItemHardwareFastenerScrewMachineFieldsFragmentDoc}`;

/**
 * __useItemHardwareFastenerScrewMachineQuery__
 *
 * To run a query within a React component, call `useItemHardwareFastenerScrewMachineQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemHardwareFastenerScrewMachineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemHardwareFastenerScrewMachineQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemHardwareFastenerScrewMachineQuery(baseOptions?: Apollo.QueryHookOptions<ItemHardwareFastenerScrewMachineQuery, ItemHardwareFastenerScrewMachineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemHardwareFastenerScrewMachineQuery, ItemHardwareFastenerScrewMachineQueryVariables>(ItemHardwareFastenerScrewMachineDocument, options);
      }
export function useItemHardwareFastenerScrewMachineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemHardwareFastenerScrewMachineQuery, ItemHardwareFastenerScrewMachineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemHardwareFastenerScrewMachineQuery, ItemHardwareFastenerScrewMachineQueryVariables>(ItemHardwareFastenerScrewMachineDocument, options);
        }
export type ItemHardwareFastenerScrewMachineQueryHookResult = ReturnType<typeof useItemHardwareFastenerScrewMachineQuery>;
export type ItemHardwareFastenerScrewMachineLazyQueryHookResult = ReturnType<typeof useItemHardwareFastenerScrewMachineLazyQuery>;
export type ItemHardwareFastenerScrewMachineQueryResult = Apollo.QueryResult<ItemHardwareFastenerScrewMachineQuery, ItemHardwareFastenerScrewMachineQueryVariables>;
export const InsertItemHardwareFastenerScrewMachineDocument = gql`
    mutation InsertItemHardwareFastenerScrewMachine($countersunk_angle: numeric, $countersunk_height: numeric, $description: String, $drive_size: String, $default_fields: jsonb, $drive_type: enum_item_hardware_fastener_drive_enum, $embedded_length: numeric, $finish: enum_item_hardware_finish_enum, $hardness: enum_item_hardware_fastener_screw_hardness_enum, $head_diameter: numeric, $head_height: numeric, $head_type: enum_item_hardware_fastener_screw_head_enum, $material: enum_item_hardware_fastener_material_enum, $name: String, $point_type: enum_item_hardware_fastener_screw_machine_point_enum, $specifications_met: jsonb, $strength_class: enum_item_hardware_fastener_screw_machine_strength_enum, $tensile_strength: numeric, $thread_diameter_label: String, $thread_direction: enum_item_handedness_enum, $thread_fit: enum_item_hardware_fastener_screw_machine_thread_fit_enum, $thread_length: numeric, $thread_pitch: numeric, $thread_standard: enum_item_hardware_fastener_thread_standard_enum, $unit: enum_unit_enum, $use_material: enum_item_hardware_use_material_enum) {
  insert_item_hardware_fastener_screw_machine_one(
    object: {countersunk_angle: $countersunk_angle, countersunk_height: $countersunk_height, description: $description, drive_size: $drive_size, default_fields: $default_fields, drive_type: $drive_type, embedded_length: $embedded_length, finish: $finish, hardness: $hardness, head_diameter: $head_diameter, head_height: $head_height, head_type: $head_type, material: $material, name: $name, point_type: $point_type, specifications_met: $specifications_met, strength_class: $strength_class, tensile_strength: $tensile_strength, thread_diameter_label: $thread_diameter_label, thread_direction: $thread_direction, thread_fit: $thread_fit, thread_length: $thread_length, thread_pitch: $thread_pitch, thread_standard: $thread_standard, unit: $unit, use_material: $use_material}
  ) {
    ...ItemHardwareFastenerScrewMachineFields
  }
}
    ${ItemHardwareFastenerScrewMachineFieldsFragmentDoc}`;
export type InsertItemHardwareFastenerScrewMachineMutationFn = Apollo.MutationFunction<InsertItemHardwareFastenerScrewMachineMutation, InsertItemHardwareFastenerScrewMachineMutationVariables>;

/**
 * __useInsertItemHardwareFastenerScrewMachineMutation__
 *
 * To run a mutation, you first call `useInsertItemHardwareFastenerScrewMachineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertItemHardwareFastenerScrewMachineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertItemHardwareFastenerScrewMachineMutation, { data, loading, error }] = useInsertItemHardwareFastenerScrewMachineMutation({
 *   variables: {
 *      countersunk_angle: // value for 'countersunk_angle'
 *      countersunk_height: // value for 'countersunk_height'
 *      description: // value for 'description'
 *      drive_size: // value for 'drive_size'
 *      default_fields: // value for 'default_fields'
 *      drive_type: // value for 'drive_type'
 *      embedded_length: // value for 'embedded_length'
 *      finish: // value for 'finish'
 *      hardness: // value for 'hardness'
 *      head_diameter: // value for 'head_diameter'
 *      head_height: // value for 'head_height'
 *      head_type: // value for 'head_type'
 *      material: // value for 'material'
 *      name: // value for 'name'
 *      point_type: // value for 'point_type'
 *      specifications_met: // value for 'specifications_met'
 *      strength_class: // value for 'strength_class'
 *      tensile_strength: // value for 'tensile_strength'
 *      thread_diameter_label: // value for 'thread_diameter_label'
 *      thread_direction: // value for 'thread_direction'
 *      thread_fit: // value for 'thread_fit'
 *      thread_length: // value for 'thread_length'
 *      thread_pitch: // value for 'thread_pitch'
 *      thread_standard: // value for 'thread_standard'
 *      unit: // value for 'unit'
 *      use_material: // value for 'use_material'
 *   },
 * });
 */
export function useInsertItemHardwareFastenerScrewMachineMutation(baseOptions?: Apollo.MutationHookOptions<InsertItemHardwareFastenerScrewMachineMutation, InsertItemHardwareFastenerScrewMachineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertItemHardwareFastenerScrewMachineMutation, InsertItemHardwareFastenerScrewMachineMutationVariables>(InsertItemHardwareFastenerScrewMachineDocument, options);
      }
export type InsertItemHardwareFastenerScrewMachineMutationHookResult = ReturnType<typeof useInsertItemHardwareFastenerScrewMachineMutation>;
export type InsertItemHardwareFastenerScrewMachineMutationResult = Apollo.MutationResult<InsertItemHardwareFastenerScrewMachineMutation>;
export type InsertItemHardwareFastenerScrewMachineMutationOptions = Apollo.BaseMutationOptions<InsertItemHardwareFastenerScrewMachineMutation, InsertItemHardwareFastenerScrewMachineMutationVariables>;
export const GetEnumItemHardwareFastenerThreadStandardDocument = gql`
    query GetEnumItemHardwareFastenerThreadStandard {
  enum_item_hardware_fastener_thread_standard {
    id
    description
  }
}
    `;

/**
 * __useGetEnumItemHardwareFastenerThreadStandardQuery__
 *
 * To run a query within a React component, call `useGetEnumItemHardwareFastenerThreadStandardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnumItemHardwareFastenerThreadStandardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnumItemHardwareFastenerThreadStandardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEnumItemHardwareFastenerThreadStandardQuery(baseOptions?: Apollo.QueryHookOptions<GetEnumItemHardwareFastenerThreadStandardQuery, GetEnumItemHardwareFastenerThreadStandardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnumItemHardwareFastenerThreadStandardQuery, GetEnumItemHardwareFastenerThreadStandardQueryVariables>(GetEnumItemHardwareFastenerThreadStandardDocument, options);
      }
export function useGetEnumItemHardwareFastenerThreadStandardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnumItemHardwareFastenerThreadStandardQuery, GetEnumItemHardwareFastenerThreadStandardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnumItemHardwareFastenerThreadStandardQuery, GetEnumItemHardwareFastenerThreadStandardQueryVariables>(GetEnumItemHardwareFastenerThreadStandardDocument, options);
        }
export type GetEnumItemHardwareFastenerThreadStandardQueryHookResult = ReturnType<typeof useGetEnumItemHardwareFastenerThreadStandardQuery>;
export type GetEnumItemHardwareFastenerThreadStandardLazyQueryHookResult = ReturnType<typeof useGetEnumItemHardwareFastenerThreadStandardLazyQuery>;
export type GetEnumItemHardwareFastenerThreadStandardQueryResult = Apollo.QueryResult<GetEnumItemHardwareFastenerThreadStandardQuery, GetEnumItemHardwareFastenerThreadStandardQueryVariables>;
export const UpdateItemHardwareFastenerScrewMachineDocument = gql`
    mutation UpdateItemHardwareFastenerScrewMachine($countersunk_angle: numeric, $countersunk_height: numeric, $description: String, $drive_size: String, $default_fields: jsonb, $drive_type: enum_item_hardware_fastener_drive_enum, $embedded_length: numeric, $finish: enum_item_hardware_finish_enum, $hardness: enum_item_hardware_fastener_screw_hardness_enum, $head_diameter: numeric, $head_height: numeric, $head_type: enum_item_hardware_fastener_screw_head_enum, $id: Int!, $material: enum_item_hardware_fastener_material_enum, $name: String, $point_type: enum_item_hardware_fastener_screw_machine_point_enum, $specifications_met: jsonb, $strength_class: enum_item_hardware_fastener_screw_machine_strength_enum, $tensile_strength: numeric, $thread_diameter_label: String, $thread_direction: enum_item_handedness_enum, $thread_fit: enum_item_hardware_fastener_screw_machine_thread_fit_enum, $thread_length: numeric, $thread_pitch: numeric, $thread_standard: enum_item_hardware_fastener_thread_standard_enum, $unit: enum_unit_enum, $use_material: enum_item_hardware_use_material_enum) {
  update_item_hardware_fastener_screw_machine_by_pk(
    pk_columns: {id: $id}
    _set: {use_material: $use_material, unit: $unit, thread_standard: $thread_standard, thread_pitch: $thread_pitch, thread_length: $thread_length, thread_fit: $thread_fit, thread_direction: $thread_direction, thread_diameter_label: $thread_diameter_label, tensile_strength: $tensile_strength, strength_class: $strength_class, specifications_met: $specifications_met, point_type: $point_type, name: $name, material: $material, head_type: $head_type, head_height: $head_height, head_diameter: $head_diameter, hardness: $hardness, finish: $finish, embedded_length: $embedded_length, drive_type: $drive_type, description: $description, drive_size: $drive_size, default_fields: $default_fields, countersunk_height: $countersunk_height, countersunk_angle: $countersunk_angle}
  ) {
    ...ItemHardwareFastenerScrewMachineFields
  }
}
    ${ItemHardwareFastenerScrewMachineFieldsFragmentDoc}`;
export type UpdateItemHardwareFastenerScrewMachineMutationFn = Apollo.MutationFunction<UpdateItemHardwareFastenerScrewMachineMutation, UpdateItemHardwareFastenerScrewMachineMutationVariables>;

/**
 * __useUpdateItemHardwareFastenerScrewMachineMutation__
 *
 * To run a mutation, you first call `useUpdateItemHardwareFastenerScrewMachineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemHardwareFastenerScrewMachineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemHardwareFastenerScrewMachineMutation, { data, loading, error }] = useUpdateItemHardwareFastenerScrewMachineMutation({
 *   variables: {
 *      countersunk_angle: // value for 'countersunk_angle'
 *      countersunk_height: // value for 'countersunk_height'
 *      description: // value for 'description'
 *      drive_size: // value for 'drive_size'
 *      default_fields: // value for 'default_fields'
 *      drive_type: // value for 'drive_type'
 *      embedded_length: // value for 'embedded_length'
 *      finish: // value for 'finish'
 *      hardness: // value for 'hardness'
 *      head_diameter: // value for 'head_diameter'
 *      head_height: // value for 'head_height'
 *      head_type: // value for 'head_type'
 *      id: // value for 'id'
 *      material: // value for 'material'
 *      name: // value for 'name'
 *      point_type: // value for 'point_type'
 *      specifications_met: // value for 'specifications_met'
 *      strength_class: // value for 'strength_class'
 *      tensile_strength: // value for 'tensile_strength'
 *      thread_diameter_label: // value for 'thread_diameter_label'
 *      thread_direction: // value for 'thread_direction'
 *      thread_fit: // value for 'thread_fit'
 *      thread_length: // value for 'thread_length'
 *      thread_pitch: // value for 'thread_pitch'
 *      thread_standard: // value for 'thread_standard'
 *      unit: // value for 'unit'
 *      use_material: // value for 'use_material'
 *   },
 * });
 */
export function useUpdateItemHardwareFastenerScrewMachineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemHardwareFastenerScrewMachineMutation, UpdateItemHardwareFastenerScrewMachineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemHardwareFastenerScrewMachineMutation, UpdateItemHardwareFastenerScrewMachineMutationVariables>(UpdateItemHardwareFastenerScrewMachineDocument, options);
      }
export type UpdateItemHardwareFastenerScrewMachineMutationHookResult = ReturnType<typeof useUpdateItemHardwareFastenerScrewMachineMutation>;
export type UpdateItemHardwareFastenerScrewMachineMutationResult = Apollo.MutationResult<UpdateItemHardwareFastenerScrewMachineMutation>;
export type UpdateItemHardwareFastenerScrewMachineMutationOptions = Apollo.BaseMutationOptions<UpdateItemHardwareFastenerScrewMachineMutation, UpdateItemHardwareFastenerScrewMachineMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
