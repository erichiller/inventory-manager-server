import * as Types from '../../lib/types/graphql';

import { BasicOrderFieldsFragment, BasicOrderItemFieldsFragment } from '../Order/Order.ops';
import { gql } from '@apollo/client';
import { BasicOrderFieldsFragmentDoc, BasicOrderItemFieldsFragmentDoc } from '../Order/Order.ops';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type BasicVendorFieldsFragment = (
  { __typename?: 'vendor' }
  & Pick<Types.Vendor, 'id' | 'name' | 'url' | 'account_id' | 'item_url_template'>
);

export type ObjectVendorFieldsFragment = (
  { __typename?: 'vendor' }
  & { manufacturer: Array<(
    { __typename?: 'manufacturer' }
    & Pick<Types.Manufacturer, 'id'>
  )>, orders: Array<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
  )>, vendor_items: Array<(
    { __typename?: 'vendor_item' }
    & Pick<Types.VendorItem, 'id' | 'item_id' | 'vendor_sku'>
  )> }
);

export type BasicVendorItemFieldsFragment = (
  { __typename?: 'vendor_item' }
  & Pick<Types.VendorItem, 'id' | 'description' | 'item_id' | 'vendor_id' | 'vendor_sku'>
);

export type GetVendorsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetVendorsQuery = (
  { __typename?: 'query_root' }
  & { vendor: Array<(
    { __typename?: 'vendor' }
    & { manufacturer: Array<(
      { __typename?: 'manufacturer' }
      & Pick<Types.Manufacturer, 'id'>
    )> }
    & BasicVendorFieldsFragment
  )> }
);

export type GetVendorQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetVendorQuery = (
  { __typename?: 'query_root' }
  & { vendor?: Types.Maybe<(
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
    & ObjectVendorFieldsFragment
  )> }
);

export type SearchVendorsQueryVariables = Types.Exact<{
  search_string?: Types.Maybe<Types.Scalars['String']>;
}>;


export type SearchVendorsQuery = (
  { __typename?: 'query_root' }
  & { vendor: Array<(
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
  )> }
);

export type InsertVendorMutationVariables = Types.Exact<{
  account_id?: Types.Maybe<Types.Scalars['String']>;
  name: Types.Scalars['String'];
  manufacturer?: Types.Maybe<Types.ManufacturerArrRelInsertInput>;
  url?: Types.Maybe<Types.Scalars['String']>;
  item_url_template?: Types.Maybe<Types.Scalars['String']>;
}>;


export type InsertVendorMutation = (
  { __typename?: 'mutation_root' }
  & { vendor?: Types.Maybe<(
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
  )> }
);

export type UpdateVendorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  account_id?: Types.Maybe<Types.Scalars['String']>;
  name: Types.Scalars['String'];
  url?: Types.Maybe<Types.Scalars['String']>;
  item_url_template?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UpdateVendorMutation = (
  { __typename?: 'mutation_root' }
  & { vendor?: Types.Maybe<(
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
    & ObjectVendorFieldsFragment
  )> }
);

export type DeleteVendorMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteVendorMutation = (
  { __typename?: 'mutation_root' }
  & { delete_vendor_by_pk?: Types.Maybe<(
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
  )> }
);

export type GetVendorItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetVendorItemsQuery = (
  { __typename?: 'query_root' }
  & { vendor_item: Array<(
    { __typename?: 'vendor_item' }
    & BasicVendorItemFieldsFragment
  )> }
);

export type SearchVendorItemsQueryVariables = Types.Exact<{
  query_text: Types.Scalars['String'];
  item_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type SearchVendorItemsQuery = (
  { __typename?: 'query_root' }
  & { item: Array<(
    { __typename?: 'item' }
    & Pick<Types.Item, 'id' | 'object'>
    & { name: Types.Item['object'] }
    & { vendorItems: Array<(
      { __typename?: 'vendor_item' }
      & Pick<Types.VendorItem, 'id' | 'vendor_sku'>
      & { vendor: (
        { __typename?: 'vendor' }
        & Pick<Types.Vendor, 'id' | 'name' | 'url'>
      ) }
    )> }
  )> }
);

export type GetVendorItemQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetVendorItemQuery = (
  { __typename?: 'query_root' }
  & { vendor_item?: Types.Maybe<(
    { __typename?: 'vendor_item' }
    & BasicVendorItemFieldsFragment
  )> }
);

export type UpdateVendorItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  description?: Types.Maybe<Types.Scalars['String']>;
  item_id: Types.Scalars['Int'];
  vendor_id: Types.Scalars['Int'];
  vendor_sku?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UpdateVendorItemMutation = (
  { __typename?: 'mutation_root' }
  & { vendor_item?: Types.Maybe<(
    { __typename?: 'vendor_item' }
    & BasicVendorItemFieldsFragment
  )> }
);

export type InsertVendorItemMutationVariables = Types.Exact<{
  description?: Types.Maybe<Types.Scalars['String']>;
  item_id: Types.Scalars['Int'];
  vendor_id: Types.Scalars['Int'];
  vendor_sku?: Types.Maybe<Types.Scalars['String']>;
}>;


export type InsertVendorItemMutation = (
  { __typename?: 'mutation_root' }
  & { vendor_item?: Types.Maybe<(
    { __typename?: 'vendor_item' }
    & BasicVendorItemFieldsFragment
  )> }
);

export type DeleteVendorItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteVendorItemMutation = (
  { __typename?: 'mutation_root' }
  & { vendor_item?: Types.Maybe<(
    { __typename?: 'vendor_item' }
    & BasicVendorItemFieldsFragment
  )> }
);

export const BasicVendorFieldsFragmentDoc = gql`
    fragment basicVendorFields on vendor {
  id
  name
  url
  account_id
  item_url_template
}
    `;
export const ObjectVendorFieldsFragmentDoc = gql`
    fragment objectVendorFields on vendor {
  manufacturer {
    id
  }
  orders {
    ...basicOrderFields
  }
  vendor_items {
    id
    item_id
    vendor_sku
  }
}
    ${BasicOrderFieldsFragmentDoc}`;
export const BasicVendorItemFieldsFragmentDoc = gql`
    fragment basicVendorItemFields on vendor_item {
  id
  description
  item_id
  vendor_id
  vendor_sku
}
    `;
export const GetVendorsDocument = gql`
    query GetVendors {
  vendor(order_by: {id: asc}) {
    ...basicVendorFields
    manufacturer {
      id
    }
  }
}
    ${BasicVendorFieldsFragmentDoc}`;

/**
 * __useGetVendorsQuery__
 *
 * To run a query within a React component, call `useGetVendorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVendorsQuery(baseOptions?: Apollo.QueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, options);
      }
export function useGetVendorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorsQuery, GetVendorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorsQuery, GetVendorsQueryVariables>(GetVendorsDocument, options);
        }
export type GetVendorsQueryHookResult = ReturnType<typeof useGetVendorsQuery>;
export type GetVendorsLazyQueryHookResult = ReturnType<typeof useGetVendorsLazyQuery>;
export type GetVendorsQueryResult = Apollo.QueryResult<GetVendorsQuery, GetVendorsQueryVariables>;
export const GetVendorDocument = gql`
    query GetVendor($id: Int!) {
  vendor: vendor_by_pk(id: $id) {
    ...basicVendorFields
    ...objectVendorFields
  }
}
    ${BasicVendorFieldsFragmentDoc}
${ObjectVendorFieldsFragmentDoc}`;

/**
 * __useGetVendorQuery__
 *
 * To run a query within a React component, call `useGetVendorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVendorQuery(baseOptions: Apollo.QueryHookOptions<GetVendorQuery, GetVendorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorQuery, GetVendorQueryVariables>(GetVendorDocument, options);
      }
export function useGetVendorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorQuery, GetVendorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorQuery, GetVendorQueryVariables>(GetVendorDocument, options);
        }
export type GetVendorQueryHookResult = ReturnType<typeof useGetVendorQuery>;
export type GetVendorLazyQueryHookResult = ReturnType<typeof useGetVendorLazyQuery>;
export type GetVendorQueryResult = Apollo.QueryResult<GetVendorQuery, GetVendorQueryVariables>;
export const SearchVendorsDocument = gql`
    query SearchVendors($search_string: String) {
  vendor(order_by: {id: asc}, where: {name: {_ilike: $search_string}}) {
    ...basicVendorFields
  }
}
    ${BasicVendorFieldsFragmentDoc}`;

/**
 * __useSearchVendorsQuery__
 *
 * To run a query within a React component, call `useSearchVendorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVendorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVendorsQuery({
 *   variables: {
 *      search_string: // value for 'search_string'
 *   },
 * });
 */
export function useSearchVendorsQuery(baseOptions?: Apollo.QueryHookOptions<SearchVendorsQuery, SearchVendorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVendorsQuery, SearchVendorsQueryVariables>(SearchVendorsDocument, options);
      }
export function useSearchVendorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVendorsQuery, SearchVendorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVendorsQuery, SearchVendorsQueryVariables>(SearchVendorsDocument, options);
        }
export type SearchVendorsQueryHookResult = ReturnType<typeof useSearchVendorsQuery>;
export type SearchVendorsLazyQueryHookResult = ReturnType<typeof useSearchVendorsLazyQuery>;
export type SearchVendorsQueryResult = Apollo.QueryResult<SearchVendorsQuery, SearchVendorsQueryVariables>;
export const InsertVendorDocument = gql`
    mutation InsertVendor($account_id: String, $name: String!, $manufacturer: manufacturer_arr_rel_insert_input, $url: String, $item_url_template: String) {
  vendor: insert_vendor_one(
    object: {account_id: $account_id, name: $name, manufacturer: $manufacturer, url: $url, item_url_template: $item_url_template}
  ) {
    ...basicVendorFields
  }
}
    ${BasicVendorFieldsFragmentDoc}`;
export type InsertVendorMutationFn = Apollo.MutationFunction<InsertVendorMutation, InsertVendorMutationVariables>;

/**
 * __useInsertVendorMutation__
 *
 * To run a mutation, you first call `useInsertVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVendorMutation, { data, loading, error }] = useInsertVendorMutation({
 *   variables: {
 *      account_id: // value for 'account_id'
 *      name: // value for 'name'
 *      manufacturer: // value for 'manufacturer'
 *      url: // value for 'url'
 *      item_url_template: // value for 'item_url_template'
 *   },
 * });
 */
export function useInsertVendorMutation(baseOptions?: Apollo.MutationHookOptions<InsertVendorMutation, InsertVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertVendorMutation, InsertVendorMutationVariables>(InsertVendorDocument, options);
      }
export type InsertVendorMutationHookResult = ReturnType<typeof useInsertVendorMutation>;
export type InsertVendorMutationResult = Apollo.MutationResult<InsertVendorMutation>;
export type InsertVendorMutationOptions = Apollo.BaseMutationOptions<InsertVendorMutation, InsertVendorMutationVariables>;
export const UpdateVendorDocument = gql`
    mutation UpdateVendor($id: Int!, $account_id: String, $name: String!, $url: String, $item_url_template: String) {
  vendor: update_vendor_by_pk(
    pk_columns: {id: $id}
    _set: {account_id: $account_id, name: $name, url: $url, item_url_template: $item_url_template}
  ) {
    ...basicVendorFields
    ...objectVendorFields
  }
}
    ${BasicVendorFieldsFragmentDoc}
${ObjectVendorFieldsFragmentDoc}`;
export type UpdateVendorMutationFn = Apollo.MutationFunction<UpdateVendorMutation, UpdateVendorMutationVariables>;

/**
 * __useUpdateVendorMutation__
 *
 * To run a mutation, you first call `useUpdateVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVendorMutation, { data, loading, error }] = useUpdateVendorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      account_id: // value for 'account_id'
 *      name: // value for 'name'
 *      url: // value for 'url'
 *      item_url_template: // value for 'item_url_template'
 *   },
 * });
 */
export function useUpdateVendorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVendorMutation, UpdateVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVendorMutation, UpdateVendorMutationVariables>(UpdateVendorDocument, options);
      }
export type UpdateVendorMutationHookResult = ReturnType<typeof useUpdateVendorMutation>;
export type UpdateVendorMutationResult = Apollo.MutationResult<UpdateVendorMutation>;
export type UpdateVendorMutationOptions = Apollo.BaseMutationOptions<UpdateVendorMutation, UpdateVendorMutationVariables>;
export const DeleteVendorDocument = gql`
    mutation DeleteVendor($id: Int!) {
  delete_vendor_by_pk(id: $id) {
    ...basicVendorFields
  }
}
    ${BasicVendorFieldsFragmentDoc}`;
export type DeleteVendorMutationFn = Apollo.MutationFunction<DeleteVendorMutation, DeleteVendorMutationVariables>;

