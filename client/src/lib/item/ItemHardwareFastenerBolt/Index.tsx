import { Item, IconComponentT, CategoryHierarchyT, ItemClass, IItem, GenericItem } from '../Item';
import { Item as ItemGql, ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql, ItemHardwareFastenerBoltSelectColumn, Maybe, Scalars, EnumUnitEnum } from "../../types/graphql";
import React from 'react';
import { Integer } from '../../types/uint8';
import { HexBoltIcon } from '../../../styles/icon';
import { ColumnProps } from 'antd/lib/table';
import { toTitleCase } from '../../helpers';
import { ItemHardwareFastenerBoltEditForm } from './Edit';


type ItemPlusClassT<T extends GenericItem, C extends ItemClass> = Exclude<ItemHardwareFastenerBoltGql, 'class'>;


export class ItemHardwareFastenerBolt extends Item<ItemPlusClassT<ItemHardwareFastenerBoltGql, 'item_hardware_fastener_bolt'>> {

    __typename: 'item_hardware_fastener_bolt';
    id: Scalars[ 'Int' ];
    countersunk_length?: Maybe<Scalars[ 'numeric' ]>;
    description?: Maybe<Scalars[ 'String' ]>;
    drive_size: Scalars[ 'String' ];
    drive_type: Scalars[ 'String' ];
    head_type: Scalars[ 'String' ];
    head_diameter: Scalars[ 'numeric' ];
    head_height: Scalars[ 'numeric' ];
    embedded_length: Scalars[ 'numeric' ];
    name: Maybe<Scalars[ 'String' ]>;
    point_type: Scalars[ 'String' ];
    shaft_length: Scalars[ 'numeric' ];
    thread_diameter: Scalars[ 'numeric' ];
    thread_length: Scalars[ 'numeric' ];
    unit: EnumUnitEnum;

    constructor ( props: ItemHardwareFastenerBoltGql | ItemGql ) {
        super( props as ItemHardwareFastenerBoltGql );
        console.log({class: 'ItemHardwareFastenerBolt', method: 'constructor', props});
        if ( Object.keys(props).includes('object') && (props as ItemGql).object ){
            console.log( { class: 'ItemHardwareFastenerBolt', method: 'constructor', action: 'props contains "object"', props_object: (props as ItemGql).object } );

            Object.keys( ( props as ItemGql ).object ).forEach( key => {
                console.log( { class: 'ItemHardwareFastenerBolt', method: 'constructor', action: 'adding props to this', key } );
                this[key] = (props as ItemGql).object[key];
            });
        }
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
        return Object.keys( ItemHardwareFastenerBoltSelectColumn ) as Array<keyof typeof ItemHardwareFastenerBoltSelectColumn>;
    }

    /**
     * return Column definitions for ItemHardwareFastenerBolt
     */
    static get Columns (): ColumnProps<ItemHardwareFastenerBoltGql>[] {
        // TODO: group columns sensibly
        // TODO: name columns sensibly
        let cols: Partial<keyof ItemHardwareFastenerBoltGql | ColumnProps<ItemHardwareFastenerBoltGql>>[] = [ 'id', 'name', 'head_type', 'unit', 'point_type', 'thread_type', 'drive_size', 'drive_type', 'countersunk_height',
            // 'head_height',
            // 'description',
            // 'product_url',
            // 'shaft_length',
            // 'head_diameter',
            'thread_length',
            'embedded_length' ];
        return cols.map( key => {
            if ( typeof key === 'string' ) {
                return {
                    key: key,
                    title: toTitleCase( key ),
                    dataIndex: ItemHardwareFastenerBoltSelectColumn[ key ] ?? key,
                };
            }
            if ( typeof key === 'object'){
                return key;
            }

        }
        );
    }
    get Columns (): ColumnProps<ItemHardwareFastenerBoltGql>[] {
        return ItemHardwareFastenerBolt.Columns as ColumnProps<ItemHardwareFastenerBoltGql>[];
    }

    get editComponent (): React.FC {
        return ItemHardwareFastenerBoltEditForm;
    }
}

Item.RegisterClassType( "item_hardware_fastener_bolt", ItemHardwareFastenerBolt );
// Item.RegisterClassType<ItemHardwareFastenerBoltGql, ItemHardwareFastenerBolt>( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );