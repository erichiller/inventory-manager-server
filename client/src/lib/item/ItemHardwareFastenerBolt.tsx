import { Item, IconComponentT, CategoryHierarchyT, ItemClass, IItem, GenericItem } from './Item';
import { ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql, ItemHardwareFastenerBoltSelectColumn } from "../types/graphql";
import React from 'react';
import { Integer } from '../types/uint8';
import { HexBoltIcon } from '../../styles/icon';
import { ColumnProps } from 'antd/lib/table';
import { toTitleCase } from '../helpers';


type ItemPlusClassT<T extends GenericItem, C extends ItemClass> = Exclude<ItemHardwareFastenerBoltGql, 'class'>;


export class ItemHardwareFastenerBolt extends Item<ItemPlusClassT<ItemHardwareFastenerBoltGql, 'item_hardware_fastener_bolt'>> {

    // id: Integer;
    // getSomething(): number {
    //     return 3;
    // }

    constructor ( props: ItemHardwareFastenerBoltGql ) {
        super( props );
    }
    // specific props here;
    get icon (): IconComponentT {
        return null;
    }

    static get icon (): IconComponentT {
        // return null;
        return HexBoltIcon;
    }

    static get categories (): CategoryHierarchyT[] {
        return [ "Item", "Hardware", "Fastener", "Bolt" ];
    }

    static get labelProps (): Array<keyof typeof ItemHardwareFastenerBoltSelectColumn> {
        return Object.keys(ItemHardwareFastenerBoltSelectColumn) as Array<keyof typeof ItemHardwareFastenerBoltSelectColumn>;
    }

    static get Columns (): ColumnProps<any>[] {
        // TODO: order columns sensibly
        let cols: ColumnProps<ItemHardwareFastenerBoltGql>[] = ( [ ...Object.keys( ItemHardwareFastenerBoltSelectColumn ), 'name' ].filter(
            key => [ "OBJECT" ].includes( key ) ? false : key ).map(
                // key => [ "ID" ].includes( key ) ? false : key ).map(
                key => {
                    return {
                        key: key,
                        title: toTitleCase( key ),
                        dataIndex: ItemHardwareFastenerBoltSelectColumn[ key ] ?? key,
                    };
                } ) );
        return cols;
    }
    get Columns (): ColumnProps<ItemHardwareFastenerBoltGql>[] {
        return ItemHardwareFastenerBolt.Columns as ColumnProps<ItemHardwareFastenerBoltGql>[];
    }
}

Item.RegisterClassType( "item_hardware_fastener_bolt", ItemHardwareFastenerBolt );
// Item.RegisterClassType<ItemHardwareFastenerBoltGql, ItemHardwareFastenerBolt>( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );