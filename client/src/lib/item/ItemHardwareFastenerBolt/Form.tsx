import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip, InputNumber, Switch } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemFormProps } from '../Item';
import { EnumHardwareFastenerHeadEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFinishEnum, EnumHardwareFastenerMaterialEnum, EnumHandednessEnum, EnumHardwareFastenerThreadStandardEnum, EnumHardwareFastenerBoltThreadFitEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareFastenerHardnessEnum, EnumHardwareFastenerStrengthClassEnum, useGetEnumHardwareFastenerThreadStandardQuery, EnumHardwareUseMaterialEnum, EnumHardwareFastenerThreadLabelEnum } from '../../types/graphql';
import TextArea from 'antd/lib/input/TextArea';

import { EnumUnitKeys, EnumHardwareFastenerSpecificationsEnum } from './types/types';
import { UnitSelect } from './formComponents/UnitSelect';
import { MeasurementInput } from './formComponents/MeasurementInput';
import { EnumSelect } from './formComponents/EnumSelect';
import { ScrewSizeInput, ScrewSizeInputOptionData } from './formComponents/ScrewSizeInput';
import { toMinimumFixed, Union } from '../../UtilityFunctions';
import { FormInstance } from 'antd/lib/form';
import { ItemHardwareFastenerBolt } from './Index';
import { ScrewThreadIcon, ScrewEmbeddedLengthIcon, ScrewHeadDiameterIcon, ScrewHeadHeightIcon, ItemHardwareFastenerBoltDriveTypeIconMap, ItemHardwareFastenerBoltPointIconMap } from './icon';
import { FormIconTooltip, getUnitPrefixFromUnitSystem } from './formComponents/helpers';
import { ThreadDirection_RightHandRuleIcon } from './icon';
import { QtyInput } from '../common/QtyInput';
import { OrderInput } from '../../../components/order/OrderInput';
import { DescriptionTable } from './formComponents/DescriptionTable';


interface ItemHardwareFastenerBoltFormProps extends Union<ItemFormProps, ItemHardwareFastenerBolt> {

}


interface FormFields {
    screw_size: ScrewSizeInputOptionData;
    in_stock: boolean;
}

/**
* Determines if given `Form.Item` should update based on a specfic trigger.
*
* @param field property of `ScrewSizeInputOptionData` to check for a change in.  **_This must match the `name` of the calling `Form.Item`_**
* @param form `Form` instance that this `Form.Item` is rendered within.
*
* @returns boolean where true means do update.
*/
const setFieldScrewSizePropertyInShouldUpdate = ( field: keyof ScrewSizeInputOptionData, form: FormInstance, setFieldState?: (any) => void ) => {
    return ( prev: FormFields, next: FormFields ) => {
        let currentValue = form.getFieldValue( field );
        console.log( "form", `${ field } shouldUpdate?`, { currentValue, next } );
        let nextValue = next.screw_size && next.screw_size[ field ] ? toMinimumFixed( next.screw_size[ field ], 1 ) : null;
        if ( nextValue && currentValue !== nextValue ) {
            console.log( "form", `${ field } shouldUpdate?`, `SETTING ${ field } from screw_size`, `current ${ currentValue } !== next ${ nextValue }` );
            form.setFieldsValue( Object.fromEntries( [ [ field, nextValue ] ] ) );
            if ( setFieldState ){
                setFieldState( nextValue );
            }
            return true;
        }
        return false;
    };
};



// function setFieldInShouldUpdate2<T extends keyof FormFields> ( field: T, form: FormInstance, property: keyof T | null ) {
//     // if ( field !== "thread_diameter" ) { return () => false; }
//     return ( prev: FormFields, next: FormFields ) => {
//         let currentValue = form.getFieldValue( field );
//         console.log( "form", `${ field } shouldUpdate?`, { currentValue, next } );
//         let nextValue = next.screw_size && next.screw_size[ field ] ? toMinimumFixed( next.screw_size[ field ], 1 ) : null;
//         if ( currentValue !== nextValue ) {
//             console.log( "form", `${ field } shouldUpdate?`, `SETTING ${ field } from screw_size`, `${ currentValue } !== ${ nextValue }` );
//             form.setFieldsValue( Object.fromEntries( [ [ field, nextValue ] ] ) );
//             return true;
//         }
//         return false;
//     };
// };


