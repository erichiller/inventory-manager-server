import React, { useState, useEffect, ReactElement } from "react";
import { IQuery, ClassType, SubType, FilterFlags, QueryResultTypePlus, Intersection } from "~lib/UtilityFunctions";
import { message, Spin } from "antd";
import { IconComponentT } from "~lib/types/common";


type Class = { new( ...args: any[] ): any; };

type TClassProvidingQuery<T extends Class, TQuery = {}, TVariables = {}> = T & { useQuery: IQuery<TQuery, TVariables>; };

type TClassProvidingInstanceWithIcon<T extends Class, I extends { icon: IconComponentT; } = InstanceType<T>> = { new( ...args: any[] ): I; };

interface AsyncIconProps<
    TQuery, 
    TVariables extends InstanceType<TClass>[ FilterFlags<keyof TClass, string> ], 
    TClass extends Intersection<TClassProvidingQuery<Class, TQuery, TVariables>, TClassProvidingInstanceWithIcon<Class>>,
     > {
    vars: TVariables;
    cls: TClass;
    cb: IconComponentT<{obj: InstanceType<TClass>}>;
}

// CREATETEST
// let query_class: TClassProvidingQuery<typeof Vendor>;
// let instance_class: TClassProvidingInstanceWithIcon<typeof Vendor>;

// query_class.useQuery;
// new instance_class().icon;

// let full_t: Union<TClassProvidingQuery<typeof Vendor>, TClassProvidingInstanceWithIcon<Class>> = Vendor;

// full_t.useQuery;
// new full_t({id: 4}).icon;

// // let var_t: Vendor [FilterFlags<keyof Vendor, string> ] = Vendor;

// let f = needvar(Vendor);

// function needvar<TClass extends Union<TClassProvidingQuery<Class>, TClassProvidingInstanceWithIcon<Class>>>(input: TClass ): keyof InstanceType<TClass> {
//     return null;
// }



/**
 * Retrieve icon from query
 * @param props xxxx//TODO
 */
export function AsyncIcon<
    TQuery, 
    TVariables extends Partial<Pick<InstanceType<TClass>, FilterFlags<keyof InstanceType<TClass>, string> > >, 
    TClass extends Intersection<TClassProvidingQuery<Class, TQuery, TVariables>, TClassProvidingInstanceWithIcon<Class>>,

> ( props: AsyncIconProps<TQuery, TVariables, TClass> ) {
    // console.log({c: 'AsyncIcon', e: 'init', cls: props.cls, id: props.vars['id'], vars: props.vars})
    if ( ! props.vars['id'] ) {
        console.warn("AsyncIcon missing required id in ", props.vars)
        return null;
    }
    const { data, error, loading } = props.cls.useQuery( {
        variables: props.vars
    })
    const [ cls, setClass ] = useState<InstanceType<TClass>>();
    
    useEffect( () => {
        if ( data && !loading && !error && !cls ) {
            // console.log( "AsyncIcon creating new", props.cls, " with data", data )
            setClass(new props.cls( data ));
        }
    }, [ data, loading, error]);

    useEffect( () => {
        if ( error ) {
            message.error(error.message)
        }
    })

    if ( ! cls ){
        return <Spin />
    }
    return <props.cb obj={cls} />
};


// CREATETEST
// myFunction(Vendor, [ 3 ]);

// let foo: StaticProperties<typeof Vendor>;

// // function myFunction<
// //     T extends new (...args: any[] ) => any,
// //     I extends InstanceType < T >,
// //     Q extends IQuery < any, ConstructorParameters < T >>
// //     > ( type: T, inputs: ConstructorParameters<T> ) {
// //     let i: I = new type(inputs);
// // }

// type StaticProperties<
//     // I extends InstanceType<T>,
//     T extends new ( ...args: any ) => any
//     > = keyof T;


// function myFunction<
//     T extends new ( ...args: any ) => any,
//     I extends InstanceType<T>,
//     Q extends IQuery<any, ConstructorParameters<T>>
// > ( type: I, inputs: ConstructorParameters<T> ): I {
//     let i: I = new type( inputs );
//     return i;
// }