import React, { useState, ReactText, ChangeEvent } from 'react';
import { Form, Input, Select, Divider, Tooltip, AutoComplete } from 'antd';
// import { OptionsType } from 'rc-select/lib/Option';
import { ItemEditFormProps } from '../Item';
import { FormProps } from 'antd/lib/form';
import { SelectProps, SelectValue } from 'antd/lib/select';
import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { EnumUnit, EnumUnitEnum, EnumHardwareFastenerHeadEnum, EnumHardwareFastenerDriveEnum, EnumHardwareFinishEnum, EnumHardwareFastenerMaterialEnum, EnumHardwareFastenerThreadDirectionEnum, EnumHardwareFastenerThreadTypeEnum, EnumHardwareFastenerThreadFitEnum, EnumHardwareFastenerBoltPointEnum, EnumHardwareFastenerHardnessEnum, EnumHardwareFastenerStrengthClassEnum } from '../../types/graphql';
import { InputProps } from 'antd/lib/input';
import InputNumber, { InputNumberProps } from 'antd/lib/input-number';
import TextArea from 'antd/lib/input/TextArea';

import * as ScrewSizeOptions from './ScrewSizeOptions.json';

enum EnumHardwareFastenerSpecificationsEnum {
    ASME = "ASME",
    DIN = "DIN",
    ISO = "ISO",
    ASTM = 'ASTM',
    Mil_Spec = 'Mil.Spec.',
    Fed_Spec = 'Fed.Spec.',
    NAS = 'NAS',
    JIS = 'JIS'
}

interface ItemHardwareFastenerBoltEditFormProps extends ItemEditFormProps {

}


/**
 *
 *
 *
 ✔ countersunk: numeric
 ✔ description: String
    drive_size: String!
    drive_type: String!
    head: String!
    head_diameter: numeric!
    head_height: numeric!
 ✔ id: Int!
    length_embedded: numeric!
    name: String
        ** Needs autogen **
    point: String!
  product_url: String
    shaft_length: numeric!
    thread: numeric!
 ✔ thread_length: numeric!
 ✔ unit: enum_unit_enum!
    ?? material

    bundle                              // array, can be a part of multiple bundles
    labels                              // array, can have multiple labels
    manufacturer                        // array as a part such as M3-10mm flat head can be made by multiple manufacturers
    order                               // array
    vendor                              // array
    labelTemplate                       // array
 */

