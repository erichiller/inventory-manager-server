import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Divider } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetShipmentsLazyQuery, useSearchShipmentsLazyQuery, useSearchShipmentsQuery, Shipment, ShipmentInsertInput } from "../../lib/types/graphql";
import { PlusOutlined } from "@ant-design/icons";
import { ShipmentFormModal } from "./ShipmentFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Union } from "../../lib/UtilityFunctions";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}
type VT = SelectValue;

interface ShipmentSelectValue extends Partial<ShipmentInsertInput> { }
// interface ShipmentSelectValue extends Partial<Pick<Shipment, 'id' | 'order_id' | 'vendor_invoice_id' | 'shipped_date' | 'received_date' | 'tracking_id' | 'shipping_carrier'>> { }

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
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "ShipmentSelect", "action": "useEffect", event: "loading and error ok", data } );
            let opts: OptionT[] = [];
            data.shipment.forEach( v => {
                console.log( "outputting option", v );
                opts.push( {
                    id: v.id,
                    value: v.id,
                    label: <span className="shipmentOption">
                        {v && v.carrier ? <img src={`${ v.carrier.url }/favicon.ico`} /> : null}  { /* TODO: real icon code */ }
                        {/* <span>{v.shipment.name}</span> */}
                        <span>{v.carrier.name}</span>
                        <span>#{v.tracking_id}</span>
                    </span>
                } );
            } );
            setOptions( opts );
        }
    }, [ loading, data ] );
    useEffect( () => {
        console.log( "ShipmentSelect -- value changed" );
    }, [ value ] );
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
                    } else if ( "key" in value ) {
                        shipment_id = typeof value.value === "number" ? value.value : parseInt( value.value );
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
                {...( value ? { defaultValue: props.value } : {} )}
            />
        </React.Fragment>
    );
};