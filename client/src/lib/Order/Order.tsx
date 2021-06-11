
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
    Vendor
} from "../types/graphql";



import { apolloClient } from '~/Apollo';
import { message } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, ObjectColumnProperty } from "~lib/UtilityFunctions";
import { FormMutationHandler } from "../Item/Item";
import { IconComponentT } from "~lib/types/common";
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
    vendor: Vendor;
    vendor_id: Scalars[ 'Int' ];
    vendor_order_id: Scalars[ 'String' ];

    // order: OrderGql;

    constructor ( props: Partial<OrderDataProps> ) {
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

    static get icon (): IconComponentT {
        return ShoppingCartOutlined as IconComponentT;
    }

    /**
     * common lookup of icon;
     * returns dataurl ( SVG )
     */
    get icon (): IconComponentT {
        return Order.icon;
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
    static get Columns (): ColumnProps<ObjectColumnProperty<Order>>[] {
        // TODO: order columns sensibly
        // TODO: use the same logic as within `ItemHardwareFastenerScrewMachine` for `Columns` generation
        // TODO: `<Link>` for Vendor in table. using `render: () => {}`
        const keys: ObjectColumnProperty<Order>[] = [
            'id',
            [ 'vendor', 'name'],
            'vendor_order_id',
            'placed_date',
            'fulfilled_date',
            // [ 'order_items', 'length' ],
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

            if ( Array.isArray( key ) ) {
                // if ( key[1] === 'length' ){
                //     keyname = `# ${key[0]}`;
                // }
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
        // TODO: add number of items on order column
        // cols.push( {
        //     key: `order_items_length`,
        //     title: '# Items',
        //     render: x => {
        //         console.log(x);
        //         return Array.isArray( x ) ? x.length : null
        //     },
        //     dataIndex: 'order_items'
        // } );
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
        return ( ) => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key ] ) => key !== '_object' ) ), null, 2 )}</pre>;
    }

    // get bundle (): Order {
    //     return null;
    // }

}
