import { Table, Divider, message } from 'antd';
import * as React from 'react';
import { useGetOrdersQuery, GetOrdersQuery, useDeleteOrderMutation, GetOrdersDocument } from '~lib/types/graphql';
import { computeDefaultPagination, Unpacked } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig, TableProps } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { OrderFormModal } from './Form/OrderFormModal';
import { Order } from '~lib/Order/Order';
import { useState } from 'react';

interface OrderTableProps {
    class?: string;
}

interface IOrderTableParams {
    order_id: string;
    action: "edit" | 'add';
}


export const OrderTable: React.FC<OrderTableProps> = ( props ) => {
    const [pagination, setPagination] = useState < false | TablePaginationConfig>( { 
        hideOnSinglePage: true, 
        defaultPageSize: computeDefaultPagination() 
    } );
    let params = useParams<IOrderTableParams>();
    const [ orders, setOrders ] = useState<Order[]>( [] );
    const [ modal, setModal ] = useState<React.ReactElement | null>( null );
    const history = useHistory();

    const handleModalChange = ( modal: React.ReactElement ) => {
        if ( modal === null ) {
            history.push( '/order' );
        }
        setModal( modal );
    };

    React.useEffect( () => {
        switch ( params.action ) {
            case "edit":
                if ( params.order_id ) {
                    setModal( <OrderFormModal visibilityHandler={handleModalChange} orderId={parseInt( params.order_id )} /> );
                }
                break;
            case "add":
                if ( params.order_id ) {
                    setModal( <OrderFormModal visibilityHandler={handleModalChange} /> );
                }
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params.order_id, params.action ] );

    const result = useGetOrdersQuery( {
        onCompleted: ( orders ) => setOrders( Order.OrdersFactory( orders.order ) ),
        onError: ( error ) => message.error( `Error while retrieving orders: \n${error.name}: ${ error.message }` )
    } );

    /** delete */
    const [ deleteOrder, _ ] = useDeleteOrderMutation( {
        refetchQueries: [
            { query: GetOrdersDocument }
        ],
        onCompleted: () => message.success( "Successfully Deleted Order" ),
        onError: ( error ) => message.error( `Error deleting vendor: \n${error.name}: ${ error.message }` )
    } );

    const columns: ColumnProps<Unpacked<GetOrdersQuery['order']>>[] = [
        ...Order.Columns,
        ...[
            {
                title: 'Action',
                key: 'action',
                render: ( text, record ) => (
                    <span>
                        <Link to={`/order/${ record.id }/edit`}><EditOutlined className="IconButton" /></Link>
                        <Divider type="vertical" />
                        <a><DeleteOutlined className="IconButton" onClick={() => {
                            deleteOrder( { variables: { id: record.id } } );
                        }} /></a>
                    </span >
                ),
            } as ColumnProps<Unpacked<GetOrdersQuery['order']>>
        ]
    ];

    const onChange: TableProps<Order>['onChange'] = ( pagination, filters, sorter ) => {
        console.log( 'params', pagination, filters, sorter );
        
        const pager = pagination;
        if ( pager ) {
            pager.current = pagination.current;
        }
        setPagination( pager ? pager : pagination );
    };

    return (
        <div>
            {modal}
            <Table
                columns={columns}
                dataSource={orders ? orders : []}
                rowKey={order => order.id.toString()}
                pagination={pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};

export default OrderTable;