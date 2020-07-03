import React, { useState, useEffect, ReactElement } from "react";
import { IQuery, ClassType, SubType, FilterFlags, QueryResultTypePlus, Union } from "~lib/UtilityFunctions";
import { useGetVendorItemQuery, GetVendorItemQueryVariables, GetVendorItemQuery, useGetVendorQuery} from "~lib/types/graphql";
import { message, Spin } from "antd";
import { IconComponentT } from "~lib/item/Item";
import { BaseQueryOptions } from "react-apollo";
import { Vendor } from "~lib/Vendor/Vendor";

type Class = { new( ...args: any[] ): any; };

type TClassProvidingQuery<T extends Class, TQuery = {}, TVariables = {}> = T & { useQuery: IQuery<TQuery, TVariables>; };

type TClassProvidingInstanceWithIcon<T extends Class, I extends { icon: IconComponentT; } = InstanceType<T>> = { new( ...args: any[] ): I; };

interface AsyncIconProps<
    TQuery, 
    TVariables extends InstanceType<TClass>[ FilterFlags<keyof TClass, string> ], 
    TClass extends Union<TClassProvidingQuery<Class, TQuery, TVariables>, TClassProvidingInstanceWithIcon<Class>>,
    // TInstance extends InstanceType<TClass> = InstanceType<TClass>
     > {
    // query: IQuery<TQuery, TVariables>;
    vars: TVariables;
    cls: TClass;
    cb: IconComponentT<{obj: InstanceType<TClass>}>;
        
        // QueryResultTypePlus<IQuery<TQuery, TVariables>>
    // cls: ClassType<TClass, { useQuery: IQuery<TQuery, TVariables>}>;
}


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


// type TIconProvidingClass = { icon: IconComponentT; };

/**
 * Retrieve icon from query
 * @param props xxxx
 */
export function AsyncIcon<
    TQuery, 
    TVariables extends BaseQueryOptions[ 'variables' ] & InstanceType<TClass>[ FilterFlags<keyof InstanceType<TClass>, string>], 
    TClass extends Union<TClassProvidingQuery<Class, TQuery, TVariables>, TClassProvidingInstanceWithIcon<Class>>,

> ( props: AsyncIconProps<TQuery, TVariables, TClass> ) {

    // return <Spin />


    console.log({c: 'AsyncIcon', e: 'init', cls: props.cls, id: props.vars['id'], vars: props.vars})
    if ( ! props.vars['id'] ) {
        console.warn("AsyncIcon missing required id in ", props.vars)
        return null;
    }
    const { data, error, loading } = props.cls.useQuery( {
        variables: props.vars
    })

    // const { data, error, loading } = useGetVendorQuery({
    //     variables: props.vars as any
    // })
    
    const [ cls, setClass ] = useState<InstanceType<TClass>>();
    
    useEffect( () => {
        if ( data && !loading && !error && !cls ) {
            console.log( "AsyncIcon creating new", props.cls, " with data", data )
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

//     const data... = useGetIconForVendorIdQuery( props.id );
// ...
// if ( !data ) { return null; }
// return <img src=data... />

// }


// let foo = useGetVendorItemQuery


// class FooClass {

//     constructor ( a: string, b: number){
        
//     }

//     instance_prop: string;
//     static static_prop: number;
// }

// let tt: ConstructorParameters<typeof FooClass>;

// let t2: ClassType<FooClass> = FooClass;
// let t3: ClassType2<FooClass> = FooClass;

// t2;





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