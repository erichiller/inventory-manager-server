import React, { useState } from "react";

import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import { Icon as LegacyIcon } from '@ant-design/compatible';
// import Search from "antd/lib/input/Search";
import { Select } from "antd";


// import * as ReactRouter from 'react-router';
import { SelectValue, LabeledValue } from 'antd/lib/select';
import { useSearchItemsQuery } from "../../lib/types/graphql";
import { QueryStore } from "apollo-client/data/queries";

const { Option } = Select;



interface ItemSearchState {
    data?: Item<any>[];
    pagination: pagination;
    loading: boolean;
    clickedItem: Item<any>;
    modal?: React.ReactElement;
}

interface pagination {
    total: number;
    pageSize: number;
    current: number;
}


interface ItemSearchProps<T> {
    collapsed?: boolean;
    data?: T[];
    displayData?: ( data: T, index: number ) => React.ReactNode;
    // loading?: boolean;
}


// const sampleData = {
//     item: {
//         id: 3,
//         name: "item type 1"
//     },
//     item_hardware_fastener_bolt: {
//         id: 5,
//         name: "bolt type 1",
//         length: 3
//     }
// }

// const options = sampleData.forEach(element => {

// });


// export const ItemSearch = <T extends Item<any>> ( props: ItemSearchProps<T> & { children?: React.ReactNode; } ) => {
//     let loading = false;

//     // if ( !props.data ) {
//     //     let result = useGetItemsQuery();
//     //     loading = result.loading;
//     //     if ( result.data ) {
//     //         message.info( `loaded data, found ${ result.data.items.length } items` );
//     //     }
//     // }


//     const [ state, setState ] = useState<Partial<ItemSearchState>>( {
//         data: undefined,
//         pagination: { total: 0, pageSize: 100, current: 0 },
//         loading: false,
//         clickedItem: undefined,
//         modal: null
//     } );


//     return <Select
//         mode="tags"
//         autoFocus={true}
//         style={{ width: 120 }}
//         children={[
//             <Select.Option key="title"></Select.Option>
//         ]}
//         />
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
    text: string,
    multiple_allowed: boolean;
}

const tagOptions: Array<React.ReactElement> = filterKeys.map( tag => <Option key={tag}>{tag}:</Option> );


interface SearchState {
    searchString?: string;
    loading?: boolean;
    value?: LabeledValue[];
    // value?: SelectValue;
}

/** TODO
 * - filter selected options ?
 * - see: Search Box - Search with remote data.
 * - see Using OptGroup to group the options.
 * - show result count
 */

function ParseSearchString ( searchString: string, value: LabeledValue[] ): { containsFilter: object, hasAnyKeysFilter: string[]; } {
    let hasAnyKeysFilter: string[] = [];
    let containsFilter: object = {};

    console.log( { function: 'ParseSearchString', searchString, value } );





    return {
        containsFilter: containsFilter,
        hasAnyKeysFilter: hasAnyKeysFilter
    };

}


