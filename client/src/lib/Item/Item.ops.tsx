import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type LabelTemplateFieldsFragment = (
  { __typename?: 'label_template_map' }
  & Pick<Types.LabelTemplateMap, 'sequence' | 'criteria'>
  & { label: (
    { __typename?: 'label' }
    & Pick<Types.Label, 'width' | 'content' | 'created_at' | 'edit_of_id' | 'height' | 'id' | 'item_id' | 'updated_at' | 'title'>
  ) }
);

export type ItemFieldsFragment = (
  { __typename?: 'item' }
  & Pick<Types.Item, 'id' | 'class' | 'object'>
  & { name: Types.Item['object'] }
  & { labelTemplates: Array<(
    { __typename?: 'label_template_map' }
    & LabelTemplateFieldsFragment
  )> }
);

export type GetItemsQueryVariables = Types.Exact<{
  categories?: Types.Maybe<Array<Types.EnumItemClassEnum> | Types.EnumItemClassEnum>;
}>;


export type GetItemsQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'item' }
    & ItemFieldsFragment
  )> }
);

export type GetItemsByIdQueryVariables = Types.Exact<{
  ids?: Types.Maybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
}>;


export type GetItemsByIdQuery = (
  { __typename?: 'query_root' }
  & { items: Array<(
    { __typename?: 'item' }
    & ItemFieldsFragment
  )> }
);

export type GetItemQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type GetItemQuery = (
  { __typename?: 'query_root' }
  & { item?: Types.Maybe<(
    { __typename?: 'item' }
    & ItemFieldsFragment
  )> }
);

export type ItemSearchQueryVariables = Types.Exact<{
  search_text: Types.Scalars['String'];
}>;


export type ItemSearchQuery = (
  { __typename?: 'query_root' }
  & { search: Array<(
    { __typename?: 'search_data' }
    & Pick<Types.SearchData, 'id' | 'class' | 'metadata'>
    & { name: Types.SearchData['text'] }
  )> }
);

export type DeleteItemMutationVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type DeleteItemMutation = (
  { __typename?: 'mutation_root' }
  & { delete_item_by_pk?: Types.Maybe<(
    { __typename?: 'item' }
    & Pick<Types.Item, 'id' | 'class'>
  )> }
);

export const LabelTemplateFieldsFragmentDoc = gql`
    fragment LabelTemplateFields on label_template_map {
  sequence
  criteria
  label {
    width
    content
    created_at
    edit_of_id
    height
    id
    item_id
    updated_at
    title
  }
}
    `;
export const ItemFieldsFragmentDoc = gql`
    fragment ItemFields on item {
  id
  class
  name: object(path: "name")
  object
  labelTemplates(order_by: {sequence: asc}, where: {}) {
    ...LabelTemplateFields
  }
}
    ${LabelTemplateFieldsFragmentDoc}`;
export const GetItemsDocument = gql`
    query GetItems($categories: [enum_item_class_enum!]) {
  items: item(where: {class: {_in: $categories}}, order_by: {id: asc}) {
    ...ItemFields
  }
}
    ${ItemFieldsFragmentDoc}`;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;
export const GetItemsByIdDocument = gql`
    query GetItemsById($ids: [Int!]) {
  items: item(where: {id: {_in: $ids}}, order_by: {id: asc}) {
    ...ItemFields
  }
}
    ${ItemFieldsFragmentDoc}`;

/**
 * __useGetItemsByIdQuery__
 *
 * To run a query within a React component, call `useGetItemsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetItemsByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsByIdQuery, GetItemsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsByIdQuery, GetItemsByIdQueryVariables>(GetItemsByIdDocument, options);
      }
export function useGetItemsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsByIdQuery, GetItemsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsByIdQuery, GetItemsByIdQueryVariables>(GetItemsByIdDocument, options);
        }
export type GetItemsByIdQueryHookResult = ReturnType<typeof useGetItemsByIdQuery>;
export type GetItemsByIdLazyQueryHookResult = ReturnType<typeof useGetItemsByIdLazyQuery>;
export type GetItemsByIdQueryResult = Apollo.QueryResult<GetItemsByIdQuery, GetItemsByIdQueryVariables>;
export const GetItemDocument = gql`
    query GetItem($id: Int!) {
  item: item_by_pk(id: $id) {
    ...ItemFields
  }
}
    ${ItemFieldsFragmentDoc}`;

/**
 * __useGetItemQuery__
 *
 * To run a query within a React component, call `useGetItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItemQuery(baseOptions: Apollo.QueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, options);
      }
export function useGetItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemQuery, GetItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemQuery, GetItemQueryVariables>(GetItemDocument, options);
        }
export type GetItemQueryHookResult = ReturnType<typeof useGetItemQuery>;
export type GetItemLazyQueryHookResult = ReturnType<typeof useGetItemLazyQuery>;
export type GetItemQueryResult = Apollo.QueryResult<GetItemQuery, GetItemQueryVariables>;
export const ItemSearchDocument = gql`
    query ItemSearch($search_text: String!) {
  search(args: {query_text: $search_text}, where: {class: {}}) {
    id
    class
    name: text
    metadata
  }
}
    `;

/**
 * __useItemSearchQuery__
 *
 * To run a query within a React component, call `useItemSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemSearchQuery({
 *   variables: {
 *      search_text: // value for 'search_text'
 *   },
 * });
 */
export function useItemSearchQuery(baseOptions: Apollo.QueryHookOptions<ItemSearchQuery, ItemSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemSearchQuery, ItemSearchQueryVariables>(ItemSearchDocument, options);
      }
export function useItemSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemSearchQuery, ItemSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemSearchQuery, ItemSearchQueryVariables>(ItemSearchDocument, options);
        }
export type ItemSearchQueryHookResult = ReturnType<typeof useItemSearchQuery>;
export type ItemSearchLazyQueryHookResult = ReturnType<typeof useItemSearchLazyQuery>;
export type ItemSearchQueryResult = Apollo.QueryResult<ItemSearchQuery, ItemSearchQueryVariables>;
export const DeleteItemDocument = gql`
    mutation DeleteItem($id: Int!) {
  delete_item_by_pk(id: $id) {
    id
    class
  }
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