export const ItemHardwareFastenerBoltEditForm: React.FC<ItemHardwareFastenerBoltEditFormProps> = ( props ) => {
    const { form } = props;
    const [ unit, setUnit ] = useState<EnumUnitKeys>();


    console.log( { f: "ItemHardwareFastenerBoltEditForm" } );
    return (
        <React.Fragment>
            <div className="col">
                {/* TODO: THESE FORM ITEMS ARE FOR **ALL** OBJECTS */}
                <Form.Item name="name" label="Name">
                    <Input placeholder="Item name" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea placeholder="Description, leave empty for auto-generate" autoSize />
                </Form.Item>
                {/* TODO: then here have a type selector when in the generic add form */}

                <Form.Item name="unit" label="Measurement Unit" required>
                    <UnitSelect onChange={setUnit} />
                </Form.Item>
            </div>

            {/* Most important */}

            <div className="col">
                <Form.Item
                    name="test_test"
                    label={<Tooltip title="test_test" ><span>test_test</span></Tooltip>}
                >
                    <Input />

                </Form.Item>
                <Form.Item
                    name="embedded_length"
                    label={<Tooltip title="Embedded Length" ><span>Length</span></Tooltip>}
                    dependencies={[ 'unit' ]}
                    shouldUpdate={( prev, next ) => {
                        console.log(
                            "form",
                            "embedded_length shouldUpdate?",
                            {
                                prev,
                                next,
                                form_screw_size: form.getFieldValue( "screw_size" ),
                                form_price: form.getFieldValue( 'price' )
                            }
                        );
                        // if ( (!prev.price && next.price) || (prev.price && next.price && prev.price.number !== next.price.number ) ) {
                        //     console.log("form", "embedded_length shouldUpdate?", "SETTING price" );
                        //     form.setFieldsValue( { 'test_test': 9992 } );
                        //     return true;
                        // }
                        let currentValue = form.getFieldValue( 'embedded_length' );

                        if ( ( next.screw_size && next.screw_size.length && currentValue !== next.screw_size.length ) ) {
                            console.log( "form", "embedded_length shouldUpdate?", "SETTING embedded_length to screw_size", `${prev.screw_size.length} !== ${next.screw_size.length}` );
                            form.setFieldsValue( { 'embedded_length': next.screw_size.length } );
                            return true;
                        }
                        return false;
                    }}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

                <Form.Item name="head_type" label="Head">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerHeadEnum )} placeholder="input placeholder" />
                </Form.Item>
                
                <Form.Item name="drive_type" label="Drive">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerDriveEnum )} placeholder="input placeholder" />
                </Form.Item>
                
                {/* TODO: this should ultimately have a lookup table of applicable threads. */}
                <Form.Item name="thread_type" label="Thread">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadTypeEnum )} placeholder="input placeholder" />
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
                    shouldUpdate={( prev, next ) => {
                        let currentValue = form.getFieldValue('thread_diameter');
                        if ( next.screw_size && next.screw_size.diameter && currentValue !== next.screw_size.diameter ) {
                            console.log( "form", "thread_diameter shouldUpdate?", "SETTING thread_diameter to screw_size" );
                            form.setFieldsValue( { 'thread_diameter': next.screw_size.diameter } );
                            return true;
                        }
                        return false;
                    }}
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>
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
                >
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>
                <Form.Item name="finish" label="Finish">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFinishEnum )} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item name="material" label="Material">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerMaterialEnum )} placeholder="input placeholder" />
                </Form.Item>
            </div>

            {/* </div> */}
            {/* <div style={{
                flexWrap: 'wrap',
                border: '1px solid purple',
                display: 'flex',
                flexFlow: 'column wrap;'
            }} > */}
            {/* Thread */}

            <div className="col">
                <Divider key="divider_thread" orientation="left">Thread</Divider>
                <Form.Item name="thread_length" label="Length" dependencies={[ 'unit' ]} required>
                    <MeasurementInput
                        unit={unit}
                        maxLength={6}
                    // placeholder=""
                    />
                </Form.Item>
                <Form.Item name="thread_direction" label="Direction">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadDirectionEnum )} placeholder="input placeholder" />
                </Form.Item>
                <Form.Item name="thread_fit" label="Fit">
                    <EnumSelect enumKeys={Object.keys( EnumHardwareFastenerThreadFitEnum )} placeholder="input placeholder" />
                </Form.Item>
            </div>

            {/* Head */}
            <div className="col">
                <Divider key="divider_head" orientation="left">Head</Divider>
                <Form.Item name="head_diameter" dependencies={[ 'unit' ]} label="Diameter">
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>
                <Form.Item name="head_height" dependencies={[ 'unit' ]} label="Height">
                    <MeasurementInput
                        unit={unit}
                        maxLength={6} />
                </Form.Item>

            </div>


            {/* <div style={{
                flexWrap: 'wrap',
                border: '1px solid purple',
                display: 'flex',
                flexFlow: 'column'
            }} > */}

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
                <Form.Item name="point_type" label="Direction">
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



                <Form.Item name="screw_size" label="Length" getValueFromEvent={( args ) => {
                    console.log( 'form getValueFromEvent (screw_size)', args );
                    return args;
                }}>
                    <ScrewSizeInput
                        unit={unit}
                    />
                </Form.Item>

                <Form.Item name="price" label="Price" getValueFromEvent={( args ) => {
                    console.log( 'form getValueFromEvent (price)', args );
                    return args;
                }}>
                    <PriceInput />
                </Form.Item>
            </div>



        </React.Fragment>
    );
};



// testing


interface PriceValue {
    number?: number;
    currency?: 'rmb' | 'dollar';
}

interface PriceInputProps {
    value?: PriceValue;
    onChange?: ( value: PriceValue ) => void;
}

