import { Table, Divider } from 'antd';
import * as React from 'react';
import { useGetLabelsQuery, OrderSelectColumn, Label, GetLabelsQuery, useGetOrdersQuery } from '../../lib/types/graphql';
import { LabelDrawModal } from '../draw/LabelDrawModal';
import { Item } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { toTitleCase } from '../../lib/UtilityFunctions';
import { get } from 'http';
import { render } from 'bwip-js';
import { ColumnProps } from 'antd/lib/table';



interface OrderTableProps {
    // data: any
    class?: string;
}

interface OrderTableState {
    data?: Item<any>[];
    pagination: pagination;
    loading: boolean;
    clickedLabel: Label;
    modal: React.ReactElement;
}

interface pagination {
    total: number;
    pageSize: number;
    current: number;
}

export const OrderTable: React.FC<OrderTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<OrderTableState>( {
        data: undefined,
        pagination: { total: 0, pageSize: 100, current: 0 },
        loading: false,
        clickedLabel: undefined,
        modal: null
    } );

    const { data, loading, error } = useGetOrdersQuery();



    // get Columns (): ColumnProps<Omit<GetLabelsQuery, '__typename'>>[] {
    const columns: ColumnProps<Extract<GetLabelsQuery, 'label'>>[] = [
        ...( Object.keys( OrderSelectColumn ).filter(
            key => [ "ID" ].includes( key ) ? false : key ).map(
                key => {
                    return {
                        key: key,
                        title: toTitleCase( key ),
                        dataIndex: OrderSelectColumn[ key ],
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
                            obj.preventDefault();
                            // setState({
                            //   clickedItem: record,
                            //   // printModal: display.VISIBLE
                            // })
                            setModal( <LabelDrawModal
                                label={state.clickedLabel}
                                visibleHandler={setModal} />
                                , record );
                        }
                        }> Print</a>
                        <Divider type="vertical" />
                        <a>Edit</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                    </span >
                ),
            }
        ]
    ];

    // viewPrintModal = ( change?: DISPLAY, clickedLabel?: Label ) => {
    //     console.log( "viewPrintModal () ? received", change );
    //     if ( change !== undefined && change != state.printModal ) {
    //         setState( {
    //             printModal: change,
    //             clickedLabel: clickedLabel
    //         } );
    //         console.log( "viewPrintModal () ? change detected; returning:", change == DISPLAY.VISIBLE );
    //         return change == DISPLAY.VISIBLE;
    //     }
    //     console.log( "viewPrintModal () ? NO change detected; returning:", state.printModal == DISPLAY.VISIBLE );
    //     return state.printModal == DISPLAY.VISIBLE;
    // }


    const setModal = ( modal: React.ReactElement, clickedLabel?: Label ) => {
        console.log( "viewPrintModal () ? received", modal, clickedLabel );
        if ( !modal ) {
            setState( {
                ...state,
                clickedLabel: clickedLabel,
                modal: null
            } );
            console.log( "viewPrintModal(null) removing modal" );
            return;
        }
        setState( {
            ...state,
            modal: modal,
            clickedLabel: clickedLabel
        } );
        console.log( "viewPrintModal () ? provided new modal" );
        return;
    };


    const handleTableChange = ( pagination, filters, sorter ) => {
        const pager = { ...state.pagination };
        pager.current = pagination.current;
        setState( {
            ...state,
            pagination: pager,
        } );
    };

    function onChange ( pagination, filters, sorter ) {
        console.log( 'params', pagination, filters, sorter );
    };

    if ( error ) return <span>Error</span>;
    console.log( "data is", data );
    return (
        <div>
            {state.modal}
            <Table
                columns={columns}
                dataSource={data ? data.order : []}
                rowKey={order => order.id.toString()}
                pagination={state.pagination}
                loading={loading}
                onChange={onChange}
            >
            </Table>
        </div>
    );
};
