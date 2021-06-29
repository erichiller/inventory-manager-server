import * as Types from '../../lib/types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type GetPrinterStatusQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetPrinterStatusQuery = (
  { __typename?: 'query_root' }
  & { PrinterStatus?: Types.Maybe<(
    { __typename?: 'PrinterStatus' }
    & Pick<Types.PrinterStatus, 'labelType' | 'heightInch'>
    & { labelStatus: (
      { __typename?: 'PrinterLabelStatus' }
      & Pick<Types.PrinterLabelStatus, 'mediaType' | 'tapeColor' | 'textColor'>
      & { labelCharacteristic?: Types.Maybe<(
        { __typename?: 'LabelCharacteristic' }
        & Pick<Types.LabelCharacteristic, 'pinsRight' | 'pinsPrint' | 'pinsLeft' | 'widthMillimeters'>
      )> }
    ) }
  )> }
);


export const GetPrinterStatusDocument = gql`
    query GetPrinterStatus {
  PrinterStatus {
    labelType
    heightInch
    labelStatus {
      mediaType
      tapeColor
      textColor
      labelCharacteristic {
        pinsRight
        pinsPrint
        pinsLeft
        widthMillimeters
      }
    }
  }
}
    `;

/**
 * __useGetPrinterStatusQuery__
 *
 * To run a query within a React component, call `useGetPrinterStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrinterStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrinterStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPrinterStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>(GetPrinterStatusDocument, options);
      }
export function useGetPrinterStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>(GetPrinterStatusDocument, options);
        }
export type GetPrinterStatusQueryHookResult = ReturnType<typeof useGetPrinterStatusQuery>;
export type GetPrinterStatusLazyQueryHookResult = ReturnType<typeof useGetPrinterStatusLazyQuery>;
export type GetPrinterStatusQueryResult = Apollo.QueryResult<GetPrinterStatusQuery, GetPrinterStatusQueryVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
