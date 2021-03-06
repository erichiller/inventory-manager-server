
import type {
    Item as ItemGql, 
    Icon,
    Scalars
} from "~types/graphql";
import { 
    ItemSelectColumn,
    EnumItemClassEnum 
} from "~types/graphql";
import { 
    GetItemQueryVariables,
    GetItemDocument,
    GetItemQuery 
} from "./Item.ops";




import { apolloClient } from '~/Apollo';
import { message } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, Intersection, enumerable, StringKeys, Type } from "~lib/UtilityFunctions";
import { CodeIcon } from "../../styles/icon";
import { FormInstance } from "antd/lib/form";
import { IconComponentT } from "~lib/types/common";
import { ILabelTemplate, LabelTemplate } from "~lib/Label/LabelTemplate";

export type GenericItem = Pick<ItemGql, 'id'>
    & Partial<Pick<ItemGql, 'object'>
        & {
            name?: string;
            __typename: ItemGqlTypename;
            class: ItemGqlTypename;
            labelTemplates: ILabelTemplate[];
        }
    >;

export type ItemGqlTypename = keyof typeof EnumItemClassEnum | 'item';


export interface ItemFormProps<T> {
    form: FormInstance<T>;
}
/**
 * Upon receiving submitted, it will send mutation to graphql.
 */
export interface FormMutationHandler<T = {}> extends ItemFormProps<T> {
    submitted: boolean;
    originalObject?: T;
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

export class Item<T extends GenericItem> {

    __typename: string;
    id: Scalars[ 'Int' ];

    private _name?: string;
    private _object: Object;
    private _class: ItemGqlTypename;
    private _default_values: Array<StringKeys<T>>;
    private _labelTemplates?: LabelTemplate[];

    item: ItemGql;

    constructor ( props: T ) {
        console.log( "Item constructed with props", props );
        // constructor( props: Partial<T>){
        // if (!props) return;
        // this.item = props;
        this.id = props.id;
        this._name = props.name;
        this._class = props.class;
        this._object = props.object;
        // this._labelTemplates = props.labelTemplates;
        let labelTemplates: LabelTemplate[] = [];
        if ( 'labelTemplates' in props ){
            // props.labelTemplates.forEach( labelTemplate => {
            //     let lt = Object.assign( {}, labelTemplate, { label: new LabelExport( labelTemplate.label ) } );
            //     labelTemplates.push( lt );
            // });
            this._labelTemplates = props.labelTemplates.map( labelTemplateGql => new LabelTemplate( labelTemplateGql ) );
            console.log( `Item#${this.id} - labelTemplates assigned`, labelTemplates );
        }
        // console.log( "Item class created with\n\tprops: \n", props, "\n\tand is currently:\n", this );
    }

    static [ Symbol.hasInstance ] ( instance: object ) {
        // TODO: apply to other Item subclasses
        // TODO: use `constructor.name` ??
        if ( '__typename' in instance && instance[ '__typename' ] === 'item' ) {
            return true;
        }
        return false;
    }

