import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Divider } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetVendorItemsLazyQuery, useSearchVendorItemsLazyQuery, useSearchVendorItemsQuery, VendorItem, VendorItemInsertInput } from "../../lib/types/graphql";
import { PlusOutlined } from "@ant-design/icons";
import { VendorItemFormModal } from "./VendorItemFormModal";
import { useHistory, useLocation } from "react-router-dom";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}

type VT = number | VendorItemInsertInput;

export interface VendorItemSelectValue extends Partial<Pick<VendorItem, 'id' | 'description' | 'item_id' | 'vendor_id' | 'vendor_sku'>> { }

interface VendorItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    // onChange?: ( id: number ) => void;
    onChange?: ( vendor_item: VendorItemSelectValue ) => void;
}
/**
 * Form Select Input for VendorItems
 */
export const VendorItemSelect: React.FC<VendorItemSelectProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ searchText, setSearchText ] = useState<string>( "" );
    const [ options, setOptions ] = useState<OptionT[]>( [] );

    const defaultIds: Array< number | undefined > = [
        ...(
            typeof props.value === "number" ?
                [ props.value ] : (
                    props.value ? [ props.value.id ] : [] )
        ),
        ...(
            typeof props.defaultValue === "number" ?
                [ props.defaultValue ] : (
                    props.defaultValue ? [ props.defaultValue.id ] : [] )
        )
    ];

    const [ modal, setModal ] = useState<React.ReactElement>( null );
    const history = useHistory();
    const location = useLocation();
    const handleModalChange = ( modal: React.ReactElement ) => {
        if ( modal === null ) {
            history.push( location.pathname );
        }
        setModal( modal );
    };

    const { data, error, loading } = useSearchVendorItemsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            query_text: `${ searchText }%`
        }
        // skip: state.loading
    } );
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "VendorItemSelect", "action": "useEffect", event: "loading and error ok", data } );
            let opts: OptionT[] = [];
            data.item.forEach( item => {
                item.vendorItems.forEach( v => {
                    console.log( "outputting option", v );
                    opts.push( {
                        id: v.id,
                        value: v.id,
                        label: <span className="vendorItemOption">
                            {v && v.vendor.url ? <img src={`${ v.vendor.url }/favicon.ico`} /> : null}
                            {/* <span>{v.vendor.name}</span> */}
                            <span>{v.vendor_sku}</span>
                            {/* <span>#{v.vendorItem_order_id}</span> */}
                        </span>
                        // TODO: Set value to the applicable string, feed value up that is the `order_id`
                    } );
                } );
            } );
            setOptions( opts );
        }
    }, [ loading, data ] );
    useEffect( () => {
        console.log( "VendorItemSelect -- value changed" );
    }, [ value ] );
    return (
        <React.Fragment>
            {modal}
            <Select
                bordered={false}
                filterOption={false}
                showSearch={true}
                className="VendorItemSelect"
                placeholder="Vendor Item"
                dropdownClassName="VendorItemSelectDropdown"
                defaultValue={defaultIds}
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
                            className="VendorItemSelectNewSelectOption"
                            onClick={() => handleModalChange(
                                <VendorItemFormModal
                                    visibilityHandler={handleModalChange}
                                    onFinish={( args ) => {
                                        setModal( null );
                                        onChange( args );
                                    }}
                                /> )}
                        >
                            <PlusOutlined />New
                        </a>
                        {/* </div> */}
                    </div>
                )}
                onChange={( value, opt ) => {
                    console.log( { event: "onChange", value, opt } );
                    let vendorItem_id: number = null;
                    if ( typeof value === "number" ) {
                        vendorItem_id = value;
                    } else if ( typeof value === "string" ) {
                        vendorItem_id = parseInt( value );
                    // } else if ( "key" in value ) {
                    //     vendorItem_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    }
                    onChange( {
                        id: vendorItem_id,
                        // item_id: 1111,
                        // vendor_id: 2222,
                        // vendor_sku: "3333",
                        // description: "4444"
                    } );
                }}
                options={options}
                // {...( value ? { defaultValue: props.value } : {} )}
            />
        </React.Fragment>
    );
};