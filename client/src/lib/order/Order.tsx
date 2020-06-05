
import {
    Order as OrderGql,
    Icon,
    Label,
    OrderSelectColumn,
    GetOrderQueryVariables,
    GetOrderDocument,
    GetOrderQuery,
    Scalars,
    Maybe,
    OrderItem,
    OrderItemAggregate,
    PaymentMethod,
    Shipment,
    ShipmentAggregate,
    Vendor
} from "../types/graphql";

import { Integer } from '../types/uint8';

import { apolloClient } from '../../index';
import { message, Tooltip } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, Union, Unpacked, enumerable, ObjectColumnProperty } from "../UtilityFunctions";
import { CodeIcon } from "../../styles/icon";
import { FormInstance } from "antd/lib/form";
import { resolve } from "url";
import { rejects } from "assert";
import { CategoryHierarchyT, IconComponentT, FormMutationHandler } from "../item/Item";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface OrderDataProps extends Pick<OrderGql,
    '__typename' |
    'id' |
    'fulfilled_date' |
    // 'items' |
    // 'payment_method' |
    'payment_method_id' |
    'placed_date' |
    'pon' |
    // 'shipments' |
    'items_cost' |
    'tax_cost' |
    'total_cost' |
    'url' |
    // 'vendor' |
    'vendor_id' |
    'vendor_order_id'
    > {
    // nothing to add
}


export class Order implements OrderDataProps {
    __typename: 'order' = 'order';

    id: Scalars[ 'Int' ];
    fulfilled_date?: Maybe<Scalars[ 'date' ]>;
    items: Array<OrderItem>;
    items_aggregate: OrderItemAggregate;
    items_cost: Scalars[ 'money' ];
    payment_method?: Maybe<PaymentMethod>;
    payment_method_id?: Maybe<Scalars[ 'Int' ]>;
    placed_date: Scalars[ 'date' ];
    pon?: Maybe<Scalars[ 'String' ]>;
    shipments: Array<Shipment>;
    shipments_aggregate: ShipmentAggregate;
    tax_cost: Scalars[ 'money' ];
    total_cost: Scalars[ 'money' ];
    url?: Maybe<Scalars[ 'String' ]>;
    vendor: Vendor;
    vendor_id: Scalars[ 'Int' ];
    vendor_order_id: Scalars[ 'String' ];

    // order: OrderGql;


    constructor ( props: Partial<OrderDataProps> ) {
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.order = props;
        this.id = props.id;
        console.log( "Order class created with\n\tprops: \n", props, "\n\tand is currently:\n", this );
    }

    static [ Symbol.hasInstance ] ( instance: object ) {
        // TODO: apply to other Order subclasses
        // TODO: use `constructor.name` ??
        if ( '__typename' in instance && instance[ '__typename' ] === 'order' ) {
            return true;
        }
        return false;
    }

    static async OrderFactory<Q extends typeof GetOrderDocument> ( variables: GetOrderQueryVariables, query: Q = GetOrderDocument as Q ): Promise<Order> {

        return new Promise( ( resolve, reject ) => apolloClient.query<GetOrderQuery, GetOrderQueryVariables>( {
            query: query,
            variables: {
                id: variables.id
            }
        } ).then( result => {
            console.log( { _cls: "Order", method: 'OrderFactory', msg: "loading order from GraphQL", order_data: result } );
            const data = result.data.order;
            let order = new Order( result.data.order );
            // it._name = result.data.object?.main ? result.data.object.name : "";
            // this._class = result.data.object;
            // this._object = result.data.object;
            resolve( order );
            // message.info( `Saved Successfully` );
        } ).catch( error => {
            const msg = `Failure loading order ${ variables.id }: ${ error }`;
            console.error( msg );
            message.error( msg );
            reject( error );
            // } ).finally( () => {
            // props.visibleHandler( null );
        } ) );
    }

    /**
     * The GraphQL `__typename`
     */
    get class (): 'order' {
        return this.__typename;
    }
    /**
     * Returns self as a simple object. `get prop(): string` converted to `{ prop: string }`
     */
    get simpleObject (): OrderDataProps {
        let simpleObject: { [ key: string ]: any; } = {};
        for ( let propertyKey in this ) {
            simpleObject[ propertyKey ] = this[ propertyKey ];
        }
        return simpleObject as OrderDataProps;
    }

    // @enumerable( true )
    // get name (): string {
    //     if ( this._name ) {
    //         return this._name;
    //     }
    //     else if ( this._object && this._object.hasOwnProperty( "name" ) ) {
    //         return this._object[ 'name' ];
    //     }
    //     else {
    //         // should this warn?
    //         return "";
    //     }
    // }
    // set name ( nameVal: string ) {
    //     this._name = nameVal;
    // }



    // static get categories (): CategoryHierarchyT[] {
    //     // TODO: this needs to calculate on the fly from `class`
    //     return [ "Order" ];
    // }
    // get categories (): CategoryHierarchyT[] {
    //     return [ "Order" ];
    // }

    // /**
    //  * All possible order classes / types
    //  */
    // static get ClassTypes (): Array<keyof typeof EnumOrderClassEnum> {
    //     return Object.keys( EnumOrderClassEnum ) as Array<keyof typeof EnumOrderClassEnum>;
    // }


    // // static _ClassTypes: Partial< IEnumOrderMap< OrderExtender<any> > > = {};
    // static _ClassTypes: IEnumOrderMap;

    // static RegisterClassType<T extends { new( ...args: any[] ): InstanceType<T>; }> (
    //     orderClass: OrderGqlTypename,
    //     typeClass: T
    // ) {
    //     Order._ClassTypes = {
    //         ...Order._ClassTypes,
    //         ...Object.fromEntries( [ [ orderClass.toLowerCase(), typeClass ] ] )
    //     };
    // }

    /**
     * Return the class for an input GraphQL `__typename`
     * @param orderTypename The GraphQL type for an Order class, this is what is found in `__typename` and is of the form `order_category1_category2_classname`
     */
    // public static getClassForType ( orderTypename: OrderGqlTypename ): typeof Order {
    //     let orderClassLowerCase = orderTypename.toLowerCase();
    //     // console.log( { class: 'Order', method: 'getClassForType', classTypes: Order._ClassTypes, lookup_key: orderClass } );
    //     // if ( orderClassLowerCase === "order" ) {
    //     //     return Order;
    //     // }
    //     return Order._ClassTypes[ orderClassLowerCase ];
    // }

    static get icon (): IconComponentT {
        // return new Promise<IconComponentT>( ( resolve, reject ) => {
        // resolve( CodeIcon );
        // });
        // return new Promise( ( resolve, reject ) => resolve(CodeIcon) );
        return ShoppingCartOutlined as IconComponentT;
    }

    // get dothings () {
    //     // return <img />;
    //     apolloClient.query<Icon, GetIconQueryVariables>( {
    //         query: GetIconDocument,
    //         variables: { id: 'REPLACE WITH UUID' }
    //     } ).then( result => {
    //         message.info( `Saved Successfully` );
    //     } ).catch( error => {
    //         console.log( "MUTATE ERROR", error );
    //         message.error( `Failure during save: ${ error }` );
    //     } )
    //     // .finally( () => {
    //     //     // props.visibleHandler( null );
    //     // } );
    //     const result = apolloClient.query<Icon, GetIconQueryVariables>( {
    //         query: GetIconDocument,
    //         variables: { id: 'REPLACE WITH UUID' }
    //     } );
    //     return result;
    // }

    // callDoThings () {
    //     return (await this.dothings).data.data;
    // }

