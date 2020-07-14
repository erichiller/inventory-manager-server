
import {
    GetManufacturersQueryHookResult,
    GetManufacturerQueryVariables,
    GetManufacturerDocument,
    GetManufacturerQuery,
    useGetManufacturerQuery,
} from "../types/graphql";

import { Integer } from '../types/uint8';


import { apolloClient } from '~/Apollo';
import { message } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { sortByCaseInsensitiveText, makeColumn } from "~lib/UtilityFunctions";
import { FormMutationHandler } from "~lib/Item/Item";
import { IconComponentT } from "~lib/types/common";
import { ShopOutlined, CheckOutlined, WarningOutlined } from "@ant-design/icons";
import { ApolloQueryResult } from "apollo-client";
import { AsyncIcon } from "~components/Shared/AsyncIcon";

import { FilterFlags } from "~lib/UtilityFunctions";


interface ManufacturerDataProps extends Pick<ApolloQueryResult<GetManufacturerQuery>['data']['manufacturer'],
    '__typename' |
    'id' |
    'name' |
    'url' |
    'vendor_id'
    > {
    // nothing to add
}

type ManufacturersGql = GetManufacturersQueryHookResult[ 'data' ][ 'manufacturer' ];


export class Manufacturer implements ManufacturerDataProps {

    __typename: 'manufacturer' = 'manufacturer';
    id: Integer;
    // manufacturer?: Maybe<Manufacturer>;
    name: string;
    // orders: Array<Order>;
    // orders_aggregate: OrderAggregate;
    url: string;
    vendor_id?: Integer;

    constructor ( props: Partial<ApolloQueryResult<GetManufacturerQuery>[ 'data' ][ 'manufacturer' ]> | Partial<ApolloQueryResult<GetManufacturerQuery>[ 'data' ]> ) {
        let inputData = ( !( 'manufacturer' in props ) ) ? props : props.manufacturer;
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.Manufacturer = props;
        // this.id = props.id;
        for ( let key in inputData ) {
            // console.log(`constructing vendor, ${key} = `, inputData[key]);
            this[ key ] = inputData[ key ];
        }
        console.log( "Manufacturer class created with\n\tprops: \n", inputData, "\n\tand is currently:\n", this );
    }

    static [ Symbol.hasInstance ] ( instance: object ) {
        // TODO: apply to other Manufacturer subclasses
        // TODO: use `constructor.name` ??
        if ( '__typename' in instance && instance[ '__typename' ] === 'manufacturer' ) {
            return true;
        }
        return false;
    }

    static async ManufacturerFactory<Q extends typeof GetManufacturerDocument> ( variables: GetManufacturerQueryVariables, query: Q = GetManufacturerDocument as Q ): Promise<Manufacturer> {
        return new Promise( ( resolve, reject ) => apolloClient.query<GetManufacturerQuery, GetManufacturerQueryVariables>( {
            query: query,
            variables: {
                id: variables.id
            }
        } ).then( result => {
            console.log( { _cls: "Manufacturer", method: 'ManufacturerFactory', msg: "loading Manufacturer from GraphQL", manufacturer_data: result } );
            let manufacturer = new Manufacturer( result.data.manufacturer );
            // it._name = result.data.object?.main ? result.data.object.name : "";
            // this._class = result.data.object;
            // this._object = result.data.object;
            resolve( manufacturer );
            // message.info( `Saved Successfully` );
        } ).catch( error => {
            const msg = `Failure loading Manufacturer ${ variables.id }: ${ error }`;
            console.error( msg );
            message.error( msg );
            reject( error );
            // } ).finally( () => {
            // props.visibleHandler( null );
        } ) );
    }

    /**
     * Return an array of `Manufacturer`s from input Gql results
     * @param results Output from `GetManufacturer` GraphQL query (`data` property)
     */
    static ItemsFactory ( results: ManufacturersGql ): Array<Manufacturer> {
        return results.map( manufacturerGql => new Manufacturer( manufacturerGql ) );
    }

    static useQuery = useGetManufacturerQuery;

