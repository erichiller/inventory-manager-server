import * as Types from '../../lib/types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export type SendBufferMutationVariables = Types.Exact<{
  buffer: Array<Types.Maybe<Array<Types.Maybe<Array<Types.Maybe<Types.Scalars['uint8']>> | Types.Maybe<Types.Scalars['uint8']>>> | Types.Maybe<Array<Types.Maybe<Types.Scalars['uint8']>> | Types.Maybe<Types.Scalars['uint8']>>>> | Types.Maybe<Array<Types.Maybe<Array<Types.Maybe<Types.Scalars['uint8']>> | Types.Maybe<Types.Scalars['uint8']>>> | Types.Maybe<Array<Types.Maybe<Types.Scalars['uint8']>> | Types.Maybe<Types.Scalars['uint8']>>>;
}>;


export type SendBufferMutation = (
  { __typename?: 'mutation_root' }
  & { putLabelMonochromeBuffer?: Types.Maybe<(
    { __typename?: 'OperationResult' }
    & Pick<Types.OperationResult, 'result'>
  )> }
);


export const SendBufferDocument = gql`
    mutation SendBuffer($buffer: [[[uint8]]]!) {
  putLabelMonochromeBuffer(imageBuffer: $buffer) {
    result
  }
}
    `;
export type SendBufferMutationFn = Apollo.MutationFunction<SendBufferMutation, SendBufferMutationVariables>;

/**
 * __useSendBufferMutation__
 *
 * To run a mutation, you first call `useSendBufferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendBufferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendBufferMutation, { data, loading, error }] = useSendBufferMutation({
 *   variables: {
 *      buffer: // value for 'buffer'
 *   },
 * });
 */
export function useSendBufferMutation(baseOptions?: Apollo.MutationHookOptions<SendBufferMutation, SendBufferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendBufferMutation, SendBufferMutationVariables>(SendBufferDocument, options);
      }
export type SendBufferMutationHookResult = ReturnType<typeof useSendBufferMutation>;
export type SendBufferMutationResult = Apollo.MutationResult<SendBufferMutation>;
export type SendBufferMutationOptions = Apollo.BaseMutationOptions<SendBufferMutation, SendBufferMutationVariables>;
// graphql typescript defs generated on 2021-06-29T07:28:15-06:00
