import { Table, Divider } from 'antd';
import * as React from 'react';
import { OrderSelectColumn, useGetOrdersQuery, GetOrdersQuery, Order as OrderGql } from '../../lib/types/graphql';
import { Item } from '../../lib/item';
import { toTitleCase } from '../../lib/UtilityFunctions';
import { ColumnProps } from 'antd/lib/table';
import { Link, useParams } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { OrderEditModal } from './OrderEditModal';
import { Order } from '../../lib/order/Order';



interface OrderTableProps {
    // data: any
    class?: string;
}

interface OrderTableState {
    data?: Item<any>[];
    pagination: pagination;
    loading: boolean;
    clickedRecord: Order;
    modal: React.ReactElement;
}

interface pagination {
    total: number;
    pageSize: number;
    current: number;
}

interface IOrderTableParams {
    /** item_id is Int as string */
    order_id: string;
    action: "edit" | 'add';
}

export const OrderTable: React.FC<OrderTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<OrderTableState>( {
        data: undefined,
        pagination: { total: 0, pageSize: 100, current: 0 },
        loading: false,
        clickedRecord: undefined,
        modal: null
    } );
    let params = useParams<IOrderTableParams>();

    React.useEffect( () => {
        switch ( params.action ) {
            case "edit":
                if ( params.order_id ) {
                    setModal( <OrderEditModal orderId={parseInt( params.order_id )} /> );
                }
                break;
            case "add":
                if ( params.order_id ) {
                    setModal( <OrderEditModal /> );
                }
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params.order_id, params.action ] );

    const { data, loading, error } = useGetOrdersQuery();



    const columns: ColumnProps<Extract<GetOrdersQuery, 'order'>>[] = [
        ...Order.Columns,
        ...[
            {
                title: 'Action',
                key: 'action',
                // dataIndex: '',
                render: ( text, record ) => (
                    <span>
                        <Link to={`/order/${ record.id }/edit`}><EditOutlined className="IconButton" /></Link>
                        <Divider type="vertical" />
                        {/* TODO */}
                        <a><DeleteOutlined className="IconButton" /></a>
                    </span >
                ),
            }
        ]
    ];

    const setModal = ( modal: React.ReactElement, clickedRecord?: Order ) => {
        console.log( "viewPrintModal () ? received", modal, clickedRecord );
        if ( !modal ) {
            setState( {
                ...state,
                clickedRecord: clickedRecord,
                modal: null
            } );
            console.log( "viewPrintModal(null) removing modal" );
            return;
        }
        setState( {
            ...state,
            modal: modal,
            clickedRecord: clickedRecord
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
