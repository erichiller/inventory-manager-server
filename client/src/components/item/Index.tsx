
import { Table, Divider, message, Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import { EnumItemClassEnum } from '../../lib/types/graphql';
import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import { ItemSearch } from './ItemSearch';
import { IItem } from '../../lib/item/Item';
import {
    useLocation
} from "react-router-dom";
import { ItemTable } from './ItemTable';
import { ItemCategoryTree } from './ItemCategoryTree';
// import DocumentNode from 'graphql-tag';


interface ItemTableState {
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


interface ItemTableProps<T> {
    collapsed?: boolean;
    data?: T[];
    displayData?: ( data: T, index: number ) => React.ReactNode;
    // loading?: boolean;
}

export type visibleHandler = ( c?: React.ReactElement ) => void;

interface ItemIndexState {
    // TODO: this should be category: CategoryEnum
    searchResults: { [ category: string ]: IItem[]; };
}


export const ItemIndex = <T extends Item<any>> ( props: ItemTableProps<T> & { children?: React.ReactNode; } ) => {
    // let loading = false;

    // const itemClasses: () => string[] = () => {
    //     // return Object.keys( EnumItemClassEnum ).map( col => col.toLowerCase() );
    //     // return Object.values( EnumItemClassEnum );
    //     return [ "1", "2", "3", "4", "5", "7" ];
    // };

    let location = useLocation();
    let [ state, setState ] = useState<ItemIndexState>( {
        searchResults: {}
    } );



    // console.log( itemClasses(), "itemClasses" );

    const processSearchResults = ( results ) => {
        console.log("Item/Index.tsx : search results from ItemSearch:\n", results);
        setState( { searchResults: results } );
    };

    return <div>
        <div className="flexContent" style={{ paddingTop: '15px', paddingBottom: '5px' }}>
            <ItemSearch onSearchCallback={processSearchResults} />
        </div>

        <div style={{display: 'flex'}}>
            <div style={{width: '250px'}}>
                <ItemCategoryTree />
            </div>
            <div style={{ flexGrow: 1}} className="fillFlex">
                <ItemTable />
            </div>
        </div>

    </div>;


};


// {
// !state.searchResults || state.searchResults === {} ?
//     <div className="button flexContent" style={{ padding: '5px' }}>
//         {
//             Item.ClassTypes.map( className => {
//                 // console.log( itemClasses(), "itemClasses in" );
//                 let itemType = Item.getClassForType( className );
//                 console.log( {
//                     name: "itemType check",
//                     itemType,
//                     // icon: ( itemType as any ).icon.constructor.name
//                     icon: itemType.icon
//                 } );
//                 // let Icon = ( itemType as any ).icon;
//                 let ItemTypeIcon = itemType.icon;
//                 // return <div className="button">
//                 return <Button key={className} block>
//                     <a href={`${ location.pathname }/${ className.toLowerCase() }`} >
//                         <span>{itemType.categories.join( ' / ' )}</span>
//                         {/* {(new itemType()).constructor.name} */}
//                         {/* <img src={(itemType as any).icon} alt="" /> */}
//                         <ItemTypeIcon />
//                         {/* {className} */}
//                     </a>
//                 </Button>;
//                 // return <Button key={className} block>{new itemType().icon}{className}</Button>;
//                 // </div>
//             } )
//         }
//     </div>

//     : <ItemTable />;
// }