    /**
     * common lookup of icon;
     * returns dataurl ( SVG )
     */
    get icon (): IconComponentT {
        // return <img />;
        // apolloClient.query<Icon, GetIconQueryVariables>( {
        //     query: GetIconDocument,
        //     variables: {id: 'REPLACE WITH UUID'}
        // } ).then( result => {
        //     message.info( `Saved Successfully` );
        // } ).catch( error => {
        //     console.log( "MUTATE ERROR", error );
        //     message.error( `Failure during save: ${ error }` );
        // } ).finally( () => {
        //     // props.visibleHandler( null );
        // } );
        // return new Promise( (result, reject) => apolloClient.query<Icon, GetIconQueryVariables>( {
        //     query: GetIconDocument,
        //     variables: { id: 'REPLACE WITH UUID' }
        // } ) ).then( result => {
        //     return CodeIcon;
        // });
        // return result;
        // .then( result => { return () => <img src={result.data.data} />; } );
        /**
         * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         * 
         * SUBCRIBE TO CACHE UPDATES HERE
         * 
         * THE CONSTRUCTOR SHOULD TAKE IN THE RESULT OF THE QUERY.
         * NO QUERIES SHOULD TAKE PLACE HERE
         * 
         * SEE:
         * https://www.apollographql.com/docs/react/api/apollo-client/#apolloclient-functions
         * https://www.apollographql.com/docs/react/api/apollo-client/#ObservableQuery
         * 
         */
        // return Order.icon;
        // return Order<T>.getClassForType( this._class ).icon;
        return Order.icon;
    }
    // get iconMatches (): Icon[] {
    //     return null;
    // }
    // get icons (): React.ReactElement[] {
    //     return null;
    // }
    // get labelTemplate (): Label {
    //     return null;
    // }
    // get labelTemplateMatches (): Label[] {
    //     return null;
    // }
    // get labelTemplates (): Label[] {
    //     return null;
    // }
    /**
     * Props which should be included in label (default) 
     * Optionally defined on subclasses
     */
    get labelProps (): Array<keyof Order> {
        return Object.keys( this ) as Array<keyof Order>;
    }
    // static get labelProps (): Array<string> {
    //     console.log( {keysOfThisCls: Object.keys( this ), keysOfOrderCls: Object.keys(Order) });
    //     return Object.keys( this ) as Array<Extract<keyof GenericOrder, string>>;
    // }
    /**
     * Props to use as display columns (default)
     * Ordered
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<ObjectColumnProperty<Order>>[] {
        // TODO: order columns sensibly
        // let cols: ColumnProps<Order>[] = ( [ ...Object.keys( OrderSelectColumn ), 'name' ].filter(
        //     key => [ "OBJECT" ].includes( key ) ? false : key ).map(
        //         // key => [ "ID" ].includes( key ) ? false : key ).map(
        //         key => {
        //             return {
        //                 key: key,
        //                 title: toTitleCase( key ),
        //                 dataIndex: OrderSelectColumn[ key ] ?? key,
        //             };
        //         } ) );
        const keys: ObjectColumnProperty<Order>[] = [
            'id',
            [ 'vendor', 'name'],
            'vendor_order_id',
            'placed_date',
            'fulfilled_date',
            'total_cost',
        ];
        const cols: ColumnProps<ObjectColumnProperty<Order>>[] = keys.map( key => {
            if ( typeof key === 'string' ) {
                return {
                    key: key,
                    title: toTitleCase( key ),
                    dataIndex: OrderSelectColumn[ key ] ?? key,
                } as ColumnProps<ObjectColumnProperty<Order>>;
            }

            if ( Array.isArray(key) ) {
                return {
                    key: `${key[0]}_${key[1]}`,
                    title: toTitleCase( `${ key[ 0 ] }_${ key[ 1 ] }` ),
                    dataIndex: key,
                } as ColumnProps<ObjectColumnProperty<Order>>;
            }
            if ( typeof key === 'object' ) {
                return key as ColumnProps<ObjectColumnProperty<Order>>;
            }
        } );
        return cols;
    }
    get Columns (): ColumnProps<ObjectColumnProperty<Order>>[] {
        return Order.Columns;
    }
    /**
     * Props which should be included in search (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get searchProps (): ( keyof Order )[] {
        return null;
    }
    /**
     * Props which should be filterable in table (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get filterProps (): ( keyof Order )[] {
        return null;
    }
    /**
     * Props which should be sortable in table (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get sortProps (): ( keyof Order )[] {
        return null;
    }
    /**
     * Props to default to in QR Code (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get defaultQrProps (): ( keyof Order )[] {
        return null;
    }

    // TODO: am I actually using this ??
    get tableRowComponent (): React.FC {
        return null;
    }
    /**
     * Form to add Order
     */
    static get addComponent (): React.FC {
        return null;
    }
    /**
     * addHandler process and sends mutation to graphql
     */
    static get addHandler (): React.FC<FormMutationHandler> {
        return null;
    }
    /**
     * Form to edit Order
     */
    get editComponent (): React.FC {
        return null;
    }
    /**
     * editHandler process and sends mutation to graphql
     */
    get editHandler (): React.FC<FormMutationHandler> {
        return null;
    }
    /**
     * editFormInitialValues control what data is loaded into edit form upon render
     */
    get editFormInitialValues (): OrderDataProps {
        return null;
    }
    /**
     * Single, detailed view
     */
    get detailComponent (): React.FC {
        return null;
    }

    /**
     * Component displayed when order moused over in Table
     * Default is to display all properties EXCEPT `_object`
     */
    get mouseOverRowComponent (): React.FC {
        // TODO: use for ... in so that enumerable properties are shown
        return ( props ) => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key, value ] ) => key !== '_object' ) ), null, 2 )}</pre>;
    }

    // get bundle (): Order {
    //     return null;
    // }

}
