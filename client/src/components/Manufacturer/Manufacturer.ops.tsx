import * as Types from '../../lib/types/graphql';

import { BasicVendorFieldsFragment } from '../Vendor/Vendor.ops';
import { gql } from '@apollo/client';
import { BasicVendorFieldsFragmentDoc } from '../Vendor/Vendor.ops';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type BasicManufacturerFieldsFragment = (
  { __typename?: 'manufacturer' }
  & Pick<Types.Manufacturer, 'id' | 'name' | 'url' | 'vendor_id' | 'icon_url'>
);

export type ObjectManufacturerFieldsFragment = (
  { __typename?: 'manufacturer' }
  & { vendor?: Types.Maybe<(
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
  )>, manufacturer_items: Array<(
    { __typename?: 'manufacturer_item' }
    & BasicManufacturerItemFieldsFragment
  )> }
);

export type BasicManufacturerItemFieldsFragment = (
  { __typename?: 'manufacturer_item' }
  & Pick<Types.ManufacturerItem, 'id' | 'item_id' | 'manufacturer_id' | 'manufacturer_product_id' | 'manufacturer_product_name' | 'manufacturer_product_series' | 'product_url' | 'description'>
);

export type ObjectManufacturerItemFieldsFragment = (
  { __typename?: 'manufacturer_item' }
  & { manufacturer: (
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
  ) }
);

export type GetManufacturersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetManufacturersQuery = (
  { __typename?: 'query_root' }
  & { manufacturer: Array<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
  )> }
);

export type GetManufacturerQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetManufacturerQuery = (
  { __typename?: 'query_root' }
  & { manufacturer?: Types.Maybe<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
    & ObjectManufacturerFieldsFragment
  )> }
);

export type SearchManufacturersQueryVariables = Types.Exact<{
  search_string?: Types.Maybe<Types.Scalars['String']>;
}>;


export type SearchManufacturersQuery = (
  { __typename?: 'query_root' }
  & { manufacturer: Array<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
  )> }
);

export type InsertManufacturerMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  url?: Types.Maybe<Types.Scalars['String']>;
  vendor_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type InsertManufacturerMutation = (
  { __typename?: 'mutation_root' }
  & { manufacturer?: Types.Maybe<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
  )> }
);

export type InsertManufacturerWithVendorMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  url?: Types.Maybe<Types.Scalars['String']>;
  vendor?: Types.Maybe<Types.VendorObjRelInsertInput>;
}>;


export type InsertManufacturerWithVendorMutation = (
  { __typename?: 'mutation_root' }
  & { manufacturer?: Types.Maybe<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
  )> }
);

export type UpdateManufacturerUnchangedVendorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  name: Types.Scalars['String'];
  url?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UpdateManufacturerUnchangedVendorMutation = (
  { __typename?: 'mutation_root' }
  & { manufacturer?: Types.Maybe<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
    & ObjectManufacturerFieldsFragment
  )> }
);

export type DeleteManufacturerMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteManufacturerMutation = (
  { __typename?: 'mutation_root' }
  & { delete_manufacturer_by_pk?: Types.Maybe<(
    { __typename?: 'manufacturer' }
    & BasicManufacturerFieldsFragment
  )> }
);

export type InsertVendorWithExistingManufacturerMutationVariables = Types.Exact<{
  account_id?: Types.Maybe<Types.Scalars['String']>;
  name: Types.Scalars['String'];
  url: Types.Scalars['String'];
  manufacturer_id: Types.Scalars['Int'];
}>;


export type InsertVendorWithExistingManufacturerMutation = (
  { __typename?: 'mutation_root' }
  & { insert_vendor_one?: Types.Maybe<(
    { __typename?: 'vendor' }
    & Pick<Types.Vendor, 'id' | 'name' | 'url'>
    & { manufacturer: Array<(
      { __typename?: 'manufacturer' }
      & Pick<Types.Manufacturer, 'id' | 'name' | 'url'>
    )> }
  )> }
);

export type GetManufacturerItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetManufacturerItemsQuery = (
  { __typename?: 'query_root' }
  & { manufacturer_item: Array<(
    { __typename?: 'manufacturer_item' }
    & BasicManufacturerItemFieldsFragment
  )> }
);

