import { SelectProps, SelectValue, LabeledValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement } from "react";
import { AutoComplete, Input, DatePicker, Select, Divider } from "antd";



import { OptionsType, OptionData, OptionGroupData } from 'rc-select/lib/interface';
import { InputProps } from "antd/lib/input";
import { useGetManufacturerItemsLazyQuery, useSearchManufacturerItemsLazyQuery, useSearchManufacturerItemsQuery, ManufacturerItem } from "../../lib/types/graphql";
import { PlusOutlined } from "@ant-design/icons";
import { ManufacturerItemFormModal } from "./ManufacturerItemFormModal";
import { useHistory, useLocation } from "react-router-dom";


interface OptionT extends OptionData {
    label?: string | ReactElement;
    id: number;
}
type VT = SelectValue;

interface ManufacturerItemSelectValue extends Partial<Pick<ManufacturerItem, 'id' | 'description' | 'item_id' | 'manufacturer_id' | 'manufacturer_product_id'>> { }

interface ManufacturerItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange'> {
    forwardRef?: React.MutableRefObject<Input>;
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
    useEffect( () => {
        if ( !loading && !error ) {
            console.log( { class: "ManufacturerItemSelect", "action": "useEffect", event: "loading and error ok", data } );
            let opts: OptionT[] = [];
            data.item.forEach( item => {
                item.manufacturerItems.forEach( v => {
                    console.log( "outputting option", v );
                    opts.push( {
                        id: v.id,
                        value: v.id,
                        label: <span className="manufacturerItemOption">
                            {v && v.manufacturer.url ? <img src={`${ v.manufacturer.url }/favicon.ico`} /> : null}
                            {/* <span>{v.manufacturer.name}</span> */}
                            <span>{v.manufacturer_product_id}</span>
                            {/* <span>#{v.manufacturerItem_order_id}</span> */}
                        </span>
                        // TODO: Set value to the applicable string, feed value up that is the `order_id`
                    } );
                } );
            } );
            setOptions( opts );
        }
    }, [ loading, data ] );
    useEffect( () => {
        console.log( "ManufacturerItemSelect -- value changed" );
    }, [ value ] );
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
                                        onChange(args);
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
                    } else if ( "key" in value ) {
                        manufacturerItem_id = typeof value.value === "number" ? value.value : parseInt( value.value );
                    }
                    onChange( {
                        id: manufacturerItem_id,
                        // item_id: 1111,
                        // manufacturer_id: 2222,
                        // manufacturer_sku: "3333",
                        // description: "4444"
                    } );
                }}
                options={options}
                {...( value ? { defaultValue: props.value } : {} )}
            />
        </React.Fragment>
    );
};