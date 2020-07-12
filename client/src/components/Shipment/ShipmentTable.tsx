import { Table, Divider, message } from 'antd';
import * as React from 'react';
import { ShipmentSelectColumn, Shipment as ShipmentGql, useGetShipmentsQuery, GetShipmentsQuery, useDeleteShipmentMutation, GetShipmentDocument, GetShipmentsDocument } from '~lib/types/graphql';
import { Item } from '~lib/Item';
import { toTitleCase, computeDefaultPagination } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ShipmentFormModal } from './ShipmentFormModal';
import { Shipment } from '~lib/Shipment/Shipment';
import { useState } from 'react';
// import { history }



interface ShipmentTableProps {
    class?: string;
}

interface ShipmentTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord: Shipment;
}

interface IShipmentTableParams {
    /** item_id is Int as string */
    shipment_id: string;
    action: "edit" | 'add';
}

export const ShipmentTable: React.FC<ShipmentTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<ShipmentTableState>( {
        data: undefined,
        pagination: { hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() },
        loading: false,
        clickedRecord: undefined,
    } );
    let params = useParams<IShipmentTableParams>();
    const [ shipments, setShipments ] = useState<Shipment[]>( [] );
    const [ modal, setModal ] = useState<React.ReactElement>( null );
    const history = useHistory();

    const handleModalChange = ( modal: React.ReactElement ) => {
        if ( modal === null ){
            history.push( '/shipment' );
        }
        setModal( modal );
    };

    React.useEffect( () => {
        console.log( {position: 'React.useEffect', shipment_id: params.shipment_id, action: params.action} );
        switch ( params.action ) {
            case "edit":
                if ( params.shipment_id ) {
                    setModal( <ShipmentFormModal visibilityHandler={handleModalChange} shipmentId={parseInt( params.shipment_id )} /> );
                }
                break;
            case "add":
                setModal( <ShipmentFormModal visibilityHandler={setModal} /> );
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params ] );

    const result = useGetShipmentsQuery();

    const [ deleteShipment, deleteShipmentResult ] = useDeleteShipmentMutation( {
        refetchQueries: [
            { query: GetShipmentsDocument }
        ]
    } );

    React.useEffect( () => {
        console.log( "updating shipment objects from result.data" );
        if ( result.data ) {
            console.log( "updating shipment objects from result.data" );
            setShipments( Shipment.ItemsFactory( result.data.shipment ) );
        }
    }, [ result.data ] );

    React.useEffect( () => {
        if ( deleteShipmentResult.error ){
            message.error( `Error deleting shipment: \n${deleteShipmentResult.error}` );
        } else if ( deleteShipmentResult.data ) {
            message.info( `Successfully deleted shipment.` );
        }
    }, [ deleteShipmentResult ] );

    const columns: ColumnProps<Extract<GetShipmentsQuery, 'Shipment'>>[] = [
        ...Shipment.Columns,
        ...[
            {
                title: 'Action',
                key: 'action',
                // dataIndex: '',
                render: ( text, record ) => (
                    <span>
                        <Link to={`/shipment/${ record.id }/edit`}><EditOutlined className="IconButton" /></Link>
                        <Divider type="vertical" />
                        <a><DeleteOutlined className="IconButton" onClick={ ( ) => {
                            deleteShipment( {variables: {id: record.id }} );
                        }}/></a>
                    </span >
                ),
            }
        ]
    ];

    // const handleTableChange = ( pagination: TablePaginationConfig, filters, sorter ) => {
    //     const pager = state.pagination;
    //     if ( pager ) {
    //         pager.current = pagination.current;
    //     }
    //     setState( {
    //         ...state,
    //         pagination: pager ? pager : pagination,
    //     } );
    // };

    function onChange ( pagination, filters, sorter ) {
        console.log( 'params', pagination, filters, sorter );
    }

    if ( result.error ) return <span>Error</span>;
    console.log( "data is", result.data, '\nshipments:', shipments, '\ncolumns are', columns, '\nmodal is:', modal );
    return (
        <div>
            {modal}
            <Table
                className="FullPageTable"
                columns={columns}
                dataSource={shipments}
                rowKey={shipment => shipment.id.toString()}
                pagination={state.pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};