export const ItemHardwareFastenerBoltForm: React.FC<ItemHardwareFastenerBoltFormProps> = ( props ) => {
    const { form } = props;
    const [ unit, setUnit ] = useState<EnumUnitKeys>();
    const [ displayStockQuantity, setDisplayStockQuantity ] = useState<boolean>();

    const screwSizeInputRef = useRef<Input>();

    useEffect( () => {
        screwSizeInputRef.current.focus();
    }, [ screwSizeInputRef ] );

    useEffect( () => {
        let initProps: Partial<ItemHardwareFastenerBolt> = {};
        // if ( !props.thread_direction ) {
        //     initProps.thread_direction = EnumHandednessEnum.right;
        // }
        form.setFieldsValue( initProps );
    } );

    // TODO: then here have a type selector when in the generic add form

    const updateName = () => {
        const f = ( f: string, prefix?: string ) => {
            let v = form.getFieldValue( f );
            return v ? `${ prefix ? prefix : '' }${ v.replace( /[.0]*$/, '' )}`: '';
        };
        /**
         * Set Name
         * Machine screws, Phillips pan head, Stainless steel 18-8, #12-24 x 1"
         * <Fastener type> <Drive Types> <Head Styles> <Material> <Diameter><Thread Count,pitch><Length>
         */
        let valueString = `${ f( 'use_material' ) }${ f( 'drive_type', ' ' ) }${ f( 'head_type', ', ' ) }${ f( 'material_type', ', ' ) }${ getUnitPrefixFromUnitSystem( form.getFieldValue( 'unit' ) ) }${ f( 'thread_diameter' ) }${ f( 'thread_pitch', '-' ) }${ f( 'embedded_length', 'x' ) } `;
        form.setFieldsValue( Object.fromEntries( [ [ 'name', valueString ] ] ) );
    };

    return (
        <React.Fragment>

            {/********************************************************************************
              ** AUTO-FILL ITEMS ( these should be filled when ScrewSizeInput is done )
              ********************************************************************************/}
            <div className="col">

                <Form.Item name="unit" label="Measurement Unit" required
                    shouldUpdate={setFieldScrewSizePropertyInShouldUpdate( "unit", form, setUnit )}
                >
                    <UnitSelect onChange={setUnit} />
                </Form.Item>

                {/* Thread Standard */}
                <Form.Item name="thread_standard"
                    // shouldUpdate={( prev: FormFields, next: FormFields ) => {
                    //     let currentValue = form.getFieldValue( 'thread_standard' );
                    //     if ( ( next.screw_size && next.screw_size.thread_standard && currentValue !== next.screw_size.thread_standard ) ) {
                    //         form.setFieldsValue( { 'thread_standard': next.screw_size.thread_standard } );
                    //         return true;
                    //     }
                    //     return false;
                    // }}
                    shouldUpdate={setFieldScrewSizePropertyInShouldUpdate( "thread_standard", form )}
                    label={<DescriptionTable query={useGetEnumHardwareFastenerThreadStandardQuery} title="Standard" />}
                    // label={<Tooltip title={<DescriptionTable tableData={{
                    //     ISO: 'International Standards Organization'
                    // }} />} ><span>Standard</span></Tooltip>}
                    required
                >
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadStandardEnum )}
                    />
                </Form.Item>

                {/* DIAMETER */}
                <Form.Item name="thread_diameter" dependencies={[ 'unit' ]} required
                    label={<Tooltip title={
                        <span className="tooltip-with-example">
                            <header>Thread dimensions. </header>
                        TPI if US unit, Pitch if metric.
                        <b>US Customary Unit:</b>
                            <pre><span className="highlight">#6</span>-32x1</pre>
                            <b>Metric:</b>
                            <pre><span className="highlight">M3</span>-0.5x5</pre>
                        </span>
                    } ><span>Diameter</span></Tooltip>}
                    shouldUpdate={setFieldScrewSizePropertyInShouldUpdate( "thread_diameter", form )}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

                {/* Thread Pitch */}
                <Form.Item name="thread_pitch"
                    label={<Tooltip title={
                        <span className="tooltip-with-example">
                            <header>Thread dimensions. </header>
                        TPI if US unit, Pitch if metric.
                        <b>US Customary Unit:</b>
                            <pre>#6-<span className="highlight">32</span>x1</pre>
                            <b>Metric:</b>
                            <pre>M3-<span className="highlight">0.5</span>x5</pre>
                        </span>
                    } ><span>Pitch</span></Tooltip>}
                    shouldUpdate={setFieldScrewSizePropertyInShouldUpdate( "thread_pitch", form, updateName )}
                    required
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

                {/* Length */}
                <Form.Item
                    name="embedded_length"
                    label={
                        <FormIconTooltip
                            icon={<ScrewEmbeddedLengthIcon />}
                            text={
                            <span>
                                    <p>Embedded Length is the length of the fastener that (at maximum) will be into the use material.</p>
                                    <p>The method of measurement differs for different Head Types</p>
                            </span>
                                }
                            label="Length"
                        />}
                    dependencies={[ 'unit' ]}
                    shouldUpdate={setFieldScrewSizePropertyInShouldUpdate( "embedded_length", form )}
                    required
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

                {/* TODO: this should ultimately have a lookup table of applicable threads. */}
                <Form.Item name="thread_label" label="Thread Label"
                    shouldUpdate={( prev: FormFields, next: FormFields ) => {
                        let currentValue = form.getFieldValue( 'thread_label' );
                        if ( ( next.screw_size && next.screw_size.thread_label && currentValue !== next.screw_size.thread_label ) ) {
                            form.setFieldsValue( { 'thread_label': next.screw_size.thread_label } );
                            return true;
                        }
                        return false;
                    }}
                >
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadLabelEnum )}
                    />
                </Form.Item>
            </div>



            {/********************************************************************************
              ** Most Important
              ********************************************************************************/}
            <div className="col">
                <Divider key="divider_screw_size" orientation="left" />
                <Form.Item
                    name="screw_size"
                    label="Quick Define"
                    getValueFromEvent={( args ) => {
                        console.log( 'form getValueFromEvent (screw_size)', args );
                        return args;
                    }}>
                    <ScrewSizeInput
                        forwardRef={screwSizeInputRef}
                        unit={unit}
                    />
                </Form.Item>
            </div>

            <div className="col">
                <Form.Item name="head_type" label="Head" required>
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerHeadEnum )} />
                </Form.Item>

                <Form.Item name="drive_type" label="Drive" required>
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerDriveEnum )} iconMap={ItemHardwareFastenerBoltDriveTypeIconMap} />
                </Form.Item>

                <Form.Item name="finish" label="Finish">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFinishEnum )} />
                </Form.Item>

                <Form.Item name="material" label="Material">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerMaterialEnum )} />
                </Form.Item>
            </div>



            {/********************************************************************************
              ** Thread
              ********************************************************************************/}
            <div className="col">
                <Divider key="divider_thread" orientation="left">Thread</Divider>

                <Form.Item name="thread_length" dependencies={[ 'unit' ]}
                    label={<Tooltip title={<div className="formTooltip"><ScrewThreadIcon /><span>The length of the screw that is threaded. </span></div>} ><span>Thread Length</span></Tooltip>}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6}
                    />
                </Form.Item>
                <Form.Item name="thread_direction" required
                    label={
                        <FormIconTooltip
                            icon={<ThreadDirection_RightHandRuleIcon />}
                            text={<span>
                                <p>The threads of a screw are a helix and therefore screws can be right- or left-handed. The rule is this: if a screw is right-handed (most screws are) point your right thumb in the direction you want the screw to go and turn the screw in the direction of your curled right fingers.
                                    </p>
                                <p>If in doubt, assume it is Right-handed.</p>
                            </span>}
                            label="Handedness"
                        />}
                >
                    <EnumSelect enumKeys={Object.keys( EnumHandednessEnum )} placeholder="Right" />
                </Form.Item>
                <Form.Item name="thread_fit" label="Fit">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerBoltThreadFitEnum ).filter( el => {
                        if ( unit === "metric") {
                            return /[gh]/.exec( el ) !== null;
                        }
                        if ( unit === "usc"){
                            return /[0-9][AB]/.exec( el ) !== null;
                        }
                        return true;
                    })} />
                </Form.Item>
            </div>


            {/********************************************************************************
              ** Head
              ********************************************************************************/}
            <div className="col">
                <Divider key="divider_head" orientation="left">Head</Divider>
                <Form.Item name="head_diameter" dependencies={[ 'unit' ]} 
                    label={
                        <FormIconTooltip
                            icon={<ScrewHeadDiameterIcon />}
                            text={
                                <span>
                                    <p>Diameter of Head</p>
                                </span>
                            }
                            label="Diameter"
                        />}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>
                <Form.Item name="head_height" dependencies={[ 'unit' ]}
                    label={
                        <FormIconTooltip
                            icon={<ScrewHeadHeightIcon />}
                            text={
                                <span>
                                    <p>Height of Head</p>
                                </span>
                            }
                            label="Height"
                        />}>
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

            </div>

            <div className="col">
                {/* Drive */}
                <Divider key="divider_drive" orientation="left">Drive</Divider>
                <Form.Item name="drive_size" dependencies={[ 'unit' ]}
                    label={<Tooltip title="Size of drive. For example, if `drive_type` is `hex_socket` then the `drive_size` would be the size of the allen wrench needed." ><span>Size</span></Tooltip>}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>
            </div>


            {/* Countersunk */}
            <div className="col">
                <Divider key="divider_countersunk" orientation="left">Countersunk</Divider>
                <Form.Item name="countersunk_height" label="Height" dependencies={[ 'unit' ]}>
                    <MeasurementInput
                        unit={unit}
                        maxLength={6}
                    // defaultValue="0"
                    // placeholder="countersunk head height"
                    />
                </Form.Item>
                <Form.Item name="countersunk_angle" label="Angle">
                    <Input
                        type="number"
                        maxLength={4}
                        style={{ width: 80 }}
                        addonAfter="&#xb0;"
                    />
                </Form.Item>
            </div>


            {/* Etc. */}

            <div className="col">
                <Divider key="divider_miscellaneous" orientation="left">Miscellaneous</Divider>

                <Form.Item name="use_material" label="Use Material" required>
                    <EnumSelect enumKeys={Object.keys( EnumHardwareUseMaterialEnum )} placeholder="Machine" />
                </Form.Item>

                <Form.Item name="point_type"
                    label={<Tooltip title="Style of the point of this fastener. Bolts default to `Flat`" ><span>Point</span></Tooltip>}
                >
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerBoltPointEnum )} placeholder="Bolt Flat" iconMap={ItemHardwareFastenerBoltPointIconMap} />
                </Form.Item>

                <Form.Item name="hardness" label="Hardness">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerHardnessEnum )} />
                </Form.Item>
                <Form.Item name="strength_class" label="Stength Class">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerStrengthClassEnum )} />
                </Form.Item>

                <Form.Item name="tensile_strength" label="Tensile Strength">
                    <Input
                        type="number"
                        maxLength={8}
                        style={{ width: 100 }}
                        addonAfter="psi"
                    />
                </Form.Item>

                <Form.Item name="specifications_met" label="Specifications Met">
                    <EnumSelect
                        mode='multiple'
                        enumKeys={Object.keys( EnumHardwareFastenerSpecificationsEnum )}
                    />
                </Form.Item>

            </div>

        </React.Fragment>
    );
};

