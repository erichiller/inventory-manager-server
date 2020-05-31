
import {
    Item as ItemGql, Icon, Label, GetIconQueryResult, GetIconDocument, GetIconQueryVariables, GetIconQuery,
    EnumItemClassEnum,
    ItemSelectColumn,
    GetItemQueryVariables,
    GetItemDocument,
    GetItemQuery
} from "../types/graphql";

import { Integer } from '../types/uint8';

import { apolloClient } from '../../index';
import { message, Tooltip } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, Union, Unpacked, enumerable } from "../UtilityFunctions";
import { CodeIcon } from "../../styles/icon";
import { FormInstance } from "antd/lib/form";
import { resolve } from "url";
import { rejects } from "assert";

export type GenericItem = Pick<ItemGql, 'id'>
    & Partial<Pick<ItemGql, | 'object'>
        & {
            name?: string;
            __typename: ItemGqlTypename;
            class: ItemGqlTypename;
        }>;

export type ItemGqlTypename = keyof typeof EnumItemClassEnum | 'item';


export interface ItemFormProps {
    form: FormInstance;
}
/**
 * Upon receiving submitted, it will send mutation to graphql.
 */
export interface FormMutationHandler extends ItemFormProps {
    submitted: boolean;
    completeCallback: ( submitted: boolean ) => void;
}

type IEnumItemMap = { [ key in ItemGqlTypename ]: typeof Item };


export type CategoryHierarchyT = "Item"
    | "Bundle"
    | "Hardware"
    | "Fastener"
    | "Bolt"
    | "Screw"
    | "Nut"
    | "Washer";

export type IconComponentT =
    React.FunctionComponent<
        React.DetailedHTMLProps<
            React.ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
        >
    >
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;


export class Item<T extends GenericItem> {
    __typename: string;
    id: Integer;

    private _name?: string;
    private _object: Object;
    private _class: ItemGqlTypename;

    item: ItemGql;


    constructor ( props: T ) {
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.item = props;
        this.id = props.id;
        this._name = props.name;
        this._class = props.class;
        this._object = props.object;
        console.log( "Item class created with\n\tprops: \n", props, "\n\tand is currently:\n", this );
    }

    static [ Symbol.hasInstance ] ( instance: object ) {
        // TODO: apply to other Item subclasses
        // TODO: use `constructor.name` ??
        if ( '__typename' in instance && instance['__typename'] === 'Item' ) {
            return true;
        }
        return false;
    }

    static async ItemFactory<Q extends typeof GetItemDocument> ( variables: GetItemQueryVariables, query: Q = GetItemDocument as Q ): Promise<Item<any>> {

        return new Promise( ( resolve, reject ) => apolloClient.query<GetItemQuery, GetItemQueryVariables>( {
            query: GetItemDocument,
            variables: {
                id: variables.id
            }
        } ).then( result => {
            console.log( { _cls: "Item", method: 'ItemFactory', msg: "loading item from GraphQL", item_data: result } );
            const data = result.data.item;
            let cls = this.getClassForType( data.class || data.__typename as EnumItemClassEnum );
            let item = new cls( result.data.item );
            // it._name = result.data.object?.main ? result.data.object.name : "";
            // this._class = result.data.object;
            // this._object = result.data.object;
            resolve( item );
            // message.info( `Saved Successfully` );
        } ).catch( error => {
            const msg = `Failure loading item ${ variables.id }: ${ error }`;
            console.error( msg );
            message.error( msg );
            reject( error );
        // } ).finally( () => {
            // props.visibleHandler( null );
        } ) );
    }


    /**
     * Return an array of items from input Gql results
     * @param results Output from Item GraphQL query (data)
     */
    static ItemsFactory ( results: GenericItem[] ): Array<Item<any>> {
        // static ItemFactory ( results: GenericItem[] ): Item<GenericItem>[] {
        let items: Item<any>[] = [];
        results.forEach( i => {
            let cls = this.getClassForType( i.class || i.__typename );
            if ( ! cls ) {
                throw `class '${ i.class }' (__typename: '${ i.__typename }') is not registered in 'getClassForType', received '${ cls}' `;
                return null;
            }
            // console.log( { _cls: "Item", method: 'ItemsFactory', msg: "loading class of type", item_class: cls, item_class_name: cls.name } );
            items.push( new cls( i ) );
        } );
        return items;
    }

    /**
     * The GraphQL `__typename`
     */
    get class (): ItemGqlTypename {
        return this._class;
    }
    /**
     * Returns self as a simple object. `get prop(): string` converted to `{ prop: string }`
     */
    get simpleObject (): T {
        let simpleObject: {[key: string]: any; } = {};
        for( let propertyKey in this){
            simpleObject[propertyKey] = this[propertyKey];
        }
        return simpleObject as T;
    }

