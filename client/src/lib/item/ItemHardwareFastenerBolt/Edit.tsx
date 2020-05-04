import React, { useState, ReactText, ChangeEvent, useRef, useEffect } from 'react';
import { Form, Input, Divider, Tooltip } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemEditFormProps } from '../Item';
import { EnumHardwareFastenerHeadEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFinishEnum, EnumHardwareFastenerMaterialEnum, EnumHardwareFastenerThreadDirectionEnum, EnumHardwareFastenerThreadTypeEnum, EnumHardwareFastenerThreadFitEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareFastenerHardnessEnum, EnumHardwareFastenerStrengthClassEnum, EnumUnitEnum, EnumHardwareFastenerUseMaterialEnum } from '../../types/graphql';
import TextArea from 'antd/lib/input/TextArea';

import { EnumUnitKeys, EnumHardwareFastenerSpecificationsEnum } from './types/types';
import { UnitSelect } from './formComponents/UnitSelect';
import { MeasurementInput } from './formComponents/MeasurementInput';
import { EnumSelect } from './formComponents/EnumSelect';
import { ScrewSizeInput, ScrewSizeInputOptionData } from './formComponents/ScrewSizeInput';
import { toMinimumFixed, Union } from '../../UtilityFunctions';
import { FormInstance } from 'antd/lib/form';
import { ItemHardwareFastenerBolt } from './Index';
import { ScrewThreadIcon, ScrewEmbeddedLengthIcon, ScrewHeadDiameterIcon, ScrewHeadHeightIcon, ItemHardwareFastenerBoltDriveTypeIconMap } from './icon';
import { FormIconTooltip } from './formComponents/helpers';
import { ThreadDirection_RightHandRuleIcon } from './icon';


interface ItemHardwareFastenerBoltEditFormProps extends Union<ItemEditFormProps, ItemHardwareFastenerBolt> {

}


interface FormFields {
    screw_size: ScrewSizeInputOptionData;
}


const setFieldInShouldUpdate = ( field: keyof ScrewSizeInputOptionData, form: FormInstance ) => {
    // if ( field !== "thread_diameter" ) { return () => false; }
    return ( prev: FormFields, next: FormFields ) => {
        let currentValue = form.getFieldValue( field );
        console.log( "form", `${ field } shouldUpdate?`, { currentValue, next } );
        let nextValue = next.screw_size && next.screw_size[ field ] ? toMinimumFixed( next.screw_size[ field ], 1 ) : null;
        if ( currentValue !== nextValue ) {
            console.log( "form", `${ field } shouldUpdate?`, `SETTING ${ field } from screw_size`, `${ currentValue } !== ${ nextValue }` );
            form.setFieldsValue( Object.fromEntries( [ [ field, nextValue ] ] ) );
            return true;
        }
        return false;
    };
};


export const ItemHardwareFastenerBoltEditForm: React.FC<ItemHardwareFastenerBoltEditFormProps> = ( props ) => {
    const { form } = props;
    const [ unit, setUnit ] = useState<EnumUnitKeys>();

    const screwSizeInputRef = useRef<Input>();

    useEffect( () => {
        screwSizeInputRef.current.focus();
    }, [ screwSizeInputRef ] );

    useEffect( () => {
        let initProps: Partial<ItemHardwareFastenerBolt> = {};
        if ( !props.thread_direction ) {
            initProps.thread_direction = EnumHardwareFastenerThreadDirectionEnum.right;
        }
        form.setFieldsValue( initProps );
    } );

    return (
        <React.Fragment>
            {/********************************************************************************
              ** GENERAL ITEMS 
              ********************************************************************************/}
            <div className="col">
                {/* TODO: THESE FORM ITEMS ARE FOR **ALL** OBJECTS */}
                <Form.Item name="name" label="Name">
                    <Input placeholder="Item name" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea placeholder="Description, leave empty to auto-generate" autoSize={{ minRows: 2 }} />
                </Form.Item>
                {/* TODO: then here have a type selector when in the generic add form */}
            </div>


            {/********************************************************************************
              ** AUTO-FILL ITEMS ( these should be filled when ScrewSizeInput is done )
              ********************************************************************************/}
            <div className="col">

                <Form.Item name="unit" label="Measurement Unit" required
                    shouldUpdate={setFieldInShouldUpdate( "unit", form )}
                >
                    <UnitSelect onChange={setUnit} />
                </Form.Item>

                {/* DIAMETER */}
                <Form.Item name="thread_diameter" dependencies={[ 'unit' ]}
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
                    shouldUpdate={setFieldInShouldUpdate( "thread_diameter", form )}
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
                    shouldUpdate={setFieldInShouldUpdate( "thread_pitch", form )}
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
                    shouldUpdate={setFieldInShouldUpdate( "embedded_length", form )}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

                {/* TODO: this should ultimately have a lookup table of applicable threads. */}
                <Form.Item name="thread_type" label="Thread"
                    shouldUpdate={( prev: FormFields, next: FormFields ) => {
                        let currentValue = form.getFieldValue( 'thread_type' );
                        if ( ( next.screw_size && next.screw_size.thread_type && currentValue !== next.screw_size.thread_type ) ) {
                            form.setFieldsValue( { 'thread_type': next.screw_size.thread_type } );
                            return true;
                        }
                        return false;
                    }}
                >
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadTypeEnum )} placeholder="input placeholder"
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
                <Form.Item name="head_type" label="Head">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerHeadEnum )} placeholder="input placeholder" />
                </Form.Item>

                <Form.Item name="drive_type" label="Drive">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerDriveEnum )} iconMap={ItemHardwareFastenerBoltDriveTypeIconMap} placeholder="input placeholder" />
                </Form.Item>

                <Form.Item name="finish" label="Finish">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFinishEnum )} placeholder="input placeholder" />
                </Form.Item>

                <Form.Item name="material" label="Material">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerMaterialEnum )} placeholder="input placeholder" />
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
                    // placeholder=""
                    />
                </Form.Item>
                <Form.Item name="thread_direction"
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
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadDirectionEnum )} placeholder="Right" />
                </Form.Item>
                <Form.Item name="thread_fit" label="Fit">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadFitEnum )} placeholder="input placeholder" />
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

                <Form.Item name="use_material" label="Use Material">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerUseMaterialEnum )} placeholder="input placeholder" />
                </Form.Item>

                <Form.Item name="point_type" label="Point">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerBoltPointEnum )} placeholder="input placeholder" />
                </Form.Item>

                <Form.Item name="hardness" label="Hardness">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerHardnessEnum )} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item name="strength_class" label="Stength Class">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerStrengthClassEnum )} placeholder="input placeholder" />
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
                        placeholder="input placeholder"
                    />
                </Form.Item>

                {/* <Form.Item name="shaft_length" label="Length" dependencies={[ 'unit' ]}>
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item> */}

            </div>

        </React.Fragment>
    );
};

