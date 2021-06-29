import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type BasicItemBundleFieldsFragment = (
  { __typename?: 'item_bundle' }
  & Pick<Types.ItemBundle, 'id' | 'name' | 'description'>
);

export type ObjectItemBundleFieldsFragment = (
  { __typename?: 'item_bundle' }
  & { items: Array<(
    { __typename?: 'item_bundle_member' }
    & { item: (
      { __typename?: 'item' }
      & Pick<Types.Item, 'id'>
    ) }
  )> }
);

export type BasicItemBundleMemberFieldsFragment = (
  { __typename?: 'item_bundle_member' }
  & Pick<Types.ItemBundleMember, 'item_bundle_id' | 'item_member_id' | 'quantity'>
);

export type GetItemBundlesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetItemBundlesQuery = (
  { __typename?: 'query_root' }
  & { item_bundle: Array<(
    { __typename?: 'item_bundle' }
    & BasicItemBundleFieldsFragment
    & ObjectItemBundleFieldsFragment
  )> }
);

export type GetItemBundleQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetItemBundleQuery = (
  { __typename?: 'query_root' }
  & { item_bundle?: Types.Maybe<(
    { __typename?: 'item_bundle' }
    & BasicItemBundleFieldsFragment
    & ObjectItemBundleFieldsFragment
  )> }
);

export type InsertItemBundleMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  description?: Types.Maybe<Types.Scalars['String']>;
  items?: Types.Maybe<Types.ItemBundleMemberArrRelInsertInput>;
}>;


export type InsertItemBundleMutation = (
  { __typename?: 'mutation_root' }
  & { item_bundle?: Types.Maybe<(
    { __typename?: 'item_bundle' }
    & Pick<Types.ItemBundle, 'id' | 'description' | 'created_at' | 'name' | 'updated_at'>
    & { items: Array<(
      { __typename?: 'item_bundle_member' }
      & Pick<Types.ItemBundleMember, 'item_member_id' | 'item_bundle_id'>
    )> }
  )> }
);

export type UpdateItemBundleMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  name?: Types.Maybe<Types.Scalars['String']>;
  description?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UpdateItemBundleMutation = (
  { __typename?: 'mutation_root' }
  & { item_bundle?: Types.Maybe<(
    { __typename?: 'item_bundle' }
    & BasicItemBundleFieldsFragment
    & ObjectItemBundleFieldsFragment
  )> }
);

export type DeleteItemBundleMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteItemBundleMutation = (
  { __typename?: 'mutation_root' }
  & { item_bundle?: Types.Maybe<(
    { __typename?: 'item_bundle' }
    & BasicItemBundleFieldsFragment
    & ObjectItemBundleFieldsFragment
  )> }
);

export type UpdateItemBundleMemberMutationVariables = Types.Exact<{
  item_bundle_id: Types.Scalars['Int'];
  item_member_id: Types.Scalars['Int'];
  quantity?: Types.Maybe<Types.Scalars['numeric']>;
}>;


export type UpdateItemBundleMemberMutation = (
  { __typename?: 'mutation_root' }
  & { item_bundle_member?: Types.Maybe<(
    { __typename?: 'item_bundle_member' }
    & BasicItemBundleMemberFieldsFragment
  )> }
);

export type DeleteItemBundleMemberMutationVariables = Types.Exact<{
  item_bundle_id: Types.Scalars['Int'];
  item_member_id: Types.Scalars['Int'];
}>;


export type DeleteItemBundleMemberMutation = (
  { __typename?: 'mutation_root' }
  & { item_bundle_member?: Types.Maybe<(
    { __typename?: 'item_bundle_member' }
    & BasicItemBundleMemberFieldsFragment
  )> }
);

export const BasicItemBundleFieldsFragmentDoc = gql`
    fragment basicItemBundleFields on item_bundle {
  id
  name
  description
}
    `;
export const ObjectItemBundleFieldsFragmentDoc = gql`
    fragment objectItemBundleFields on item_bundle {
  items {
    item {
      id
    }
  }
}
    `;
export const BasicItemBundleMemberFieldsFragmentDoc = gql`
    fragment basicItemBundleMemberFields on item_bundle_member {
  item_bundle_id
  item_member_id
  quantity
}
    `;
export const GetItemBundlesDocument = gql`
    query GetItemBundles {
  item_bundle {
    ...basicItemBundleFields
    ...objectItemBundleFields
  }
}
    ${BasicItemBundleFieldsFragmentDoc}
${ObjectItemBundleFieldsFragmentDoc}`;

