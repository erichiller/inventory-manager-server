
import { Table, Divider, message, Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import { EnumItemClassEnum } from '../../lib/types/graphql';
import { Item } from '../../lib/item';
import { ItemSearch } from './ItemSearch';
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




export const ItemIndex = <T extends Item<any>> ( props: ItemTableProps<T> & { children?: React.ReactNode; } ) => {
    // let loading = false;

    const itemClasses: () => string[] = () => {
        // return Object.keys( EnumItemClassEnum ).map( col => col.toLowerCase() );
        // return Object.values( EnumItemClassEnum );
        return [ "1", "2", "3", "4", "5", "7" ];
    };



    console.log( itemClasses(), "itemClasses" );


    return <div>
        <div className="flexContent" style={{ paddingTop: '15px' }}>
            <ItemSearch />
        </div>

        <div className="button flexContent" style={{ padding: '5px' }}>
            {
                Item.ClassTypes.map( className => {
                    console.log( itemClasses(), "itemClasses in" );
                    let itemType = Item.getClassForType(className);
                    console.log(itemType);
                    // return <div className="button">
                    return <Button key={className} block>{(new itemType()).constructor.name}{className}</Button>;
                    // return <Button key={className} block>{new itemType().icon}{className}</Button>;
                    // </div>
                } )
            }
        </div> </div>;


};