export const ItemSearch: React.FC<{}> = ( props ) => {


    const [ state, setState ] = useState( {
        searchString: '',
        loading: false,
        value: undefined
        // } as Partial<SearchState> );
    } as SearchState );

    // Execute query
    const queryResults = useSearchItemsQuery( {
        variables: {
            containsFilter: {}
        },
        partialRefetch: true,
        returnPartialData: true,
        // skip: state.loading
    } );
    type QueryResultKeysT = Exclude<keyof typeof queryResults[ 'data' ], '__typename'>;

    console.debug( { "called?": queryResults.called, "error?": queryResults.error, "data?": queryResults.data, searchstring: state.searchString } );

    let options: Array<React.ReactElement> = [];
    console.group( "Constructing Search Options" );
    if ( !queryResults.error && !queryResults.loading && queryResults.data ) {
        Object.keys( queryResults.data ).forEach( (typeString: QueryResultKeysT) => {
            console.log( `typeString: ${ typeString }` );
            // let type = queryResults.data ? queryResults.data[ typeString ] : [];
            let priorClass = queryResults.data[typeString][ 0 ].class;
            let optionGroupItems: { [ key in QueryResultKeysT ]: (typeof Option)[] };
            for ( let i = 0; i < queryResults.data[ typeString ].length; i++ ) {
                let result = queryResults.data.item[ i ]; // just to ease the typing
                if ( queryResults.data.item[ i ].class != priorClass ) {
                    priorClass = queryResults.data.item[ i ].class;
                }
                optionGroupItems[result.class].push(
                    <Option key={result.id}>{result.name}:</Option>
                );
            }
            Object.getOwnPropertyNames( optionGroupItems).forEach( (className: QueryResultKeysT) => {
                console.log( { part: 'building optionGroups', className } );
                options.push( <Select.OptGroup key={className} label={className} children={optionGroupItems[ className ]} /> );
            })
        } );
    }
    console.groupEnd();
    // if( queryResults.loading ){
    //     setState({loading: true, searchString: state.searchString})
    // }
    console.log( "options length is now", options.length );

    return (
        <span><Select
            placeholder="Hint: use `property:value` to quickly filter."
            mode="tags"
            // defaultActiveFirstOption={false}
            // mode="combobox"
            style={{ width: 450 }}
            tokenSeparators={[ ',' ]}
            // suffixIcon={<Icon type="search" />}
            loading={queryResults.loading}
            value={state.value}
            labelInValue={true}
            // showSearch={true}
            // value={undefined}
            // choiceTransitionName
            // value ??
            // onPopupScroll	Called when dropdown scrolls - maybe we could use this to essentially paginate the results ?
            children={[
                <Select.OptGroup label="Filters" children={filterKeys
                    .filter( tag => tag.startsWith( state.searchString ?? '' ) )
                    .map( tag => <Option key={":" + tag}>
                        <LegacyIcon type="tag" /> <b>{tag}:</b>
                    </Option> )
                } />
                ,
                ...options ]}


            onChange={( value, option ) => {
                // only called when option is chosen, same as onSelect it seems
                console.log( { type: "onChange", value, option } );
                // return;
                setState( {
                    value: [
                        // ...state.value ?? [],
                        ...( value as LabeledValue[] ).map( i => {
                            console.log( "map value", i );
                            let newLabel = i.label;
                            if ( i.label?.toString().includes( ":" ) ) {
                                newLabel = i.label?.toString().split( ':', 2 );
                                newLabel = <span><LegacyIcon type="tag" /> <b>{newLabel[ 0 ]}</b>:<i>{newLabel[ 1 ]}</i></span>;
                            } else if ( typeof newLabel === "string" ) {
                                newLabel = <span><LegacyIcon type="font-size" /> <i>{newLabel?.toString()}</i></span>;
                            }
                            return {
                                key: i.key,
                                label: newLabel
                            };
                        } ) ]
                } );
                // setState({value: [ 
                //     value.map(
                //         { key: 'eric', label: <span>ERIC <b>BOLD</b></span>}
                // ]})
            }}

            onSelect={( value, option ) => {
                // receives the typed text in "value" and the present or generated "option"
                console.log( { type: "onSelect", value, option, props: option.props, prior_state: state.value } );
                return;
                let i = value;
                let newLabel = i.label;
                if ( i.label?.toString().includes( ":" ) ) {
                    newLabel = i.label?.toString().split( ':', 2 );
                    newLabel = <span><LegacyIcon type="tag" /> <b>{newLabel[ 0 ]}</b>:<i>{newLabel[ 1 ]}</i></span>;
                } else {
                    newLabel = <span><LegacyIcon type="font-size" /> <i>{newLabel}</i></span>;
                }
                // return;
                setState( {
                    value: [
                        ...(state.value ?? []),
                        {
                            key: i.key,
                            label: newLabel
                        }
                    ]
                } );
                // option = <React.Fragment>Hello</React.Fragment>;
            }}


            onSearch={( value ) => {
                // onSearch gets the value of the latest typed text, meaning that which is not in a "tag"
                console.log( { type: "onSearch", value } );
                setState( { searchString: value, value: state.value } );
            }}

            filterOption={( inputData, option ) => {
                // gets called for each option in the current Select.Children (Select.Options)
                // return true to include it in the remaining results
                // not necessary as we are doing the filtering in GraphQL
                // console.log( { type: "filterOption()", inputData, option} );
                return true;
            }}


        />  <LegacyIcon type="search" style={{ position: 'relative', left: -30, opacity: .6 }} /></span>
    );

};