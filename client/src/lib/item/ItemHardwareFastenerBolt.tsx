import { Item, IconComponentT, CategoryHierarchyT } from './Item';
import { ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql, ItemHardwareFastenerBoltSelectColumn } from "../types/graphql";
import React from 'react';
import { Integer } from '../types/uint8';
import { HexBoltIcon } from '../../styles/icon';



export class ItemHardwareFastenerBolt extends Item<ItemHardwareFastenerBoltGql> {

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
        return [ "Hardware", "Fastener", "Bolt" ];
    }

    static get labelProps (): Array<keyof typeof ItemHardwareFastenerBoltSelectColumn> {
        return Object.keys(ItemHardwareFastenerBoltSelectColumn) as Array<keyof typeof ItemHardwareFastenerBoltSelectColumn>;
    }
}

Item.RegisterClassType( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );
// Item.RegisterClassType<ItemHardwareFastenerBoltGql, ItemHardwareFastenerBolt>( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );