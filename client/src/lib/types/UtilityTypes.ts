import { QueryHookOptions, QueryResult } from 'react-apollo';
import { EnumUnitEnum, Exact } from './graphql';


export type Union<A, B, C = {}, D = {}, E = {}, F = {}> = A & B & C & D & E & F;

/**
 * Type of Class (static side, with constructor, not instance type which can be determined with a normal `typeof <Class>`)
 * // FIX: static class properties do not work with this ; as `T` represents the instance type of `T`
 * @see {@link https://www.typescriptlang.org/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes Difference between the static and instance sides of classes}
 * @see {@link https://www.typescriptlang.org/docs/handbook/classes.html#static-properties Static Properties on Classes in TypeScript}
 */
export type ClassType<T, StaticProps = {}> = Union<
    // T, 
    StaticProps, // TODO: ideally this would be inferred automatically as the `static` properties of `T`
    new (...args: any[]) => T
>;

// export type ClassType2<T> = Union <
//     { [ K in keyof T ]: T[ K ] },
//     new (...args: any[]) => T
// >
// export interface ClassType2<T> {
//     { [ K in keyof T ]: T[ K ] }
// }

// export interface ClassType2 <T, A extends any[] > extends Function, keyof T { new(...args: A): T; }



/**
 * Return Type of elements within an Array
 */
export type Unpacked<T> =
    T extends ( infer U )[] ? U :
    T extends ( ...args: any[] ) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

/**
 * Replicate the type definition for a `useQuery...`
 * (alias) function useGetVendorItemQuery(
 * baseOptions?: ApolloReactHooks.QueryHookOptions<
 *      GetVendorItemQuery, GetVendorItemQueryVariables
 * >): ApolloReactCommon.QueryResult<
 * GetVendorItemQuery, Exact<{
    id: number;
}>>
 */
export type IQuery<TQuery, TVariables> = ( baseOptions?: QueryHookOptions<TQuery, TVariables> ) => QueryResult<TQuery, TVariables>;

export type QueryResultReturnKey<Q extends IQuery<any, any>> = keyof Omit<Exclude<ReturnType<Q>[ 'data' ], undefined>, '__typename'>;

/**
 * `Q` should be a query of the form `use...Query` from codegen.
 * Returns Type that is the result of the Query
 * This is the type when fully unpacked,
 * the result of the GraphQL query stored within `data.<typename>`
**/
export type QueryResultTypePlus<Q extends IQuery<any, any>> = Unpacked<Exclude<ReturnType<Q>[ 'data' ], undefined>[ QueryResultReturnKey<Q> ]>;



export type PropertyTypeMatch<T, M> = Pick<T, {
    [ K in keyof T ]: T[ K ] extends M ? K : never
}[ keyof T ]>;

export type ObjectColumnProperty<T> = Partial<Extract<keyof T, string>> | [ keyof T, Extract<keyof T[ keyof T ], string> ];


/**
 * EnumUnit as string literal
 */
export type EnumUnitKeys = keyof typeof EnumUnitEnum;

/**
 * Type with only certain keys made partial
 * @example
 * interface OriginalType {
 *     propA: string;
 *     propB?: number;
 *     propC: number;
 * }
 * type PartiallyPartialOriginalType = PartialPartial<OriginalType, 'propC'>;
 * // `PartiallyPartialOriginalType` is now:
 * // {
 * //     propA: string;
 * //     propB?: number;
 * //     propC?: number;
 * //     
 * // }
 */
export type PartialPartial<T, K extends keyof T> = Union<
    Omit<T, K>,
    Partial<Pick<T, K>>
>;



/**
 * if `Base[Key]` matches `Condition`, return `Key: Key`
 * else return `never`
 * 
 * @see {@link https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c}
 */
export type FilterFlags<Base, Condition> = {
    [ Key in keyof Base ]:
    Base[ Key ] extends Condition ? Key : never
};
/**
 * Effectively filters out keys that do not match `Condition`  
 * by  
 * Via {@link FilterFlags} - Gets keys or `never`  
 * Takes these keys and removes `never`
 */
export type AllowedNames<Base, Condition> =
    FilterFlags<Base, Condition>[ keyof Base ];
/**
 * Create a new type which has the properties of `Base` that match `Condition`
 * 
 * @example <caption>This example extracts properties of `foo` that have a value type of `string`</caption>
 *          // `fooT` is now { a: string, d: string }
 *          // `fooKT` is now ` 'a' | 'd' `
 *          interface foo {
 *              a: string;
 *              b: number;
 *              c: string[];
 *              d: string;
 *          }
 *          type fooT = SubType<foo, string>;
 *          type fooKT = keyof fooT ;
 */
export type SubType<Base, Condition> =
    Pick<Base, AllowedNames<Base, Condition>>;