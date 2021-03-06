import { SelectProps } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { Input, Select, Divider } from "antd";



import { OptionData } from 'rc-select/lib/interface';
import { useSearchVendorItemsQuery, UpdateVendorItemMutationVariables } from "./Vendor.ops";
import { PlusOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { VendorItemFormModal } from "./VendorItemFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Vendor } from "~lib/Vendor/Vendor";
import { QueryResultTypePlus, Unpacked, flatArrayObjectProperty, Intersection, transparentLog, preventEnterKeyDefault } from "~lib/UtilityFunctions";
import { IconComponentT } from "~lib/types/common";
import { Integer } from "~lib/types/uint8";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number | 'NEW';
}

type VT = number | Partial<UpdateVendorItemMutationVariables>;

export interface VendorItemSelectValue extends Partial<UpdateVendorItemMutationVariables> { }

interface VendorItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
    value?: VT;
    item_id?: Integer;
    vendor_id?: Integer;
    onChange: ( vendor_item: VendorItemSelectValue ) => void;
}
/**
 * Form Select Input for VendorItems
 */
export const VendorItemSelect: React.FC<VendorItemSelectProps> = ( props ) => {
    const { onChange } = props;
    const [ searchText, setSearchText ] = useState<string>( "" );
    const [ options, setOptions ] = useState<OptionT[]>( [] );

    const defaultIds: Array<number | string> = [
        ...(
            typeof props.value === "number" ?
                [ props.value ] : (
                    props.value && props.value.id ? [ props.value.id ] : [] )
        ),
        ...(
            typeof props.defaultValue === "number" ?
                [ props.defaultValue ] : (
                    props.defaultValue && !( 'id' in props.defaultValue ) && 'vendor_id' in props.defaultValue && 'item_id' in props.defaultValue ? [ 'NEW' ] : [] )
        )
    ];

    console.log( "VendorItemSelect: init, received props", { props_defaultValue: props.defaultValue, defaultIds, props } );
    const [ modal, setModal ] = useState<React.ReactElement | null>( null );
    const history = useHistory();
    const location = useLocation();
    const handleModalChange = ( modal: React.ReactElement | null ) => {
        if ( modal === null ) {
            history.push( location.pathname );
        }
        setModal( modal );
    };

    const { data, loading } = useSearchVendorItemsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            query_text: `${ searchText }%`,
            item_id: props.item_id
        }
        // skip: state.loading
    } );
    function updateOptionsFromVendorItem ( arr: 
        Array<Unpacked<QueryResultTypePlus<typeof useSearchVendorItemsQuery>[ 'vendorItems' ]> 
            // | Partial<UpdateVendorItemMutationVariables>
            | Intersection<Omit<Partial<UpdateVendorItemMutationVariables>, 'id'>, { id: 'NEW'; }>
        > 
    ) {
        if ( !Array.isArray( arr ) ) { return null; }
        setOptions( 
            transparentLog( {
                c: 'VendorItemSelect',
                e: 'optionsGenerated'
            }, 
            arr.map( ( v ) => {
                let VendorIcon: IconComponentT;
                if ( v && 'vendor' in v ) {
                    // console.log( "VendorItemSelect: rendering AsyncIcon with this of", v.vendor );
                    VendorIcon = new Vendor( v.vendor ).icon;
                } else if ( v && 'vendor_id' in v && typeof v.vendor_id === 'number' ) {
                    VendorIcon = new Vendor( { id: v.vendor_id } ).icon;
                } else {
                    console.warn( "VendorItemSelect: not rendering AsyncIcon with this of", v );
                    VendorIcon = () => <FileUnknownOutlined className="vendorIcon" />;
                }
                return {
                    id: v.id,
                    value: v.id,
                    label: <span className="vendorItemOption">
                        <VendorIcon />
                        {/* <span>{v.vendor.name}</span> */}
                        <span>{v.vendor_sku}</span>
                        {/* <span>#{v.vendorItem_order_id}</span> */}
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) )
        );
    }
    useEffect( () => {
        updateOptionsFromVendorItem( [
            ...( props.defaultValue && typeof props.defaultValue !== "number" && !props.defaultValue.id
                ? [ {...props.defaultValue, id: 'NEW' as 'NEW' } ]
                : [] ),
            ...( data && data.item ? flatArrayObjectProperty( data.item, 'vendorItems' ) : [] )
        ] );
        console.log( { c: "VendorItemSelect", m: "useEffect", ev: "loaded vendorItems from Gql", data } );
    }, [ loading, data, props.defaultValue ] );
    
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
                dropdownMatchSelectWidth={180}
                defaultValue={defaultIds}
                value={defaultIds}
                onSearch={value => {
                    console.log( { event: "onSearch", setSearchText: value } );
                    setSearchText( value );
                }}
                onKeyDown={preventEnterKeyDefault}
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <a
                            className="VendorItemSelectNewSelectOption"
                            onClick={() => handleModalChange(
                                <VendorItemFormModal
                                    vendorId={props.vendor_id}
                                    itemId={props.item_id}
                                    visibilityHandler={handleModalChange}
                                    onFinish={( args ) => {
                                        setModal( null );
                                        if ( args ){
                                            onChange( args );
                                        }
                                    }}
                                /> )}
                        >
                            <PlusOutlined />New
                        </a>
                        {/* </div> */}
                    </div>
                )}
                onChange={( value, opt ) => {
                    console.log( { class: 'VendorItemSelect', event: "onChange", value, opt } );
                    let vendorItem_id: number | null = null;
                    if ( typeof value === "number" ) {
                        vendorItem_id = value;
                    } else if ( typeof value === "string" && value !== "NEW" ) {
                        vendorItem_id = parseInt( value );
                        // } else if ( "key" in value ) {
                        //     vendorItem_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    }
                    if ( vendorItem_id ) {
                        onChange( {
                            id: vendorItem_id,
                            // item_id: item
                            // item_id: 1111,
                            // vendor_id: 2222,
                            // vendor_sku: "3333",
                            // description: "4444"
                        } );
                    }
                }}
                options={options}
            // {...( value ? { defaultValue: props.value } : {} )}
            />
        </React.Fragment>
    );
};