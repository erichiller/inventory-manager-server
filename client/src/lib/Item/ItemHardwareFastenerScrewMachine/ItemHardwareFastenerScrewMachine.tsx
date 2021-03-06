import { Item, CategoryHierarchyT, ItemGqlTypename, GenericItem, FormMutationHandler } from '~lib/Item/Item';
import type { Item as ItemGql, ItemHardwareFastenerScrewMachine as ItemHardwareFastenerScrewMachineGql, Maybe, Scalars, EnumUnitEnum, EnumItemHardwareFastenerDriveEnum, EnumItemHardwareFinishEnum, EnumItemHardwareFastenerScrewHardnessEnum, EnumItemHardwareFastenerScrewHeadEnum, EnumItemHardwareFastenerMaterialEnum, EnumItemHardwareFastenerScrewMachinePointEnum, EnumItemHardwareFastenerScrewMachineStrengthEnum, EnumItemHandednessEnum, EnumItemHardwareFastenerScrewMachineThreadFitEnum, EnumItemHardwareUseMaterialEnum } from "~types/graphql";
import { ItemHardwareFastenerScrewMachineSelectColumn, EnumItemHardwareFastenerThreadStandardEnum } from "~types/graphql";
import React from 'react';
import { HexBoltIcon } from '../../../styles/icon';
import { ColumnProps } from 'antd/lib/table';
import { Intersection, getUnitFromUnitSystem, sortByCaseInsensitiveText, sortByNumber, makeColumn, commonFilterConfig } from "~lib/UtilityFunctions";;
import { ItemHardwareFastenerScrewMachineForm } from './Form';
import { ItemHardwareFastenerScrewMachineEditMutationHandler } from './Edit';
import { ItemHardwareFastenerScrewMachineAddMutationHandler } from './Add';
import { ItemHardwareFastenerScrewMachineDriveTypeIconMap } from './Icon/Index';
import { IconComponentT } from "~lib/types/common";



type ItemPlusClassT<T extends GenericItem, C extends ItemGqlTypename> = Exclude<ItemHardwareFastenerScrewMachineGql, 'class'>;


export class ItemHardwareFastenerScrewMachine extends Item<ItemPlusClassT<ItemHardwareFastenerScrewMachineGql, 'item_hardware_fastener_screw_machine'>> {

    __typename: 'item_hardware_fastener_screw_machine';
    countersunk_angle?: Maybe<Scalars[ 'numeric' ]>;
    /** Any value here means it is countersunk; A value != the `head_height` means it is only partially countersunk */
    countersunk_height?: Maybe<Scalars[ 'numeric' ]>;
    default_fields?: Maybe<Scalars[ 'jsonb' ]>;
    description?: Maybe<Scalars[ 'String' ]>;
    drive_size?: Maybe<Scalars[ 'String' ]>;
    drive_type: EnumItemHardwareFastenerDriveEnum;
    /** This is what is typically stated as a fastener's length. Length of bolt that is within the material it is screwed into */
    embedded_length: Scalars[ 'numeric' ];
    /** Coating */
    finish?: Maybe<EnumItemHardwareFinishEnum>;
    hardness?: Maybe<EnumItemHardwareFastenerScrewHardnessEnum>;
    head_diameter?: Maybe<Scalars[ 'numeric' ]>;
    head_height?: Maybe<Scalars[ 'numeric' ]>;
    head_type: EnumItemHardwareFastenerScrewHeadEnum;
    id: Scalars[ 'Int' ];
    /** Material, such as Zinc coated steel or Stainless Steel */
    material?: Maybe<EnumItemHardwareFastenerMaterialEnum>;
    // _name: Scalars[ 'String' ];
    // @enumerable(true)
    // get name(): string {
    //     return this._name;
    // }
    point_type?: Maybe<EnumItemHardwareFastenerScrewMachinePointEnum>;
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
    strength_class?: Maybe<EnumItemHardwareFastenerScrewMachineStrengthEnum>;
    /** psi */
    tensile_strength?: Maybe<Scalars[ 'numeric' ]>;
    /** ie. M3 or #6. Measure of the outer diameter. For US items, diameters smaller than ¼" get #<numbers> */
    // thread_diameter: Scalars[ 'numeric' ];
    thread_diameter_label: Scalars[ 'String' ];
    thread_direction?: Maybe<EnumItemHandednessEnum>;
    thread_fit?: Maybe<EnumItemHardwareFastenerScrewMachineThreadFitEnum>;
    // thread_label?: Maybe<EnumItemHardwareFastenerThreadLabelEnum>;
    /** if fully threaded, this should be === `shaft_length` */
    thread_length?: number;
    /** TPI for usc, Pitch for metric ; ie. the 0.5 in M3 x 0.5 */
    thread_pitch: Scalars[ 'numeric' ];
    thread_standard: EnumItemHardwareFastenerThreadStandardEnum;
    /** ENUM:Unit */
    unit: EnumUnitEnum;
    /** Material this fastener is meant to thread into. */
    use_material?: Maybe<EnumItemHardwareUseMaterialEnum>;


