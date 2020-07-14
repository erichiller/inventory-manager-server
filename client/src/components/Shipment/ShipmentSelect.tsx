import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { Input, Select, Divider, message } from "antd";

import { OptionData } from 'rc-select/lib/interface';
import { useSearchShipmentsQuery, Shipment as ShipmentGql, UpdateShipmentMutationVariables } from "~lib/types/graphql";
import { PlusOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { ShipmentFormModal } from "./ShipmentFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Intersection, QueryResultTypePlus, Unpacked, transparentLog, PartialPartial, filterObject } from "~lib/UtilityFunctions";
import { IconComponentT } from "~lib/types/common";
import { Vendor } from "~lib/Vendor/Vendor";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number | string;
}
type VT = number | Partial<UpdateShipmentMutationVariables>;

/** return type of `ShipmentSelect` (via `onChange`) */
// export interface ShipmentSelectValue extends UpdateShipmentMutationVariables {
//     temp_id?: string;
//  }

type ShipmentSelectValueObject = Intersection<
    Partial<Pick<ShipmentGql, 'carrier'>>, 
    PartialPartial<UpdateShipmentMutationVariables, 'id'>
>;


export type ShipmentSelectValue = ShipmentSelectValueObject | { id: number; };


export interface ShipmentAdditionalOption extends Omit<ShipmentSelectValueObject, 'id'> { 
    // id: string;
    // temp_id?: string;
}



type ShipmentSelectProps = Intersection<
    Omit<SelectProps<VT>, 'value' | 'onChange'>,
    {
        forwardRef?: React.MutableRefObject<Input>;
        value?: VT;
        additionalShipmentOptions?: ShipmentAdditionalOption[];
    },
    {
        excludeOrderInput?: null | undefined;
        onChange?: ( shipment_item: ShipmentSelectValue ) => void;
    } | {
        excludeOrderInput: true;
        onChange?: ( shipment_item: Exclude<ShipmentSelectValue, 'order_id'> ) => void;
    }
>;
/**
 * Form Select Input for Shipments
 */