export type SearchManufacturerItemsQueryVariables = Types.Exact<{
  query_text: Types.Scalars['String'];
  item_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type SearchManufacturerItemsQuery = (
  { __typename?: 'query_root' }
  & { item: Array<(
    { __typename?: 'item' }
    & Pick<Types.Item, 'id' | 'object'>
    & { name: Types.Item['object'] }
    & { manufacturerItems: Array<(
      { __typename?: 'manufacturer_item' }
      & { manufacturer: (
        { __typename?: 'manufacturer' }
        & Pick<Types.Manufacturer, 'id' | 'name' | 'url'>
      ) }
      & BasicManufacturerItemFieldsFragment
    )> }
  )> }
);

export type GetManufacturerItemQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetManufacturerItemQuery = (
  { __typename?: 'query_root' }
  & { manufacturer_item?: Types.Maybe<(
    { __typename?: 'manufacturer_item' }
    & BasicManufacturerItemFieldsFragment
    & ObjectManufacturerItemFieldsFragment
  )> }
);

export type UpdateManufacturerItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  item_id: Types.Scalars['Int'];
  manufacturer_id: Types.Scalars['Int'];
  manufacturer_product_id: Types.Scalars['String'];
  manufacturer_product_name?: Types.Maybe<Types.Scalars['String']>;
  manufacturer_product_series?: Types.Maybe<Types.Scalars['String']>;
  product_url?: Types.Maybe<Types.Scalars['String']>;
  description?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UpdateManufacturerItemMutation = (
  { __typename?: 'mutation_root' }
  & { manufacturer_item?: Types.Maybe<(
    { __typename?: 'manufacturer_item' }
    & BasicManufacturerItemFieldsFragment
  )> }
);

export type InsertManufacturerItemMutationVariables = Types.Exact<{
  item_id: Types.Scalars['Int'];
  manufacturer_id: Types.Scalars['Int'];
  manufacturer_product_id: Types.Scalars['String'];
  manufacturer_product_name?: Types.Maybe<Types.Scalars['String']>;
  manufacturer_product_series?: Types.Maybe<Types.Scalars['String']>;
  product_url?: Types.Maybe<Types.Scalars['String']>;
  description?: Types.Maybe<Types.Scalars['String']>;
}>;


export type InsertManufacturerItemMutation = (
  { __typename?: 'mutation_root' }
  & { manufacturer_item?: Types.Maybe<(
    { __typename?: 'manufacturer_item' }
    & BasicManufacturerItemFieldsFragment
  )> }
);

export type DeleteManufacturerItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteManufacturerItemMutation = (
  { __typename?: 'mutation_root' }
  & { manufacturer_item?: Types.Maybe<(
    { __typename?: 'manufacturer_item' }
    & BasicManufacturerItemFieldsFragment
  )> }
);

export const BasicManufacturerItemFieldsFragmentDoc = gql`
    fragment basicManufacturerItemFields on manufacturer_item {
  id
  item_id
  manufacturer_id
  manufacturer_product_id
  manufacturer_product_name
  manufacturer_product_series
  product_url
  description
}
    `;
export const ObjectManufacturerFieldsFragmentDoc = gql`
    fragment objectManufacturerFields on manufacturer {
  vendor {
    ...basicVendorFields
  }
  manufacturer_items {
    ...basicManufacturerItemFields
  }
}
    ${BasicVendorFieldsFragmentDoc}
${BasicManufacturerItemFieldsFragmentDoc}`;
export const BasicManufacturerFieldsFragmentDoc = gql`
    fragment basicManufacturerFields on manufacturer {
  id
  name
  url
  vendor_id
  icon_url
}
    `;
export const ObjectManufacturerItemFieldsFragmentDoc = gql`
    fragment objectManufacturerItemFields on manufacturer_item {
  manufacturer {
    ...basicManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}`;
export const GetManufacturersDocument = gql`
    query GetManufacturers {
  manufacturer(order_by: {id: asc}) {
    ...basicManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}`;

/**
 * __useGetManufacturersQuery__
 *
 * To run a query within a React component, call `useGetManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManufacturersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetManufacturersQuery(baseOptions?: Apollo.QueryHookOptions<GetManufacturersQuery, GetManufacturersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManufacturersQuery, GetManufacturersQueryVariables>(GetManufacturersDocument, options);
      }
export function useGetManufacturersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManufacturersQuery, GetManufacturersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManufacturersQuery, GetManufacturersQueryVariables>(GetManufacturersDocument, options);
        }
export type GetManufacturersQueryHookResult = ReturnType<typeof useGetManufacturersQuery>;
export type GetManufacturersLazyQueryHookResult = ReturnType<typeof useGetManufacturersLazyQuery>;
export type GetManufacturersQueryResult = Apollo.QueryResult<GetManufacturersQuery, GetManufacturersQueryVariables>;
export const GetManufacturerDocument = gql`
    query GetManufacturer($id: Int!) {
  manufacturer: manufacturer_by_pk(id: $id) {
    ...basicManufacturerFields
    ...objectManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}
${ObjectManufacturerFieldsFragmentDoc}`;

/**
 * __useGetManufacturerQuery__
 *
 * To run a query within a React component, call `useGetManufacturerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManufacturerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManufacturerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetManufacturerQuery(baseOptions: Apollo.QueryHookOptions<GetManufacturerQuery, GetManufacturerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManufacturerQuery, GetManufacturerQueryVariables>(GetManufacturerDocument, options);
      }
export function useGetManufacturerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManufacturerQuery, GetManufacturerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManufacturerQuery, GetManufacturerQueryVariables>(GetManufacturerDocument, options);
        }
export type GetManufacturerQueryHookResult = ReturnType<typeof useGetManufacturerQuery>;
export type GetManufacturerLazyQueryHookResult = ReturnType<typeof useGetManufacturerLazyQuery>;
export type GetManufacturerQueryResult = Apollo.QueryResult<GetManufacturerQuery, GetManufacturerQueryVariables>;
export const SearchManufacturersDocument = gql`
    query SearchManufacturers($search_string: String) {
  manufacturer(order_by: {id: asc}, where: {name: {_ilike: $search_string}}) {
    ...basicManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}`;

/**
 * __useSearchManufacturersQuery__
 *
 * To run a query within a React component, call `useSearchManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchManufacturersQuery({
 *   variables: {
 *      search_string: // value for 'search_string'
 *   },
 * });
 */
export function useSearchManufacturersQuery(baseOptions?: Apollo.QueryHookOptions<SearchManufacturersQuery, SearchManufacturersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchManufacturersQuery, SearchManufacturersQueryVariables>(SearchManufacturersDocument, options);
      }
export function useSearchManufacturersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchManufacturersQuery, SearchManufacturersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchManufacturersQuery, SearchManufacturersQueryVariables>(SearchManufacturersDocument, options);
        }
