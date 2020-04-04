import { Table, Divider, message } from 'antd';
import React, { useState } from 'react';
import { ColumnProps } from 'antd/es/table';
import { withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, ItemHardwareFastenerBoltSelectColumn, useItemHardwareFastenerBoltQuery, useGetIconQuery, useGetItemsQuery, ItemSelectColumn } from '../../lib/types/graphql';
import { LabelDrawModal } from '../draw/LabelDrawModal';
import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { toTitleCase } from '../../lib/helpers';
import { EditHardwareFastenerBolt } from './edit/EditHardwareFastenerBolt';

import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { render } from 'react-dom';
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




export const ItemTable = <T extends Item<any>> ( props: ItemTableProps<T> & { children?: React.ReactNode; } ) => {
    let loading = false;

    // return <ItemSearch />;

    const [ state, setState ] = useState<Partial<ItemTableState>>( {
        data: props.data ?? undefined,
        pagination: { total: 0, pageSize: 100, current: 0 },
        loading: false,
        clickedItem: undefined,
        modal: null
    } );

    if ( ! props.data ){
        let result = useGetItemsQuery();
        console.debug("no data received in props, running useGetItemsQuery");
        loading = result.loading;

        React.useEffect( () => {
            if ( result.data ) {
                setState( { 
                    data: Item.ItemFactory( result.data.items ) 
                });
                message.info( `loaded data, found ${ result.data.items.length } items` );
            }
        }, [ result.data ] );
    } else {
        console.debug(`data received in props ${props.data} not running GraphQL`);
    }



    const getPrintModal = (): React.ReactElement => {
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
            ...(state.data ? state.data[ 0 ].Columns : [ ] ),
            ...[
                {
                    title: 'Action',
                    key: 'action',
                    // dataIndex: '',
                    render: ( text, record ) => (
                        <span>
                            <a onClick={( obj ) => {
                                setModal( getPrintModal(), record );
                            }
                            }> Print</a>
                            <Divider type="vertical" />
                            <a onClick={( obj ) => {
                                setModal( getRecordEditModal( record ), record );
                            }
                            }> Print</a>
                            <Divider type="vertical" />
                            <a>Delete</a>
                        </span >
                    ),
                }
            ]
        ];
    };



    const setModal = ( modal: React.ReactElement, clickedItem?: T ) => {
        console.log( "viewPrintModal () ? received", modal, clickedItem );
        if ( !modal ) {
            setState( {
                clickedItem: clickedItem,
                modal: null
            } );
            console.log( "viewPrintModal(null) removing modal" );
            return;
        }
        setState( {
            modal: modal,
            clickedItem: clickedItem
        } );
        console.log( "viewPrintModal () ? provided new modal" );
        return;
    };

    const handleTableChange = ( pagination, filters, sorter ) => {
        const pager = { ...state.pagination };
        pager.current = pagination.current;
        setState( {
            pagination: pager,
        } );
    };

    const onChange = ( pagination, filters, sorter ) => {
        console.log( 'params', pagination, filters, sorter );
    };

    console.log( { data: state.data, first_id: state.data ? state.data[0].id : "NO DATA!"});
    return (
        <div>
            {state.modal}

            <Table
                columns={getColumns()}
                dataSource={state.data}
                rowKey={item => item.id.toString()}
                pagination={state.pagination}
                loading={loading}
                onChange={onChange}
            >
            </Table>
        </div>
    );
};