export const ShipmentSelect: React.FC<ShipmentSelectProps> = ( props ) => {
    const { onChange, additionalShipmentOptions } = props;
    const [ searchText, setSearchText ] = useState<string>( "" );
    const [ options, setOptions ] = useState<OptionT[]>( [] );

    const defaultIds: Array<number | string> = [
        ...(
            typeof props.value === "number" ?
                [ props.value ] : (
                    props.value ? [ props.value.id ] : [] )
        ),
        ...(
            typeof props.defaultValue === "number" ?
                [ props.defaultValue ] : (
                    props.defaultValue && !( 'id' in props.defaultValue ) && 'carrier_vendor_id' in props.defaultValue && 'tracking_id' in props.defaultValue ? [ props.defaultValue.tracking_id ] : [] )
        )
    ];
    console.log( "ShipmentSelect: init, received props", { props_defaultValue: props.defaultValue, defaultIds, props } );

    const [ modal, setModal ] = useState<React.ReactElement>( null );
    const history = useHistory();
    const location = useLocation();
    const handleModalChange = ( modal: React.ReactElement ) => {
        if ( modal === null ) {
            history.push( location.pathname );
        }
        setModal( modal );
    };

    const { data, error, loading } = useSearchShipmentsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            search_string: `${ searchText }%`
        }
        // skip: state.loading
    } );

    // track shipment IDs added to options to prevent duplicates
    let shipmentOptionIds: Array< string | number > = [];

    // function normalizeAdditionalShipmentOptions ( shipmentArray: ShipmentAdditionalOption[] ): ShipmentAdditionalOptionNormalized[] {
    //     let options: ShipmentAdditionalOptionNormalized[] = [];
    //     shipmentArray.forEach( s => {
    //         let newOption: ShipmentAdditionalOptionNormalized = {
    //             ...s,
    //             id: ( ( !( 'id' in s ) ) || s.id == null ? s.temp_id : s.id )
    //         };
    //         options.push( newOption );
    //     } );
    //     return options;
    // }

    function updateOptionsFromShipment ( arr:
        Array<Unpacked<QueryResultTypePlus<typeof useSearchShipmentsQuery>>
            | Intersection<Omit<Partial<UpdateShipmentMutationVariables>, 'id'>, { id: string; }>
        >
    ) {
        if ( !Array.isArray( arr ) ) { return null; }
        setOptions(
            transparentLog( {
                c: 'ShipmentSelect',
                e: 'optionsGenerated'
            },
                [
                    ...additionalShipmentOptions,
                    // ...normalizeAdditionalShipmentOptions( additionalShipmentOptions ),
                    ...arr
                ].filter( v => {
                    let id = 'id' in v ? v.id : v.tracking_id;
                    let found = shipmentOptionIds.includes( id );
                    shipmentOptionIds.push( id );
                    return ! found;
                } ).map( ( v ) => {
                    let CarrierIcon: IconComponentT;
                    let carrier: Vendor;
                    let id = 'id' in v ? v.id : v.tracking_id;
                    if ( v && 'carrier' in v ) {
                        carrier = new Vendor( v.carrier );
                        CarrierIcon = carrier.icon;
                    } else if ( v && 'carrier_vendor_id' in v && typeof v.carrier_vendor_id === 'number' ) {
                        carrier = new Vendor( { id: v.carrier_vendor_id } );
                        CarrierIcon = carrier.icon;
                    } else {
                        console.warn( "ShipmentSelect: not rendering AsyncIcon with this of", v );
                        CarrierIcon = () => <FileUnknownOutlined className="CarrierIcon" />;
                    }
                    return {
                        id: id,
                        value: id,
                        label: <span className="ShipmentOption">
                            <CarrierIcon />
                            {/* <span>{v.shipment.name}</span> */}
                            <span>{carrier?.name}</span>
                            <span>#{v.tracking_id}</span>
                        </span>
                    };
                } )
            )
        );
    }
    useEffect( () => {
        updateOptionsFromShipment( [
            ...( props.defaultValue && typeof props.defaultValue !== "number" && !props.defaultValue.id
                ? [ { ...props.defaultValue, id: props.defaultValue.tracking_id } ]
                : [] ),
            ...( data && data.shipment ? data.shipment : [] )
        ] );
        console.log( { c: "ShipmentSelect", m: "useEffect", ev: "loaded vendorItems from Gql", data } );
    }, [ loading, data, props.defaultValue ] );
    useEffect( () => {
        if ( error ){
            message.error( error );
        }
    }, [ error ] );

    return (
        <React.Fragment>
            {modal}
            <Select
                bordered={false}
                filterOption={false}
                showSearch={true}
                className="ShipmentSelect"
                placeholder="Shipment Item"
                dropdownClassName="ShipmentSelectDropdown"
                dropdownMatchSelectWidth={180}
                defaultValue={defaultIds}
                value={defaultIds}
                onSearch={value => {
                    console.log( { event: "onSearch", setSearchText: value } );
                    setSearchText( value );
                }}
                onKeyDown={( e ) => {
                    if ( e.nativeEvent.keyCode === 13 ) {
                        // keep Enter from submitting form within Selects so that autofill options can be triggered and selected.
                        e.preventDefault(); 
                    }
                }}
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        {/* <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}> */}
                        <a
                            className="ShipmentSelectNewSelectOption"
                            onClick={() => handleModalChange( 
                                <ShipmentFormModal 
                                    excludeOrderInput={props.excludeOrderInput}
                                    visibilityHandler={handleModalChange}
                                    onFinish={( args ) => {
                                        setModal( null );
                                        onChange( args );
                                    }} 
                                /> )}
                        >
                            <PlusOutlined />New Shipment
                        </a>
                        {/* </div> */}
                    </div>
                )}
                onChange={( value, opt ) => {
                    console.log( { event: "onChange", value, opt } );
                    let shipment_id: number = null;
                    if ( typeof value === "number" ) {
                        shipment_id = value;
                        console.log( { c: "ShipmentSelect", ev: "selected native number Option", value, shipment_id } );
                    } else if ( typeof value === "string" ) {
                        shipment_id = parseInt( value );
                        console.log( { c: "ShipmentSelect", ev: "selected parseInt parsed number Option", value, shipment_id } );

                        if ( Number.isNaN( shipment_id ) ){
                            onChange( 
                                transparentLog( { c: "ShipmentSelect", ev: "selected NaN parsed Option", value, shipment_id },
                                    additionalShipmentOptions.find( opt => opt.tracking_id === value ) 
                                )
                            );
                            return;
                        }
                    // } else if ( "key" in value ) {
                    //     shipment_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    }
                    onChange( {
                        id: shipment_id,
                        // item_id: 1111,
                        // shipment_id: 2222,
                        // shipment_sku: "3333",
                        // description: "4444"
                    } );
                }}
                options={options}
            />
        </React.Fragment>
    );
};