    static async ItemFactory<Q extends typeof GetItemDocument> ( variables: GetItemQueryVariables ): Promise<Item<any>> {
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
     * Return an constructed Item(s) from input Gql results.
     * @param gqlResultsData Output from Item GraphQL query, the object at `<gqlQueryResult>.<itemType>.data`  
     *                       Can be singular or an array.
     * @returns returns a singular `Item` or an `Array<Item>` depending upon input
     */
    static ItemsFactory ( gqlResultData: GenericItem ): Item<any>;
    static ItemsFactory ( gqlResultData: GenericItem[] ): Array<Item<any>>;
    static ItemsFactory ( gqlResultData: GenericItem | GenericItem[] ): Array<Item<any>> | Item<any> {
        if ( !gqlResultData ) {
            return null;
        }
        let items: Item<any>[] = [];
        ( Array.isArray( gqlResultData ) ? gqlResultData : [ gqlResultData ] ).forEach( i => {
            let cls = this.getClassForType( i.class || i.__typename );
            if ( !cls ) {
                throw `class '${ i.class }' (__typename: '${ i.__typename }') is not registered in 'getClassForType', received '${ cls }' `;
                return null;
            }
            // console.log( { _cls: "Item", method: 'ItemsFactory', msg: "loading class of type", item_class: cls, item_class_name: cls.name } );
            items.push( new cls( i ) );
        } );
        if ( !Array.isArray( gqlResultData ) ) {
            return items[ 0 ];
        }
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
        let simpleObject: { [ key: string ]: any; } = {};
        for ( let propertyKey in this ) {
            simpleObject[ propertyKey ] = this[ propertyKey ];
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
    set name ( nameVal: string ) {
        this._name = nameVal;
    }


    /**
     * Default fields and their values that should be applied to `this`'s data if no user data has been input for these fields.
     */
    static get defaultValues (): Array<StringKeys<Item<any>>> {
        // TODO: this needs to calculate on the fly from `class`
        return [];
    }
    /**
     * These are the fields, if any, that have been determined by the class's {@link `Item.defaultValues`} rather than by user input..
     */
    @enumerable( true )
    get defaultValues (): Array<StringKeys<T>> {
        if ( this._default_values ) {
            return this._default_values;
        } else if ( this._object && this._object.hasOwnProperty( "default_values" ) ) {
            return this._object[ 'default_values' ];
        } else {
            return [];
        }
    }

    @enumerable( true )
    get url (): string {
        return `http://inventory/${ this.id }`;
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
    public static getClassForType ( itemTypename: ItemGqlTypename ): Type<typeof Item> {
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
        return Item.getClassForType( this._class ).icon;
    }
    get iconMatches (): Icon[] {
        return null;
    }
    get icons (): React.ReactElement[] {
        return null;
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
    // TODO: am I actually using this ??
    get tableRowComponent (): React.FC {
        return null;
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
     * The final template to use, highest sequence and matched via `labelTemplateMatches`
     */
    get labelTemplate (): LabelTemplate | null {
        console.log( "labelTemplate()" );
        if ( this._object && this._object.hasOwnProperty( "labelTemplate" ) ) {
            console.log( "labelTemplate hasOwnProperty" );
            return this._object[ 'labelTemplate' ];
        } else if ( this.labelTemplateMatches != null && this.labelTemplateMatches.length > 0 ) {
            console.log( "labelTemplate => labelTemplateMatches" );
            return this.labelTemplateMatches[ 0 ];
        }
        console.warn( "labelTemplate ; returning null" );
        return null;
    }
    get labelTemplateMatches (): LabelTemplate[] {
        console.log( "labelTemplateMatches()" );
        return this.labelTemplates;
    }
    get labelTemplates (): LabelTemplate[] {
        console.log( "labelTemplates()" );
        if ( this._labelTemplates != null ) {
            console.log( "this._labelTemplates != null" );
            return this._labelTemplates;
        }
        else if ( this._object && this._object.hasOwnProperty( "labelTemplates" ) ) {
            console.log( "labelTemplates hasOwnProperty" );
            return this._object[ 'labelTemplates' ];
        }
        console.log( "labelTemplates ; returning empty array" );
        return [];
    }
    /**
     * Props which should be included in label (default) 
     * These are also the properties that can possibly be added to LabelQR
     * Optionally defined on subclasses
     */
    get labelProps (): Array<Extract<keyof Intersection<Item<T>, T>, string>> {
        // return Object.keys(this) as Array<keyof T>;
        //     const exclude: Array<Partial< keyof Item<T> >> =[
        //         '_object'
        //     ];
        // return Object.keys( Item ).filter( val => !exclude.includes( val as keyof ItemHardwareFastenerScrewMachine ) ) as Array<keyof ItemHardwareFastenerScrewMachine>;
        return [];
    }
    // static get labelProps (): Array<string> {
    //     console.log( {keysOfThisCls: Object.keys( this ), keysOfItemCls: Object.keys(Item) });
    //     return Object.keys( this ) as Array<Extract<keyof GenericItem, string>>;
    // }
    /**
     * Props to default to in QR Code (default)
     * Ordered
     * Optionally defined on subclasses
     */
    get defaultQrProps (): Array<Extract<keyof Intersection<Item<T>, T>, string>> {
        return [];
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
    get editComponent (): React.FC<ItemFormProps<GenericItem> & T> {
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
    get editFormInitialValues (): GenericItem {
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
        return () => <pre>{JSON.stringify( Object.fromEntries( Object.entries( this ).filter( ( [ key ] ) => key !== '_object' ) ), Object.keys( this ).sort(), 2 )}</pre>;
    }

    // get bundle (): Item {
    //     return null;
    // }

}

Item.RegisterClassType( "item", Item );
