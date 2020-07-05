import { Item, CategoryHierarchyT, ItemGqlTypename, GenericItem } from '~lib/Item/Item';
import { IconComponentT } from "~lib/types/common";
import { 
    Item as ItemGql, 
    ItemBundle as ItemBundleGql, 
    ItemBundleSelectColumn, Maybe, Scalars, ItemBundleMap } from "../../types/graphql";
import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { toTitleCase } from '../../UtilityFunctions';
import { ItemBundleEditForm } from './Edit';
import { GroupOutlined } from '@ant-design/icons';


type ItemPlusClassT<T extends GenericItem, C extends ItemGqlTypename> = Exclude<ItemBundleGql, 'class'>;


export class ItemBundle extends Item<ItemPlusClassT<ItemBundleGql, 'item_bundle'>> {


    __typename: 'item_bundle';
    id: Scalars[ 'Int' ];
    name: Maybe<Scalars[ 'String' ]>;
    description?: Maybe<Scalars[ 'String' ]>;

    created_at: Scalars[ 'timestamptz' ];
    updated_at: Scalars[ 'timestamptz' ];

    items: Array<ItemBundleMap>;

    constructor ( props: ItemBundleGql | ItemGql ) {
        super( props as ItemBundleGql );
        if ( Object.keys(props).includes('object') && (props as ItemGql).object ){
            Object.keys( ( props as ItemGql ).object ).forEach( key => {
                this[key] = (props as ItemGql).object[key];
            });
        }
    }
    // specific props here;
    // get icon (): IconComponentT {
    //     return null;
    // }

    static get icon (): IconComponentT {
        // return null;
        return GroupOutlined as IconComponentT;
    }

    static get categories (): CategoryHierarchyT[] {
        return [ "Item", "Bundle" ];
    }

    static get labelProps (): Array<keyof typeof ItemBundleSelectColumn> {
        return Object.keys( ItemBundleSelectColumn ) as Array<keyof typeof ItemBundleSelectColumn>;
    }

    /**
     * return Column definitions for ItemBundle
     */
    static get Columns (): ColumnProps<ItemBundleGql>[] {
        // TODO: group columns sensibly
        // TODO: name columns sensibly
        let cols: Partial<keyof ItemBundleGql | ColumnProps<ItemBundleGql>>[] = [ 
            'id', 'name', 
            // 'head_type', 'unit', 'point_type', 'thread_type', 'drive_size', 'drive_type', 'countersunk_height',
            // 'head_height',
            // 'description',
            // 'product_url',
            // 'shaft_length',
            // 'head_diameter',
            // 'thread_length',
            // 'embedded_length' 
        ];
        return cols.map( key => {
            if ( typeof key === 'string' ) {
                return {
                    key: key,
                    title: toTitleCase( key ),
                    dataIndex: ItemBundleSelectColumn[ key ] ?? key,
                };
            }
            if ( typeof key === 'object'){
                return key;
            }

        }
        );
    }
    get Columns (): ColumnProps<ItemBundleGql>[] {
        return ItemBundle.Columns as ColumnProps<ItemBundleGql>[];
    }

    get editComponent (): React.FC {
        return ItemBundleEditForm;
    }
}

Item.RegisterClassType( "item_bundle", ItemBundle );
// Item.RegisterClassType<ItemBundleGql, ItemBundle>( "item_hardware_fastener_screw_machine", ItemBundle );