    // private _labelTemplates?: LabelTemplateMap[];

    constructor ( props: ItemHardwareFastenerScrewMachineGql | ItemGql ) {
        super( props as ItemHardwareFastenerScrewMachineGql );
        // console.log({class: 'ItemHardwareFastenerScrewMachine', method: 'constructor', props});
        if ( Object.keys( props ).includes( 'object' ) && ( props as ItemGql ).object ) {
            // console.log( { class: 'ItemHardwareFastenerScrewMachine', method: 'constructor', action: 'props contains "object"', props_object: (props as ItemGql).object } );

            Object.keys( ( props as ItemGql ).object ).forEach( key => {
                // console.log( { class: 'ItemHardwareFastenerScrewMachine', method: 'constructor', action: 'adding props to this', key } );
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

    get defaultQrProps (): Array<keyof ItemHardwareFastenerScrewMachine> {
        return [
            // 'id',
            // 'name',
            'url',
            // 'material',
            // 'finish',
            // 'use_material',
            // 'drive_size',
            // 'countersunk_angle',
            // 'hardness',
            // 'tensile_strength',
            // 'strength_class',
            // 'thread_fit'
        ];
    }


    // get labelTemplate (): Label | null {
    //     console.log( "labelTemplate()" );
    //     if ( this.labelTemplateMatches != null && this.labelTemplateMatches.length > 0 ) {
    //         return this.labelTemplateMatches[0];
    //     }
    //     // else if ( this._object && this._object.hasOwnProperty( "labelTemplate" ) ) {
    //     //     return this._object[ 'labelTemplate' ];
    //     // }
    //     return null;
    // }

    get labelProps (): Array<Partial<keyof typeof ItemHardwareFastenerScrewMachineSelectColumn> | keyof Item<ItemHardwareFastenerScrewMachineGql>> {
        const exclude: Array<Partial<keyof typeof ItemHardwareFastenerScrewMachineSelectColumn> | keyof Item<ItemHardwareFastenerScrewMachineGql>> = [
            // ,
            'default_fields',
            // 'url'
        ];
        // let objectKeys: Array<Partial<keyof typeof ItemHardwareFastenerScrewMachineSelectColumn> | keyof Item<ItemHardwareFastenerScrewMachineGql>> = [];
        // for ( let key in this ){
        //     objectKeys.push(key);
        // }
        return [ ...( Object.keys( ItemHardwareFastenerScrewMachineSelectColumn ).filter( val => !exclude.includes( val as any ) ) as Array<keyof typeof ItemHardwareFastenerScrewMachineSelectColumn> ), 'url' ];
    }

    /**
     * return Column definitions for ItemHardwareFastenerScrewMachine
     */
    static get Columns (): ColumnProps<ItemHardwareFastenerScrewMachineGql>[] {
        // TODO: group columns sensibly
        // TODO: name columns sensibly
        const renderWithUnitSuffix = ( value: string | number, record: ItemHardwareFastenerScrewMachineGql ) => value ? `${ value } ${ getUnitFromUnitSystem( record.unit ) }` : '';

        return makeColumn(
            [
                {
                    key: 'id',
                    responsive: [ 'xl' ],
                },
                {
                    key: 'name',
                    sorter: sortByCaseInsensitiveText( 'name' ),
                },
                {
                    key: 'thread_diameter_label',
                    title: 'Diameter',
                    // sorter: sortByNumber( 'thread_diameter_label' ),
                    // TODO, need to strip out text and sort the remainder as a number
                    responsive: [ 'lg' ],
                },
                {
                    key: 'embedded_length',
                    title: 'Length',
                    render: renderWithUnitSuffix,
                    sorter: sortByNumber( 'embedded_length' ),
                    responsive: [ 'sm' ],
                },
                {
                    key: 'thread_pitch',
                    title: 'Pitch',
                    defaultSortOrder: 'ascend',
                    sorter: sortByNumber( 'thread_pitch' ),
                    responsive: [ 'lg' ],
                },
                {
                    key: 'thread_standard',
                    title: 'Standard',
                    ...commonFilterConfig( 'thread_standard', EnumItemHardwareFastenerThreadStandardEnum ),
                    sorter: sortByCaseInsensitiveText( 'thread_standard' ),
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'head_type',
                    title: 'Head',
                    sorter: sortByCaseInsensitiveText( 'thread_standard' ),
                    responsive: [ 'lg' ],
                },
                {
                    key: 'point_type',
                    title: 'Point',
                    responsive: [ 'xl' ],
                },
                // {
                //     key: 'thread_label',
                //     title: 'Thread',
                //     responsive: [ 'xxl' ],
                // },
                {
                    key: 'drive_type',
                    title: 'Drive',
                    dataIndex: 'drive_type',
                    render: ( value, record, index ) => {
                        if ( !( value in ItemHardwareFastenerScrewMachineDriveTypeIconMap ) ) { return ''; }
                        const Icon = ItemHardwareFastenerScrewMachineDriveTypeIconMap[ value ];
                        // console.log( 'drive_type render', { value, record, index, icon: ItemHardwareFastenerScrewMachineDriveTypeIconMap[ value ] } );
                        return < Icon />;
                    }
                },
                {
                    key: 'drive_size',
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'countersunk_height',
                    render: renderWithUnitSuffix,
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'head_height',
                    render: renderWithUnitSuffix,
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'head_diameter',
                    render: renderWithUnitSuffix,
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'finish',
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'material',
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'thread_fit',
                    title: 'Fit',
                    responsive: [ 'xxl' ],
                },
                {
                    key: 'strength_class',
                    title: 'Strength',
                    responsive: [ 'xxl' ],
                },
                // 'product_url', // TODO: make this an icon ?
                {
                    key: 'thread_length',
                    render: renderWithUnitSuffix,
                    responsive: [ 'xxl' ],
                },
            ] );
    }
    get Columns (): ColumnProps<ItemHardwareFastenerScrewMachineGql>[] {
        return ItemHardwareFastenerScrewMachine.Columns as ColumnProps<ItemHardwareFastenerScrewMachineGql>[];
    }

    static get addComponent (): React.FC {
        return ItemHardwareFastenerScrewMachineForm;
    }
    static get addHandler (): React.FC<FormMutationHandler> {
        return ItemHardwareFastenerScrewMachineAddMutationHandler;
    }

    get editComponent (): React.FC {
        return ItemHardwareFastenerScrewMachineForm;
    }
    get editHandler (): React.FC<FormMutationHandler> {
        return ItemHardwareFastenerScrewMachineEditMutationHandler;
    }
    get editFormInitialValues (): Intersection<ItemHardwareFastenerScrewMachineGql, { screw_size: ItemHardwareFastenerScrewMachineGql; }> {
        return Object.assign(
            {},
            {
                screw_size: this.simpleObject
            },
            this.simpleObject
        );
    }

}

Item.RegisterClassType( "item_hardware_fastener_screw_machine", ItemHardwareFastenerScrewMachine );
// Item.RegisterClassType<ItemHardwareFastenerScrewMachineGql, ItemHardwareFastenerScrewMachine>( "item_hardware_fastener_screw_machine", ItemHardwareFastenerScrewMachine );