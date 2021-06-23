import { SelectProps, SelectValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { Select, Divider, message } from "antd";



import { OptionData } from 'rc-select/lib/interface';
import { useSearchManufacturerItemsQuery, ManufacturerItem as ManufacturerItemGql, UpdateManufacturerItemMutationVariables, useGetManufacturerItemQuery, useGetManufacturerItemLazyQuery, GetManufacturerItemLazyQueryHookResult } from "~lib/types/graphql";
import { PlusOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { ManufacturerItemFormModal, ManufacturerItemFormT } from "./ManufacturerItemFormModal";
import { useHistory, useLocation } from "react-router-dom";
import { Manufacturer } from "~lib/Manufacturer/Manufacturer";
import { Intersection, Unpacked, QueryResultTypePlus, transparentLog, flatArrayObjectProperty } from "~lib/UtilityFunctions";
import { IconComponentT } from "~lib/types/common";
import { Integer } from "~lib/types/uint8";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number | 'NEW';
}
type VT = number | ManufacturerItemFormT;
// type VT = SelectValue;

// export type BaseManufacturerItemT = Pick<ManufacturerItemGql, 'id' | 'description' | 'item_id' | 'manufacturer_id' | 'manufacturer_product_id'>;

// export type ManufacturerItemSelectValue = Pick<ManufacturerItemGql, 'id'> | ManufacturerItemFormT;
export type ManufacturerItemSelectValue = VT;

interface ManufacturerItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<typeof Select>;
    value?: VT;
    defaultItemId?: Integer;
    onChange: ( manufacturer_item: ManufacturerItemSelectValue ) => void;
}
/**
 * Form Select Input for ManufacturerItems
 */
export const ManufacturerItemSelect: React.FC<ManufacturerItemSelectProps> = ( props ) => {
    const { onChange } = props;
    const [ searchText, setSearchText ] = useState<string>( "" );
    const [ options, setOptions ] = useState<OptionT[]>( [] );


    const defaultIds: Array<number | string> = [
        ...(
            typeof props.value === "number" ?
                [ props.value ] : (
                    props.value && props.value.id? [ props.value.id ] : [] )
        ),
        ...(
            typeof props.defaultValue === "number" ?
                [ props.defaultValue ] : (
                    props.defaultValue && !( 'id' in props.defaultValue ) && 'manufacturer_id' in props.defaultValue && 'item_id' in props.defaultValue ? [ 'NEW' ] : [] )
        )
    ];


    const [ modal, setModal ] = useState<React.ReactElement | null>( null );
    const history = useHistory();
    const location = useLocation();
    const handleModalChange = ( modal: React.ReactElement | null ) => {
        if ( modal === null ) {
            history.push( location.pathname );
        }
        setModal( modal );
    };

    const { data, error, loading } = useSearchManufacturerItemsQuery( {
        partialRefetch: true,
        returnPartialData: true,
        variables: {
            query_text: `${ searchText }%`,
            item_id: props.defaultItemId
        },
        onError: ( error ) => message.error( `Error searching for manufacturer items related to item id #${props.defaultItemId} [${error.name}]: ${error.message}` )
        // skip: state.loading
    } );
    const [ getManufacturerItem, getManufacturerItemResult ] = useGetManufacturerItemLazyQuery( {
        partialRefetch: true,
        returnPartialData: true,
        onError: ( error ) => message.error( `Error retrieving data for existing manufacturer item id #${props.defaultValue} [${error.name}]: ${error.message}` )
    } );
    useEffect( () => {
        console.debug( "checking whether a number was passed in as defaultValue", props );
        if ( typeof props.defaultValue === "number" ) {
            console.debug( `Loading data for initial value manufacturer item id ${props.defaultValue}` );
            getManufacturerItem( {
                variables: {
                    id: props.defaultValue
                }} );
        }
    }, [] );

    useEffect( () => {
        console.log( { c: "ManufacturerItemSelect", m: "useEffect", ev: "loaded ManufacturerItems from Gql", data } );
        updateOptionsFromManufacturerItem( [
            ...( props.defaultValue && typeof props.defaultValue !== "number" && !props.defaultValue.id
                ? [ { ...props.defaultValue, id: 'NEW' as 'NEW' } ]
                : [] ),
            ...( props.defaultValue && typeof props.defaultValue === "number" && getManufacturerItemResult.data?.manufacturer_item
                ? [ { ...getManufacturerItemResult.data.manufacturer_item } ]
                : [] ),
            ...( data && data.item ? 
                flatArrayObjectProperty( data.item, 'manufacturerItems' ) 
                : [] )
        ] );
    }, [ loading, data, props.defaultValue, getManufacturerItemResult.data ] );

    console.log( { c: "ManufacturerItemSelect", ev: "init", props, defaultIds, defaultValue: props.defaultValue } );

    function updateOptionsFromManufacturerItem ( arr:
        QueryResultTypePlus<typeof useGetManufacturerItemQuery> |
        Array<Unpacked<QueryResultTypePlus<typeof useSearchManufacturerItemsQuery>[ 'manufacturerItems' ]>
            | Intersection<Omit<Partial<UpdateManufacturerItemMutationVariables>, 'id'>, { id: 'NEW'; }>
        >
    ) {
        console.log( "ManufacturerItemSelect.updateOptionsFromManufacturerItem", arr );
        if ( !Array.isArray( arr ) ) { return null; }
        let foundIds: Unpacked<typeof arr>['id'][] = [];
        setOptions(
            transparentLog( {
                c: 'ManufacturerItemSelect',
                e: 'optionsGenerated'
            },
            arr.filter( ( v ) => {
                if ( foundIds.includes( v.id ) ){
                    return false;
                }
                foundIds.push( v.id );
                return true;
            } ).map( ( v ) => {
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
                };
            } ) )
        );
    }
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
                        <a
                            className="ManufacturerItemSelectNewSelectOption"
                            onClick={() => handleModalChange( 
                                <ManufacturerItemFormModal 
                                    itemId={props.defaultItemId}
                                    // { ...( props.defaultValue ? 
                                    //     ( typeof props.defaultValue === 'number' ?
                                    //         { manufacturerItemId: props.defaultValue } :
                                    //         { manufacturerItem: props.defaultValue }
                                    //     ) :
                                    //     { itemId: props.defaultItemId } ) }
                                    visibilityHandler={handleModalChange}
                                    onFinish={( args ) => {
                                        setModal( null );
                                        onChange( transparentLog( {c: 'ManufacturerItemSelect', e: 'new created, onchange'}, args ) );
                                    }} 
                                /> )}
                        >
                            <PlusOutlined />New
                        </a>
                    </div>
                )}
                onChange={( value, opt ) => {
                    console.log( { event: "onChange", value, opt } );
                    let manufacturerItem_id: number | null = null;
                    if ( typeof value === "number" ) {
                        manufacturerItem_id = value;
                    } else if ( typeof value === "string" ) {
                        manufacturerItem_id = parseInt( value );
                    // } else if ( "key" in value ) {
                    //     manufacturerItem_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    }
                    if ( manufacturerItem_id ) {
                        onChange( manufacturerItem_id );
                    }
                }}
                options={options}
                // {...( value ? { defaultValue: props.value } : {} )}
            />
        </React.Fragment>
    );
};