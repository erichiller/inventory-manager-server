import * as Types from '../../../lib/types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type InsertIconMutationVariables = Types.Exact<{
  mimeData?: Types.Maybe<Types.Scalars['String']>;
  description?: Types.Maybe<Types.Scalars['String']>;
  id?: Types.Maybe<Types.Scalars['uuid']>;
  title?: Types.Maybe<Types.Scalars['String']>;
  categories?: Types.Maybe<Types.IconItemClassMapArrRelInsertInput>;
  labels?: Types.Maybe<Types.IconLabelMapArrRelInsertInput>;
}>;


export type InsertIconMutation = (
  { __typename?: 'mutation_root' }
  & { insert_icon?: Types.Maybe<(
    { __typename?: 'icon_mutation_response' }
    & Pick<Types.IconMutationResponse, 'affected_rows'>
  )> }
);

export type GetIconQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;


export type GetIconQuery = (
  { __typename?: 'query_root' }
  & { icon?: Types.Maybe<(
    { __typename?: 'icon' }
    & Pick<Types.Icon, 'data' | 'description' | 'id' | 'title'>
    & { categories: Array<(
      { __typename?: 'icon_item_class_map' }
      & Pick<Types.IconItemClassMap, 'class' | 'criteria' | 'sequence'>
    )>, labels: Array<(
      { __typename?: 'icon_label_map' }
      & Pick<Types.IconLabelMap, 'label_id'>
    )> }
  )> }
);

export type GetIconsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetIconsQuery = (
  { __typename?: 'query_root' }
  & { icon: Array<(
    { __typename?: 'icon' }
    & Pick<Types.Icon, 'data' | 'description' | 'id' | 'title'>
    & { categories: Array<(
      { __typename?: 'icon_item_class_map' }
      & Pick<Types.IconItemClassMap, 'class' | 'criteria' | 'sequence'>
    )>, labels: Array<(
      { __typename?: 'icon_label_map' }
      & Pick<Types.IconLabelMap, 'label_id'>
    )> }
  )> }
);


export const InsertIconDocument = gql`
    mutation InsertIcon($mimeData: String, $description: String, $id: uuid, $title: String, $categories: icon_item_class_map_arr_rel_insert_input, $labels: icon_label_map_arr_rel_insert_input) {
  insert_icon(
    objects: {data: $mimeData, description: $description, id: $id, title: $title, categories: $categories, labels: $labels}
  ) {
    affected_rows
  }
}
    `;
export type InsertIconMutationFn = Apollo.MutationFunction<InsertIconMutation, InsertIconMutationVariables>;

/**
 * __useInsertIconMutation__
 *
 * To run a mutation, you first call `useInsertIconMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertIconMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertIconMutation, { data, loading, error }] = useInsertIconMutation({
 *   variables: {
 *      mimeData: // value for 'mimeData'
 *      description: // value for 'description'
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      categories: // value for 'categories'
 *      labels: // value for 'labels'
 *   },
 * });
 */
export function useInsertIconMutation(baseOptions?: Apollo.MutationHookOptions<InsertIconMutation, InsertIconMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertIconMutation, InsertIconMutationVariables>(InsertIconDocument, options);
      }
export type InsertIconMutationHookResult = ReturnType<typeof useInsertIconMutation>;
export type InsertIconMutationResult = Apollo.MutationResult<InsertIconMutation>;
export type InsertIconMutationOptions = Apollo.BaseMutationOptions<InsertIconMutation, InsertIconMutationVariables>;
export const GetIconDocument = gql`
    query GetIcon($id: uuid!) {
  icon: icon_by_pk(id: $id) {
    data
    description
    id
    title
    categories {
      class
      criteria
      sequence
    }
    labels {
      label_id
    }
  }
}
    `;

/**
 * __useGetIconQuery__
 *
 * To run a query within a React component, call `useGetIconQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIconQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIconQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetIconQuery(baseOptions: Apollo.QueryHookOptions<GetIconQuery, GetIconQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIconQuery, GetIconQueryVariables>(GetIconDocument, options);
      }
export function useGetIconLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIconQuery, GetIconQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIconQuery, GetIconQueryVariables>(GetIconDocument, options);
        }
export type GetIconQueryHookResult = ReturnType<typeof useGetIconQuery>;
export type GetIconLazyQueryHookResult = ReturnType<typeof useGetIconLazyQuery>;
export type GetIconQueryResult = Apollo.QueryResult<GetIconQuery, GetIconQueryVariables>;
export const GetIconsDocument = gql`
    query GetIcons {
  icon {
    data
    description
    id
    title
    categories {
      class
      criteria
      sequence
    }
    labels {
      label_id
    }
  }
}
    `;

/**
 * __useGetIconsQuery__
 *
 * To run a query within a React component, call `useGetIconsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIconsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIconsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIconsQuery(baseOptions?: Apollo.QueryHookOptions<GetIconsQuery, GetIconsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIconsQuery, GetIconsQueryVariables>(GetIconsDocument, options);
      }
export function useGetIconsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIconsQuery, GetIconsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIconsQuery, GetIconsQueryVariables>(GetIconsDocument, options);
        }
export type GetIconsQueryHookResult = ReturnType<typeof useGetIconsQuery>;
export type GetIconsLazyQueryHookResult = ReturnType<typeof useGetIconsLazyQuery>;
export type GetIconsQueryResult = Apollo.QueryResult<GetIconsQuery, GetIconsQueryVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
