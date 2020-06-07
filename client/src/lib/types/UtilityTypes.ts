import { QueryHookOptions, QueryResult } from 'react-apollo';
import { EnumUnitEnum } from './graphql';


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

export type ObjectColumnProperty<T> = Partial<Extract<keyof T, string>> | [ keyof T, Extract<keyof T[ keyof T ], string> ];

export type EnumUnitKeys = keyof typeof EnumUnitEnum;




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
 * // `fooT` is now { a: string, d: string }
 * // `fooKT` is now ` 'a' | 'd' `
 * 
 * interface foo {
 *   a: string;
 *   b: number;
 *   c: string[];
 *   d: string;
 * }
 * 
 * type fooT = SubType<foo, string>;
 * type fooKT = keyof fooT ;
 */
export type SubType<Base, Condition> =
    Pick<Base, AllowedNames<Base, Condition>>;