const PriceInput: React.FC<PriceInputProps> = ( { value = {}, onChange } ) => {
    const [ number, setNumber ] = useState( 0 );
    const [ currency, setCurrency ] = useState( 'rmb' );

    const triggerChange = changedValue => {
        if ( onChange ) {
            onChange( { number, currency, ...value, ...changedValue } );
        }
    };

    const onNumberChange = e => {
        const newNumber = parseInt( e.target.value || 0, 10 );
        if ( Number.isNaN( number ) ) {
            return;
        }
        if ( !( 'number' in value ) ) {
            setNumber( newNumber );
        }
        triggerChange( { number: newNumber } );
    };

    const onCurrencyChange = newCurrency => {
        if ( !( 'currency' in value ) ) {
            setCurrency( newCurrency );
        }
        triggerChange( { currency: newCurrency } );
    };

    return (
        <span>
            <Input
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{ width: 100 }}
            />
            <Select
                value={value.currency || currency}
                style={{ width: 80, margin: '0 8px' }}
                onChange={onCurrencyChange}
            >
                <Select.Option value="rmb">RMB</Select.Option>
                <Select.Option value="dollar">Dollar</Select.Option>
            </Select>
        </span>
    );
};



// end testing


export function getUnitFromUnitSystem ( sys: EnumUnitKeys | EnumUnitEnum ) {
    switch ( sys ) {
        case EnumUnitEnum.metric:
        case 'metric':
            return "mm";
        case EnumUnitEnum.usc:
        case 'usc':
            return "in.";
        // return "\"";
        default:
            return '';
    }
}
type UnitPrefixT = 'M' | 'm' | '#' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
/**
 * Convert Prefix of Threading description into Unit System
 * @param prefix can be `'M' | '#' | 'number` ; if typeof prefix is number this is also `EnumUnitEnum.usc` Such as 1/4-20
 */
export function getUnitSystemFromUnitPrefix ( prefix: UnitPrefixT ): EnumUnitEnum {
    prefix = !parseInt( prefix ) ? prefix : '#';
    console.log( { func: 'getUnitSystemFromUnitPrefix', prefix } );
    switch ( prefix ) {
        case 'm':
        case 'M':
            return EnumUnitEnum.metric;
        case '#':
            return EnumUnitEnum.usc;
    }

}
// export function getSeparatorFromUnitSystem ( sys: EnumUnitKeys | EnumUnitEnum ) {
//     switch ( sys ) {
//         case EnumUnitEnum.metric:
//         case 'metric':
//             return "x";
//         case EnumUnitEnum.usc:
//         case 'usc':
//             return "-";
//         // return "\"";
//         default:
//             return '';
//     }
// }

/*****************************************************************************/

type EnumUnitKeys = keyof typeof EnumUnitEnum;

/**
 * Form Select Input for unit selection (metric or usc)
 */
export const UnitSelect: React.FC<SelectProps<EnumUnitKeys>> = ( props ) => {
    const { onChange } = props;
    const [ value, setValue ] = useState<EnumUnitKeys>( props.value );
    const triggerChange = ( value: EnumUnitKeys, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };
    return (
        <React.Fragment>
            <Select
                placeholder="Select Unit used for Item Values"
                onChange={triggerChange}
                options={Object.keys( EnumUnitEnum ).map( unit => { return { value: unit }; } )}
            />
        </React.Fragment>
    );
};

interface MeasurementInputProps extends InputProps {
    unit: EnumUnitKeys;
}
export const MeasurementInput: React.FC<MeasurementInputProps> = ( props ) => {
    console.log( { class: 'MeasurementInput', props } );
    const { onChange, unit, ...remainingProps } = props;
    const [ value, setValue ] = useState<string | number | string[]>( props.value );
    const triggerChange = ( ev: ChangeEvent<HTMLInputElement> ) => {
        setValue( ev.target.value );
        if ( onChange ) {
            onChange( ev );
        }
    };
    return (
        // TODO: add ability to input fractions
        <React.Fragment>
            <Input
                placeholder="Select Unit used for Item Values"
                onChange={triggerChange}
                type="number" // number breaks the formatter on InputNumber
                addonAfter={getUnitFromUnitSystem( unit )}
                value={value || props.value}
                className="numberInput"
                {...remainingProps}
            />
        </React.Fragment>
    );
};

// export const ItemTable = <T extends Item<any>, Q extends typeof useGetItemsQuery> ( props: ItemTableProps<T, Q> & { children?: React.ReactNode; } ) => {

// export const ItemIndex = <T extends Item<any>> ( props: ItemTableProps<T> & { children?: React.ReactNode; } ) => {


interface EnumSelectProps<T> extends SelectProps<T> {
    enumKeys: string[];
}
// type Enum<E> = Record<keyof E, number | string> & { [ k: number ]: string; };

// type EnumKeys<T extends {}> = Record<keyof T, string>;
// type StringEnum<T extends {}> = Record<keyof T, string>;

