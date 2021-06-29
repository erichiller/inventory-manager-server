import * as Types from '../../lib/types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type LabelFieldsFragment = (
  { __typename?: 'label' }
  & Pick<Types.Label, 'id' | 'created_at' | 'content' | 'title' | 'width' | 'height' | 'updated_at'>
  & { item?: Types.Maybe<(
    { __typename?: 'item' }
    & Pick<Types.Item, 'id' | 'class'>
  )> }
);

export type GetLabelsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLabelsQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetLabelQueryVariables = Types.Exact<{
  label_id: Types.Scalars['uuid'];
}>;


export type GetLabelQuery = (
  { __typename?: 'query_root' }
  & { label?: Types.Maybe<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetLabelByItemIdQueryVariables = Types.Exact<{
  item_id?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type GetLabelByItemIdQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetTemplatesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTemplatesQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & LabelFieldsFragment
  )> }
);

export type GetSingleLabelsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSingleLabelsQuery = (
  { __typename?: 'query_root' }
  & { label: Array<(
    { __typename?: 'label' }
    & Pick<Types.Label, 'id'>
  )> }
);

export type SaveLabelMutationVariables = Types.Exact<{
  content?: Types.Maybe<Types.Scalars['jsonb']>;
  height?: Types.Maybe<Types.Scalars['Int']>;
  id?: Types.Maybe<Types.Scalars['uuid']>;
  item_id?: Types.Maybe<Types.Scalars['Int']>;
  title?: Types.Maybe<Types.Scalars['String']>;
  width?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type SaveLabelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_label?: Types.Maybe<(
    { __typename?: 'label_mutation_response' }
    & Pick<Types.LabelMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'label' }
      & Pick<Types.Label, 'id'>
    )> }
  )> }
);

export type EditLabelMutationVariables = Types.Exact<{
  content?: Types.Maybe<Types.Scalars['jsonb']>;
  height?: Types.Maybe<Types.Scalars['Int']>;
  id?: Types.Maybe<Types.Scalars['uuid']>;
  item_id?: Types.Maybe<Types.Scalars['Int']>;
  title?: Types.Maybe<Types.Scalars['String']>;
  width?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type EditLabelMutation = (
  { __typename: 'mutation_root' }
  & { update_label?: Types.Maybe<(
    { __typename?: 'label_mutation_response' }
    & Pick<Types.LabelMutationResponse, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'label' }
      & Pick<Types.Label, 'id'>
    )> }
  )> }
);

export type SetLabelTitleMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  title?: Types.Maybe<Types.Scalars['String']>;
}>;


export type SetLabelTitleMutation = (
  { __typename?: 'mutation_root' }
  & { update_label_by_pk?: Types.Maybe<(
    { __typename?: 'label' }
    & Pick<Types.Label, 'id' | 'title'>
  )> }
);

export type DeleteLabelMutationVariables = Types.Exact<{
  label_id: Types.Scalars['uuid'];
}>;


export type DeleteLabelMutation = (
  { __typename?: 'mutation_root' }
  & { delete_label_by_pk?: Types.Maybe<(
    { __typename: 'label' }
    & Pick<Types.Label, 'id'>
  )> }
);

export const LabelFieldsFragmentDoc = gql`
    fragment labelFields on label {
  id
  created_at
  content
  title
  width
  height
  item {
    id
    class
  }
  updated_at
}
    `;
export const GetLabelsDocument = gql`
    query GetLabels {
  label(order_by: {created_at: asc}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;

/**
 * __useGetLabelsQuery__
 *
 * To run a query within a React component, call `useGetLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLabelsQuery(baseOptions?: Apollo.QueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
      }
export function useGetLabelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
        }
export type GetLabelsQueryHookResult = ReturnType<typeof useGetLabelsQuery>;
export type GetLabelsLazyQueryHookResult = ReturnType<typeof useGetLabelsLazyQuery>;
export type GetLabelsQueryResult = Apollo.QueryResult<GetLabelsQuery, GetLabelsQueryVariables>;
export const GetLabelDocument = gql`
    query GetLabel($label_id: uuid!) {
  label: label_by_pk(id: $label_id) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;

/**
 * __useGetLabelQuery__
 *
 * To run a query within a React component, call `useGetLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelQuery({
 *   variables: {
 *      label_id: // value for 'label_id'
 *   },
 * });
 */
