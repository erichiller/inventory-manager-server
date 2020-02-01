import { Table, Divider } from 'antd';
import React, { useState } from 'react';
import { ColumnProps } from 'antd/es/table';
import { withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, ItemHardwareFastenerBoltSelectColumn, useItemHardwareFastenerBoltQuery, useGetIconQuery } from '../../lib/types/graphql';
import { LabelDrawModal } from '../draw/LabelDrawModal';
import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { toTitleCase } from '../../lib/helpers';
import { EditHardwareFastenerBolt } from './edit/EditHardwareFastenerBolt';

import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { render } from 'react-dom';
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
    collapsed: boolean;
    data: T[];
    displayData: ( data: T, index: number ) => React.ReactNode;
    loading: boolean;
}

export type visibleHandler = ( c?: React.ReactElement ) => void;




export const ItemTable = <T extends Item<any>> ( props: ItemTableProps<T> & { children?: React.ReactNode; } ) => {

    const [ state, setState ] = useState<Partial<ItemTableState>>( {
        data: undefined,
        pagination: { total: 0, pageSize: 100, current: 0 },
        loading: false,
        clickedItem: undefined,
        modal: null
    } );

    const getPrintModal = (): React.ReactElement => {
        return <LabelDrawModal
            item={state.clickedItem}
            visible={DISPLAY.VISIBLE}
            visibleHandler={setModal} />;
    };

    const getRecordEditModal = ( record: Item<any> ): React.ReactElement => {

        switch ( record.class ) {
            case "item_hardware_fastener_bolt":
                return <EditHardwareFastenerBolt visibleHandler={setModal} item={record as ItemHardwareFastenerBolt} />;
                break;

        }
    };


    const getColumns = (): ColumnProps<Item<any>>[] => {
        return [
            ...( Object.keys( ItemHardwareFastenerBoltSelectColumn ).filter(
                key => [ "ID" ].includes( key ) ? false : key ).map(
                    key => {
                        return {
                            key: key,
                            title: toTitleCase( key ),
                            dataIndex: ItemHardwareFastenerBoltSelectColumn[ key ],
                        };
                    } ) ),
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


    return (
        <div>
            {state.modal}

            <Table
                columns={getColumns()}
                dataSource={props.data}
                rowKey={item => item.id.toString()}
                pagination={state.pagination}
                loading={props.loading}
                onChange={onChange}
            >
            </Table>
        </div>
    );
};