    @enumerable( true )
    get name (): string {
        if ( this._name ) {
            return this._name;
        }
        else if ( this._object && this._object.hasOwnProperty( "name" ) ) {
            return this._object[ 'name' ];
        }
        else {
            // should this warn?
            return "";
        }
    }
    set name (nameVal: string) {
        this._name = nameVal;
    }



    static get categories (): CategoryHierarchyT[] {
        // TODO: this needs to calculate on the fly from `class`
        return [ "Item" ];
    }
    get categories (): CategoryHierarchyT[] {
        return [ "Item" ];
    }

    /**
     * All possible item classes / types
     */
    static get ClassTypes (): Array<keyof typeof EnumItemClassEnum> {
        return Object.keys( EnumItemClassEnum ) as Array<keyof typeof EnumItemClassEnum>;
    }


    // static _ClassTypes: Partial< IEnumItemMap< ItemExtender<any> > > = {};
    static _ClassTypes: IEnumItemMap;

    static RegisterClassType<T extends { new( ...args: any[] ): InstanceType<T>; }> (
        itemClass: ItemGqlTypename,
        typeClass: T
    ) {
        Item._ClassTypes = {
            ...Item._ClassTypes,
            ...Object.fromEntries( [ [ itemClass.toLowerCase(), typeClass ] ] )
        };
    }

    /**
     * Return the class for an input GraphQL `__typename`
     * @param itemTypename The GraphQL type for an Item class, this is what is found in `__typename` and is of the form `item_category1_category2_classname`
     */
    public static getClassForType ( itemTypename: ItemGqlTypename ): typeof Item {
        let itemClassLowerCase = itemTypename.toLowerCase();
        // console.log( { class: 'Item', method: 'getClassForType', classTypes: Item._ClassTypes, lookup_key: itemClass } );
        // if ( itemClassLowerCase === "item" ) {
        //     return Item;
        // }
        return Item._ClassTypes[ itemClassLowerCase ];
    }

    static get icon (): IconComponentT {
        // return new Promise<IconComponentT>( ( resolve, reject ) => {
            // resolve( CodeIcon );
        // });
        // return new Promise( ( resolve, reject ) => resolve(CodeIcon) );
        return CodeIcon;
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
        // return Item.icon;
        // return Item<T>.getClassForType( this._class ).icon;
        return Item.getClassForType(this._class).icon;
    }
    get iconMatches (): Icon[] {
        return null;
    }
    get icons (): React.ReactElement[] {
        return null;
    }
    get labelTemplate (): Label {
        return null;
    }
    get labelTemplateMatches (): Label[] {
        return null;
    }
    get labelTemplates (): Label[] {
        return null;
    }
    /**
     * Props which should be included in label (default) 
     * Optionally defined on subclasses
     */
    get labelProps (): Array<keyof T> {
        return [ "name" ];
    }
    /**
     * Props to use as display columns (default)
     * Ordered
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<any>[] {
        // TODO: order columns sensibly
        let cols: ColumnProps<any>[] = ( [ ...Object.keys( ItemSelectColumn ), 'name' ].filter(
            key => [ "OBJECT" ].includes( key ) ? false : key ).map(
                // key => [ "ID" ].includes( key ) ? false : key ).map(
                key => {
                    return {
                        key: key,
                        title: toTitleCase( key ),
                        dataIndex: ItemSelectColumn[ key ] ?? key,
                    };
                } ) );
        return cols;
    }
    get Columns (): ColumnProps<T>[] {
        return Item.Columns as ColumnProps<T>[];
    }
    /**
     * Props which should be included in search (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get searchProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props which should be filterable in table (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get filterProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props which should be sortable in table (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get sortProps (): ( keyof T )[] {
        return null;
    }
    /**
     * Props to default to in QR Code (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get defaultQrProps (): ( keyof T )[] {
        return null;
    }

    // TODO: am I actually using this ??
    get tableRowComponent (): React.FC {
        return null;
    }
    /**
     * Form to add Item
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
     * Form to edit Item
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
     * Single, detailed view
     */
    get detailComponent (): React.FC {
        return null;
    }

    /**
     * Component displayed when item moused over in Table
     * Default is to display all properties EXCEPT `_object`
     */
    get mouseOverRowComponent (): React.FC {
        // TODO: use for ... in so that enumerable properties are shown
        return ( props ) => <pre>{JSON.stringify( Object.fromEntries(Object.entries(this).filter( ([ key, value ]) => key !== '_object')), null, 2 )}</pre>;
    }

    // get bundle (): Item {
    //     return null;
    // }

}

Item.RegisterClassType( "item", Item );