export function useGetLabelQuery(baseOptions: Apollo.QueryHookOptions<GetLabelQuery, GetLabelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLabelQuery, GetLabelQueryVariables>(GetLabelDocument, options);
      }
export function useGetLabelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLabelQuery, GetLabelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLabelQuery, GetLabelQueryVariables>(GetLabelDocument, options);
        }
export type GetLabelQueryHookResult = ReturnType<typeof useGetLabelQuery>;
export type GetLabelLazyQueryHookResult = ReturnType<typeof useGetLabelLazyQuery>;
export type GetLabelQueryResult = Apollo.QueryResult<GetLabelQuery, GetLabelQueryVariables>;
export const GetLabelByItemIdDocument = gql`
    query GetLabelByItemId($item_id: Int) {
  label(order_by: {created_at: asc}, where: {item_id: {_eq: $item_id}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;

/**
 * __useGetLabelByItemIdQuery__
 *
 * To run a query within a React component, call `useGetLabelByItemIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelByItemIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelByItemIdQuery({
 *   variables: {
 *      item_id: // value for 'item_id'
 *   },
 * });
 */
export function useGetLabelByItemIdQuery(baseOptions?: Apollo.QueryHookOptions<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>(GetLabelByItemIdDocument, options);
      }
export function useGetLabelByItemIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>(GetLabelByItemIdDocument, options);
        }
export type GetLabelByItemIdQueryHookResult = ReturnType<typeof useGetLabelByItemIdQuery>;
export type GetLabelByItemIdLazyQueryHookResult = ReturnType<typeof useGetLabelByItemIdLazyQuery>;
export type GetLabelByItemIdQueryResult = Apollo.QueryResult<GetLabelByItemIdQuery, GetLabelByItemIdQueryVariables>;
export const GetTemplatesDocument = gql`
    query GetTemplates {
  label(order_by: {created_at: asc}, where: {template_items: {}}) {
    ...labelFields
  }
}
    ${LabelFieldsFragmentDoc}`;

/**
 * __useGetTemplatesQuery__
 *
 * To run a query within a React component, call `useGetTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, options);
      }
export function useGetTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTemplatesQuery, GetTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTemplatesQuery, GetTemplatesQueryVariables>(GetTemplatesDocument, options);
        }
export type GetTemplatesQueryHookResult = ReturnType<typeof useGetTemplatesQuery>;
export type GetTemplatesLazyQueryHookResult = ReturnType<typeof useGetTemplatesLazyQuery>;
export type GetTemplatesQueryResult = Apollo.QueryResult<GetTemplatesQuery, GetTemplatesQueryVariables>;
export const GetSingleLabelsDocument = gql`
    query GetSingleLabels {
  label(order_by: {created_at: asc}, where: {_not: {template_items: {}}}) {
    id
  }
}
    `;

/**
 * __useGetSingleLabelsQuery__
 *
 * To run a query within a React component, call `useGetSingleLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSingleLabelsQuery(baseOptions?: Apollo.QueryHookOptions<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>(GetSingleLabelsDocument, options);
      }
export function useGetSingleLabelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>(GetSingleLabelsDocument, options);
        }
export type GetSingleLabelsQueryHookResult = ReturnType<typeof useGetSingleLabelsQuery>;
export type GetSingleLabelsLazyQueryHookResult = ReturnType<typeof useGetSingleLabelsLazyQuery>;
export type GetSingleLabelsQueryResult = Apollo.QueryResult<GetSingleLabelsQuery, GetSingleLabelsQueryVariables>;
export const SaveLabelDocument = gql`
    mutation SaveLabel($content: jsonb, $height: Int, $id: uuid, $item_id: Int, $title: String, $width: Int) {
  insert_label(
    objects: {content: $content, height: $height, id: $id, item_id: $item_id, title: $title, width: $width}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SaveLabelMutationFn = Apollo.MutationFunction<SaveLabelMutation, SaveLabelMutationVariables>;

/**
 * __useSaveLabelMutation__
 *
 * To run a mutation, you first call `useSaveLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveLabelMutation, { data, loading, error }] = useSaveLabelMutation({
 *   variables: {
 *      content: // value for 'content'
 *      height: // value for 'height'
 *      id: // value for 'id'
 *      item_id: // value for 'item_id'
 *      title: // value for 'title'
 *      width: // value for 'width'
 *   },
 * });
 */