// export type Enum<T extends {[k: string]: string | number}> = { [ k: Q extends keyof T ]: string | number; };

// let foo: keyof StringEnum<EnumHardwareFastenerHeadEnum>

/**
 * Form Select Input for arbitrary ENUM
 */
export const EnumSelect = ( props: EnumSelectProps<string> ) => {
    // export const EnumSelect = <T extends { [ k: string ]: string | number; }> ( props: EnumSelectProps<string> ) => {
    const { onChange, enumKeys, ...remainingProps } = props;
    const [ value, setValue ] = useState<string>( props.value );
    const triggerChange = ( value: string, option: OptionsType | OptionData | OptionGroupData ) => {
        setValue( value );
        if ( onChange ) {
            onChange( value, option );
        }
    };
    return (
        <React.Fragment>
            <Select
                onChange={triggerChange}
                options={enumKeys.map( k => { return { value: k }; } )}
                {...remainingProps}
            />
        </React.Fragment>
    );
};

/** string form is <Unit>?<Diameter>-<pitch>x<Length> */
class ScrewSizeInputOptionData {
    unit: EnumUnitEnum;
    diameter: number;
    length: number;
    pitch: number;
    numerator?: number;
    denominator?: number;
}

interface regexParsedSizeStringI {
    groups: {
        'unitPrefix': 'm' | 'M' | '#';
        'diameter': string;
        'pitch': string;
        'length': string;
    };
}
// class ScrewSizeInputOptionData implements IScrewSizeInputOptionData {

