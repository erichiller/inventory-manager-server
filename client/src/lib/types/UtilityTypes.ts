import { QueryHookOptions, QueryResult } from 'react-apollo';
export type Union<A, B> = A & B;

export type ClassType<T> = Union<keyof T, new () => T>;


/**
 * Return Type of elements within an Array
 */
export type Unpacked<T> =
    T extends ( infer U )[] ? U :
    T extends ( ...args: any[] ) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

export type IQuery = ( baseOptions?: QueryHookOptions<any, any> ) => QueryResult;

export type QueryResultReturnKey<Q extends IQuery> = keyof Omit<Exclude<ReturnType<Q>[ 'data' ], undefined>, '__typename'>;

/**
 * `Q` should be a query of the form `use...Query` from codegen.
 * Returns Type that is the result of the Query
 * This is the type when fully unpacked,
 * the result of the GraphQL query stored within `data.<typename>`
**/
export type QueryResultTypePlus<Q extends IQuery> = Unpacked<Exclude<ReturnType<Q>[ 'data' ], undefined>[ QueryResultReturnKey<Q> ]>;



export type PropertyTypeMatch<T, M> = Pick<T, {
    [ K in keyof T ]: T[ K ] extends M ? K : never
}[ keyof T ]>;

