import * as Types from '../../lib/types/graphql';

import { BasicOrderFieldsFragment, BasicOrderItemFieldsFragment } from '../Order/Order.ops';
import { gql } from '@apollo/client';
import { BasicOrderFieldsFragmentDoc, BasicOrderItemFieldsFragmentDoc } from '../Order/Order.ops';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type BasicShipmentFieldsFragment = (
  { __typename?: 'shipment' }
  & Pick<Types.Shipment, 'id' | 'order_id' | 'vendor_invoice_id' | 'shipped_date' | 'received_date' | 'tracking_id' | 'carrier_vendor_id'>
);

export type ObjectShipmentFieldsFragment = (
  { __typename?: 'shipment' }
  & { order?: Types.Maybe<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
  )>, orderItems: Array<(
    { __typename?: 'order_item' }
    & BasicOrderItemFieldsFragment
  )>, carrier: (
    { __typename?: 'vendor' }
    & Pick<Types.Vendor, 'id' | 'name' | 'url'>
  ) }
);

export type GetShipmentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetShipmentsQuery = (
  { __typename?: 'query_root' }
  & { shipment: Array<(
    { __typename?: 'shipment' }
    & BasicShipmentFieldsFragment
    & ObjectShipmentFieldsFragment
  )> }
);

export type GetShipmentQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetShipmentQuery = (
  { __typename?: 'query_root' }
  & { shipment?: Types.Maybe<(
    { __typename?: 'shipment' }
    & BasicShipmentFieldsFragment
    & ObjectShipmentFieldsFragment
  )> }
);

export type SearchShipmentsQueryVariables = Types.Exact<{
  search_string?: Types.Maybe<Types.Scalars['String']>;
}>;


export type SearchShipmentsQuery = (
  { __typename?: 'query_root' }
  & { shipment: Array<(
    { __typename?: 'shipment' }
    & BasicShipmentFieldsFragment
    & ObjectShipmentFieldsFragment
  )> }
);