export type SearchManufacturersQueryHookResult = ReturnType<typeof useSearchManufacturersQuery>;
export type SearchManufacturersLazyQueryHookResult = ReturnType<typeof useSearchManufacturersLazyQuery>;
export type SearchManufacturersQueryResult = Apollo.QueryResult<SearchManufacturersQuery, SearchManufacturersQueryVariables>;
export const InsertManufacturerDocument = gql`
    mutation InsertManufacturer($name: String!, $url: String, $vendor_id: Int) {
  manufacturer: insert_manufacturer_one(
    object: {name: $name, url: $url, vendor_id: $vendor_id}
  ) {
    ...basicManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}`;
export type InsertManufacturerMutationFn = Apollo.MutationFunction<InsertManufacturerMutation, InsertManufacturerMutationVariables>;

/**
 * __useInsertManufacturerMutation__
 *
 * To run a mutation, you first call `useInsertManufacturerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManufacturerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManufacturerMutation, { data, loading, error }] = useInsertManufacturerMutation({
 *   variables: {
 *      name: // value for 'name'
 *      url: // value for 'url'
 *      vendor_id: // value for 'vendor_id'
 *   },
 * });
 */
export function useInsertManufacturerMutation(baseOptions?: Apollo.MutationHookOptions<InsertManufacturerMutation, InsertManufacturerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertManufacturerMutation, InsertManufacturerMutationVariables>(InsertManufacturerDocument, options);
      }
