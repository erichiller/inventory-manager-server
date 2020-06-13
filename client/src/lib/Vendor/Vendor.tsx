
import {
    Vendor as VendorGql,
    GetVendorsQueryHookResult,
    Icon,
    Label,
    VendorSelectColumn,
    GetVendorQueryVariables,
    GetVendorDocument,
    GetVendorQuery,
    Scalars,
    Maybe,
    VendorItem,
    VendorItemAggregate,
    PaymentMethod,
    Shipment,
    ShipmentAggregate
} from "../types/graphql";

import { Integer } from '../types/uint8';

import { apolloClient } from '../../index';
import { message, Tooltip } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, Union, Unpacked, enumerable, ObjectColumnProperty, sortByCaseInsensitiveText, sortByNumber, makeColumn } from "../UtilityFunctions";
import { CodeIcon } from "../../styles/icon";
import { FormInstance } from "antd/lib/form";
import { resolve } from "url";
import { rejects } from "assert";
import { CategoryHierarchyT, IconComponentT, FormMutationHandler } from "../item/Item";
import { ShoppingCartOutlined, ShopOutlined } from "@ant-design/icons";
import { ApolloQueryResult } from "apollo-client";

interface VendorDataProps extends Pick<ApolloQueryResult<GetVendorQuery>['data']['vendor'],
    '__typename' |
    'id' |
    'name' |
    'url' |
    'account_id'
    // FIXME - `manufacturer` needs fixing - this is a hack-ish work-around because hasura does not allow inserting related objects when the relation column is on the far side object. However, with arrays it does.
    // 'manufacturer'
    > {
    // nothing to add
}

type VendorsGql = GetVendorsQueryHookResult[ 'data' ][ 'vendor' ];


export class Vendor implements VendorDataProps {
    __typename: 'vendor' = 'vendor';
    account_id?: string;
    id: Integer;
    // manufacturer?: Maybe<Manufacturer>;
    name: string;
    // orders: Array<Order>;
    // orders_aggregate: OrderAggregate;
    url?: string;
    manufacturer?: { id: Integer; }; 

    constructor ( props: Partial<VendorDataProps> ) {
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.Vendor = props;
        // this.id = props.id;
        for( let key in props ){
            this[key] = props[key];
        }
        console.log( "Vendor class created with\n\tprops: \n", props, "\n\tand is currently:\n", this );
    }

    static [ Symbol.hasInstance ] ( instance: object ) {
        // TODO: apply to other Vendor subclasses
        // TODO: use `constructor.name` ??
        if ( '__typename' in instance && instance[ '__typename' ] === 'vendor' ) {
            return true;
        }
        return false;
    }

    static async VendorFactory<Q extends typeof GetVendorDocument> ( variables: GetVendorQueryVariables, query: Q = GetVendorDocument as Q ): Promise<Vendor> {

        return new Promise( ( resolve, reject ) => apolloClient.query<GetVendorQuery, GetVendorQueryVariables>( {
            query: query,
            variables: {
                id: variables.id
            }
        } ).then( result => {
            console.log( { _cls: "Vendor", method: 'VendorFactory', msg: "loading Vendor from GraphQL", vendor_data: result } );
            const data = result.data.vendor;
            let vendor = new Vendor( result.data.vendor );
            // it._name = result.data.object?.main ? result.data.object.name : "";
            // this._class = result.data.object;
            // this._object = result.data.object;
            resolve( vendor );
            // message.info( `Saved Successfully` );
        } ).catch( error => {
            const msg = `Failure loading Vendor ${ variables.id }: ${ error }`;
            console.error( msg );
            message.error( msg );
            reject( error );
            // } ).finally( () => {
            // props.visibleHandler( null );
        } ) );
    }

    /**
     * Return an array of `Vendor`s from input Gql results
     * @param results Output from `GetVendor` GraphQL query (`data` property)
     */
    static ItemsFactory ( results: VendorsGql ): Array<Vendor> {
        return results.map( vendorGql => new Vendor( vendorGql ));
    }

    /**
     * The GraphQL `__typename`
     */
    get class (): 'vendor' {
        return this.__typename;
    }
    /**
     * Returns self as a simple object. `get prop(): string` converted to `{ prop: string }`
     */
    get simpleObject (): VendorDataProps {
        let simpleObject: { [ key: string ]: any; } = {};
        for ( let propertyKey in this ) {
            simpleObject[ propertyKey ] = this[ propertyKey ];
        }
        return simpleObject as VendorDataProps;
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
    //     return [ "Vendor" ];
    // }
    // get categories (): CategoryHierarchyT[] {
    //     return [ "Vendor" ];
    // }

    // /**
    //  * All possible Vendor classes / types
    //  */
    // static get ClassTypes (): Array<keyof typeof EnumVendorClassEnum> {
    //     return Object.keys( EnumVendorClassEnum ) as Array<keyof typeof EnumVendorClassEnum>;
    // }


    // // static _ClassTypes: Partial< IEnumVendorMap< VendorExtender<any> > > = {};
    // static _ClassTypes: IEnumVendorMap;

    // static RegisterClassType<T extends { new( ...args: any[] ): InstanceType<T>; }> (
    //     VendorClass: VendorGqlTypename,
    //     typeClass: T
    // ) {
    //     Vendor._ClassTypes = {
    //         ...Vendor._ClassTypes,
    //         ...Object.fromEntries( [ [ VendorClass.toLowerCase(), typeClass ] ] )
    //     };
    // }

    /**
     * Return the class for an input GraphQL `__typename`
     * @param VendorTypename The GraphQL type for an Vendor class, this is what is found in `__typename` and is of the form `Vendor_category1_category2_classname`
     */
    // public static getClassForType ( VendorTypename: VendorGqlTypename ): typeof Vendor {
    //     let VendorClassLowerCase = VendorTypename.toLowerCase();
    //     // console.log( { class: 'Vendor', method: 'getClassForType', classTypes: Vendor._ClassTypes, lookup_key: VendorClass } );
    //     // if ( VendorClassLowerCase === "Vendor" ) {
    //     //     return Vendor;
    //     // }
    //     return Vendor._ClassTypes[ VendorClassLowerCase ];
    // }

    static get icon (): IconComponentT {
        // return new Promise<IconComponentT>( ( resolve, reject ) => {
        // resolve( CodeIcon );
        // });
        // return new Promise( ( resolve, reject ) => resolve(CodeIcon) );
        return ShopOutlined as IconComponentT;
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
        // TODO: better way to retrieve and store icons ?
        // read `<link rel="shortcut icon" type="image/ico" href="/Content/Images/Global/Xtras/favicon.gif" />` from index.html `<head>` ?
        return () => <img className="vendorIcon" src={`${ this.url }/favicon.ico`} />;
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
    get labelProps (): Array<keyof Vendor> {
        return Object.keys( this ) as Array<keyof Vendor>;
    }
    // static get labelProps (): Array<string> {
    //     console.log( {keysOfThisCls: Object.keys( this ), keysOfVendorCls: Object.keys(Vendor) });
    //     return Object.keys( this ) as Array<Extract<keyof GenericVendor, string>>;
    // }
    /**
     * Props to use as display columns (default)
     * Vendored
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<Vendor>[] {

        return makeColumn(
            [
                {
                    key: 'id',
                    responsive: [ 'xl' ],
                },
                {
                    key: 'icon',
                    title: '',
                    render: ( text, record: Vendor ) => { 
                        console.log( { q: 'render icon ?', record, icon: record.icon } ); 
                        return ( record.icon === null ? null : < record.icon /> ); 
                    }
                },
                {
                    key: 'name',
                    sorter: sortByCaseInsensitiveText( 'name' ),
                    render: ( text, record: Vendor ) => {
                        return ( record.url === null ? record.name : <a href={record.url}>{record.name}</a> );
                    }
                },
                {
                    key: 'account_id',
                    title: 'Account ID',
                    responsive: [ 'lg' ],
                }
            ]
        );
    }
    get Columns (): ColumnProps<Vendor>[] {
        return Vendor.Columns;
    }
    /**
     * Props which should be included in search (default)
     * Vendored
     * Optionally defined on subclasses
     */
    get searchProps (): ( keyof Vendor )[] {
        return null;
    }
    /**
     * Props which should be filterable in table (default)
     * Vendored
     * Optionally defined on subclasses
     */
    get filterProps (): ( keyof Vendor )[] {
        return null;
    }
    /**
     * Props which should be sortable in table (default)
     * Vendored
     * Optionally defined on subclasses
     */
    get sortProps (): ( keyof Vendor )[] {
        return null;
    }
    /**
     * Props to default to in QR Code (default)
     * Vendored
     * Optionally defined on subclasses
     */
    get defaultQrProps (): ( keyof Vendor )[] {
        return null;
    }

    // TODO: am I actually using this ??
    get tableRowComponent (): React.FC {
        return null;
    }
    /**
     * Form to add Vendor
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
     * Form to edit Vendor
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
    get editFormInitialValues (): VendorDataProps {
        return null;
    }
    /**
     * Single, detailed view
     */
    get detailComponent (): React.FC {
        return null;
    }

    /**
     * Component displayed when Vendor moused over in Table
     * Default is to display all properties EXCEPT `_object`
     */
    get mouseOverRowComponent (): React.FC {
        // TODO: use for ... in so that enumerable properties are shown
        return ( props ) => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key, value ] ) => key !== '_object' ) ), null, 2 )}</pre>;
    }

    // get bundle (): Vendor {
    //     return null;
    // }

}
