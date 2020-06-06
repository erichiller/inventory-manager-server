import { Table, Divider } from 'antd';
import * as React from 'react';
import { OrderSelectColumn, useGetOrdersQuery, GetOrdersQuery, Order as OrderGql } from '../../lib/types/graphql';
import { Item } from '../../lib/item';
import { toTitleCase, computeDefaultPagination } from '../../lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { OrderEditModal } from './OrderFormModal';
import { Order } from '../../lib/order/Order';



interface OrderTableProps {
    // data: any
    class?: string;
}

interface OrderTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord: Order;
    modal: React.ReactElement;
}

// interface pagination {
//     total: number;
//     pageSize: number;
//     current: number;
// }

interface IOrderTableParams {
    /** item_id is Int as string */
    order_id: string;
    action: "edit" | 'add';
}

export const OrderTable: React.FC<OrderTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<OrderTableState>( {
        data: undefined,
        // pagination: { total: 0, pageSize: 100, current: 0 },
        pagination: { hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() },
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

    const result = useGetOrdersQuery();
    // const { data, loading, error } = useGetOrdersQuery();



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
            {state.modal}
            <Table
                columns={columns}
                dataSource={result.data ? result.data.order : []}
                // dataSource={ [
                //     {
                //         "vendor_order_id": "qqq1",
                //         "vendor": {
                //             "name": "Amazon",
                //             "url": "https://amazon.com",
                //             "__typename": "vendor"
                //         },
                //         "url": null,
                //         "total_cost": "$55.00",
                //         "tax_cost": "$5.00",
                //         "pon": null,
                //         "placed_date": "2019-03-15",
                //         "payment_method_id": null,
                //         "items_cost": "$50.00",
                //         "id": 1,
                //         "fulfilled_date": null,
                //         "__typename": "order"
                //     },
                //     {
                //         "vendor_order_id": "qqq1",
                //         "vendor": {
                //             "name": "Amazon",
                //             "url": "https://amazon.com",
                //             "__typename": "vendor"
                //         },
                //         "url": null,
                //         "total_cost": "$55.00",
                //         "tax_cost": "$5.00",
                //         "pon": null,
                //         "placed_date": "2019-03-21",
                //         "payment_method_id": null,
                //         "items_cost": "$50.00",
                //         "id": 2,
                //         "fulfilled_date": null,
                //         "__typename": "order"
                //     },
                //     {
                //         "vendor_order_id": "qqq1",
                //         "vendor": {
                //             "name": "Amazon",
                //             "url": "https://amazon.com",
                //             "__typename": "vendor"
                //         },
                //         "url": null,
                //         "total_cost": "$55.00",
                //         "tax_cost": "$5.00",
                //         "pon": null,
                //         "placed_date": "2019-04-16",
                //         "payment_method_id": null,
                //         "items_cost": "$50.00",
                //         "id": 3,
                //         "fulfilled_date": null,
                //         "__typename": "order"
                //     },
                //     {
                //         "vendor_order_id": "qqq1",
                //         "vendor": {
                //             "name": "Amazon",
                //             "url": "https://amazon.com",
                //             "__typename": "vendor"
                //         },
                //         "url": null,
                //         "total_cost": "$55.00",
                //         "tax_cost": "$5.00",
                //         "pon": null,
                //         "placed_date": "2019-04-22",
                //         "payment_method_id": null,
                //         "items_cost": "$50.00",
                //         "id": 4,
                //         "fulfilled_date": null,
                //         "__typename": "order"
                //     },
                //     {
                //         "vendor_order_id": "qqq2",
                //         "vendor": {
                //             "name": "Amazon",
                //             "url": "https://amazon.com",
                //             "__typename": "vendor"
                //         },
                //         "url": null,
                //         "total_cost": "$11.00",
                //         "tax_cost": "$1.00",
                //         "pon": null,
                //         "placed_date": "2020-05-09",
                //         "payment_method_id": null,
                //         "items_cost": "$10.00",
                //         "id": 5,
                //         "fulfilled_date": null,
                //         "__typename": "order"
                //     }
                // ]

                // }
                rowKey={order => order.id.toString()}
                pagination={state.pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};
