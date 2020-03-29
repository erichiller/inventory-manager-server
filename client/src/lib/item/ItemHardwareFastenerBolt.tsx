import { Item } from './Item';
import { ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql } from "../types/graphql";
import React from 'react';



export class ItemHardwareFastenerBolt extends Item<ItemHardwareFastenerBoltGql> {
    // specific props here;
    get icon(): React.ReactElement {
        return <span>hello</span>;
    }
}

Item.RegisterClassType( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );
// Item.RegisterClassType<ItemHardwareFastenerBoltGql, ItemHardwareFastenerBolt>( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );