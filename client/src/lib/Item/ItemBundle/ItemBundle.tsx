import { Item, CategoryHierarchyT, ItemGqlTypename, GenericItem, FormMutationHandler } from '~lib/Item/Item';
import { IconComponentT } from "~lib/types/common";
import { 
    Item as ItemGql, 
    ItemBundle as ItemBundleGql, 
    ItemBundleSelectColumn, Maybe, Scalars, ItemBundleMember,
    ItemBundleMemberAggregate 
} from "../../types/graphql";
import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { toTitleCase, is, SubType, StringKeys, KeysOfType, makeColumn } from "~lib/UtilityFunctions";
import { ItemBundleForm, ItemBundleFormProps } from './Form';
import { GroupOutlined } from '@ant-design/icons';
import { ItemBundleAddMutationHandler } from './Add';
import { ItemBundleEditMutationHandler } from './Edit';


type ItemPlusClassT<T extends GenericItem, C extends ItemGqlTypename> = Exclude<ItemBundleGql, 'class'> & ItemBundleItemObjectI;

interface ItemBundleItemObjectI extends Omit<SubType<ItemBundleGql, string | number>, 'url' | 'class'> { }

export class ItemBundle extends Item<ItemPlusClassT<ItemBundleGql, 'item_bundle'>> {


    __typename: 'item_bundle';
    id: Scalars[ 'Int' ];
    name: Scalars[ 'String' ];
    description?: Maybe<Scalars[ 'String' ]>;

    created_at: Scalars[ 'timestamptz' ];
    updated_at: Scalars[ 'timestamptz' ];

    items: Array<ItemBundleMember>;

    items_aggregate?: ItemBundleMemberAggregate;

    constructor ( props: ItemBundleGql | ItemGql ) {
        super( props as ItemBundleGql );
        if ( is<ItemGql>( props, Object.keys( props ).includes( 'object' ) && ( props as ItemGql ).object ) ){
            const object: ItemBundleItemObjectI = props.object;
            // if ( props.object != null && is<ItemBundleItemObjectI>( props.object, Object.keys( props.object ).includes( '__typename' ) && props.object.__typename === 'item_bundle' ) ) {
                Object.keys( object ).forEach( key => {
                    // URGENT: why does KeysOfType work and not `StringKeys`
                    // URGENT: fixup ItemHardwareFastenerScrewMachine
                    if ( is<KeysOfType<ItemBundleItemObjectI, string>>( key, Object.keys( ItemBundle ).includes( key ) ) ) {
                        // let foo2: keyof ItemBundleItemObjectI   = key;
                        // foo2 = 'id';
                        // this.id = props.object.id;
                        // let key: keyof ItemBundleItemObjectI = 'id';
                        // let foo = object;
                        // let v: ItemBundleItemObjectI = ( object[ key ] );

                            this[ key ] = object[ key ];
                        // if ( StringKeys )
                            // ( this as any )[ key as StringKeys<ItemBundleItemObjectI> ] = object[ key as StringKeys<ItemBundleItemObjectI> ];
                        // let key: keyof ItemBundleItemObjectI = 'id';
                        // let keyValue = ( props.object as ItemBundle )[ key ];
                        // let foo = ( props.object as ItemBundleItemObjectI )[ key ];
                    }
                } );

            // }
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
        return makeColumn(
            [
                'id',
                'name'
            ]
        );
    }
    get Columns (): ColumnProps<ItemBundleGql>[] {
        return ItemBundle.Columns as ColumnProps<ItemBundleGql>[];
    }


    static get addComponent (): React.FC<ItemBundleFormProps> {
        return ItemBundleForm;
    }
    static get addHandler (): React.FC<FormMutationHandler> {
        return ItemBundleAddMutationHandler;
    }

    get editComponent (): React.FC {
        return ItemBundleForm;
    }
    get editHandler (): React.FC<FormMutationHandler> {
        return ItemBundleEditMutationHandler;
    }

}

Item.RegisterClassType( "item_bundle", ItemBundle );
// Item.RegisterClassType<ItemBundleGql, ItemBundle>( "item_hardware_fastener_screw_machine", ItemBundle );