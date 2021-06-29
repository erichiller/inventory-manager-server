import * as Types from '../../lib/types/graphql';

import { BasicVendorFieldsFragment } from '../Vendor/Vendor.ops';
import { gql } from '@apollo/client';
import { BasicVendorFieldsFragmentDoc } from '../Vendor/Vendor.ops';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type BasicOrderFieldsFragment = (
  { __typename?: 'order' }
  & Pick<Types.Order, 'id' | 'vendor_order_id' | 'url' | 'total_cost' | 'tax_cost' | 'pon' | 'placed_date' | 'payment_method_id' | 'items_cost' | 'fulfilled_date'>
  & { order_items_aggregate: (
    { __typename?: 'order_item_aggregate' }
    & { aggregate?: Types.Maybe<(
      { __typename?: 'order_item_aggregate_fields' }
      & Pick<Types.OrderItemAggregateFields, 'count'>
    )> }
  ) }
);

export type ObjectOrderFieldsFragment = (
  { __typename?: 'order' }
  & { vendor: (
    { __typename?: 'vendor' }
    & BasicVendorFieldsFragment
  ) }
);

export type BasicOrderItemFieldsFragment = (
  { __typename?: 'order_item' }
  & Pick<Types.OrderItem, 'id' | 'cost_item' | 'cost_tax' | 'cost_total' | 'item_id' | 'shipment_id' | 'vendor_item_id' | 'serial_no' | 'quantity' | 'order_id' | 'manufacturer_item_id'>
);

export type ObjectItemVariantFieldsFragment = (
  { __typename?: 'item_variant' }
  & Pick<Types.ItemVariant, 'id' | 'item_id' | 'object' | 'vendor_item_id' | 'vendor_id' | 'manufacturer_item_id'>
  & { name: Types.ItemVariant['object'] }
  & { item?: Types.Maybe<(
    { __typename: 'item' }
    & Pick<Types.Item, 'id' | 'class'>
  )>, vendorItem?: Types.Maybe<(
    { __typename?: 'vendor_item' }
    & Pick<Types.VendorItem, 'vendor_sku'>
  )>, manufacturerItem?: Types.Maybe<(
    { __typename?: 'manufacturer_item' }
    & Pick<Types.ManufacturerItem, 'id' | 'description' | 'manufacturer_product_id' | 'manufacturer_product_name' | 'manufacturer_product_series'>
  )>, vendor?: Types.Maybe<(
    { __typename?: 'vendor' }
    & Pick<Types.Vendor, 'id' | 'name' | 'url'>
  )>, manufacturer?: Types.Maybe<(
    { __typename?: 'manufacturer' }
    & Pick<Types.Manufacturer, 'id' | 'name' | 'url'>
  )> }
);

export type GetOrdersByDateRangeQueryVariables = Types.Exact<{
  date_start_gte?: Types.Maybe<Types.Scalars['date']>;
  date_end_lte?: Types.Maybe<Types.Scalars['date']>;
}>;


export type GetOrdersByDateRangeQuery = (
  { __typename?: 'query_root' }
  & { order: Array<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
    & ObjectOrderFieldsFragment
  )> }
);

export type GetOrdersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = (
  { __typename?: 'query_root' }
  & { order: Array<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
    & ObjectOrderFieldsFragment
  )> }
);

export type GetOrderQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetOrderQuery = (
  { __typename?: 'query_root' }
  & { order?: Types.Maybe<(
    { __typename?: 'order' }
    & Pick<Types.Order, 'vendor_order_id' | 'vendor_id' | 'url' | 'total_cost' | 'tax_cost' | 'pon' | 'placed_date' | 'payment_method_id' | 'items_cost' | 'id' | 'fulfilled_date'>
    & { order_items: Array<(
      { __typename?: 'order_item' }
      & Pick<Types.OrderItem, 'id' | 'cost_item' | 'cost_tax' | 'cost_total' | 'item_id' | 'manufacturer_item_id' | 'order_id' | 'quantity' | 'serial_no' | 'shipment_id' | 'vendor_item_id'>
    )>, order_items_aggregate: (
      { __typename?: 'order_item_aggregate' }
      & { aggregate?: Types.Maybe<(
        { __typename?: 'order_item_aggregate_fields' }
        & Pick<Types.OrderItemAggregateFields, 'count'>
      )> }
    ), vendor: (
      { __typename?: 'vendor' }
      & Pick<Types.Vendor, 'id' | 'account_id' | 'name' | 'url'>
    ), shipments: Array<(
      { __typename?: 'shipment' }
      & Pick<Types.Shipment, 'id' | 'order_id' | 'received_date' | 'shipped_date' | 'carrier_vendor_id' | 'tracking_id' | 'vendor_invoice_id'>
      & { carrier: (
        { __typename?: 'vendor' }
        & Pick<Types.Vendor, 'id' | 'name' | 'url'>
      ) }
    )>, shipments_aggregate: (
      { __typename?: 'shipment_aggregate' }
      & { aggregate?: Types.Maybe<(
        { __typename?: 'shipment_aggregate_fields' }
        & Pick<Types.ShipmentAggregateFields, 'count'>
      )> }
    ) }
  )> }
);

export type InsertOrderMutationVariables = Types.Exact<{
  fulfilled_date?: Types.Maybe<Types.Scalars['date']>;
  order_items?: Types.Maybe<Types.OrderItemArrRelInsertInput>;
  items_cost?: Types.Maybe<Types.Scalars['numeric']>;
  payment_method?: Types.Maybe<Types.PaymentMethodObjRelInsertInput>;
  payment_method_id?: Types.Maybe<Types.Scalars['Int']>;
  placed_date?: Types.Maybe<Types.Scalars['date']>;
  pon?: Types.Maybe<Types.Scalars['String']>;
  shipments?: Types.Maybe<Types.ShipmentArrRelInsertInput>;
  tax_cost?: Types.Maybe<Types.Scalars['numeric']>;
  total_cost?: Types.Maybe<Types.Scalars['numeric']>;
  url?: Types.Maybe<Types.Scalars['String']>;
  vendor?: Types.Maybe<Types.VendorObjRelInsertInput>;
  vendor_id?: Types.Maybe<Types.Scalars['Int']>;
  vendor_order_id?: Types.Maybe<Types.Scalars['String']>;
}>;


export type InsertOrderMutation = (
  { __typename?: 'mutation_root' }
  & { order?: Types.Maybe<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
    & ObjectOrderFieldsFragment
  )> }
);

export type UpdateOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
  fulfilled_date?: Types.Maybe<Types.Scalars['date']>;
  items_cost?: Types.Maybe<Types.Scalars['numeric']>;
  payment_method_id?: Types.Maybe<Types.Scalars['Int']>;
  placed_date?: Types.Maybe<Types.Scalars['date']>;
  pon?: Types.Maybe<Types.Scalars['String']>;
  tax_cost?: Types.Maybe<Types.Scalars['numeric']>;
  total_cost?: Types.Maybe<Types.Scalars['numeric']>;
  url?: Types.Maybe<Types.Scalars['String']>;
  vendor_id?: Types.Maybe<Types.Scalars['Int']>;
  vendor_order_id?: Types.Maybe<Types.Scalars['String']>;
  orderItems: Array<Types.OrderItemInsertInput> | Types.OrderItemInsertInput;
  deleteOrderItems: Array<Types.Scalars['Int']> | Types.Scalars['Int'];
}>;


export type UpdateOrderMutation = (
  { __typename?: 'mutation_root' }
  & { order?: Types.Maybe<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
    & ObjectOrderFieldsFragment
  )>, order_items?: Types.Maybe<(
    { __typename?: 'order_item_mutation_response' }
    & Pick<Types.OrderItemMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'order_item' }
      & Pick<Types.OrderItem, 'id' | 'cost_item' | 'cost_tax' | 'cost_total' | 'item_id' | 'manufacturer_item_id' | 'order_id' | 'quantity' | 'serial_no' | 'shipment_id' | 'vendor_item_id'>
    )> }
  )>, deleted_order_items?: Types.Maybe<(
    { __typename?: 'order_item_mutation_response' }
    & Pick<Types.OrderItemMutationResponse, 'affected_rows'>
  )> }
);

export type DeleteOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteOrderMutation = (
  { __typename?: 'mutation_root' }
  & { delete_order_by_pk?: Types.Maybe<(
    { __typename?: 'order' }
    & BasicOrderFieldsFragment
  )> }
);

export type GetItemVariantsQueryVariables = Types.Exact<{
  query_text: Types.Scalars['String'];
  prefer_vendor_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type GetItemVariantsQuery = (
  { __typename?: 'query_root' }
  & { item_variant: Array<(
    { __typename?: 'item_variant' }
    & ObjectItemVariantFieldsFragment
  )> }
);

export type GetItemVariantByAttachedQueryVariables = Types.Exact<{
  item_id?: Types.Maybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
  manufacturer_item_id?: Types.Maybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
  vendor_item_id?: Types.Maybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
  vendor_id?: Types.Maybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type GetItemVariantByAttachedQuery = (
  { __typename?: 'query_root' }
  & { item_variant: Array<(
    { __typename?: 'item_variant' }
    & ObjectItemVariantFieldsFragment
  )> }
);

export const BasicOrderFieldsFragmentDoc = gql`
    fragment basicOrderFields on order {
  id
  vendor_order_id
  url
  total_cost
  tax_cost
  pon
  placed_date
  payment_method_id
  items_cost
  fulfilled_date
  order_items_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const ObjectOrderFieldsFragmentDoc = gql`
    fragment objectOrderFields on order {
  vendor {
    ...basicVendorFields
  }
}
    ${BasicVendorFieldsFragmentDoc}`;
export const BasicOrderItemFieldsFragmentDoc = gql`
    fragment basicOrderItemFields on order_item {
  id
  cost_item
  cost_tax
  cost_total
  item_id
  shipment_id
  vendor_item_id
  serial_no
  quantity
  order_id
  manufacturer_item_id
}
    `;
export const ObjectItemVariantFieldsFragmentDoc = gql`
    fragment objectItemVariantFields on item_variant {
  id
  item_id
  item {
    id
    __typename
    class
  }
  name: object(path: "name")
  object
  vendor_item_id
  vendorItem {
    vendor_sku
  }
  manufacturerItem {
    id
    description
    manufacturer_product_id
    manufacturer_product_name
    manufacturer_product_series
  }
  vendor_id
  vendor {
    id
    name
    url
  }
  manufacturer_item_id
  manufacturer {
    id
    name
    url
  }
}
    `;
export const GetOrdersByDateRangeDocument = gql`
    query GetOrdersByDateRange($date_start_gte: date, $date_end_lte: date) {
  order(where: {placed_date: {_gte: $date_start_gte, _lte: $date_end_lte}}) {
    ...basicOrderFields
    ...objectOrderFields
  }
}
    ${BasicOrderFieldsFragmentDoc}
${ObjectOrderFieldsFragmentDoc}`;

/**
 * __useGetOrdersByDateRangeQuery__
 *
 * To run a query within a React component, call `useGetOrdersByDateRangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersByDateRangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersByDateRangeQuery({
 *   variables: {
 *      date_start_gte: // value for 'date_start_gte'
 *      date_end_lte: // value for 'date_end_lte'
 *   },
 * });
 */
export function useGetOrdersByDateRangeQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>(GetOrdersByDateRangeDocument, options);
      }
export function useGetOrdersByDateRangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>(GetOrdersByDateRangeDocument, options);
        }
export type GetOrdersByDateRangeQueryHookResult = ReturnType<typeof useGetOrdersByDateRangeQuery>;
export type GetOrdersByDateRangeLazyQueryHookResult = ReturnType<typeof useGetOrdersByDateRangeLazyQuery>;
export type GetOrdersByDateRangeQueryResult = Apollo.QueryResult<GetOrdersByDateRangeQuery, GetOrdersByDateRangeQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders {
  order(order_by: {placed_date: desc}) {
    ...basicOrderFields
    ...objectOrderFields
  }
}
    ${BasicOrderFieldsFragmentDoc}
${ObjectOrderFieldsFragmentDoc}`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetOrderDocument = gql`
    query GetOrder($id: Int!) {
  order: order_by_pk(id: $id) {
    vendor_order_id
    vendor_id
    url
    total_cost
    tax_cost
    pon
    placed_date
    payment_method_id
    items_cost
    id
    fulfilled_date
    order_items {
      id
      cost_item
      cost_tax
      cost_total
      item_id
      manufacturer_item_id
      order_id
      quantity
      serial_no
      shipment_id
      vendor_item_id
    }
    order_items_aggregate {
      aggregate {
        count
      }
    }
    vendor {
      id
      account_id
      name
      url
    }
    shipments(distinct_on: id, limit: 10, offset: 10) {
      id
      order_id
      received_date
      shipped_date
      carrier_vendor_id
      carrier {
        id
        name
        url
      }
      tracking_id
      vendor_invoice_id
    }
    shipments_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
      }
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
        }
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export const InsertOrderDocument = gql`
    mutation InsertOrder($fulfilled_date: date, $order_items: order_item_arr_rel_insert_input, $items_cost: numeric, $payment_method: payment_method_obj_rel_insert_input, $payment_method_id: Int, $placed_date: date, $pon: String, $shipments: shipment_arr_rel_insert_input, $tax_cost: numeric, $total_cost: numeric, $url: String, $vendor: vendor_obj_rel_insert_input, $vendor_id: Int, $vendor_order_id: String) {
  order: insert_order_one(
    object: {order_items: $order_items, payment_method: $payment_method, shipments: $shipments, vendor: $vendor, fulfilled_date: $fulfilled_date, items_cost: $items_cost, payment_method_id: $payment_method_id, placed_date: $placed_date, pon: $pon, tax_cost: $tax_cost, total_cost: $total_cost, url: $url, vendor_id: $vendor_id, vendor_order_id: $vendor_order_id}
  ) {
    ...basicOrderFields
    ...objectOrderFields
  }
}
    ${BasicOrderFieldsFragmentDoc}
${ObjectOrderFieldsFragmentDoc}`;
export type InsertOrderMutationFn = Apollo.MutationFunction<InsertOrderMutation, InsertOrderMutationVariables>;

/**
 * __useInsertOrderMutation__
 *
 * To run a mutation, you first call `useInsertOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertOrderMutation, { data, loading, error }] = useInsertOrderMutation({
 *   variables: {
 *      fulfilled_date: // value for 'fulfilled_date'
 *      order_items: // value for 'order_items'
 *      items_cost: // value for 'items_cost'
 *      payment_method: // value for 'payment_method'
 *      payment_method_id: // value for 'payment_method_id'
 *      placed_date: // value for 'placed_date'
 *      pon: // value for 'pon'
 *      shipments: // value for 'shipments'
 *      tax_cost: // value for 'tax_cost'
 *      total_cost: // value for 'total_cost'
 *      url: // value for 'url'
 *      vendor: // value for 'vendor'
 *      vendor_id: // value for 'vendor_id'
 *      vendor_order_id: // value for 'vendor_order_id'
 *   },
 * });
 */
export function useInsertOrderMutation(baseOptions?: Apollo.MutationHookOptions<InsertOrderMutation, InsertOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertOrderMutation, InsertOrderMutationVariables>(InsertOrderDocument, options);
      }
export type InsertOrderMutationHookResult = ReturnType<typeof useInsertOrderMutation>;
export type InsertOrderMutationResult = Apollo.MutationResult<InsertOrderMutation>;
export type InsertOrderMutationOptions = Apollo.BaseMutationOptions<InsertOrderMutation, InsertOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: Int!, $fulfilled_date: date, $items_cost: numeric, $payment_method_id: Int, $placed_date: date, $pon: String, $tax_cost: numeric, $total_cost: numeric, $url: String, $vendor_id: Int, $vendor_order_id: String, $orderItems: [order_item_insert_input!]!, $deleteOrderItems: [Int!]!) {
  order: update_order_by_pk(
    pk_columns: {id: $id}
    _set: {fulfilled_date: $fulfilled_date, items_cost: $items_cost, payment_method_id: $payment_method_id, placed_date: $placed_date, pon: $pon, tax_cost: $tax_cost, total_cost: $total_cost, url: $url, vendor_id: $vendor_id, vendor_order_id: $vendor_order_id}
  ) {
    ...basicOrderFields
    ...objectOrderFields
  }
  order_items: insert_order_item(
    objects: $orderItems
    on_conflict: {constraint: order_item_id_key, update_columns: [cost_item, cost_tax, cost_total, item_id, manufacturer_item_id, order_id, quantity, serial_no, shipment_id, vendor_item_id]}
  ) {
    affected_rows
    returning {
      id
      cost_item
      cost_tax
      cost_total
      item_id
      manufacturer_item_id
      order_id
      quantity
      serial_no
      shipment_id
      vendor_item_id
    }
  }
  deleted_order_items: delete_order_item(where: {id: {_in: $deleteOrderItems}}) {
    affected_rows
  }
}
    ${BasicOrderFieldsFragmentDoc}