/**
 * __useDeleteVendorMutation__
 *
 * To run a mutation, you first call `useDeleteVendorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVendorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVendorMutation, { data, loading, error }] = useDeleteVendorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVendorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVendorMutation, DeleteVendorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVendorMutation, DeleteVendorMutationVariables>(DeleteVendorDocument, options);
      }
export type DeleteVendorMutationHookResult = ReturnType<typeof useDeleteVendorMutation>;
export type DeleteVendorMutationResult = Apollo.MutationResult<DeleteVendorMutation>;
export type DeleteVendorMutationOptions = Apollo.BaseMutationOptions<DeleteVendorMutation, DeleteVendorMutationVariables>;
export const GetVendorItemsDocument = gql`
    query GetVendorItems {
  vendor_item {
    ...basicVendorItemFields
  }
}
    ${BasicVendorItemFieldsFragmentDoc}`;

/**
 * __useGetVendorItemsQuery__
 *
 * To run a query within a React component, call `useGetVendorItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVendorItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetVendorItemsQuery, GetVendorItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorItemsQuery, GetVendorItemsQueryVariables>(GetVendorItemsDocument, options);
      }
export function useGetVendorItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorItemsQuery, GetVendorItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorItemsQuery, GetVendorItemsQueryVariables>(GetVendorItemsDocument, options);
        }
export type GetVendorItemsQueryHookResult = ReturnType<typeof useGetVendorItemsQuery>;
export type GetVendorItemsLazyQueryHookResult = ReturnType<typeof useGetVendorItemsLazyQuery>;
export type GetVendorItemsQueryResult = Apollo.QueryResult<GetVendorItemsQuery, GetVendorItemsQueryVariables>;
export const SearchVendorItemsDocument = gql`
    query SearchVendorItems($query_text: String!, $item_id: Int) {
  item: search_item(
    args: {query_text: $query_text}
    where: {vendorItems: {}, id: {_eq: $item_id}}
  ) {
    id
    name: object(path: "name")
    object
    vendorItems {
      id
      vendor_sku
      vendor {
        id
        name
        url
      }
    }
  }
}
    `;

/**
 * __useSearchVendorItemsQuery__
 *
 * To run a query within a React component, call `useSearchVendorItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVendorItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVendorItemsQuery({
 *   variables: {
 *      query_text: // value for 'query_text'
 *      item_id: // value for 'item_id'
 *   },
 * });
 */
export function useSearchVendorItemsQuery(baseOptions: Apollo.QueryHookOptions<SearchVendorItemsQuery, SearchVendorItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVendorItemsQuery, SearchVendorItemsQueryVariables>(SearchVendorItemsDocument, options);
      }
export function useSearchVendorItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVendorItemsQuery, SearchVendorItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVendorItemsQuery, SearchVendorItemsQueryVariables>(SearchVendorItemsDocument, options);
        }
export type SearchVendorItemsQueryHookResult = ReturnType<typeof useSearchVendorItemsQuery>;
export type SearchVendorItemsLazyQueryHookResult = ReturnType<typeof useSearchVendorItemsLazyQuery>;
export type SearchVendorItemsQueryResult = Apollo.QueryResult<SearchVendorItemsQuery, SearchVendorItemsQueryVariables>;
export const GetVendorItemDocument = gql`
    query GetVendorItem($id: Int!) {
  vendor_item: vendor_item_by_pk(id: $id) {
    ...basicVendorItemFields
  }
}
    ${BasicVendorItemFieldsFragmentDoc}`;

/**
 * __useGetVendorItemQuery__
 *
 * To run a query within a React component, call `useGetVendorItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVendorItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVendorItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVendorItemQuery(baseOptions: Apollo.QueryHookOptions<GetVendorItemQuery, GetVendorItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVendorItemQuery, GetVendorItemQueryVariables>(GetVendorItemDocument, options);
      }
export function useGetVendorItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVendorItemQuery, GetVendorItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVendorItemQuery, GetVendorItemQueryVariables>(GetVendorItemDocument, options);
        }
export type GetVendorItemQueryHookResult = ReturnType<typeof useGetVendorItemQuery>;
export type GetVendorItemLazyQueryHookResult = ReturnType<typeof useGetVendorItemLazyQuery>;
export type GetVendorItemQueryResult = Apollo.QueryResult<GetVendorItemQuery, GetVendorItemQueryVariables>;
export const UpdateVendorItemDocument = gql`
    mutation UpdateVendorItem($id: Int!, $description: String, $item_id: Int!, $vendor_id: Int!, $vendor_sku: String) {
  vendor_item: update_vendor_item_by_pk(
    pk_columns: {id: $id}
    _set: {description: $description, item_id: $item_id, vendor_id: $vendor_id, vendor_sku: $vendor_sku}
  ) {
    ...basicVendorItemFields
  }
}
    ${BasicVendorItemFieldsFragmentDoc}`;
export type UpdateVendorItemMutationFn = Apollo.MutationFunction<UpdateVendorItemMutation, UpdateVendorItemMutationVariables>;

/**
 * __useUpdateVendorItemMutation__
 *
 * To run a mutation, you first call `useUpdateVendorItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVendorItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVendorItemMutation, { data, loading, error }] = useUpdateVendorItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      item_id: // value for 'item_id'
 *      vendor_id: // value for 'vendor_id'
 *      vendor_sku: // value for 'vendor_sku'
 *   },
 * });
 */
