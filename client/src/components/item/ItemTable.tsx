import { Table, Divider, message, Alert } from 'antd';
import React, { useState } from 'react';
import { ColumnProps } from 'antd/es/table';
import {
    // withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, ItemHardwareFastenerBoltSelectColumn, useItemHardwareFastenerBoltQuery, useGetIconQuery, 
    useGetItemsQuery, GetItemQuery, GetItemsQueryVariables,
    // ItemSelectColumn 
} from '../../lib/types/graphql';
import { LabelDrawModal } from '../draw/LabelDrawModal';
import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { toTitleCase, QueryResultTypePlus } from '../../lib/helpers';
import { EditHardwareFastenerBolt } from './edit/EditHardwareFastenerBolt';

import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { render } from 'react-dom';
import { ItemSearch } from './ItemSearch';
import { GenericItem } from '../../lib/item/Item';
import { EditOutlined, PrinterOutlined, DeleteOutlined, TagOutlined } from '@ant-design/icons';
import { PageSpinGQL } from '../shared/PageSpin';
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

type ItemTableProps<T, Q extends typeof useGetItemsQuery> = {
    data?: T[];
    query: Q; // QueryResultTypePlus
    variables: GetItemsQueryVariables;
} | {
    data: T[];
    query?: Q; // QueryResultTypePlus
    variables?: GetItemsQueryVariables;
};
// interface ItemTableProps<T> {
//     // collapsed?: boolean;
//     data?: T[];
//     query?
//     // itemClass: T;
//     // displayData?: ( data: T, index: number ) => React.ReactNode;
//     // filter:
//     // loading?: boolean;
// }

export type visibleHandler = ( c?: React.ReactElement ) => void;




export const ItemTable = <T extends Item<any>, Q extends typeof useGetItemsQuery> ( props: ItemTableProps<T, Q> & { children?: React.ReactNode; } ) => {
    let loading = true;
    let result;

    // return <ItemSearch />;

    const [ state, setState ] = useState<Partial<ItemTableState>>( {
        // data: props.data ?? undefined,
        // pagination: { total: 0, pageSize: 100, current: 0 },
        // loading: false,
        clickedItem: undefined,
        modal: null
    } );
    
    const [ data, setData ] = useState( props.data );
    // console.log("DATA__1", data);

    if ( !props.data ) {
        let variables = props.variables;
        if ( !variables.categories || variables.categories.length === 0 ) {
            variables.categories = null;
        }
        result = props.query( {
            variables: props.variables
        } );
        loading = result.loading;

        React.useEffect( () => {
            if ( result.error ) {
                message.error( result.error );
            }
            if ( result.data ) {
                // setState( {
                //     data: Item.ItemFactory( result.data.items )
                // } );
                setData( Item.ItemFactory( result.data.items ) as T[] );
                if ( result.data.items.length > 0 ) {
                    message.info( `loaded data, found ${ result.data.items.length } items` );
                } else {
                    message.warning( `No Items found matching your filters` );
                }
            }
        }, [ result.data, result.error ] );
    } else {
        console.debug( `data received in props ${ props.data } not running GraphQL` );
    }


    const getPrintModal = (): React.ReactElement => {
        console.log("getPrintModal()");
        // return <span>LOOK AT ME <br />MEMEME<br /></span>;
        return <LabelDrawModal
            item={state.clickedItem}
            visibleHandler={setModal} />;

    };

    const getRecordEditModal = ( record: Item<any> ): React.ReactElement => {

        switch ( record.class ) {
            //TODO: replace this with an edit modal defined within the Item subclass
            case "item_hardware_fastener_bolt":
                return <EditHardwareFastenerBolt visibleHandler={setModal} item={record as ItemHardwareFastenerBolt} />;
                break;
        }
    };

    const getColumns = (): ColumnProps<T>[] => {
        return [
            ...( data ? data[ 0 ].Columns : [] ),
            ...[
                {
                    title: 'Action',
                    key: 'action',
                    // dataIndex: '',
                    render: ( text, record: T ) => (
                        <span>
                            <a onClick={( obj ) => {
                                setModal( getRecordEditModal( record ), record );
                            }
                            }><EditOutlined className="IconButton" /></a>

                            <Divider type="vertical" />

                            <a onClick={( obj ) => {
                                setModal( getPrintModal(), record );
                            }
                            }><TagOutlined className="IconButton" /></a>

                            <Divider type="vertical" />

                            <a onClick={( obj ) => {
                                // TODO: this should add row to print list
                            }
                            }><PrinterOutlined className="IconButton" /></a>

                            <Divider type="vertical" />

                            <a><DeleteOutlined className="IconButton" /></a>
                        </span >
                    ),
                }
            ]
        ];
    };



    const setModal = ( modal: React.ReactElement, clickedItem?: T ) => {
        console.log( "setModal () ? received", modal, clickedItem );
        if ( !modal ) {
            setState( {
                modal: null,
                clickedItem: clickedItem
            } );
            console.log( "viewPrintModal(null) removing modal" );
            return;
        }
        setState( {
            modal: modal,
            clickedItem: clickedItem
        } );
        console.log( "setModal () ? provided new modal" );
    };

    // const handleTableChange = ( pagination, filters, sorter ) => {
    //     const pager = { ...state.pagination };
    //     pager.current = pagination.current;
    //     setState( {
    //         pagination: pager,
    //     } );
    // };

    const onChange = ( pagination, filters, sorter ) => {
        console.log( 'params', pagination, filters, sorter );
    };

    // console.log( {
    //     loading,
    //     result,
    //     data,
    //     state_data: state.data,
    //     first_id: ( state.data && state.data.length > 0 ? state.data[ 0 ].id : "NO DATA!" )
    // } );
    // if ( !loading && !result.data && ( !state.data || state.data.length == 0 ) ) {
    //     return <Alert
    //         message="Warning"
    //         description="No items found"
    //         type="warning"
    //         showIcon
    //     />;
    // }
    // console.log( 'DATA__2', data );
    return (
        <div>
            {/* <pre>{JSON.stringify( data, null, 2 )}</pre>
            <br/><br/>
            <pre>{JSON.stringify( getColumns(), null, 2)}</pre> */}
            {state.modal}

            <Table
                style={{
                    userSelect: 'none'
                }}
                columns={getColumns()}
                dataSource={data}
                // dataSource={state.data}
                rowKey={item => item.id.toString()}
                // pagination={state.pagination}
                loading={loading}
                onChange={onChange}
            >
            </Table>
        </div>
    );
};

