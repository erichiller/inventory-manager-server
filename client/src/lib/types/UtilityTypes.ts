import { QueryHookOptions, QueryResult, BaseQueryOptions } from 'react-apollo';
import { EnumUnitEnum, Exact } from './graphql';

//TODO: ideally there is some sort of 'variadic' type declaration where it wouldn't require & {} & {} ...
export type Intersection<A, B, C = {}, D = {}, E = {}, F = {}> = A & B & C & D & E & F;

/**
 * Type of Class (static side, with constructor, not instance type which can be determined with a normal `typeof <Class>`)
 * This includes the  
 * - constructor
 * - static methods, properties, and fields  
 * @description **NOTE** `InstanceType<ClassType<T>>` === `typeof new T()`
 * @see {@link https://www.typescriptlang.org/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes Difference between the static and instance sides of classes}
 * @see {@link https://www.typescriptlang.org/docs/handbook/classes.html#static-properties Static Properties on Classes in TypeScript}
 */
export type ClassType<
    T extends new ( ...args: any ) => any,
> = Intersection<
    T, 
    new (...args: ConstructorParameters<T>) => T
>;



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
 */
export type IQuery<TQuery, TVariables extends BaseQueryOptions['variables']> = ( baseOptions?: QueryHookOptions<TQuery, TVariables> ) => QueryResult<TQuery, TVariables>;

export type QueryResultReturnKey<Q extends IQuery<any, any>> = keyof Omit<Exclude<ReturnType<Q>[ 'data' ], undefined>, '__typename'>;

/**
 * `Q` should be a query of the form `typeof use...Query` from codegen.  
 * Returns Type that is the result of the Query  
 * This is the type when fully unpacked,  
 * ie. the result of the GraphQL query stored within `data.<typename>`  
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
export type PartialPartial<T, K extends keyof T> = Intersection<
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




/**
 * type of object and array wrapped in `{data: obj | array}`
 * @see {encapsulateChildObjectsIntoDataProp}
 */
export type TRecursiveDataWrap<Base> = 
    Base extends object ?
        {
            [Key in keyof Base]:
                Base[Key] extends Array<any>
                    // ? TRecursiveDataWrap<Base[Key]> 
                    // ? { data: Base[Key]} 
                    ? { data: Array<TRecursiveDataWrap<Unpacked<Base[Key]>>>;}
                    : Base[Key] extends object
                        ? { data: TRecursiveDataWrap< Base[Key] >; }
                        : Base[Key]
        } :
    Base extends Array<any> ?
        // Array<Unpacked<Base>>
        { data: Array<TRecursiveDataWrap<Unpacked<Base>>>; }
        // Array<TRecursiveDataWrap<Unpacked<Base>>>
        // TRecursiveDataWrap< Array< Unpacked<Base> > >
        : Base;


/**
 * Simple type which consists of only the keys of `T` that are `string`
 */
export type StringKeys<T> = Extract<keyof T, string>;


/**
 * Just like `Partial` but also could be `null`
 * complements `Maybe` of graphql codegen well as an "every property on object" version
 */
 export type PartialNullable<T> = { [P in keyof T]?: T[P] | undefined | null; };
