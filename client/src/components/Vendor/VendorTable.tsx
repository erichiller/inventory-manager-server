import { Table, Divider, message } from 'antd';
import React from 'react';
import { useGetVendorsQuery, GetVendorsQuery, useDeleteVendorMutation, GetVendorsDocument } from "./Vendor.ops";
import { Item } from '~lib/Item';
import { computeDefaultPagination } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { VendorFormModal } from './VendorFormModal';
import { Vendor } from '~lib/Vendor/Vendor';
import { useState } from 'react';



interface VendorTableProps {
    class?: string;
}

interface VendorTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord?: Vendor;
}

interface IVendorTableParams {
    /** item_id is Int as string */
    vendor_id: string;
    action: "edit" | 'add';
}

export const VendorTable: React.FC<VendorTableProps> = ( props ) => {
    const [ state, setState ] = React.useState<VendorTableState>( {
        data: undefined,
        pagination: { hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() },
        loading: false,
        clickedRecord: undefined,
    } );
    let params = useParams<IVendorTableParams>();
    const [ vendors, setVendors ] = useState<Vendor[]>( [] );
    const [ modal, setModal ] = useState<React.ReactElement | null >( null );
    const history = useHistory();

    const handleModalChange = ( modal: React.ReactElement | null ) => {
        if ( modal === null ){
            history.push( '/vendor' );
        }
        setModal( modal );
    };

    React.useEffect( () => {
        console.log( {position: 'React.useEffect', vendor_id: params.vendor_id, action: params.action} );
        switch ( params.action ) {
            case "edit":
                if ( params.vendor_id ) {
                    setModal( <VendorFormModal visibilityHandler={handleModalChange} vendorId={parseInt( params.vendor_id )} /> );
                }
                break;
            case "add":
                setModal( <VendorFormModal visibilityHandler={setModal} /> );
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params ] );

    const result = useGetVendorsQuery();

    const [ deleteVendor, deleteVendorResult ] = useDeleteVendorMutation( {
        refetchQueries: [
            { query: GetVendorsDocument }
        ]
    } );

    React.useEffect( () => {
        console.log( "updating vendor objects from result.data" );
        if ( result.data ) {
            console.log( "updating vendor objects from result.data" );
            setVendors( Vendor.VendorsFactory( result.data.vendor ) );
        }
    }, [ result.data ] );

    React.useEffect( () => {
        if ( deleteVendorResult.error ){
            message.error( `Error deleting vendor: \n${deleteVendorResult.error}` );
        } else if ( deleteVendorResult.data ) {
            message.info( `Successfully deleted vendor.` );
        }
    }, [ deleteVendorResult ] );

    const columns: ColumnProps<Extract<GetVendorsQuery, 'Vendor'>>[] = [
        ...Vendor.Columns,
        ...[
            {
                title: 'Action',
                key: 'action',
                // dataIndex: '',
                render: ( text, record ) => (
                    <span>
                        <Link to={`/vendor/${ record.id }/edit`}><EditOutlined className="IconButton" /></Link>
                        <Divider type="vertical" />
                        <a><DeleteOutlined className="IconButton" onClick={ ( ) => {
                            deleteVendor( {variables: {id: record.id }} );
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
    console.log( "data is", result.data, '\nvendors:', vendors, '\ncolumns are', columns, '\nmodal is:', modal );
    return (
        <div>
            {modal}
            <Table
                columns={columns}
                dataSource={vendors}
                rowKey={vendor => vendor.id.toString()}
                pagination={state.pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};

export default VendorTable;