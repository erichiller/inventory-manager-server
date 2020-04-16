
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

/** Returns Type that is the result of the Query , this is the type when fully unpacked, the result of the GraphQL query. */
export type QueryResultTypePlus<Q extends IQuery> = Unpacked<Exclude<ReturnType<Q>[ 'data' ], undefined>[ QueryResultReturnKey<Q> ]>;



export type PropertyTypeMatch<T, M> = Pick<T, {
    [ K in keyof T ]: T[ K ] extends M ? K : never
}[ keyof T ]>;

