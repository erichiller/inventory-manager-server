
import { 
    Item as ItemGql, Icon, Label, GetIconQueryResult, GetIconDocument, GetIconQueryVariables, GetIconQuery, 
    EnumItemClassEnum, 
    ItemSelectColumn 
} from "../types/graphql";

import { Integer } from '../types/uint8';

import { apolloClient } from '../../index';
import { message } from "antd";
import React from "react";
import { ColumnProps } from "antd/lib/table";
import { toTitleCase, Union } from "../helpers";
import { CodeIcon } from "../../styles/icon";

export type GenericItem = Pick<ItemGql, 'id'> 
                          & Partial<Pick<ItemGql, 'class' | 'object'> 
                          & { name?: string; }> ;

// type ItemExtender<R extends Item<any>> = R;
// type IEnumItemMap<R extends Item<any>> = { [ key in keyof typeof EnumItemClassEnum ]: new () => R };

type ItemClass = keyof typeof EnumItemClassEnum | 'ITEM';

type IEnumIItemMap = { [ key in ItemClass ]: Union<IItem, new () => Item<GenericItem>> };


export interface IItem {
    icon: IconComponentT;
    name: string;
    categories: CategoryHierarchyT[];
}

export type CategoryHierarchyT = "Item" 
                                    | "Hardware" 
                                        | "Fastener" 
                                            | "Bolt"
                                            | "Screw"
                                            | "Nut"
                                            | "Washer" ;

export type IconComponentT = 
        React.FunctionComponent<
            React.DetailedHTMLProps<
                React.ImgHTMLAttributes<HTMLImageElement>, 
                HTMLImageElement
            >
        >
        | React.FunctionComponent<React.SVGProps<SVGSVGElement>> ;



// export class Item<T extends GenericItem> implements IItem {
export class Item<T extends GenericItem> implements IItem {
    __typename: string;
    id: Integer;

    _name?: string;
    _object: Object;
    _class: keyof Record<EnumItemClassEnum, string>;

    item: ItemGql;


    constructor ( props: T ) {
    // constructor( props: Partial<T>){
        // if (!props) return;
        // this.item = props;
        this.id = props.id;
        this._name = props.name;
        this._class = props.class;
        this._object = props.object;
        console.log("Item class created with props:\n", props)
    }

    /**
     * Return an array of items from input Gql results
     */
    static ItemFactory ( results: GenericItem[] ): Item<GenericItem>[] {
        let items: Item<GenericItem>[] = [];
        results.forEach( i => items.push(new Item(i) ));
        return items;

    }

    get class (): keyof Record<EnumItemClassEnum, string> {
        // return this.__typename;
        return this._class;
    }

    get name (): string {
        if (this._name){
            return this._name;
        }
        else if (this._object && this._object.hasOwnProperty("name")) {
            return this._object['name'];
        }
        else {
            // should this warn?
            return "";
        }
    }


    static get categories (): CategoryHierarchyT[] {
        return [ "Item", "Hardware", "Fastener", "Bolt" ];
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
    static _ClassTypes: IEnumIItemMap;

    static RegisterClassType<T extends { new( ...args: any[] ): InstanceType<T>; }>(
        itemClass: ItemClass,
        typeClass: T
    ) {
        Item._ClassTypes = {
            ...Item._ClassTypes,
            ...Object.fromEntries([ [itemClass.toLowerCase(), typeClass ] ])
        };
    }

    public static getClassForType ( itemClass: keyof typeof EnumItemClassEnum ): Union< IItem , new () => IItem> {
        let itemClassLowerCase = itemClass.toLowerCase();
        console.log({class: 'Item', method: 'getClassForType', classTypes: Item._ClassTypes, lookup_key: itemClass });
        // if ( itemClassLowerCase === "item" ) {
        //     return Item;
        // }
        return Item._ClassTypes[ itemClassLowerCase ];
    }

    static get icon (): IconComponentT {
        return CodeIcon;
    }

    /**
     * common lookup of icon;
     * returns dataurl ( SVG )
     */
get icon(): IconComponentT {
        // return <img />;
        apolloClient.query < Icon, GetIconQueryVariables >({
            query: GetIconDocument,
            variables: {}
        } ).then( result => {
            message.info( `Saved Successfully` );
        } ).catch( error => {
            console.log( "MUTATE ERROR", error );
            message.error( `Failure during save: ${ error }` );
        } ).finally( () => {
            // props.visibleHandler( null );
        } );
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
        return null;
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
    get labelProps (): Array<Record<keyof T, string>> {
        return null;
    }
    /**
     * Props to use as display columns (default)
     * Ordered
     * Optionally defined on subclasses
     */
    static get Columns (): ColumnProps<any>[] {
        // TODO: order columns sensibly
        let cols: ColumnProps<any>[] = ( [...Object.keys( ItemSelectColumn ), 'name'].filter(
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

    get tableRowComponent (): React.ReactElement {
        return null;
    }
    /**
     * Modal
     */
    get editComponent (): React.ReactElement {
        return null;
    }
    /**
     * Single, detailed view
     */
    get detailComponent (): React.ReactElement {
        return null;
    }

    // get bundle (): Item {
    //     return null;
    // }
    
}

Item.RegisterClassType( "ITEM", Item );
