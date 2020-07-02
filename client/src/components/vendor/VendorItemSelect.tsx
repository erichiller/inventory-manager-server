import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement, useRef } from "react";
import { AutoComplete, Input, DatePicker, Select, Divider } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetVendorItemsLazyQuery, useSearchVendorItemsLazyQuery, useSearchVendorItemsQuery, VendorItem as VendorItemGql, VendorItemInsertInput, UpdateVendorItemMutationVariables } from "../../lib/types/graphql";
import { PlusOutlined } from "@ant-design/icons";
import { VendorItemFormModal } from "./VendorItemFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Vendor } from "../../lib/Vendor/Vendor";
import { QueryResultTypePlus, Unpacked, PartialPartial, flatArrayObjectProperty } from "../../lib/UtilityFunctions";
import { useAsyncHook } from "../../lib/useAsyncHook";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}

type VT = number | Partial<UpdateVendorItemMutationVariables>;

export interface VendorItemSelectValue extends Partial<Pick<VendorItemGql, 'id' | 'description' | 'item_id' | 'vendor_id' | 'vendor_sku'>> { }

interface VendorItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    // onChange?: ( id: number ) => void;
    onChange?: ( vendor_item: VendorItemSelectValue ) => void;

    // URGENT: provide item_id ; and only show vendor_id that matches this.
}
/**
 * Form Select Input for VendorItems
 */
export const VendorItemSelect: React.FC<VendorItemSelectProps> = ( props ) => {
    const { onChange, value, ...remainingProps } = props;
    const [ searchText, setSearchText ] = useState<string>( "" );
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const [asyncQuery, setAsyncQuery] = useState<() => Promise<any>>();

    const [ vendors, asyncLoading ] = useAsyncHook(asyncQuery);

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

    console.log( "VendorItemSelect: init, received props", { props_defaultValue: props.defaultValue, defaultIds, props } );
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
    // KILL: /(OrderItemInput|VendorItemSelect)/
    // URGENT: allow to feed in array or singular
    // URGENT STOPPED HERE  !!!!!!!!!!!!!
    // const updateOptionsFromVendorItem = async ( v: PartialPartial<
        // Unpacked<QueryResultTypePlus<typeof useSearchVendorItemsQuery>[ 'vendorItems' ]>, 'id' | 'vendor' | 'vendor_sku'> ) => {
    async function updateOptionsFromVendorItem ( arr: Array<Unpacked<QueryResultTypePlus<typeof useSearchVendorItemsQuery>[ 'vendorItems' ]> | Partial<UpdateVendorItemMutationVariables> > ) {
        if ( ! Array.isArray(arr) ){ return null; }
        let f = arr.map( async (v) => {
            let vendor: Vendor;
            if ( 'vendor_id' in v ) {
                vendor = await Vendor.VendorFactory( { id: v.vendor_id } );
            } else if ( 'vendor' in v ) {
                vendor = new Vendor( v.vendor );
            }
            return {
                id: v.id,
                value: v.id,
                label: <span className="vendorItemOption">
                    <vendor.icon />
                    {/* <span>{v.vendor.name}</span> */}
                    <span>{v.vendor_sku}</span>
                    {/* <span>#{v.vendorItem_order_id}</span> */}
                </span>
                // TODO: Set value to the applicable string, feed value up that is the `order_id`
            }
        });
    }
    useEffect( () => {
        setAsyncQuery( () => updateOptionsFromVendorItem( [
            ...( props.defaultValue && typeof props.defaultValue !== "number" && !props.defaultValue.id
                ? [ props.defaultValue ]
                : [] ),
            ...( data && data.item ? flatArrayObjectProperty( data.item, 'vendorItems' ) : [] )
        ] ) );
        setOptions( vendors );
        
        console.log( { class: "VendorItemSelect", "action": "useEffect", event: "loading and error ok", data } );
        //     let opts: OptionT[] = [];
        //     data.item.forEach( item => {
        //         item.vendorItems.forEach( v => {
        //             console.log( "outputting option", v );
        //             updateOptionsFromVendorItem(v);
        //         } );
        //     } );
        //     // setOptions( opts );
        // }
    }, [ loading, data, vendors ] );
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