export type InsertManufacturerMutationHookResult = ReturnType<typeof useInsertManufacturerMutation>;
export type InsertManufacturerMutationResult = Apollo.MutationResult<InsertManufacturerMutation>;
export type InsertManufacturerMutationOptions = Apollo.BaseMutationOptions<InsertManufacturerMutation, InsertManufacturerMutationVariables>;
export const InsertManufacturerWithVendorDocument = gql`
    mutation InsertManufacturerWithVendor($name: String!, $url: String, $vendor: vendor_obj_rel_insert_input) {
  manufacturer: insert_manufacturer_one(
    object: {name: $name, url: $url, vendor: $vendor}
  ) {
    ...basicManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}`;
export type InsertManufacturerWithVendorMutationFn = Apollo.MutationFunction<InsertManufacturerWithVendorMutation, InsertManufacturerWithVendorMutationVariables>;

/**
 * __useInsertManufacturerWithVendorMutation__
 *
 * To run a mutation, you first call `useInsertManufacturerWithVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManufacturerWithVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManufacturerWithVendorMutation, { data, loading, error }] = useInsertManufacturerWithVendorMutation({
 *   variables: {
 *      name: // value for 'name'
 *      url: // value for 'url'
 *      vendor: // value for 'vendor'
 *   },
 * });
 */
export function useInsertManufacturerWithVendorMutation(baseOptions?: Apollo.MutationHookOptions<InsertManufacturerWithVendorMutation, InsertManufacturerWithVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertManufacturerWithVendorMutation, InsertManufacturerWithVendorMutationVariables>(InsertManufacturerWithVendorDocument, options);
      }
export type InsertManufacturerWithVendorMutationHookResult = ReturnType<typeof useInsertManufacturerWithVendorMutation>;
export type InsertManufacturerWithVendorMutationResult = Apollo.MutationResult<InsertManufacturerWithVendorMutation>;
export type InsertManufacturerWithVendorMutationOptions = Apollo.BaseMutationOptions<InsertManufacturerWithVendorMutation, InsertManufacturerWithVendorMutationVariables>;
export const UpdateManufacturerUnchangedVendorDocument = gql`
    mutation UpdateManufacturerUnchangedVendor($id: Int!, $name: String!, $url: String) {
  manufacturer: update_manufacturer_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, url: $url}
  ) {
    ...basicManufacturerFields
    ...objectManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}
${ObjectManufacturerFieldsFragmentDoc}`;
export type UpdateManufacturerUnchangedVendorMutationFn = Apollo.MutationFunction<UpdateManufacturerUnchangedVendorMutation, UpdateManufacturerUnchangedVendorMutationVariables>;

/**
 * __useUpdateManufacturerUnchangedVendorMutation__
 *
 * To run a mutation, you first call `useUpdateManufacturerUnchangedVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManufacturerUnchangedVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManufacturerUnchangedVendorMutation, { data, loading, error }] = useUpdateManufacturerUnchangedVendorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useUpdateManufacturerUnchangedVendorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManufacturerUnchangedVendorMutation, UpdateManufacturerUnchangedVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManufacturerUnchangedVendorMutation, UpdateManufacturerUnchangedVendorMutationVariables>(UpdateManufacturerUnchangedVendorDocument, options);
      }
export type UpdateManufacturerUnchangedVendorMutationHookResult = ReturnType<typeof useUpdateManufacturerUnchangedVendorMutation>;
export type UpdateManufacturerUnchangedVendorMutationResult = Apollo.MutationResult<UpdateManufacturerUnchangedVendorMutation>;
export type UpdateManufacturerUnchangedVendorMutationOptions = Apollo.BaseMutationOptions<UpdateManufacturerUnchangedVendorMutation, UpdateManufacturerUnchangedVendorMutationVariables>;
export const DeleteManufacturerDocument = gql`
    mutation DeleteManufacturer($id: Int!) {
  delete_manufacturer_by_pk(id: $id) {
    ...basicManufacturerFields
  }
}
    ${BasicManufacturerFieldsFragmentDoc}`;
export type DeleteManufacturerMutationFn = Apollo.MutationFunction<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>;

/**
 * __useDeleteManufacturerMutation__
 *
 * To run a mutation, you first call `useDeleteManufacturerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManufacturerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManufacturerMutation, { data, loading, error }] = useDeleteManufacturerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteManufacturerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>(DeleteManufacturerDocument, options);
      }
export type DeleteManufacturerMutationHookResult = ReturnType<typeof useDeleteManufacturerMutation>;
export type DeleteManufacturerMutationResult = Apollo.MutationResult<DeleteManufacturerMutation>;
export type DeleteManufacturerMutationOptions = Apollo.BaseMutationOptions<DeleteManufacturerMutation, DeleteManufacturerMutationVariables>;
export const InsertVendorWithExistingManufacturerDocument = gql`
    mutation InsertVendorWithExistingManufacturer($account_id: String, $name: String!, $url: String!, $manufacturer_id: Int!) {
  insert_vendor_one(
    object: {account_id: $account_id, name: $name, url: $url, manufacturer: {data: {name: $name, url: $url, id: $manufacturer_id}, on_conflict: {constraint: manufacturer_pkey, update_columns: vendor_id}}}
  ) {
    id
    name
    url
    manufacturer {
      id
      name
      url
    }
  }
}
    `;
export type InsertVendorWithExistingManufacturerMutationFn = Apollo.MutationFunction<InsertVendorWithExistingManufacturerMutation, InsertVendorWithExistingManufacturerMutationVariables>;

/**
 * __useInsertVendorWithExistingManufacturerMutation__
 *
 * To run a mutation, you first call `useInsertVendorWithExistingManufacturerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVendorWithExistingManufacturerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVendorWithExistingManufacturerMutation, { data, loading, error }] = useInsertVendorWithExistingManufacturerMutation({
 *   variables: {
 *      account_id: // value for 'account_id'
 *      name: // value for 'name'
 *      url: // value for 'url'
 *      manufacturer_id: // value for 'manufacturer_id'
 *   },
 * });
 */
