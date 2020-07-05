import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Divider } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetShipmentsLazyQuery, useSearchShipmentsLazyQuery, useSearchShipmentsQuery, Shipment as ShipmentGql, ShipmentInsertInput, UpdateShipmentMutationVariables } from "~lib/types/graphql";
import { PlusOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { ShipmentFormModal } from "./ShipmentFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Union, QueryResultTypePlus, Unpacked, transparentLog, flatArrayObjectProperty } from "~lib/UtilityFunctions";
import { IconComponentT } from "~lib/types/common";
import { Vendor } from "~lib/Vendor/Vendor";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number | 'NEW';
}
type VT = number | Partial<UpdateShipmentMutationVariables>;

export interface ShipmentSelectValue extends Partial<ShipmentGql> { }

type ShipmentSelectProps = Union<
    Omit<SelectProps<VT>, 'value' | 'onChange'>,
    {
        forwardRef?: React.MutableRefObject<Input>;
        value?: VT;
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
    const { onChange, value, ...remainingProps } = props;
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
                    props.defaultValue && !( 'id' in props.defaultValue ) && 'received_date' in props.defaultValue && 'carrier_vendor_id' in props.defaultValue ? [ 'NEW' ] : [] )
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
    // TODO: intelligently 

    function updateOptionsFromShipment ( arr:
        Array<Unpacked<QueryResultTypePlus<typeof useSearchShipmentsQuery>>
            // | Partial<UpdateVendorItemMutationVariables>
            | Union<Omit<Partial<UpdateShipmentMutationVariables>, 'id'>, { id: 'NEW'; }>
        >
    ) {
        if ( !Array.isArray( arr ) ) { return null; }
        setOptions(
            transparentLog( {
                c: 'ShipmentSelect',
                e: 'optionsGenerated'
            },
                arr.map( ( v ) => {
                    let CarrierIcon: IconComponentT;
                    let carrier: Vendor;
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
                        id: v.id,
                        value: v.id,
                        label: <span className="ShipmentOption">
                            <CarrierIcon />
                            {/* <span>{v.shipment.name}</span> */}
                            <span>{carrier.name}</span>
                            <span>#{v.tracking_id}</span>
                        </span>
                        // TODO: Set value to the applicable string, feed value up that is the `order_id`
                    };
                } ) )
        );
    }
    useEffect( () => {
        updateOptionsFromShipment( [
            ...( props.defaultValue && typeof props.defaultValue !== "number" && !props.defaultValue.id
                ? [ { ...props.defaultValue, id: 'NEW' as 'NEW' } ]
                : [] ),
            ...( data && data.shipment ? data.shipment : [] )
        ] );
        console.log( { c: "ShipmentSelect", m: "useEffect", ev: "loaded vendorItems from Gql", data } );
    }, [ loading, data, props.defaultValue ] );


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
                        e.preventDefault(); // keep Enter from submitting form within Selects so that autofill options can be triggered and selected.
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
                                    visibilityHandler={handleModalChange}
                                    onFinish={(args) => {
                                        setModal(null);
                                        onChange(args);
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
                    } else if ( typeof value === "string" ) {
                        shipment_id = parseInt( value );
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