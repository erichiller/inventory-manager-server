import { Item, IconComponentT, CategoryHierarchyT, ItemGqlTypename, GenericItem, FormMutationHandler } from '../Item';
import { Item as ItemGql, ItemHardwareFastenerBolt as ItemHardwareFastenerBoltGql, ItemHardwareFastenerBoltSelectColumn, Maybe, Scalars, EnumUnitEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFinishEnum, EnumHardwareFastenerHardnessEnum, EnumHardwareFastenerHeadEnum, EnumHardwareFastenerMaterialEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareFastenerBoltStrengthEnum, EnumHandednessEnum, EnumHardwareFastenerBoltThreadFitEnum, EnumHardwareFastenerThreadStandardEnum, EnumHardwareFastenerThreadLabelEnum, EnumHardwareUseMaterialEnum } from "../../types/graphql";
import React from 'react';
import { Integer } from '../../types/uint8';
import { HexBoltIcon } from '../../../styles/icon';
import { ColumnProps } from 'antd/lib/table';
import { toTitleCase, enumerable, Union } from '../../UtilityFunctions';
import { ItemHardwareFastenerBoltForm } from './Form';
import { ItemHardwareFastenerBoltEditMutationHandler } from './Edit';
import { ItemHardwareFastenerBoltAddMutationHandler } from './Add';


type ItemPlusClassT<T extends GenericItem, C extends ItemGqlTypename> = Exclude<ItemHardwareFastenerBoltGql, 'class'>;


export class ItemHardwareFastenerBolt extends Item<ItemPlusClassT<ItemHardwareFastenerBoltGql, 'item_hardware_fastener_bolt'>> {

    __typename: 'item_hardware_fastener_bolt';
    countersunk_angle?: Maybe<Scalars[ 'numeric' ]>;
    /** Any value here means it is countersunk; A value != the `head_height` means it is only partially countersunk */
    countersunk_height?: Maybe<Scalars[ 'numeric' ]>;
    default_fields?: Maybe<Scalars[ 'jsonb' ]>;
    description?: Maybe<Scalars[ 'String' ]>;
    drive_size?: Maybe<Scalars[ 'String' ]>;
    drive_type: EnumHardwareFastenerDriveEnum;
    /** This is what is typically stated as a fastener's length. Length of bolt that is within the material it is screwed into */
    embedded_length: Scalars[ 'numeric' ];
    /** Coating */
    finish?: Maybe<EnumHardwareFinishEnum>;
    hardness?: Maybe<EnumHardwareFastenerHardnessEnum>;
    head_diameter?: Maybe<Scalars[ 'numeric' ]>;
    head_height?: Maybe<Scalars[ 'numeric' ]>;
    head_type: EnumHardwareFastenerHeadEnum;
    id: Scalars[ 'Int' ];
    /** Material, such as Zinc coated steel or Stainless Steel */
    material?: Maybe<EnumHardwareFastenerMaterialEnum>;
    name: Scalars[ 'String' ];
    point_type?: Maybe<EnumHardwareFastenerBoltPointEnum>;
    /**
     * Specifications Met ; array of Organizations that certified this
     * Examples:
     * ASME
     * DIN
     * ISO
     * ASTM
     * Mil. Spec.
     * Fed. Spec.
     * NAS
     * JIS
     */
    specifications_met?: Maybe<Scalars[ 'jsonb' ]>;
    strength_class?: Maybe<EnumHardwareFastenerBoltStrengthEnum>;
    /** psi */
    tensile_strength?: Maybe<Scalars[ 'numeric' ]>;
    /** ie. M3 or #6. Measure of the outer diameter. For US items, diameters smaller than ¼" get #<numbers> */
    thread_diameter: Scalars[ 'numeric' ];
    thread_direction?: Maybe<EnumHandednessEnum>;
    thread_fit?: Maybe<EnumHardwareFastenerBoltThreadFitEnum>;
    thread_label?: Maybe<EnumHardwareFastenerThreadLabelEnum>;
    /** if fully threaded, this should be === `shaft_length` */
    thread_length?: Maybe<Scalars[ 'numeric' ]>;
    /** TPI for usc, Pitch for metric ; ie. the 0.5 in M3 x 0.5 */
    thread_pitch: Scalars[ 'numeric' ];
    thread_standard: EnumHardwareFastenerThreadStandardEnum;
    /** ENUM:Unit */
    unit: EnumUnitEnum;
    /** Material this fastener is meant to thread into. */
    use_material?: Maybe<EnumHardwareUseMaterialEnum>;

    constructor ( props: ItemHardwareFastenerBoltGql | ItemGql ) {
        super( props as ItemHardwareFastenerBoltGql );
        // console.log({class: 'ItemHardwareFastenerBolt', method: 'constructor', props});
        if ( Object.keys( props ).includes( 'object' ) && ( props as ItemGql ).object ) {
            // console.log( { class: 'ItemHardwareFastenerBolt', method: 'constructor', action: 'props contains "object"', props_object: (props as ItemGql).object } );

            Object.keys( ( props as ItemGql ).object ).forEach( key => {
                // console.log( { class: 'ItemHardwareFastenerBolt', method: 'constructor', action: 'adding props to this', key } );
                this[ key ] = ( props as ItemGql ).object[ key ];
            } );
        }
    }
    // specific props here;
    // get icon (): IconComponentT {
    //     return null;
    // }

    static get icon (): IconComponentT {
        // return null;
        // return new Promise<IconComponentT>( ( resolve, reject ) => resolve( HexBoltIcon ) );
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
        let cols: Partial<keyof ItemHardwareFastenerBoltGql | ColumnProps<ItemHardwareFastenerBoltGql>>[] = [ 'id', 'name', 'head_type', 'unit', 'point_type', 'thread_label', 'thread_standard', 'drive_size', 'drive_type', 'countersunk_height',
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
            if ( typeof key === 'object' ) {
                return key;
            }

        }
        );
    }
    get Columns (): ColumnProps<ItemHardwareFastenerBoltGql>[] {
        return ItemHardwareFastenerBolt.Columns as ColumnProps<ItemHardwareFastenerBoltGql>[];
    }

    static get addComponent (): React.FC {
        return ItemHardwareFastenerBoltForm;
    }
    static get addHandler (): React.FC<FormMutationHandler> {
        return ItemHardwareFastenerBoltAddMutationHandler;
    }

    get editComponent (): React.FC {
        return ItemHardwareFastenerBoltForm;
    }
    get editHandler (): React.FC<FormMutationHandler> {
        return ItemHardwareFastenerBoltEditMutationHandler;
    }
    get editFormInitialValues (): Union<ItemHardwareFastenerBoltGql, { screw_size: ItemHardwareFastenerBoltGql; }> {
        return Object.assign(
            {}, 
            {
                screw_size: this.simpleObject
            },
            this.simpleObject
        );
    }
}

Item.RegisterClassType( "item_hardware_fastener_bolt", ItemHardwareFastenerBolt );
// Item.RegisterClassType<ItemHardwareFastenerBoltGql, ItemHardwareFastenerBolt>( "ITEM_HARDWARE_FASTENER_BOLT", ItemHardwareFastenerBolt );