export function useInsertVendorWithExistingManufacturerMutation(baseOptions?: Apollo.MutationHookOptions<InsertVendorWithExistingManufacturerMutation, InsertVendorWithExistingManufacturerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertVendorWithExistingManufacturerMutation, InsertVendorWithExistingManufacturerMutationVariables>(InsertVendorWithExistingManufacturerDocument, options);
      }
export type InsertVendorWithExistingManufacturerMutationHookResult = ReturnType<typeof useInsertVendorWithExistingManufacturerMutation>;
export type InsertVendorWithExistingManufacturerMutationResult = Apollo.MutationResult<InsertVendorWithExistingManufacturerMutation>;
export type InsertVendorWithExistingManufacturerMutationOptions = Apollo.BaseMutationOptions<InsertVendorWithExistingManufacturerMutation, InsertVendorWithExistingManufacturerMutationVariables>;
export const GetManufacturerItemsDocument = gql`
    query GetManufacturerItems {
  manufacturer_item {
    ...basicManufacturerItemFields
  }
}
    ${BasicManufacturerItemFieldsFragmentDoc}`;

/**
 * __useGetManufacturerItemsQuery__
 *
 * To run a query within a React component, call `useGetManufacturerItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManufacturerItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManufacturerItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetManufacturerItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetManufacturerItemsQuery, GetManufacturerItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManufacturerItemsQuery, GetManufacturerItemsQueryVariables>(GetManufacturerItemsDocument, options);
      }
export function useGetManufacturerItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManufacturerItemsQuery, GetManufacturerItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManufacturerItemsQuery, GetManufacturerItemsQueryVariables>(GetManufacturerItemsDocument, options);
        }
export type GetManufacturerItemsQueryHookResult = ReturnType<typeof useGetManufacturerItemsQuery>;
export type GetManufacturerItemsLazyQueryHookResult = ReturnType<typeof useGetManufacturerItemsLazyQuery>;
export type GetManufacturerItemsQueryResult = Apollo.QueryResult<GetManufacturerItemsQuery, GetManufacturerItemsQueryVariables>;
export const SearchManufacturerItemsDocument = gql`
    query SearchManufacturerItems($query_text: String!, $item_id: Int) {
  item: search_item(
    args: {query_text: $query_text}
    where: {manufacturerItems: {}, id: {_eq: $item_id}}
  ) {
    id
    name: object(path: "name")
    object
    manufacturerItems {
      ...basicManufacturerItemFields
      manufacturer {
        id
        name
        url
      }
    }
  }
}
    ${BasicManufacturerItemFieldsFragmentDoc}`;

/**
 * __useSearchManufacturerItemsQuery__
 *
 * To run a query within a React component, call `useSearchManufacturerItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchManufacturerItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchManufacturerItemsQuery({
 *   variables: {
 *      query_text: // value for 'query_text'
 *      item_id: // value for 'item_id'
 *   },
 * });
 */
