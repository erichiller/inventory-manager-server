
import type {
    Scalars,
    Vendor as VendorGql,
} from "../types/graphql";
import {
    GetShipmentsQueryHookResult,
    GetShipmentQueryVariables,
    GetShipmentDocument,
    GetShipmentQuery,
    useGetShipmentQuery,
} from "~components/Shipment/Shipment.ops";

import { Integer } from '../types/uint8';

import { apolloClient } from '~/Apollo';
import { message } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { makeColumn } from "~lib/UtilityFunctions";
import { FormMutationHandler } from "../Item/Item";
import { IconComponentT } from "~lib/types/common";
import { ShopOutlined, WarningOutlined } from "@ant-design/icons";
import { ApolloQueryResult } from '@apollo/client/core';
import { AsyncIcon } from "~components/Shared/AsyncIcon";

interface ShipmentDataProps extends Pick<ApolloQueryResult<GetShipmentQuery>['data']['shipment'],
    '__typename' |
    'order_id' |
    'vendor_invoice_id' |
    'shipped_date' |
    'received_date' |
    'tracking_id' |
    'carrier_vendor_id'
    > {
    // nothing to add
}

type ShipmentsGql = GetShipmentsQueryHookResult[ 'data' ][ 'shipment' ];


export class Shipment implements ShipmentDataProps {

    __typename: 'shipment' = 'shipment';
    id: Integer;
    order_id?: Integer;
    // shipment?: Maybe<Shipment>;
    vendor_invoice_id: string;
    shipped_date?: Scalars[ 'date' ];
    received_date: Scalars[ 'date' ];
    tracking_id: string;
    carrier_vendor_id: Integer;
    carrier: VendorGql;

    constructor ( props: Partial<ApolloQueryResult<GetShipmentQuery>[ 'data' ][ 'shipment' ]> ) {
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.Shipment = props;
        // this.id = props.id;
        for( let key in props ){
            this[key] = props[key];
        }
        console.log( "Shipment class created with\n\tprops: \n", props, "\n\tand is currently:\n", this );
    }

    static [ Symbol.hasInstance ] ( instance: object ) {
        // TODO: apply to other Shipment subclasses
        // TODO: use `constructor.name` ??
        if ( '__typename' in instance && instance[ '__typename' ] === 'shipment' ) {
            return true;
        }
        return false;
    }

    static async ShipmentFactory<Q extends typeof GetShipmentDocument> ( variables: GetShipmentQueryVariables, query: Q = GetShipmentDocument as Q ): Promise<Shipment> {
        return new Promise( ( resolve, reject ) => apolloClient.query<GetShipmentQuery, GetShipmentQueryVariables>( {
            query: query,
            variables: {
                id: variables.id
            }
        } ).then( result => {
            console.log( { _cls: "Shipment", method: 'ShipmentFactory', msg: "loading Shipment from GraphQL", shipment_data: result } );
            let shipment = new Shipment( result.data.shipment );
            // it._name = result.data.object?.main ? result.data.object.name : "";
            // this._class = result.data.object;
            // this._object = result.data.object;
            resolve( shipment );
            // message.info( `Saved Successfully` );
        } ).catch( error => {
            const msg = `Failure loading Shipment ${ variables.id }: ${ error }`;
            console.error( msg );
            message.error( msg );
            reject( error );
            // } ).finally( () => {
            // props.visibleHandler( null );
        } ) );
    }

    /**
     * Return an array of `Shipment`s from input Gql results
     * @param results Output from `GetShipment` GraphQL query (`data` property)
     */
    static ItemsFactory ( results: ShipmentsGql ): Array<Shipment> {
        return results.map( shipmentGql => new Shipment( shipmentGql ) );
    }
    static useQuery = useGetShipmentQuery;

    /**
     * The GraphQL `__typename`
     */
    get class (): 'shipment' {
        return this.__typename;
    }
    /**
     * Returns self as a simple object. `get prop(): string` converted to `{ prop: string }`
     */
    get simpleObject (): ShipmentDataProps {
        let simpleObject: { [ key: string ]: any; } = {};
        for ( let propertyKey in this ) {
            simpleObject[ propertyKey ] = this[ propertyKey ];
        }
        return simpleObject as ShipmentDataProps;
    }


    static get icon (): IconComponentT {
        // return new Promise<IconComponentT>( ( resolve, reject ) => {
        // resolve( CodeIcon );
        // });
        // return new Promise( ( resolve, reject ) => resolve(CodeIcon) );
        return ShopOutlined as IconComponentT;
    }