    /**
     * The GraphQL `__typename`
     */
    get class (): 'manufacturer' {
        return this.__typename;
    }
    /**
     * Returns self as a simple object. `get prop(): string` converted to `{ prop: string }`
     */
    get simpleObject (): ManufacturerDataProps {
        let simpleObject: { [ key: string ]: any; } = {};
        for ( let propertyKey in this ) {
            simpleObject[ propertyKey ] = this[ propertyKey ];
        }
        return simpleObject as ManufacturerDataProps;
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
            console.warn( "Manufacturer missing required id in ", this );
            return () => < WarningOutlined />;
        }
        return () => {
            console.log( "Vendor Callback: rendering AsyncIcon with this of", this );
            return <AsyncIcon cls={Manufacturer} vars={{ id: this.id }} cb={
                // ( ) => <img className="vendorIcon" src={`${ this.url }/favicon.ico`} />
                ( props: { obj: Manufacturer; } ) => <img className="vendorIcon" src={`${ props.obj.url }/favicon.ico`} />
            } />;
        };
    }
    
    /**
     * Props which should be included in label (default) 
     * Optionally defined on subclasses
     */
    get labelProps (): Array<keyof Manufacturer> {
        return Object.keys( this ) as Array<keyof Manufacturer>;
    }
    // static get labelProps (): Array<string> {
    //     console.log( {keysOfThisCls: Object.keys( this ), keysOfManufacturerCls: Object.keys(Manufacturer) });
    //     return Object.keys( this ) as Array<Extract<keyof GenericManufacturer, string>>;
    // }
    /**
     * Props to use as display columns (default)
     * Manufacturered
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<Manufacturer>[] {
        return makeColumn(
            [
                {
                    key: 'icon',
                    title: '',
                    render: ( text, record: Manufacturer ) => { 
                        console.log( { q: 'render icon ?', record, icon: record.icon } ); 
                        return ( record.icon === null ? null : < record.icon /> ); 
                    }
                },
                {
                    key: 'id',
                    responsive: [ 'xl' ],
                },
                {
                    key: 'name',
                    sorter: sortByCaseInsensitiveText( 'name' ),
                    render: ( text, record: Manufacturer ) => {
                        return ( record.url === null ? record.name : <a href={record.url}>{record.name}</a> );
                    }
                },
                {
                    // TODO: Make this a link to the vendor.
                    key: 'vendor_id',
                    title: 'Vendor?',
                    responsive: ['lg'],
                    render: ( text, record: Manufacturer ) => {
                        return ( record.vendor_id ? <CheckOutlined /> : null );
                    }
                }
            ]
        );
    }
    get Columns (): ColumnProps<Manufacturer>[] {
        return Manufacturer.Columns;
    }
    /**
     * Props which should be included in search (default)
     * Manufacturered
     * Optionally defined on subclasses
     */
    get searchProps (): ( keyof Manufacturer )[] {
        return null;
    }
    /**
     * Props which should be filterable in table (default)
     * Manufacturered
     * Optionally defined on subclasses
     */
    get filterProps (): ( keyof Manufacturer )[] {
        return null;
    }
    /**
     * Props which should be sortable in table (default)
     * Manufacturered
     * Optionally defined on subclasses
     */
    get sortProps (): ( keyof Manufacturer )[] {
        return null;
    }
    /**
     * Props to default to in QR Code (default)
     * Manufacturered
     * Optionally defined on subclasses
     */
    get defaultQrProps (): ( keyof Manufacturer )[] {
        return null;
    }

    // TODO: am I actually using this ??
    get tableRowComponent (): React.FC {
        return null;
    }
    /**
     * Form to add Manufacturer
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
     * Form to edit Manufacturer
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
    get editFormInitialValues (): ManufacturerDataProps {
        return null;
    }
    /**
     * Single, detailed view
     */
    get detailComponent (): React.FC {
        return null;
    }

    /**
     * Component displayed when Manufacturer moused over in Table
     * Default is to display all properties EXCEPT `_object`
     */
    get mouseOverRowComponent (): React.FC {
        // TODO: use for ... in so that enumerable properties are shown
        return ( ) => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key ] ) => key !== '_object' ) ), null, 2 )}</pre>;
    }

    // get bundle (): Manufacturer {
    //     return null;
    // }

}


// foo is now keys of instance that are strings
type foo = FilterFlags<keyof InstanceType<typeof Manufacturer>, string>;

