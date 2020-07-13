import React, { useState } from "react";

import { Item, ItemHardwareFastenerScrewMachine } from '~lib/Item';
// import Search from "antd/lib/input/Search";
import { Select, Row, Col, Button } from "antd";


// import * as ReactRouter from 'react-router';
import { SelectValue, LabeledValue } from 'antd/lib/select';
import { SearchOutlined, TagOutlined, FontSizeOutlined } from '@ant-design/icons';
import { useSearchItemsQuery, EnumItemClassEnum, useSearchItemsLazyQuery } from "~lib/types/graphql";

const { Option } = Select;



// interface ItemSearchState {
//     data?: Item<any>[];
//     pagination: pagination;
//     loading: boolean;
//     clickedItem: Item<any>;
//     modal?: React.ReactElement;
// }

// interface pagination {
//     total: number;
//     pageSize: number;
//     current: number;
// }


// interface ItemSearchProps<T> {
//     collapsed?: boolean;
//     data?: T[];
//     displayData?: ( data: T, index: number ) => React.ReactNode;
//     // loading?: boolean;
// }



const filterKeys: string[] = [
    "fname",
    "lname",
    "mi",
    "street",
    "phone#",
    "zip"
];


interface Tags {
    text: string;
    multiple_allowed: boolean;
}

const tagOptions: Array<React.ReactElement> = filterKeys.map( tag => <Option value={tag}>{tag}:</Option> );

// interface ITagOption extends Partial<Exclude<LabeledValue, 'value'>> {
    // value?: string;
// }

interface ITagOption {
    key?: string;
    value: string;
    label: React.ReactNode;
}

interface SearchState {
    searchString?: string;
    loading?: boolean;
    value?: ITagOption[];
    // value?: SelectValue;
}

/** TODO
 * - filter selected options ?
 * - see: Search Box - Search with remote data.
 * - see Using OptGroup to group the options.
 * - show result count
 */

function ParseSearchString (
    searchString: string,
    value: LabeledValue[]
): { containsFilter: object; hasAnyKeysFilter: string[]; } {
    let hasAnyKeysFilter: string[] = [];
    let containsFilter: object = {};

    console.log( { function: 'ParseSearchString', searchString, value } );

    return {
        containsFilter: containsFilter,
        hasAnyKeysFilter: hasAnyKeysFilter
    };
}

interface ItemSearchProps {
    /** CSS Classes */
    className?: string;
    /** CSS Styles */
    style?: React.CSSProperties;
    /**
     * callback called when results are present for search.  
     * a parent component can use this to render a table, etc.
     */
    onSearchCallback?: ( results: { [ category: string ]: Array<typeof Item>; } ) => void;
}