/**
 * __useGetItemBundlesQuery__
 *
 * To run a query within a React component, call `useGetItemBundlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemBundlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemBundlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemBundlesQuery(baseOptions?: Apollo.QueryHookOptions<GetItemBundlesQuery, GetItemBundlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemBundlesQuery, GetItemBundlesQueryVariables>(GetItemBundlesDocument, options);
      }
export function useGetItemBundlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemBundlesQuery, GetItemBundlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemBundlesQuery, GetItemBundlesQueryVariables>(GetItemBundlesDocument, options);
        }
export type GetItemBundlesQueryHookResult = ReturnType<typeof useGetItemBundlesQuery>;
export type GetItemBundlesLazyQueryHookResult = ReturnType<typeof useGetItemBundlesLazyQuery>;
export type GetItemBundlesQueryResult = Apollo.QueryResult<GetItemBundlesQuery, GetItemBundlesQueryVariables>;
export const GetItemBundleDocument = gql`
    query GetItemBundle($id: Int!) {
  item_bundle: item_bundle_by_pk(id: $id) {
    ...basicItemBundleFields
    ...objectItemBundleFields
  }
}
    ${BasicItemBundleFieldsFragmentDoc}
${ObjectItemBundleFieldsFragmentDoc}`;

/**
 * __useGetItemBundleQuery__
 *
 * To run a query within a React component, call `useGetItemBundleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemBundleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemBundleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItemBundleQuery(baseOptions: Apollo.QueryHookOptions<GetItemBundleQuery, GetItemBundleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemBundleQuery, GetItemBundleQueryVariables>(GetItemBundleDocument, options);
      }
export function useGetItemBundleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemBundleQuery, GetItemBundleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemBundleQuery, GetItemBundleQueryVariables>(GetItemBundleDocument, options);
        }
export type GetItemBundleQueryHookResult = ReturnType<typeof useGetItemBundleQuery>;
export type GetItemBundleLazyQueryHookResult = ReturnType<typeof useGetItemBundleLazyQuery>;
export type GetItemBundleQueryResult = Apollo.QueryResult<GetItemBundleQuery, GetItemBundleQueryVariables>;
export const InsertItemBundleDocument = gql`
    mutation InsertItemBundle($name: String!, $description: String, $items: item_bundle_member_arr_rel_insert_input) {
  item_bundle: insert_item_bundle_one(
    object: {name: $name, description: $description, items: $items}
  ) {
    id
    description
    created_at
    name
    updated_at
    items {
      item_member_id
      item_bundle_id
    }
  }
}
    `;
export type InsertItemBundleMutationFn = Apollo.MutationFunction<InsertItemBundleMutation, InsertItemBundleMutationVariables>;

/**
 * __useInsertItemBundleMutation__
 *
 * To run a mutation, you first call `useInsertItemBundleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertItemBundleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertItemBundleMutation, { data, loading, error }] = useInsertItemBundleMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useInsertItemBundleMutation(baseOptions?: Apollo.MutationHookOptions<InsertItemBundleMutation, InsertItemBundleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertItemBundleMutation, InsertItemBundleMutationVariables>(InsertItemBundleDocument, options);
      }
export type InsertItemBundleMutationHookResult = ReturnType<typeof useInsertItemBundleMutation>;
export type InsertItemBundleMutationResult = Apollo.MutationResult<InsertItemBundleMutation>;
export type InsertItemBundleMutationOptions = Apollo.BaseMutationOptions<InsertItemBundleMutation, InsertItemBundleMutationVariables>;
export const UpdateItemBundleDocument = gql`
    mutation UpdateItemBundle($id: Int!, $name: String, $description: String) {
  item_bundle: update_item_bundle_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, description: $description}
  ) {
    ...basicItemBundleFields
    ...objectItemBundleFields
  }
}
    ${BasicItemBundleFieldsFragmentDoc}
${ObjectItemBundleFieldsFragmentDoc}`;
export type UpdateItemBundleMutationFn = Apollo.MutationFunction<UpdateItemBundleMutation, UpdateItemBundleMutationVariables>;

/**
 * __useUpdateItemBundleMutation__
 *
 * To run a mutation, you first call `useUpdateItemBundleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemBundleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemBundleMutation, { data, loading, error }] = useUpdateItemBundleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateItemBundleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemBundleMutation, UpdateItemBundleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemBundleMutation, UpdateItemBundleMutationVariables>(UpdateItemBundleDocument, options);
      }
export type UpdateItemBundleMutationHookResult = ReturnType<typeof useUpdateItemBundleMutation>;
export type UpdateItemBundleMutationResult = Apollo.MutationResult<UpdateItemBundleMutation>;
export type UpdateItemBundleMutationOptions = Apollo.BaseMutationOptions<UpdateItemBundleMutation, UpdateItemBundleMutationVariables>;
export const DeleteItemBundleDocument = gql`
    mutation DeleteItemBundle($id: Int!) {
  item_bundle: delete_item_bundle_by_pk(id: $id) {
    ...basicItemBundleFields
    ...objectItemBundleFields
  }
}
    ${BasicItemBundleFieldsFragmentDoc}
${ObjectItemBundleFieldsFragmentDoc}`;
export type DeleteItemBundleMutationFn = Apollo.MutationFunction<DeleteItemBundleMutation, DeleteItemBundleMutationVariables>;

/**
 * __useDeleteItemBundleMutation__
 *
 * To run a mutation, you first call `useDeleteItemBundleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemBundleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemBundleMutation, { data, loading, error }] = useDeleteItemBundleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemBundleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemBundleMutation, DeleteItemBundleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemBundleMutation, DeleteItemBundleMutationVariables>(DeleteItemBundleDocument, options);
      }
export type DeleteItemBundleMutationHookResult = ReturnType<typeof useDeleteItemBundleMutation>;
export type DeleteItemBundleMutationResult = Apollo.MutationResult<DeleteItemBundleMutation>;
export type DeleteItemBundleMutationOptions = Apollo.BaseMutationOptions<DeleteItemBundleMutation, DeleteItemBundleMutationVariables>;
export const UpdateItemBundleMemberDocument = gql`
    mutation UpdateItemBundleMember($item_bundle_id: Int!, $item_member_id: Int!, $quantity: numeric) {
  item_bundle_member: update_item_bundle_member_by_pk(
    pk_columns: {item_bundle_id: $item_bundle_id, item_member_id: $item_member_id}
    _set: {quantity: $quantity}
  ) {
    ...basicItemBundleMemberFields
  }
}
    ${BasicItemBundleMemberFieldsFragmentDoc}`;
export type UpdateItemBundleMemberMutationFn = Apollo.MutationFunction<UpdateItemBundleMemberMutation, UpdateItemBundleMemberMutationVariables>;

/**
 * __useUpdateItemBundleMemberMutation__
 *
 * To run a mutation, you first call `useUpdateItemBundleMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemBundleMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemBundleMemberMutation, { data, loading, error }] = useUpdateItemBundleMemberMutation({
 *   variables: {
 *      item_bundle_id: // value for 'item_bundle_id'
 *      item_member_id: // value for 'item_member_id'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useUpdateItemBundleMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemBundleMemberMutation, UpdateItemBundleMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemBundleMemberMutation, UpdateItemBundleMemberMutationVariables>(UpdateItemBundleMemberDocument, options);
      }
export type UpdateItemBundleMemberMutationHookResult = ReturnType<typeof useUpdateItemBundleMemberMutation>;
export type UpdateItemBundleMemberMutationResult = Apollo.MutationResult<UpdateItemBundleMemberMutation>;
export type UpdateItemBundleMemberMutationOptions = Apollo.BaseMutationOptions<UpdateItemBundleMemberMutation, UpdateItemBundleMemberMutationVariables>;
export const DeleteItemBundleMemberDocument = gql`
    mutation DeleteItemBundleMember($item_bundle_id: Int!, $item_member_id: Int!) {
  item_bundle_member: delete_item_bundle_member_by_pk(
    item_bundle_id: $item_bundle_id
    item_member_id: $item_member_id
  ) {
    ...basicItemBundleMemberFields
  }
}
    ${BasicItemBundleMemberFieldsFragmentDoc}`;
export type DeleteItemBundleMemberMutationFn = Apollo.MutationFunction<DeleteItemBundleMemberMutation, DeleteItemBundleMemberMutationVariables>;

/**
 * __useDeleteItemBundleMemberMutation__
 *
 * To run a mutation, you first call `useDeleteItemBundleMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemBundleMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemBundleMemberMutation, { data, loading, error }] = useDeleteItemBundleMemberMutation({
 *   variables: {
 *      item_bundle_id: // value for 'item_bundle_id'
 *      item_member_id: // value for 'item_member_id'
 *   },
 * });
 */
export function useDeleteItemBundleMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemBundleMemberMutation, DeleteItemBundleMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemBundleMemberMutation, DeleteItemBundleMemberMutationVariables>(DeleteItemBundleMemberDocument, options);
      }
export type DeleteItemBundleMemberMutationHookResult = ReturnType<typeof useDeleteItemBundleMemberMutation>;
export type DeleteItemBundleMemberMutationResult = Apollo.MutationResult<DeleteItemBundleMemberMutation>;
export type DeleteItemBundleMemberMutationOptions = Apollo.BaseMutationOptions<DeleteItemBundleMemberMutation, DeleteItemBundleMemberMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