// }
const constructOptionValue = ( optionData: ScrewSizeInputOptionData ): string => {
    console.log( { method: 'ScrewSizeInput', f: 'constructOptionValue', ...optionData } );
    if ( !optionData ) { return null; }
    // const abbrevUnit = getPrefix( optionData.unit );
    // TODO - REMOVE THIS , calculate
    let unitPrefix = 'M';
    return `${ unitPrefix }${ optionData.diameter }${ optionData.pitch ? `-${ optionData.pitch }` : '' }x${ optionData.length }`;
};
function getDefaultPitch ( unit: EnumUnitEnum, diameter: number ): number {
    // TODO!
    return 32;
}
const parseScrewSizeInputOptionData: ( s: string ) => ScrewSizeInputOptionData = ( s ) => {
    if ( !s || typeof s !== "string" || s.length < 1 ) { return null; }
    let r = /(?<unitPrefix>[mM#]?)(?<diameter>[/0-9]+)-?(?<pitch>[0-9\.]*)x?(?<length>[/0-9]*)/.exec( s );
    if ( r && Object.keys( r ).includes( 'groups' ) ) {
        let unit = getUnitSystemFromUnitPrefix( r.groups.unitPrefix as UnitPrefixT );
        let diameter = parseFloat( r.groups.diameter );
        // TODO: handle fractions here!
        if ( r.groups.diameter.includes( '/' ) ) {
            let f = /(?<numerator>[0-9]+).(?<denominator>[0-9]*)/.exec( r.groups.diameter );
            if ( f && Object.keys( f ).includes( 'groups' ) ) {
                let numer = parseFloat( f.groups.numerator );
                let denom = parseFloat( f.groups.denominator );
                if ( numer && denom ) {
                    diameter = numer / denom;
                }
            }

        }
        let length = parseFloat( r.groups.length );
        let pitch = parseFloat( r.groups.pitch ) ?? getDefaultPitch( unit, diameter );
        console.log( { method: 'parseScrewSizeInputOptionData', diameter, unit, length, pitch, s, r } );
        return {
            unit,
            diameter,
            length,
            pitch
        };
    }
    return null;
    // if ( !unit ) { unit = getUnitSystemFromUnitPrefix( s[ 0 ] as UnitPrefixT ); }
    // let start: number = 0;
    // if ( !parseInt( s[ 0 ] ) ) {
    // start = 1;
    // }
    // let lengthSeparatorIndex = s.indexOf( 'x' );
    // let pitchSeparatorIndex = s.indexOf( '-' );
    // if ( lengthSeparatorIndex < 0 ) { lengthSeparatorIndex = s.length; }
    // let diameter = parseFloat( s.substring( start, pitchSeparatorIndex | lengthSeparatorIndex ) );
    // let pitch = pitchSeparatorIndex > 0 ? parseFloat( s.substr( pitchSeparatorIndex + 1 ) ) : getDefaultPitch( unit, diameter );
    // let length = parseFloat( s.substring( lengthSeparatorIndex ) );
};
function getScrewSizeOptions ( v: ScrewSizeInputOptionData ): ScrewSizeInputOptionData[] {
    return [];
}
interface ScrewSizeInputProps extends Omit<SelectProps<string>, 'value' | 'onChange'> {
    // interface ScrewSizeInputProps extends SelectProps<ScrewSizeInputOptionData> {
    unit: EnumUnitKeys;
    value?: ScrewSizeInputOptionData;
    onChange?: ( event: ScrewSizeInputOptionData ) => void;
}
export const ScrewSizeInput: React.FC<ScrewSizeInputProps> = ( props ) => {

    console.log( { m: 'ScrewSizeInput', f: 'init', props_value: props.value, props } );
    // export const EnumSelect = <T extends { [ k: string ]: string | number; }> ( props: EnumSelectProps<string> ) => {
    const { onChange, value, unit, ...remainingProps } = props;
    // const [ value, setValue ] = useState<ScrewSizeInputOptionData>( props.value );
    const [ valueText, setValueText ] = useState<string>( 'none' );
    // const [ valueText, setValueText ] = useState<string>( () => {
    //     let stringValue = constructOptionValue( props.value );
    //     console.log( { m: 'ScrewSizeInput', f: 'results in settext', stringValue });
    //     return stringValue;
    // });
    const [ optionDataArr, setOptionsDataArr ] = useState<ScrewSizeInputOptionData[]>( [] );

    const handleSearch = ( value: string ): void => {
        // if ( !value || typeof value !== "string" || value.length < 1){ return null; }
        // let unit: EnumUnitEnum = getUnitSystemFromUnitPrefix( value[ 0 ] as UnitPrefixT);
        // let length: number = parseLength(value, unit);
        // let pitch: number = parsePitch(value, unit);
        const parsedValue = parseScrewSizeInputOptionData( value );
        console.log( { method: 'ScrewSizeInput', f: 'handleSearch', value, parsedValue } );
        setValueText( value );
        // setOptionsDataArr( getScrewSizeOptions( parsedValue ) );
        onChange( parsedValue );
    };

    const testInputOnChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        // setValueText( e );
        console.log('form testInputOnChange', {t: e.target}, {c: e.currentTarget});
        // setValueText('reic wasad')
        handleSearch(e.target.value);
        // onChange( { pitch: 5, unit: EnumUnitEnum.metric, length: 6 , diameter: 3 } );

    }

    const options = optionDataArr.map( d => {
        const dStr = constructOptionValue( d );
        return <Select.Option key={dStr} value={dStr}>{dStr}</Select.Option>;
        // return <Select.Option key={dStr} value={dStr}>{dStr}</Select.Option>;
    } );

    let generatedValue = valueText || props.value.diameter;
    // let generatedValue = constructOptionValue( props.value ) || valueText;
    console.log( 'ScrewSizeInput - making value', generatedValue );
    return (
        // TODO: add ability to input fractions
        <React.Fragment>

            {/* <div className="ant-input-group"> */}

            <AutoComplete options={[ {value: 'eric1'} ]}>
                <Input onChange={testInputOnChange} />
            </AutoComplete>


                {/* <Select
                    placeholder="Select Unit used for Item Values"
                    // onSearch={triggerChange}
                    // onChange={triggerChange}
                    // type="number" // number breaks the formatter on InputNumber
                    className="screw-size-input"
                    showSearch
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    value={generatedValue}
                    // filterOption={false}
                    onSearch={handleSearch}
                    // onSelect={handleSearch} // DOES NOTHING
                    // onChange={handleSearch} // DOES NOTHING
                    notFoundContent={null}
                    // notFoundContent={generatedValue}
                    style={{ width: 300 }}

                // addonBefore={

                //     <Select defaultValue="http://" 
                //         className="select-before" 
                //         bordered={false}
                //         showArrow={false}
                //     >
                //         <Select.Option value="http://">M</Select.Option>
                //         <Select.Option value="https://">#</Select.Option>
                //     </Select>
                // }
                // addonAfter={getUnitFromUnitSystem( unit )}
                // className="numberInput"
                // {...remainingProps}
                >
                    {options}
                {/* </Select> */}
            {/* </div> */}
        </React.Fragment>
    );
};