export const ItemSearch: React.FC<ItemSearchProps> = ( props ) => {


    const [ state, setState ] = useState<SearchState>( {
        searchString: '',
        loading: false,
        value: undefined
        // } as Partial<SearchState> );
    } );

    // Execute query
    const [ runSearchQuery, { called, data, error, loading } ] = useSearchItemsLazyQuery( {
        variables: {
            containsFilter: {}
        },
        partialRefetch: true,
        returnPartialData: true,
        // skip: state.loading
    } );
    type QueryResultKeysT = Exclude<keyof typeof data, '__typename'>;

    console.debug( { "called?": called, "error?": error, "data?": data, searchstring: state.searchString } );

    let options: Array<React.ReactElement> = [];
    console.group( "Constructing Search Options" );
    if ( !error && !loading && data ) {
        Object.keys( data ).forEach( ( typeString: QueryResultKeysT ) => {
            console.log( `typeString: ${ typeString }` );
            // let type = data ? data[ typeString ] : [];
            let priorClass = data[ typeString ][ 0 ].class;
            // let optionGroupItems: { [ key in QueryResultKeysT ]: ( typeof Option )[] };
            let optionGroupItems: { [ key in keyof Record<EnumItemClassEnum, string> ]: ( React.ReactElement )[] };

            // optionGroupItems = "item_hardware_fastener_screw_machine";
            for ( let i = 0; i < data[ typeString ].length; i++ ) {
                let result = new Item( data.item[ i ] ); // just to ease the typing
                if ( data.item[ i ].class != priorClass ) {
                    priorClass = data.item[ i ].class;
                }
                console.log( { optionGroupItems } );
                if ( !optionGroupItems || !Object.keys( optionGroupItems ).includes( result.class ) ) {
                    optionGroupItems = {} as { [ key in keyof Record<EnumItemClassEnum, string> ]: ( React.ReactElement )[] };
                    optionGroupItems[ result.class ] = [];
                }
                optionGroupItems[ result.class ].push(
                    <Option value={result.id.toString()}>{result.name}</Option>
                );
            }
            Object.getOwnPropertyNames( optionGroupItems ).forEach( ( className: QueryResultKeysT ) => {
                console.log( { part: 'building optionGroups', className } );
                options.push( <Select.OptGroup key={className} label={className} children={optionGroupItems[ className ]} /> );
            } );
        } );
    }
    console.groupEnd();
    // if( loading ){
    //     setState({loading: true, searchString: state.searchString})
    // }
    console.log( "options length is now", options.length );

    return <React.Fragment>
        <Select
            placeholder="Hint: use `property:value` to quickly filter."
            mode="tags"
            // defaultActiveFirstOption={false}
            // mode="combobox"
            style={{ width: 450, ...props.style }}
            tokenSeparators={[ ',' ]}
            // suffixIcon={<SearchOutlined />}
            loading={loading}
            value={state.value}
            labelInValue={true}
            className={props.className}
            // showSearch={true}
            // value={undefined}
            // choiceTransitionName
            // value ??
            // onPopupScroll	Called when dropdown scrolls - maybe we could use this to essentially paginate the results ?
            children={[
                <Select.OptGroup label="Filters" children={filterKeys
                    .filter( tag => tag.startsWith( state.searchString ?? '' ) )
                    .map( tag => <Option value={":" + tag}>
                        <TagOutlined /> <b>{tag}:</b>
                    </Option> )
                } />
                ,
                ...options ]}


            onChange={( value, option ) => {
                // only called when option is chosen, same as onSelect it seems
                console.log( { type: "onChange", value, option } );
                // return;
                let results = {
                    value: [
                        // ...state.value ?? [],
                        ...( value as ITagOption[] ).map( i => {
                            console.log( "map value", i );
                            let newLabel = i.label;
                            if ( i.label?.toString().includes( ":" ) ) {
                                newLabel = i.label?.toString().split( ':', 2 );
                                newLabel = <span><TagOutlined /> <b>{newLabel[ 0 ]}</b>:<i>{newLabel[ 1 ]}</i></span>;
                            } else if ( typeof newLabel === "string" ) {
                                newLabel = <span><FontSizeOutlined /> <i>{newLabel?.toString()}</i></span>;
                            }
                            return {
                                key: i.key,
                                label: newLabel
                            } as ITagOption;
                        } ) ]
                };
                setState( results );

                // TODO: call `props.onSearchCallback`
                // setState({value: [ 
                //     value.map(
                //         { key: 'eric', label: <span>ERIC <b>BOLD</b></span>}
                // ]})
            }}

            onSelect={( value, option ) => {
                // receives the typed text in "value" and the present or generated "option"
                console.log( { type: "onSelect", value, option, props: option.props, prior_state: state.value } );
                return;
                // let i = value;
                // let newLabel = i.label;
                // if ( i.label?.toString().includes( ":" ) ) {
                //     newLabel = i.label?.toString().split( ':', 2 );
                //     newLabel = <span><TagOutlined /> <b>{newLabel[ 0 ]}</b>:<i>{newLabel[ 1 ]}</i></span>;
                // } else {
                //     newLabel = <span><FontSizeOutlined /> <i>{newLabel}</i></span>;
                // }
                // // return;
                // setState( {
                //     value: [
                //         ...( state.value ?? [] ),
                //         {
                //             key: i.key,
                //             label: newLabel
                //         } as LabeledValue
                //     ]
                // } );
                // // option = <React.Fragment>Hello</React.Fragment>;
            }}


            onSearch={( value ) => {
                // onSearch gets the value of the latest typed text, meaning that which is not in a "tag"
                console.log( { type: "onSearch", value } );
                setState( { searchString: value, value: state.value } );
                runSearchQuery(); // TODO: filter in GraphQL. NOT client side
            }}

            filterOption={( inputData, option ) => {
                // gets called for each option in the current Select.Children (Select.Options)
                // return true to include it in the remaining results
                // not necessary as we are doing the filtering in GraphQL
                // console.log( { type: "filterOption()", inputData, option} );
                return true;
            }}


        />
        <SearchOutlined style={{ position: 'relative', left: -30, opacity: .6 }} />
    </React.Fragment>;

};