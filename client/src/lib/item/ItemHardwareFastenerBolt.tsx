import { Item } from './Item';
import { ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql } from "../types/graphql";
import React from 'react';
import { Integer } from '../types/uint8';



export class ItemHardwareFastenerBolt extends Item<ItemHardwareFastenerBoltGql> {

    // id: Integer;
    // getSomething(): number {
    //     return 3;
    // }

    constructor(props: Partial<ItemHardwareFastenerBoltGql>){
        super(props);
    }
    // specific props here;
    get icon(): React.ReactElement {
        return <span>hello</span>;
    }
}

Item.RegisterClassType( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );
// Item.RegisterClassType<ItemHardwareFastenerBoltGql, ItemHardwareFastenerBolt>( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );