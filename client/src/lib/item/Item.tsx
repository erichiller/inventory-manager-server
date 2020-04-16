
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
import { toTitleCase, Union, Unpacked } from "../helpers";
import { CodeIcon } from "../../styles/icon";
import { T } from "antd/lib/upload/utils";

export type GenericItem = Pick<ItemGql, 'id'> 
                          & Partial<Pick<ItemGql, | 'object'> 
                          & { 
                              name?: string; 
                              __typename: ItemClass;
                              class: ItemClass;
                            }> ;

// type ItemExtender<R extends Item<any>> = R;
// type IEnumItemMap<R extends Item<any>> = { [ key in keyof typeof EnumItemClassEnum ]: new () => R };

export type ItemClass = keyof typeof EnumItemClassEnum | 'ITEM';
// export type ItemClasstest = typeof EnumItemClassEnum[ keyof typeof EnumItemClassEnum];
// // let foo: Record<EnumItemClassEnum, string>;
// let foo: Unpacked<EnumItemClassEnum>;
// foo = 'item_hardware_class_bolt';
// foo = 'ITEM_HARDWARE_CLASS_BOLT';
// let foo2: ItemClasstest;
// foo2 = 'item_hardware_class_bolt';
// foo2 = 'ITEM_HARDWARE_CLASS_BOLT';
// let foo3: typeof EnumItemClassEnum;
// foo3 = 'item_hardware_class_bolt';
// foo3 = 'ITEM_HARDWARE_CLASS_BOLT';



// type FooType = Record<EnumItemClassEnum, keyof typeof EnumItemClassEnum>;
// let someval: FooType;
// someval = "item_hardware_class_bolt";
// someval = "ITEM_HARDWARE_CLASS_BOLT";

// type Record<K extends string | number | symbol, T> = { [ P in K ]: T; }

// type EnumValues<K extends keyof typeof EnumItemClassEnum> = typeof EnumItemClassEnum[ K ];



// let foo6: EnumItemClassEnum[ 'item_hardware_class_bolt' ];
// foo6 = EnumItemClassEnum['item_hardware_class_bolt'];

// let foo5: EnumValues<keyof typeof EnumItemClassEnum>;
// // foo5 = 

// foo5 = 'item_hardware_class_bolt';
// foo5 = 'ITEM_HARDWARE_CLASS_BOLT';

// let foo7: typeof EnumItemClassEnum['ITEM_HARDWARE_FASTENER_BOLT'];
// foo7 = "item";
// foo7 = "item_hardware_class_bolt";
// // foo5 = 

// foo7 = 'item_hardware_class_bolt';
// foo7 = 'ITEM_HARDWARE_CLASS_BOLT';


// let foo4: PropertyTypeMatch< EnumItemClassEnum, >;
// foo4 = 'item_hardware_class_bolt';
// foo4 = 'ITEM_HARDWARE_CLASS_BOLT';


// ConstructorParameters

type IEnumIItemMap = { [ key in ItemClass ]: Union<IItem, new () => Item<GenericItem>> };


export interface IItem {
    icon: IconComponentT;
    name: string;
    categories: CategoryHierarchyT[];
}
export interface IItemConstructor {
    // new( ): IItem;
    new( params: GenericItem): IItem;
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
    _class: keyof Record<ItemClass, string>;

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
    static ItemFactory ( results: GenericItem[] ): IItem[] {
    // static ItemFactory ( results: GenericItem[] ): Item<GenericItem>[] {
        let items: IItem[] = [];
        results.forEach( i => {
            let cls = this.getClassForType( i.class || i.__typename );
            items.push( new cls(i) );
        });
        return items;

    }

    get class (): keyof Record<ItemClass, string> {
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

    public static getClassForType ( itemClass: ItemClass ): Union<IItem, IItemConstructor> {
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
