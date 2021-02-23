import { Table, Divider, message } from 'antd';
import * as React from 'react';
import { ManufacturerSelectColumn, Manufacturer as ManufacturerGql, useGetManufacturersQuery, GetManufacturersQuery, useDeleteManufacturerMutation, GetManufacturerDocument, GetManufacturersDocument } from '~lib/types/graphql';
import { Item } from '~lib/Item';
import { toTitleCase, computeDefaultPagination, Unpacked } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ManufacturerFormModal } from './ManufacturerFormModal';
import { Manufacturer } from '~lib/Manufacturer/Manufacturer';
import { useState } from 'react';
import { SorterResult } from 'antd/lib/table/interface';
// import { history }



interface ManufacturerTableProps {
    class?: string;
}

interface ManufacturerTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord: Manufacturer;
}

interface IManufacturerTableParams {
    /** item_id is Int as string */
    manufacturer_id: string;
    action: "edit" | 'add';
}

type ManufacturerQueryResultT = GetManufacturersQuery['manufacturer'];


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

    const handleModalChange = ( modal: React.ReactElement ) => {
        if (modal === null ){
            history.push('/manufacturer');
        }
        setModal(modal);
    }

    React.useEffect( () => {
        console.log({position: 'React.useEffect', manufacturer_id: params.manufacturer_id, action: params.action});
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
            console.log("updating manufacturer objects from result.data");
            setManufacturers( Manufacturer.ItemsFactory( result.data.manufacturer ) );
        }
    }, [ result.data ] );

    React.useEffect( () => {
        if ( deleteManufacturerResult.error ){
            message.error( `Error deleting manufacturer: \n${deleteManufacturerResult.error}`);
        } else if ( deleteManufacturerResult.data ) {
            message.info( `Successfully deleted manufacturer.`);
        }
    }, [ deleteManufacturerResult ] );

    const columns: ColumnProps<Unpacked<ManufacturerQueryResultT>>[] = [
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
                            deleteManufacturer({variables: {id: record.id }});
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

    function onChange ( pagination: TablePaginationConfig, filters: Record<string, (string | number | boolean)[] | null>, sorter: SorterResult<Manufacturer> ): void {
        console.log( 'params', pagination, filters, sorter );
    }

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