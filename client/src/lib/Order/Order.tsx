
import {
    Order as OrderGql,
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
    Vendor as VendorGql,
    GetOrdersQueryHookResult
} from "../types/graphql";

import { apolloClient } from '~/Apollo';
import { message } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, ObjectColumnProperty, makeColumn, formatCurrency } from "~lib/UtilityFunctions";
import { FormMutationHandler } from "../Item/Item";
import { IconComponentT } from "~lib/types/common";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Vendor } from "~lib/Vendor/Vendor";

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

type OrdersGql = GetOrdersQueryHookResult[ 'data' ][ 'order' ];


export class Order implements OrderDataProps {

    __typename: 'order' = 'order';

    id: Scalars[ 'Int' ];
    fulfilled_date?: Maybe<Scalars[ 'date' ]>;
    order_items: Array<OrderItem>;
    items_aggregate: OrderItemAggregate;
    items_cost: Scalars[ 'numeric' ];
    payment_method?: Maybe<PaymentMethod>;
    payment_method_id?: Maybe<Scalars[ 'Int' ]>;
    placed_date: Scalars[ 'date' ];
    pon?: Maybe<Scalars[ 'String' ]>;
    shipments: Array<Shipment>;
    shipments_aggregate: ShipmentAggregate;
    tax_cost: Scalars[ 'numeric' ];
    total_cost: Scalars[ 'numeric' ];
    url?: Maybe<Scalars[ 'String' ]>;
    vendor: VendorGql;
    vendor_id: Scalars[ 'Int' ];
    vendor_order_id: Scalars[ 'String' ];
    order_items_aggregate: OrderItemAggregate;

    // order: OrderGql;

    constructor ( props: Partial<OrderDataProps> ) {
        this.id = props.id;
        
        // let inputData = ( ! ( 'order' in props ) ) ? props : props.order;
        let inputData = props;
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.Vendor = props;
        // this.id = props.id;
        for ( let key in inputData ){
            // console.log(`constructing vendor, ${key} = `, inputData[key]);
            this[ key ] = inputData[key];
        }
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
     * Return an array of `Order`s from input Gql results
     * @param results Output from `GetOrders` GraphQL query (`data` property)
     */
    static OrdersFactory ( results: OrdersGql ): Array<Order> {
        return results.map( orderGql => new Order( orderGql ) );
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

    static get icon (): IconComponentT {
        return ShoppingCartOutlined as IconComponentT;
    }

    /**
     * common lookup of icon;
     * returns dataurl ( SVG )
     */
    get icon (): IconComponentT {
        let vendorObj = new Vendor( this.vendor );
        console.debug( {cls: 'Order', f: 'get icon ()', vendorObj } );
        return vendorObj.icon;
    }
    /**
     * Props which should be included in label (default) 
     * Optionally defined on subclasses
     */
    get labelProps (): Array<keyof Order> {
        return Object.keys( this ) as Array<keyof Order>;
    }
    /**
     * Props to use as display columns (default)
     * Ordered
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<Order>[] {
        return makeColumn(
            [
                {
                    key: 'id',
                    responsive: [ 'xl' ],
                    width: 50,
                },
                {
                    key: 'icon',
                    title: '',
                    width: 50,
                    render: ( text, record: Order ) => { 
                        console.log( { q: 'render icon ?', record, icon: record.icon, iconExists: record.icon ? true : false , 
                            evald: ( record.icon ? < record.icon /> : null ) } ); 
                        return ( record.icon ? < record.icon /> : <span>x</span> ); 
                    }
                },
                {
                    key: [ 'vendor', 'name' ],
                    title: 'Vendor',
                    // sorter: sortByCaseInsensitiveText( 'name' ),
                    render: ( text, record: Order ) => {
                        return ( record.vendor?.url === null ? record.vendor.name : <a href={record.vendor.url}>{record.vendor.name}</a> );
                    }
                },
                {
                    key: 'vendor_order_id',
                    // responsive: [ 'xl' ],
                    // width: 50,
                    title: 'Order #',
                    render: ( text, record: Order ) => {
                        return ( record.url === null ? record.vendor_order_id : <a href={record.url}>{record.vendor_order_id}</a> );
                    }
                },
                { key: 'pon', title: 'PO #' },
                { 
                    key: 'total_cost', 
                    align: 'right',
                    width: 120,
                    render: text => `$${formatCurrency( text ) }` 
                },
                { key: 'placed_date' },
                { key: 'fulfilled_date' },
                { 
                    key: [ 'order_items_aggregate', 'aggregate', 'count' ],
                    title: '# Items'
                }
            ]
        );
    }
    
    get Columns (): ColumnProps<Order>[] {
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
        return ( ) => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key ] ) => key !== '_object' ) ), null, 2 )}</pre>;
    }

    // get bundle (): Order {
    //     return null;
    // }

}
