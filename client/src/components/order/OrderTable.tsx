import { Table, Divider, message } from 'antd';
import * as React from 'react';
import { useGetOrdersQuery, GetOrdersQuery, useDeleteOrderMutation, GetOrdersDocument } from '~lib/types/graphql';
import { Item } from '~lib/Item';
import { computeDefaultPagination } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { OrderFormModal } from './Form/OrderFormModal';
import { Order } from '~lib/Order/Order';
import { useState } from 'react';



interface OrderTableProps {
    // data: any
    class?: string;
}

interface OrderTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord: Order;
}

interface IOrderTableParams {
    order_id: string;
    action: "edit" | 'add';
}

export const OrderTable: React.FC<OrderTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<OrderTableState>( {
        data: undefined,
        // pagination: { total: 0, pageSize: 100, current: 0 },
        pagination: { hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() },
        loading: false,
        clickedRecord: undefined
    } );
    let params = useParams<IOrderTableParams>();
    const [ modal, setModal ] = useState<React.ReactElement>( null );
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

    const result = useGetOrdersQuery();

    /** delete */
    const [ deleteVendor, deleteVendorResult ] = useDeleteOrderMutation( {
        refetchQueries: [
            { query: GetOrdersDocument }
        ]
    } );
    React.useEffect( () => {
        if ( deleteVendorResult.error ) {
            message.error( `Error deleting vendor: \n${ deleteVendorResult.error }` );
        } else if ( deleteVendorResult.data ) {
            message.info( `Successfully deleted vendor.` );
        }
    }, [ deleteVendorResult ] );

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
                        <a><DeleteOutlined className="IconButton" onClick={() => {
                            deleteVendor( { variables: { id: record.id } } );
                        }} /></a>
                    </span >
                ),
            }
        ]
    ];

    // const setModal = ( modal: React.ReactElement, clickedRecord?: Order ) => {
    //     console.log( "viewPrintModal () ? received", modal, clickedRecord );
    //     if ( !modal ) {
    //         setState( {
    //             ...state,
    //             clickedRecord: clickedRecord,
    //             modal: null
    //         } );
    //         console.log( "viewPrintModal(null) removing modal" );
    //         return;
    //     }
    //     setState( {
    //         ...state,
    //         modal: modal,
    //         clickedRecord: clickedRecord
    //     } );
    //     console.log( "viewPrintModal () ? provided new modal" );
    //     return;
    // };


    const handleTableChange = ( pagination: TablePaginationConfig, filters, sorter ) => {
        const pager = state.pagination;
        if ( pager ) {
            pager.current = pagination.current;
        }
        setState( {
            ...state,
            pagination: pager ? pager : pagination,
        } );
    };

    function onChange ( pagination, filters, sorter ) {
        console.log( 'params', pagination, filters, sorter );
    };

    if ( result.error ) return <span>Error</span>;
    console.log( "data is", result.data, '\ncolumns are', columns );
    return (
        <div>
            {modal}
            <Table
                columns={columns}
                dataSource={result.data ? result.data.order : []}
                rowKey={order => order.id.toString()}
                pagination={state.pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};
