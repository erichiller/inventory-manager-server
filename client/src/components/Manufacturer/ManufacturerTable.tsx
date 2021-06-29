import { Table, Divider, message } from 'antd';
import React from 'react';
import { useGetManufacturersQuery, useDeleteManufacturerMutation, GetManufacturersDocument } from './Manufacturer.ops';
import { Item } from '~lib/Item';
import { computeDefaultPagination } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig, TableProps } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ManufacturerFormModal } from './ManufacturerFormModal';
import { Manufacturer } from '~lib/Manufacturer/Manufacturer';
import { useState } from 'react';



interface ManufacturerTableProps {
    class?: string;
}

interface ManufacturerTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord?: Manufacturer;
}

interface IManufacturerTableParams {
    /** item_id is Int as string */
    manufacturer_id: string;
    action: "edit" | 'add';
}

export const ManufacturerTable: React.FC<ManufacturerTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<ManufacturerTableState>( {
        data: undefined,
        pagination: { hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() },
        loading: false,
        clickedRecord: undefined,
    } );
    let params = useParams<IManufacturerTableParams>();
    const [ manufacturers, setManufacturers ] = useState<Manufacturer[]>( [] );
    const [ modal, setModal ] = useState<React.ReactElement | null>( null );
    const history = useHistory();

    const handleModalChange = ( modal: React.ReactElement | null ) => {
        if ( modal === null ){
            history.push( '/manufacturer' );
        }
        setModal( modal );
    };

    React.useEffect( () => {
        console.log( {position: 'React.useEffect', manufacturer_id: params.manufacturer_id, action: params.action} );
        switch ( params.action ) {
            case "edit":
                if ( params.manufacturer_id ) {
                    setModal( <ManufacturerFormModal visibilityHandler={handleModalChange} manufacturerId={parseInt( params.manufacturer_id )} /> );
                }
                break;
            case "add":
                setModal( <ManufacturerFormModal visibilityHandler={setModal} /> );
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params ] );

    const result = useGetManufacturersQuery();

    const [ deleteManufacturer, deleteManufacturerResult ] = useDeleteManufacturerMutation( {
        refetchQueries: [
            { query: GetManufacturersDocument }
        ]
    } );

    React.useEffect( () => {
        console.log( "updating manufacturer objects from result.data" );
        if ( result.data ) {
            console.log( "updating manufacturer objects from result.data" );
            setManufacturers( Manufacturer.ItemsFactory( result.data.manufacturer ) );
        }
    }, [ result.data ] );

    React.useEffect( () => {
        if ( deleteManufacturerResult.error ){
            message.error( `Error deleting manufacturer: \n${deleteManufacturerResult.error}` );
        } else if ( deleteManufacturerResult.data ) {
            message.info( `Successfully deleted manufacturer.` );
        }
    }, [ deleteManufacturerResult ] );

    const columns: ColumnProps<Manufacturer>[] = [
        ...Manufacturer.Columns,
        ...[
            {
                title: 'Action',
                key: 'action',
                // dataIndex: '',
                render: ( text, record ) => (
                    <span>
                        <Link to={`/manufacturer/${ record.id }/edit`}><EditOutlined className="IconButton" /></Link>
                        <Divider type="vertical" />
                        <a><DeleteOutlined className="IconButton" onClick={ ( ) => {
                            deleteManufacturer( {variables: {id: record.id }} );
                        }}/></a>
                    </span >
                ),
            } as ColumnProps<Manufacturer>
        ]
    ];

    const onChange: TableProps<Manufacturer>['onChange'] = ( pagination, filters, sorter ): void => {
        console.log( 'params', pagination, filters, sorter );
    };

    if ( result.error ) return <span>Error</span>;
    console.log( "data is", result.data, '\nmanufacturers:', manufacturers, '\ncolumns are', columns, '\nmodal is:', modal );
    return (
        <div>
            {modal}
            <Table
                className="FullPageTable"
                columns={columns}
                dataSource={manufacturers}
                rowKey={manufacturer => manufacturer.id.toString()}
                pagination={state.pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};

export default ManufacturerTable;