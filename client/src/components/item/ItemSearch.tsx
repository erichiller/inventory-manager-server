import React, { useState } from "react";

import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import Search from "antd/lib/input/Search";
import { Select } from "antd";




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


const sampleData = {
    item: {
        id: 3,
        name: "item type 1"
    },
    item_hardware_fastener_bolt: {
        id: 5,
        name: "bolt type 1",
        length: 3
    }
}

// const options = sampleData.forEach(element => {
    
// });


export const ItemSearch = <T extends Item<any>> ( props: ItemSearchProps<T> & { children?: React.ReactNode; } ) => {
    let loading = false;

    // if ( !props.data ) {
    //     let result = useGetItemsQuery();
    //     loading = result.loading;
    //     if ( result.data ) {
    //         message.info( `loaded data, found ${ result.data.items.length } items` );
    //     }
    // }


    const [ state, setState ] = useState<Partial<ItemSearchState>>( {
        data: undefined,
        pagination: { total: 0, pageSize: 100, current: 0 },
        loading: false,
        clickedItem: undefined,
        modal: null
    } );


    return <Select
        mode="tags"
        autoFocus={true}
        style={{ width: 120 }}
        children={[
            <Select.Option key="title"></Select.Option>
        ]}
        />
}