export type InsertShipmentMutationVariables = Types.Exact<{
  vendor_invoice_id?: Types.Maybe<Types.Scalars['String']>;
  tracking_id: Types.Scalars['String'];
  carrier_vendor_id: Types.Scalars['Int'];
  shipped_date?: Types.Maybe<Types.Scalars['date']>;
  received_date?: Types.Maybe<Types.Scalars['date']>;
  order_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type InsertShipmentMutation = (
  { __typename?: 'mutation_root' }
  & { shipment?: Types.Maybe<(
    { __typename?: 'shipment' }
    & BasicShipmentFieldsFragment
  )> }
);

export type UpdateShipmentMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  tracking_id: Types.Scalars['String'];
  carrier_vendor_id: Types.Scalars['Int'];
  received_date?: Types.Maybe<Types.Scalars['date']>;
  shipped_date?: Types.Maybe<Types.Scalars['date']>;
  vendor_invoice_id?: Types.Maybe<Types.Scalars['String']>;
  order_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type UpdateShipmentMutation = (
  { __typename?: 'mutation_root' }
  & { shipment?: Types.Maybe<(
    { __typename?: 'shipment' }
    & BasicShipmentFieldsFragment
  )> }
);

export type DeleteShipmentMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteShipmentMutation = (
  { __typename?: 'mutation_root' }
  & { delete_shipment_by_pk?: Types.Maybe<(
    { __typename?: 'shipment' }
    & BasicShipmentFieldsFragment
  )> }
);

export const BasicShipmentFieldsFragmentDoc = gql`
    fragment basicShipmentFields on shipment {
  id
  order_id
  vendor_invoice_id
  shipped_date
  received_date
  tracking_id
  carrier_vendor_id
}
    `;
export const ObjectShipmentFieldsFragmentDoc = gql`
    fragment objectShipmentFields on shipment {
  order {
    ...basicOrderFields
  }
  orderItems {
    ...basicOrderItemFields
  }
  carrier {
    id
    name
    url
  }
}
    ${BasicOrderFieldsFragmentDoc}
${BasicOrderItemFieldsFragmentDoc}`;
export const GetShipmentsDocument = gql`
    query GetShipments {
  shipment(order_by: {id: asc}) {
    ...basicShipmentFields
    ...objectShipmentFields
  }
}
    ${BasicShipmentFieldsFragmentDoc}
${ObjectShipmentFieldsFragmentDoc}`;

/**
 * __useGetShipmentsQuery__
 *
 * To run a query within a React component, call `useGetShipmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShipmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShipmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetShipmentsQuery, GetShipmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShipmentsQuery, GetShipmentsQueryVariables>(GetShipmentsDocument, options);
      }
export function useGetShipmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShipmentsQuery, GetShipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShipmentsQuery, GetShipmentsQueryVariables>(GetShipmentsDocument, options);
        }
export type GetShipmentsQueryHookResult = ReturnType<typeof useGetShipmentsQuery>;
export type GetShipmentsLazyQueryHookResult = ReturnType<typeof useGetShipmentsLazyQuery>;
export type GetShipmentsQueryResult = Apollo.QueryResult<GetShipmentsQuery, GetShipmentsQueryVariables>;
export const GetShipmentDocument = gql`
    query GetShipment($id: Int!) {
  shipment: shipment_by_pk(id: $id) {
    ...basicShipmentFields
    ...objectShipmentFields
  }
}
    ${BasicShipmentFieldsFragmentDoc}
${ObjectShipmentFieldsFragmentDoc}`;

/**
 * __useGetShipmentQuery__
 *
 * To run a query within a React component, call `useGetShipmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShipmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShipmentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetShipmentQuery(baseOptions: Apollo.QueryHookOptions<GetShipmentQuery, GetShipmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShipmentQuery, GetShipmentQueryVariables>(GetShipmentDocument, options);
      }
export function useGetShipmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShipmentQuery, GetShipmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShipmentQuery, GetShipmentQueryVariables>(GetShipmentDocument, options);
        }
export type GetShipmentQueryHookResult = ReturnType<typeof useGetShipmentQuery>;
export type GetShipmentLazyQueryHookResult = ReturnType<typeof useGetShipmentLazyQuery>;
export type GetShipmentQueryResult = Apollo.QueryResult<GetShipmentQuery, GetShipmentQueryVariables>;
export const SearchShipmentsDocument = gql`
    query SearchShipments($search_string: String) {
  shipment(order_by: {id: asc}, where: {tracking_id: {_ilike: $search_string}}) {
    ...basicShipmentFields
    ...objectShipmentFields
  }
}
    ${BasicShipmentFieldsFragmentDoc}
${ObjectShipmentFieldsFragmentDoc}`;

/**
 * __useSearchShipmentsQuery__
 *
 * To run a query within a React component, call `useSearchShipmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchShipmentsQuery({
 *   variables: {
 *      search_string: // value for 'search_string'
 *   },
 * });
 */
export function useSearchShipmentsQuery(baseOptions?: Apollo.QueryHookOptions<SearchShipmentsQuery, SearchShipmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchShipmentsQuery, SearchShipmentsQueryVariables>(SearchShipmentsDocument, options);
      }
export function useSearchShipmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchShipmentsQuery, SearchShipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchShipmentsQuery, SearchShipmentsQueryVariables>(SearchShipmentsDocument, options);
        }
export type SearchShipmentsQueryHookResult = ReturnType<typeof useSearchShipmentsQuery>;
export type SearchShipmentsLazyQueryHookResult = ReturnType<typeof useSearchShipmentsLazyQuery>;
export type SearchShipmentsQueryResult = Apollo.QueryResult<SearchShipmentsQuery, SearchShipmentsQueryVariables>;
export const InsertShipmentDocument = gql`
    mutation InsertShipment($vendor_invoice_id: String, $tracking_id: String!, $carrier_vendor_id: Int!, $shipped_date: date, $received_date: date, $order_id: Int) {
  shipment: insert_shipment_one(
    object: {vendor_invoice_id: $vendor_invoice_id, tracking_id: $tracking_id, carrier_vendor_id: $carrier_vendor_id, shipped_date: $shipped_date, received_date: $received_date, order_id: $order_id}
  ) {
    ...basicShipmentFields
  }
}
    ${BasicShipmentFieldsFragmentDoc}`;
export type InsertShipmentMutationFn = Apollo.MutationFunction<InsertShipmentMutation, InsertShipmentMutationVariables>;

