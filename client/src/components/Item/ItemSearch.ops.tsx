import * as Types from '../../lib/types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type SearchItemsQueryVariables = Types.Exact<{
  containsFilter?: Types.Maybe<Types.Scalars['jsonb']>;
  hasAnyKeysFilter?: Types.Maybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;


export type SearchItemsQuery = (
  { __typename?: 'query_root' }
  & { item: Array<(
    { __typename?: 'item' }
    & Pick<Types.Item, 'id' | 'object' | 'class'>
    & { name: Types.Item['object'] }
  )> }
);


export const SearchItemsDocument = gql`
    query SearchItems($containsFilter: jsonb, $hasAnyKeysFilter: [String!]) {
  item(
    order_by: {class: asc}
    where: {object: {_has_keys_any: $hasAnyKeysFilter, _contains: $containsFilter}}
  ) {
    id
    name: object(path: "name")
    object
    class
  }
}
    `;

/**
 * __useSearchItemsQuery__
 *
 * To run a query within a React component, call `useSearchItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchItemsQuery({
 *   variables: {
 *      containsFilter: // value for 'containsFilter'
 *      hasAnyKeysFilter: // value for 'hasAnyKeysFilter'
 *   },
 * });
 */
export function useSearchItemsQuery(baseOptions?: Apollo.QueryHookOptions<SearchItemsQuery, SearchItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchItemsQuery, SearchItemsQueryVariables>(SearchItemsDocument, options);
      }
export function useSearchItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchItemsQuery, SearchItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchItemsQuery, SearchItemsQueryVariables>(SearchItemsDocument, options);
        }
export type SearchItemsQueryHookResult = ReturnType<typeof useSearchItemsQuery>;
export type SearchItemsLazyQueryHookResult = ReturnType<typeof useSearchItemsLazyQuery>;
export type SearchItemsQueryResult = Apollo.QueryResult<SearchItemsQuery, SearchItemsQueryVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