export function useSaveLabelMutation(baseOptions?: Apollo.MutationHookOptions<SaveLabelMutation, SaveLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveLabelMutation, SaveLabelMutationVariables>(SaveLabelDocument, options);
      }
export type SaveLabelMutationHookResult = ReturnType<typeof useSaveLabelMutation>;
export type SaveLabelMutationResult = Apollo.MutationResult<SaveLabelMutation>;
export type SaveLabelMutationOptions = Apollo.BaseMutationOptions<SaveLabelMutation, SaveLabelMutationVariables>;
export const EditLabelDocument = gql`
    mutation EditLabel($content: jsonb, $height: Int, $id: uuid, $item_id: Int, $title: String, $width: Int) {
  __typename
  update_label(
    where: {id: {_eq: $id}}
    _set: {content: $content, height: $height, item_id: $item_id, title: $title, width: $width}
  ) {
    returning {
      id
    }
    affected_rows
  }
}
    `;
export type EditLabelMutationFn = Apollo.MutationFunction<EditLabelMutation, EditLabelMutationVariables>;

/**
 * __useEditLabelMutation__
 *
 * To run a mutation, you first call `useEditLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editLabelMutation, { data, loading, error }] = useEditLabelMutation({
 *   variables: {
 *      content: // value for 'content'
 *      height: // value for 'height'
 *      id: // value for 'id'
 *      item_id: // value for 'item_id'
 *      title: // value for 'title'
 *      width: // value for 'width'
 *   },
 * });
 */
export function useEditLabelMutation(baseOptions?: Apollo.MutationHookOptions<EditLabelMutation, EditLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditLabelMutation, EditLabelMutationVariables>(EditLabelDocument, options);
      }
export type EditLabelMutationHookResult = ReturnType<typeof useEditLabelMutation>;
export type EditLabelMutationResult = Apollo.MutationResult<EditLabelMutation>;
export type EditLabelMutationOptions = Apollo.BaseMutationOptions<EditLabelMutation, EditLabelMutationVariables>;
export const SetLabelTitleDocument = gql`
    mutation SetLabelTitle($id: uuid!, $title: String) {
  update_label_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {
    id
    title
  }
}
    `;
export type SetLabelTitleMutationFn = Apollo.MutationFunction<SetLabelTitleMutation, SetLabelTitleMutationVariables>;

/**
 * __useSetLabelTitleMutation__
 *
 * To run a mutation, you first call `useSetLabelTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetLabelTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setLabelTitleMutation, { data, loading, error }] = useSetLabelTitleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSetLabelTitleMutation(baseOptions?: Apollo.MutationHookOptions<SetLabelTitleMutation, SetLabelTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetLabelTitleMutation, SetLabelTitleMutationVariables>(SetLabelTitleDocument, options);
      }
export type SetLabelTitleMutationHookResult = ReturnType<typeof useSetLabelTitleMutation>;
export type SetLabelTitleMutationResult = Apollo.MutationResult<SetLabelTitleMutation>;
export type SetLabelTitleMutationOptions = Apollo.BaseMutationOptions<SetLabelTitleMutation, SetLabelTitleMutationVariables>;
export const DeleteLabelDocument = gql`
    mutation DeleteLabel($label_id: uuid!) {
  delete_label_by_pk(id: $label_id) {
    id
    __typename
  }
}
    `;
export type DeleteLabelMutationFn = Apollo.MutationFunction<DeleteLabelMutation, DeleteLabelMutationVariables>;

/**
 * __useDeleteLabelMutation__
 *
 * To run a mutation, you first call `useDeleteLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLabelMutation, { data, loading, error }] = useDeleteLabelMutation({
 *   variables: {
 *      label_id: // value for 'label_id'
 *   },
 * });
 */
export function useDeleteLabelMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLabelMutation, DeleteLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLabelMutation, DeleteLabelMutationVariables>(DeleteLabelDocument, options);
      }
export type DeleteLabelMutationHookResult = ReturnType<typeof useDeleteLabelMutation>;
export type DeleteLabelMutationResult = Apollo.MutationResult<DeleteLabelMutation>;
export type DeleteLabelMutationOptions = Apollo.BaseMutationOptions<DeleteLabelMutation, DeleteLabelMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