${ObjectOrderFieldsFragmentDoc}`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      fulfilled_date: // value for 'fulfilled_date'
 *      items_cost: // value for 'items_cost'
 *      payment_method_id: // value for 'payment_method_id'
 *      placed_date: // value for 'placed_date'
 *      pon: // value for 'pon'
 *      tax_cost: // value for 'tax_cost'
 *      total_cost: // value for 'total_cost'
 *      url: // value for 'url'
 *      vendor_id: // value for 'vendor_id'
 *      vendor_order_id: // value for 'vendor_order_id'
 *      orderItems: // value for 'orderItems'
 *      deleteOrderItems: // value for 'deleteOrderItems'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: Int!) {
  delete_order_by_pk(id: $id) {
    ...basicOrderFields
  }
}
    ${BasicOrderFieldsFragmentDoc}`;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const GetItemVariantsDocument = gql`
    query GetItemVariants($query_text: String!, $prefer_vendor_id: Int) {
  item_variant: search_item_variant(
    args: {query_text: $query_text}
    where: {_or: [{vendor_id: {_eq: $prefer_vendor_id}}, {vendor_id: {_is_null: true}}]}
    order_by: {vendor_id: asc, manufacturer_id: asc, id: asc}
  ) {
    ...objectItemVariantFields
  }
}
    ${ObjectItemVariantFieldsFragmentDoc}`;

/**
 * __useGetItemVariantsQuery__
 *
 * To run a query within a React component, call `useGetItemVariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemVariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemVariantsQuery({
 *   variables: {
 *      query_text: // value for 'query_text'
 *      prefer_vendor_id: // value for 'prefer_vendor_id'
 *   },
 * });
 */
export function useGetItemVariantsQuery(baseOptions: Apollo.QueryHookOptions<GetItemVariantsQuery, GetItemVariantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemVariantsQuery, GetItemVariantsQueryVariables>(GetItemVariantsDocument, options);
      }
export function useGetItemVariantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemVariantsQuery, GetItemVariantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemVariantsQuery, GetItemVariantsQueryVariables>(GetItemVariantsDocument, options);
        }
export type GetItemVariantsQueryHookResult = ReturnType<typeof useGetItemVariantsQuery>;
export type GetItemVariantsLazyQueryHookResult = ReturnType<typeof useGetItemVariantsLazyQuery>;
export type GetItemVariantsQueryResult = Apollo.QueryResult<GetItemVariantsQuery, GetItemVariantsQueryVariables>;
export const GetItemVariantByAttachedDocument = gql`
    query GetItemVariantByAttached($item_id: [Int!], $manufacturer_item_id: [Int!], $vendor_item_id: [Int!], $vendor_id: [Int!], $limit: Int) {
  item_variant(
    where: {manufacturer_item_id: {_in: $manufacturer_item_id}, vendor_item_id: {_in: $vendor_item_id}, vendor_id: {_in: $vendor_id}, item_id: {_in: $item_id}}
    order_by: {vendor_id: asc, manufacturer_id: asc, id: asc}
    limit: $limit
  ) {
    ...objectItemVariantFields
  }
}
    ${ObjectItemVariantFieldsFragmentDoc}`;

/**
 * __useGetItemVariantByAttachedQuery__
 *
 * To run a query within a React component, call `useGetItemVariantByAttachedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemVariantByAttachedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemVariantByAttachedQuery({
 *   variables: {
 *      item_id: // value for 'item_id'
 *      manufacturer_item_id: // value for 'manufacturer_item_id'
 *      vendor_item_id: // value for 'vendor_item_id'
 *      vendor_id: // value for 'vendor_id'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetItemVariantByAttachedQuery(baseOptions?: Apollo.QueryHookOptions<GetItemVariantByAttachedQuery, GetItemVariantByAttachedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemVariantByAttachedQuery, GetItemVariantByAttachedQueryVariables>(GetItemVariantByAttachedDocument, options);
      }
export function useGetItemVariantByAttachedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemVariantByAttachedQuery, GetItemVariantByAttachedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemVariantByAttachedQuery, GetItemVariantByAttachedQueryVariables>(GetItemVariantByAttachedDocument, options);
        }
export type GetItemVariantByAttachedQueryHookResult = ReturnType<typeof useGetItemVariantByAttachedQuery>;
export type GetItemVariantByAttachedLazyQueryHookResult = ReturnType<typeof useGetItemVariantByAttachedLazyQuery>;
export type GetItemVariantByAttachedQueryResult = Apollo.QueryResult<GetItemVariantByAttachedQuery, GetItemVariantByAttachedQueryVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