export function useUpdateVendorItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVendorItemMutation, UpdateVendorItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVendorItemMutation, UpdateVendorItemMutationVariables>(UpdateVendorItemDocument, options);
      }
export type UpdateVendorItemMutationHookResult = ReturnType<typeof useUpdateVendorItemMutation>;
export type UpdateVendorItemMutationResult = Apollo.MutationResult<UpdateVendorItemMutation>;
export type UpdateVendorItemMutationOptions = Apollo.BaseMutationOptions<UpdateVendorItemMutation, UpdateVendorItemMutationVariables>;
export const InsertVendorItemDocument = gql`
    mutation InsertVendorItem($description: String, $item_id: Int!, $vendor_id: Int!, $vendor_sku: String) {
  vendor_item: insert_vendor_item_one(
    object: {description: $description, item_id: $item_id, vendor_id: $vendor_id, vendor_sku: $vendor_sku}
  ) {
    ...basicVendorItemFields
  }
}
    ${BasicVendorItemFieldsFragmentDoc}`;
export type InsertVendorItemMutationFn = Apollo.MutationFunction<InsertVendorItemMutation, InsertVendorItemMutationVariables>;

/**
 * __useInsertVendorItemMutation__
 *
 * To run a mutation, you first call `useInsertVendorItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVendorItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVendorItemMutation, { data, loading, error }] = useInsertVendorItemMutation({
 *   variables: {
 *      description: // value for 'description'
 *      item_id: // value for 'item_id'
 *      vendor_id: // value for 'vendor_id'
 *      vendor_sku: // value for 'vendor_sku'
 *   },
 * });
 */
export function useInsertVendorItemMutation(baseOptions?: Apollo.MutationHookOptions<InsertVendorItemMutation, InsertVendorItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertVendorItemMutation, InsertVendorItemMutationVariables>(InsertVendorItemDocument, options);
      }
export type InsertVendorItemMutationHookResult = ReturnType<typeof useInsertVendorItemMutation>;
export type InsertVendorItemMutationResult = Apollo.MutationResult<InsertVendorItemMutation>;
export type InsertVendorItemMutationOptions = Apollo.BaseMutationOptions<InsertVendorItemMutation, InsertVendorItemMutationVariables>;
export const DeleteVendorItemDocument = gql`
    mutation DeleteVendorItem($id: Int!) {
  vendor_item: delete_vendor_item_by_pk(id: $id) {
    ...basicVendorItemFields
  }
}
    ${BasicVendorItemFieldsFragmentDoc}`;
export type DeleteVendorItemMutationFn = Apollo.MutationFunction<DeleteVendorItemMutation, DeleteVendorItemMutationVariables>;

/**
 * __useDeleteVendorItemMutation__
 *
 * To run a mutation, you first call `useDeleteVendorItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVendorItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVendorItemMutation, { data, loading, error }] = useDeleteVendorItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVendorItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVendorItemMutation, DeleteVendorItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVendorItemMutation, DeleteVendorItemMutationVariables>(DeleteVendorItemDocument, options);
      }
export type DeleteVendorItemMutationHookResult = ReturnType<typeof useDeleteVendorItemMutation>;
export type DeleteVendorItemMutationResult = Apollo.MutationResult<DeleteVendorItemMutation>;
export type DeleteVendorItemMutationOptions = Apollo.BaseMutationOptions<DeleteVendorItemMutation, DeleteVendorItemMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