export function useSearchManufacturerItemsQuery(baseOptions: Apollo.QueryHookOptions<SearchManufacturerItemsQuery, SearchManufacturerItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchManufacturerItemsQuery, SearchManufacturerItemsQueryVariables>(SearchManufacturerItemsDocument, options);
      }
export function useSearchManufacturerItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchManufacturerItemsQuery, SearchManufacturerItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchManufacturerItemsQuery, SearchManufacturerItemsQueryVariables>(SearchManufacturerItemsDocument, options);
        }
export type SearchManufacturerItemsQueryHookResult = ReturnType<typeof useSearchManufacturerItemsQuery>;
export type SearchManufacturerItemsLazyQueryHookResult = ReturnType<typeof useSearchManufacturerItemsLazyQuery>;
export type SearchManufacturerItemsQueryResult = Apollo.QueryResult<SearchManufacturerItemsQuery, SearchManufacturerItemsQueryVariables>;
export const GetManufacturerItemDocument = gql`
    query GetManufacturerItem($id: Int!) {
  manufacturer_item: manufacturer_item_by_pk(id: $id) {
    ...basicManufacturerItemFields
    ...objectManufacturerItemFields
  }
}
    ${BasicManufacturerItemFieldsFragmentDoc}
${ObjectManufacturerItemFieldsFragmentDoc}`;