/**
 * __useInsertShipmentMutation__
 *
 * To run a mutation, you first call `useInsertShipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertShipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertShipmentMutation, { data, loading, error }] = useInsertShipmentMutation({
 *   variables: {
 *      vendor_invoice_id: // value for 'vendor_invoice_id'
 *      tracking_id: // value for 'tracking_id'
 *      carrier_vendor_id: // value for 'carrier_vendor_id'
 *      shipped_date: // value for 'shipped_date'
 *      received_date: // value for 'received_date'
 *      order_id: // value for 'order_id'
 *   },
 * });
 */
export function useInsertShipmentMutation(baseOptions?: Apollo.MutationHookOptions<InsertShipmentMutation, InsertShipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertShipmentMutation, InsertShipmentMutationVariables>(InsertShipmentDocument, options);
      }
export type InsertShipmentMutationHookResult = ReturnType<typeof useInsertShipmentMutation>;
export type InsertShipmentMutationResult = Apollo.MutationResult<InsertShipmentMutation>;
export type InsertShipmentMutationOptions = Apollo.BaseMutationOptions<InsertShipmentMutation, InsertShipmentMutationVariables>;
export const UpdateShipmentDocument = gql`
    mutation UpdateShipment($id: Int!, $tracking_id: String!, $carrier_vendor_id: Int!, $received_date: date, $shipped_date: date, $vendor_invoice_id: String, $order_id: Int) {
  shipment: update_shipment_by_pk(
    pk_columns: {id: $id}
    _set: {vendor_invoice_id: $vendor_invoice_id, tracking_id: $tracking_id, carrier_vendor_id: $carrier_vendor_id, shipped_date: $shipped_date, received_date: $received_date, order_id: $order_id}
  ) {
    ...basicShipmentFields
  }
}
    ${BasicShipmentFieldsFragmentDoc}`;
export type UpdateShipmentMutationFn = Apollo.MutationFunction<UpdateShipmentMutation, UpdateShipmentMutationVariables>;

/**
 * __useUpdateShipmentMutation__
 *
 * To run a mutation, you first call `useUpdateShipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShipmentMutation, { data, loading, error }] = useUpdateShipmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      tracking_id: // value for 'tracking_id'
 *      carrier_vendor_id: // value for 'carrier_vendor_id'
 *      received_date: // value for 'received_date'
 *      shipped_date: // value for 'shipped_date'
 *      vendor_invoice_id: // value for 'vendor_invoice_id'
 *      order_id: // value for 'order_id'
 *   },
 * });
 */
export function useUpdateShipmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShipmentMutation, UpdateShipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShipmentMutation, UpdateShipmentMutationVariables>(UpdateShipmentDocument, options);
      }
export type UpdateShipmentMutationHookResult = ReturnType<typeof useUpdateShipmentMutation>;
export type UpdateShipmentMutationResult = Apollo.MutationResult<UpdateShipmentMutation>;
export type UpdateShipmentMutationOptions = Apollo.BaseMutationOptions<UpdateShipmentMutation, UpdateShipmentMutationVariables>;
export const DeleteShipmentDocument = gql`
    mutation DeleteShipment($id: Int!) {
  delete_shipment_by_pk(id: $id) {
    ...basicShipmentFields
  }
}
    ${BasicShipmentFieldsFragmentDoc}`;
export type DeleteShipmentMutationFn = Apollo.MutationFunction<DeleteShipmentMutation, DeleteShipmentMutationVariables>;

/**
 * __useDeleteShipmentMutation__
 *
 * To run a mutation, you first call `useDeleteShipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShipmentMutation, { data, loading, error }] = useDeleteShipmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShipmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShipmentMutation, DeleteShipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShipmentMutation, DeleteShipmentMutationVariables>(DeleteShipmentDocument, options);
      }
export type DeleteShipmentMutationHookResult = ReturnType<typeof useDeleteShipmentMutation>;
export type DeleteShipmentMutationResult = Apollo.MutationResult<DeleteShipmentMutation>;
export type DeleteShipmentMutationOptions = Apollo.BaseMutationOptions<DeleteShipmentMutation, DeleteShipmentMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
