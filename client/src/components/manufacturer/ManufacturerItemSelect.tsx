import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Divider } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetManufacturerItemsLazyQuery, useSearchManufacturerItemsLazyQuery, useSearchManufacturerItemsQuery, ManufacturerItem as ManufacturerItemGql, UpdateManufacturerItemMutation, UpdateManufacturerItemMutationVariables } from "~lib/types/graphql";
import { PlusOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { ManufacturerItemFormModal } from "./ManufacturerItemFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Manufacturer } from "~lib/Manufacturer/Manufacturer";
import { Intersection, Unpacked, QueryResultTypePlus, transparentLog, flatArrayObjectProperty } from "~lib/UtilityFunctions";
import { IconComponentT } from "~lib/types/common";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number | 'NEW';
}
type VT = number | Partial<UpdateManufacturerItemMutationVariables>;

export interface ManufacturerItemSelectValue extends Partial<Pick<ManufacturerItemGql, 'id' | 'description' | 'item_id' | 'manufacturer_id' | 'manufacturer_product_id'>> { }

interface ManufacturerItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Select>;
    value?: VT;
    // onChange?: ( id: number ) => void;
    onChange?: ( manufacturer_item: ManufacturerItemSelectValue ) => void;
}
/**
 * Form Select Input for ManufacturerItems
 */
export const ManufacturerItemSelect: React.FC<ManufacturerItemSelectProps> = ( props ) => {
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
                    props.defaultValue && !( 'id' in props.defaultValue ) && 'manufacturer_id' in props.defaultValue && 'item_id' in props.defaultValue ? [ 'NEW' ] : [] )
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

    const { data, error, loading } = useSearchManufacturerItemsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            query_text: `${ searchText }%`
        }
        // skip: state.loading
    } );
    console.log( { c: "ManufacturerItemSelect", ev: "init", props, defaultIds, defaultValue: props.defaultValue } );

    function updateOptionsFromManufacturerItem ( arr:
        Array<Unpacked<QueryResultTypePlus<typeof useSearchManufacturerItemsQuery>[ 'manufacturerItems' ]>
            | Intersection<Omit<Partial<UpdateManufacturerItemMutationVariables>, 'id'>, { id: 'NEW'; }>
        >
    ) {
        console.log( "ManufacturerItemSelect.updateOptionsFromManufacturerItem", arr );
        if ( !Array.isArray( arr ) ) { return null; }
        setOptions(
            transparentLog( {
                c: 'ManufacturerItemSelect',
                e: 'optionsGenerated'
            },
                arr.map( ( v ) => {
                    let ManufacturerIcon: IconComponentT;
                    if ( v && 'manufacturer' in v ) {
                        // console.log( "ManufacturerItemSelect: rendering AsyncIcon with this of", v.manufacturer );
                        ManufacturerIcon = new Manufacturer( v.manufacturer ).icon;
                    } else if ( v && 'manufacturer_id' in v && typeof v.manufacturer_id === 'number' ) {
                        ManufacturerIcon = new Manufacturer( { id: v.manufacturer_id } ).icon;
                    } else {
                        console.warn( "ManufacturerItemSelect: not rendering AsyncIcon with this of", v );
                        ManufacturerIcon = () => <FileUnknownOutlined className="manufacturerIcon" />;
                    }
                    return {
                        id: v.id,
                        value: v.id,
                        label: <span className="manufacturerItemOption">
                            <ManufacturerIcon />
                            {/* <span>{v.manufacturer.name}</span> */}
                            <span>{v.manufacturer_product_id}</span>
                            <span>{v.manufacturer_product_name}</span>
                            <span>{v.manufacturer_product_series}</span>
                        </span>
                        // TODO: Set value to the applicable string, feed value up that is the `order_id`
                    };
                } ) )
        );
    }

    // useEffect( () => {
    //     if ( !loading && !error ) {
    //         console.log( { class: "ManufacturerItemSelect", "action": "useEffect", event: "loading and error ok", data } );
    //         let opts: OptionT[] = [];
    //         data.item.forEach( item => {
    //             item.manufacturerItems.forEach( v => {
    //                 console.log( "outputting option", v );
    //                 opts.push( {
    //                     id: v.id,
    //                     value: v.id,
    //                     label: <span className="manufacturerItemOption">
    //                         {v && v.manufacturer.url ? <img src={`${ v.manufacturer.url }/favicon.ico`} /> : null}
    //                         {/* <span>{v.manufacturer.name}</span> */}
    //                         <span>{v.manufacturer_product_id}</span>
    //                         {/* <span>#{v.manufacturerItem_order_id}</span> */}
    //                     </span>
    //                     // TODO: Set value to the applicable string, feed value up that is the `order_id`
    //                 } );
    //             } );
    //         } );
    //         setOptions( opts );
    //     }
    // }, [ loading, data ] );

    useEffect( () => {
        console.log( { c: "ManufacturerItemSelect", m: "useEffect", ev: "loaded ManufacturerItems from Gql", data } );
        updateOptionsFromManufacturerItem( [
            ...( props.defaultValue && typeof props.defaultValue !== "number" && !props.defaultValue.id
                ? [ { ...props.defaultValue, id: 'NEW' as 'NEW' } ]
                : [] ),
            ...( data && data.item ? 
                flatArrayObjectProperty( data.item, 'manufacturerItems' ) 
                : [] )
        ] );
    }, [ loading, data, props.defaultValue ] );
    return (
        <React.Fragment>
            {modal}
            <Select
                bordered={false}
                filterOption={false}
                showSearch={true}
                className="ManufacturerItemSelect"
                placeholder="Manufacturer Item"
                dropdownClassName="ManufacturerItemSelectDropdown"
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
                            className="ManufacturerItemSelectNewSelectOption"
                            onClick={() => handleModalChange( 
                                <ManufacturerItemFormModal 
                                    visibilityHandler={handleModalChange}
                                    onFinish={(args) => {
                                        setModal(null);
                                        onChange(transparentLog({c: 'ManufacturerItemSelect', e: 'new created, onchange'}, args));
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
                    let manufacturerItem_id: number = null;
                    if ( typeof value === "number" ) {
                        manufacturerItem_id = value;
                    } else if ( typeof value === "string" ) {
                        manufacturerItem_id = parseInt( value );
                    // } else if ( "key" in value ) {
                    //     manufacturerItem_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    }
                    if ( manufacturerItem_id ) {
                        onChange( {
                            id: manufacturerItem_id,
                            // item_id: 1111,
                            // manufacturer_id: 2222,
                            // manufacturer_sku: "3333",
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