/**
 * __useGetManufacturerItemQuery__
 *
 * To run a query within a React component, call `useGetManufacturerItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManufacturerItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManufacturerItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetManufacturerItemQuery(baseOptions: Apollo.QueryHookOptions<GetManufacturerItemQuery, GetManufacturerItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManufacturerItemQuery, GetManufacturerItemQueryVariables>(GetManufacturerItemDocument, options);
      }
export function useGetManufacturerItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManufacturerItemQuery, GetManufacturerItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManufacturerItemQuery, GetManufacturerItemQueryVariables>(GetManufacturerItemDocument, options);
        }
export type GetManufacturerItemQueryHookResult = ReturnType<typeof useGetManufacturerItemQuery>;
export type GetManufacturerItemLazyQueryHookResult = ReturnType<typeof useGetManufacturerItemLazyQuery>;
export type GetManufacturerItemQueryResult = Apollo.QueryResult<GetManufacturerItemQuery, GetManufacturerItemQueryVariables>;
export const UpdateManufacturerItemDocument = gql`
    mutation UpdateManufacturerItem($id: Int!, $item_id: Int!, $manufacturer_id: Int!, $manufacturer_product_id: String!, $manufacturer_product_name: String, $manufacturer_product_series: String, $product_url: String, $description: String) {
  manufacturer_item: update_manufacturer_item_by_pk(
    pk_columns: {id: $id}
    _set: {item_id: $item_id, manufacturer_id: $manufacturer_id, manufacturer_product_id: $manufacturer_product_id, manufacturer_product_name: $manufacturer_product_name, manufacturer_product_series: $manufacturer_product_series, product_url: $product_url, description: $description}
  ) {
    ...basicManufacturerItemFields
  }
}
    ${BasicManufacturerItemFieldsFragmentDoc}`;
export type UpdateManufacturerItemMutationFn = Apollo.MutationFunction<UpdateManufacturerItemMutation, UpdateManufacturerItemMutationVariables>;

/**
 * __useUpdateManufacturerItemMutation__
 *
 * To run a mutation, you first call `useUpdateManufacturerItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManufacturerItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManufacturerItemMutation, { data, loading, error }] = useUpdateManufacturerItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      item_id: // value for 'item_id'
 *      manufacturer_id: // value for 'manufacturer_id'
 *      manufacturer_product_id: // value for 'manufacturer_product_id'
 *      manufacturer_product_name: // value for 'manufacturer_product_name'
 *      manufacturer_product_series: // value for 'manufacturer_product_series'
 *      product_url: // value for 'product_url'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateManufacturerItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManufacturerItemMutation, UpdateManufacturerItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManufacturerItemMutation, UpdateManufacturerItemMutationVariables>(UpdateManufacturerItemDocument, options);
      }
export type UpdateManufacturerItemMutationHookResult = ReturnType<typeof useUpdateManufacturerItemMutation>;
export type UpdateManufacturerItemMutationResult = Apollo.MutationResult<UpdateManufacturerItemMutation>;
export type UpdateManufacturerItemMutationOptions = Apollo.BaseMutationOptions<UpdateManufacturerItemMutation, UpdateManufacturerItemMutationVariables>;
export const InsertManufacturerItemDocument = gql`
    mutation InsertManufacturerItem($item_id: Int!, $manufacturer_id: Int!, $manufacturer_product_id: String!, $manufacturer_product_name: String, $manufacturer_product_series: String, $product_url: String, $description: String) {
  manufacturer_item: insert_manufacturer_item_one(
    object: {item_id: $item_id, manufacturer_id: $manufacturer_id, manufacturer_product_id: $manufacturer_product_id, manufacturer_product_name: $manufacturer_product_name, manufacturer_product_series: $manufacturer_product_series, product_url: $product_url, description: $description}
  ) {
    ...basicManufacturerItemFields
  }
}
    ${BasicManufacturerItemFieldsFragmentDoc}`;
export type InsertManufacturerItemMutationFn = Apollo.MutationFunction<InsertManufacturerItemMutation, InsertManufacturerItemMutationVariables>;

/**
 * __useInsertManufacturerItemMutation__
 *
 * To run a mutation, you first call `useInsertManufacturerItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManufacturerItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManufacturerItemMutation, { data, loading, error }] = useInsertManufacturerItemMutation({
 *   variables: {
 *      item_id: // value for 'item_id'
 *      manufacturer_id: // value for 'manufacturer_id'
 *      manufacturer_product_id: // value for 'manufacturer_product_id'
 *      manufacturer_product_name: // value for 'manufacturer_product_name'
 *      manufacturer_product_series: // value for 'manufacturer_product_series'
 *      product_url: // value for 'product_url'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useInsertManufacturerItemMutation(baseOptions?: Apollo.MutationHookOptions<InsertManufacturerItemMutation, InsertManufacturerItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertManufacturerItemMutation, InsertManufacturerItemMutationVariables>(InsertManufacturerItemDocument, options);
      }
export type InsertManufacturerItemMutationHookResult = ReturnType<typeof useInsertManufacturerItemMutation>;
export type InsertManufacturerItemMutationResult = Apollo.MutationResult<InsertManufacturerItemMutation>;
export type InsertManufacturerItemMutationOptions = Apollo.BaseMutationOptions<InsertManufacturerItemMutation, InsertManufacturerItemMutationVariables>;
export const DeleteManufacturerItemDocument = gql`
    mutation DeleteManufacturerItem($id: Int!) {
  manufacturer_item: delete_manufacturer_item_by_pk(id: $id) {
    ...basicManufacturerItemFields
  }
}
    ${BasicManufacturerItemFieldsFragmentDoc}`;
export type DeleteManufacturerItemMutationFn = Apollo.MutationFunction<DeleteManufacturerItemMutation, DeleteManufacturerItemMutationVariables>;

/**
 * __useDeleteManufacturerItemMutation__
 *
 * To run a mutation, you first call `useDeleteManufacturerItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManufacturerItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManufacturerItemMutation, { data, loading, error }] = useDeleteManufacturerItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteManufacturerItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManufacturerItemMutation, DeleteManufacturerItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManufacturerItemMutation, DeleteManufacturerItemMutationVariables>(DeleteManufacturerItemDocument, options);
      }
export type DeleteManufacturerItemMutationHookResult = ReturnType<typeof useDeleteManufacturerItemMutation>;
export type DeleteManufacturerItemMutationResult = Apollo.MutationResult<DeleteManufacturerItemMutation>;
export type DeleteManufacturerItemMutationOptions = Apollo.BaseMutationOptions<DeleteManufacturerItemMutation, DeleteManufacturerItemMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