    /**
     * common lookup of icon;
     * returns dataurl ( SVG )
     */
    get icon (): IconComponentT {
        // TODO: better way to retrieve and store icons ?
        // read `<link rel="shortcut icon" type="image/ico" href="/Content/Images/Global/Xtras/favicon.gif" />` from index.html `<head>` ?
        // return () => <img className="vendorIcon" src={`${ this.url }/favicon.ico`} />;
        // console.log( "Vendor: rendering AsyncIcon with `this` of", this );
        if ( !this.id ) {
            console.warn( "Vendor missing required id in ", this );
            return () => < WarningOutlined />;
        }
        return () => {
            console.log( "Shipment Callback: rendering AsyncIcon with this of", this );
            return <AsyncIcon cls={Shipment} vars={{ id: this.id }} cb={
                // ( ) => <img className="vendorIcon" src={`${ this.url }/favicon.ico`} />
                ( props: { obj: Shipment; } ) => <img className="shipmentIcon" src={`${ props.obj.carrier.url }/favicon.ico`} />
            } />;
        };
    }
    /**
     * Props which should be included in label (default) 
     * Optionally defined on subclasses
     */
    get labelProps (): Array<keyof Shipment> {
        return Object.keys( this ) as Array<keyof Shipment>;
    }
    /**
     * Props to use as display columns (default)
     * Shipmented
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<Shipment>[] {
        return makeColumn(
            [
                {
                    key: 'icon',
                    title: '',
                    render: ( text, record: Shipment ) => { 
                        console.log( { q: 'render icon ?', record, icon: record.icon } ); 
                        return ( record.icon === null ? null : < record.icon /> ); 
                    }
                },
                'order_id',             // LINK
                'vendor_invoice_id',
                'shipped_date',         // DATE
                'received_date',        // DATE
                'tracking_id',
                'carrier_vendor_id',
                {
                    key: 'id',
                    responsive: [ 'xl' ],
                },
                // {
                //     key: 'name',
                //     sorter: sortByCaseInsensitiveText( 'name' ),
                //     render: ( text, record: Shipment ) => {
                //         return ( record.url === null ? record.name : <a href={record.url}>{record.name}</a> );
                //     }
                // },
                // ['carrier', 'name']
                {
                    key: ['carrier', 'name'],
                    // sorter: sortByCaseInsensitiveText( ['carrier', 'name' ])
                }
                // {
                //     // TODO: Make this a link to the vendor.
                //     key: 'carrier',
                //     title: 'Carrier',
                //     responsive: ['lg'],
                //     render: ( text, record: Shipment ) => {
                //         return ( record.vendor_id ? <CheckOutlined /> : null )
                //     }
                // }
            ]
        );
    }
    get Columns (): ColumnProps<Shipment>[] {
        return Shipment.Columns;
    }
    /**
     * Props which should be included in search (default)
     * Shipmented
     * Optionally defined on subclasses
     */
    get searchProps (): ( keyof Shipment )[] {
        return null;
    }
    /**
     * Props which should be filterable in table (default)
     * Shipmented
     * Optionally defined on subclasses
     */
    get filterProps (): ( keyof Shipment )[] {
        return null;
    }
    /**
     * Props which should be sortable in table (default)
     * Shipmented
     * Optionally defined on subclasses
     */
    get sortProps (): ( keyof Shipment )[] {
        return null;
    }
    /**
     * Props to default to in QR Code (default)
     * Shipmented
     * Optionally defined on subclasses
     */
    get defaultQrProps (): ( keyof Shipment )[] {
        return null;
    }

    // TODO: am I actually using this ??
    get tableRowComponent (): React.FC {
        return null;
    }
    /**
     * Form to add Shipment
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
     * Form to edit Shipment
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
    get editFormInitialValues (): ShipmentDataProps {
        return null;
    }
    /**
     * Single, detailed view
     */
    get detailComponent (): React.FC {
        return null;
    }

    /**
     * Component displayed when Shipment moused over in Table
     * Default is to display all properties EXCEPT `_object`
     */
    get mouseOverRowComponent (): React.FC {
        // TODO: use for ... in so that enumerable properties are shown
        return ( ) => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key ] ) => key !== '_object' ) ), null, 2 )}</pre>;
    }

    // get bundle (): Shipment {
    //     return null;
    // }

}
