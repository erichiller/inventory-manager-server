import { RefSelectProps, SelectProps, SelectValue } from "antd/lib/select";
import React, { useState, useEffect, ReactElement, useRef } from "react";
import { Input, Select } from "antd";


import { Intersection, is, parseIntSafe } from "~lib/UtilityFunctions";
import { useGetItemLazyQuery, useGetItemQuery, useItemSearchLazyQuery, useItemSearchQuery } from "~lib/types/graphql";


interface OptionT {
    label?: string | ReactElement;
    item_id: number;
}
type VT = SelectValue;

export type ItemSelectMultipleProvidesValue = Array<{ item_id: number; }>;

// interface ItemSelectProps extends Omit<SelectProps<VT>, 'value' | 'onChange' | 'mode'> {
//     forwardRef?: React.MutableRefObject<Input>;
//     value?: VT;
//     onChange?: ( items: ItemSelectProvidesValue) => void;
//     mode?: 'multiple' | 'tags' | 'single';
// }



// type VendorItemFormModalProps = Union<{
//     vendorItem: QueryResultTypePlus<typeof useGetVendorItemQuery>;
//     vendorItemId?: null;
// } | {
//     vendorItem?: null;
//     vendorItemId: number;
// } | {
//     vendorItem?: null;
//     vendorItemId?: null;
// }, {
//     visibilityHandler: ( modal: React.ReactElement ) => void;
//     onFinish?: ( values: Partial<UpdateVendorItemMutationVariables> ) => void;
// }>;

type ItemSelectProps = Intersection<
    Omit<SelectProps<VT>, "value" | "onChange" | "mode">,
    {
        forwardRef?: React.MutableRefObject<Input>;
        value?: VT;
    },
    {
        onChange?: ( items: ItemSelectMultipleProvidesValue ) => void;
        mode?: undefined | "multiple" | "tags";
    } |
    {
        onChange?: ( item_id: number ) => void;
        mode: null | "single";
    }
>;


/**
 * Form Select Input for Items
 * 
 * Set `props.mode=null` or `single` for single input, else defaults to multiple
 */
export const ItemSelect: React.FC<ItemSelectProps> = ( props ) => {
    const { onChange, 
        //value, 
        // ...remainingProps 
    } = props;
    const [ searchText, setSearchText ] = useState<string>();
    const [ options, setOptions ] = useState<OptionT[]>( [] );
    const [ itemSearchQuery, itemSearchQueryResult ] = useItemSearchLazyQuery( );
    const [ itemQuery, itemQueryResult ] = useGetItemLazyQuery( );
    

    useEffect( () => {
        console.log( { class: "ItemSelect", action: "itemSearchQuery?", data: searchText } );
        if ( searchText ) {
            console.log( `running searchText using searchText=${searchText}` );
            itemSearchQuery( {
                variables: {
                    search_text: `*${searchText}*`
                }
            } );
        }
    }, [searchText] );
    useEffect( () => {
        console.log( { class: "ItemSelect", action: "itemQuery?", data: props.value } );
        if ( !Array.isArray( props.value ) ){
            let item_id: number = typeof props.value === "number" ? props.value : 
                typeof props.value === "string" ? parseInt( props.value ) : null;
            if ( item_id !== null ){
                console.log( `running itemQuery using item_id=${item_id}` );
                itemQuery( {
                    variables: {
                        id: item_id
                    }
                } );
            }
        }
    }, [] );
    const mode: "multiple" | "tags" | null = props.mode === "single" ? null : ( props.mode ?? "multiple" );
    console.log( "ItemSelect with mode", mode, "and props: ", props );
    useEffect( () => {
        if ( !itemSearchQueryResult.error && itemSearchQueryResult.data ) {
            console.log( { class: "ItemSelect", action: "useEffect", result: "itemSearchQueryResult", event: "loading and error ok", data: itemSearchQueryResult.data } );
            setOptions( itemSearchQueryResult.data.search.map( v => {
                console.log( "outputting option", v );
                return {
                    item_id: v.id,
                    label: <span className="orderOption">
                        {/* {<v.icon />} */}
                        <span>{v.name}</span>
                        <span>{v.metadata?.description}</span>
                        {/* <span>#{v.vendor_order_id}</span> */}
                    </span>
                    // TODO: Set value to the applicable string, feed value up that is the `order_id`
                };
            } ) );
        }
    }, [ itemSearchQueryResult.loading, itemSearchQueryResult.data ] );
    useEffect( () => {
        console.log( { class: "ItemSelect", action: "useEffect", result: "itemQueryResult", event: "PRECHECK", data: itemQueryResult.data, error: itemQueryResult.error, loading: itemQueryResult.loading } );
        if ( !itemQueryResult.error && itemQueryResult.data ){
            console.log( { class: "ItemSelect", action: "useEffect", result: "itemQueryResult", event: "loading and error ok", data: itemQueryResult.data } );
            setOptions( [{
                item_id: itemQueryResult.data.item.id,
                label: <span className="orderOption">
                    {/* {<v.icon />} */}
                    <span>{itemQueryResult.data.item.name}</span>
                    <span>{itemQueryResult.data.item.object?.description ?? ""}</span>
                    {/* <span>#{v.vendor_order_id}</span> */}
                </span>,
                // TODO: Set value to the applicable string, feed value up that is the `order_id`
            }] );
            if ( props.mode === "single" ){
                props.onChange( itemQueryResult.data.item.id );
            }
        }
    }
    , [ itemQueryResult.data ] );

    return (
        <div className={`ItemSelect ${props.className?? ""}`}>
            <Select
                mode={ mode }
                showSearch={true}
                filterOption={false}
                onSearch={value => { console.log( { event: "onSearch", setSearchText: value } ); setSearchText( value ); }}
                suffixIcon={props.suffixIcon}
                placeholder={props.placeholder}
                value={props.value.toString() as SelectValue}
                onChange={( value, opt ) => {
                    console.log( "onChange", { value, opt } );
                    if ( is < ( input: number ) => void >( onChange, props.mode === null || props.mode === "single" ) ) {
                        onChange( parseIntSafe( value ) ); 
                    } else {
                        let arrayOfItemProps: { item_id: number; }[] = [];
                        if ( typeof value === "number" ) {
                            arrayOfItemProps = [ { item_id: value } ];
                        } else if ( typeof value === "string" ) {
                            arrayOfItemProps = [ { item_id: parseInt( value ) } ];
                        } else if ( "key" in value ) {
                            arrayOfItemProps = [ { item_id: ( typeof value.value === "number" ? value.value : parseInt( value.value ) ) } ];
                        } else if ( Array.isArray( value ) && value.length > 0 ) {
                            value.forEach( e => typeof e === "number" ? arrayOfItemProps.push( { item_id: e } ) : arrayOfItemProps.push( { item_id: parseInt( e ) } ) );
                        }
                        onChange( arrayOfItemProps );
                    }
                }}
            >
                {...options.map( v => {
                    console.log( "select with options", v );
                    return <Select.Option key={v.item_id} value={v.item_id.toString()}>{v.label}</Select.Option>;
                } )}
            </Select>
        </div>
    );
};