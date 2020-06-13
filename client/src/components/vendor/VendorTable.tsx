import { Table, Divider, message } from 'antd';
import * as React from 'react';
import { VendorSelectColumn, Vendor as VendorGql, useGetVendorsQuery, GetVendorsQuery, useDeleteVendorMutation, GetVendorDocument, GetVendorsDocument } from '../../lib/types/graphql';
import { Item } from '../../lib/item';
import { toTitleCase, computeDefaultPagination } from '../../lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { VendorFormModal } from './VendorFormModal';
import { Vendor } from '../../lib/Vendor/Vendor';
import { useState } from 'react';



interface VendorTableProps {
    class?: string;
}

interface VendorTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord: Vendor;
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
    const [ modal, setModal ] = useState<React.ReactElement>(null);
    let params = useParams<IVendorTableParams>();
    const [ vendors, setVendors ] = useState< Vendor[] >( [] );

    React.useEffect( () => {
        console.log({'position': 'React.useEffect', vendor_id: params.vendor_id, action: params.action});
        switch ( params.action ) {
            case "edit":
                if ( params.vendor_id ) {
                    setModal( <VendorFormModal visibilityHandler={setModal} vendorId={parseInt( params.vendor_id )} /> );
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
// }, [ params.vendor_id, params.action ] );

    const result = useGetVendorsQuery();

    const [ deleteVendor, deleteVendorResult ] = useDeleteVendorMutation( {
        refetchQueries: [
            { query: GetVendorsDocument }
        ]
    } );

    React.useEffect( () => {
        console.log( "updating vendor objects from result.data" );
        if ( result.data ) {
            console.log("updating vendor objects from result.data");
            setVendors( Vendor.ItemsFactory( result.data.vendor ) );
        }
    }, [ result.data ] );

    React.useEffect( () => {
        if ( deleteVendorResult.error ){
            message.error( `Error deleting vendor: \n${deleteVendorResult.error}`);
        } else if ( deleteVendorResult.data ) {
            message.info( `Successfully deleted vendor.`);
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
                        {/* TODO */}
                        <a><DeleteOutlined className="IconButton" onClick={ ( ) => {
                            deleteVendor({variables: {id: record.id }});
                        }
                        }/></a>
                    </span >
                ),
            }
        ]
    ];

    // const setModal = ( modal: React.ReactElement, clickedRecord?: Vendor ) => {
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
