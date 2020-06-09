import { Table, Divider } from 'antd';
import * as React from 'react';
import { VendorSelectColumn, Vendor as VendorGql, useGetVendorsQuery, GetVendorsQuery } from '../../lib/types/graphql';
import { Item } from '../../lib/item';
import { toTitleCase, computeDefaultPagination } from '../../lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { VendorFormModal } from './VendorFormModal';
import { Vendor } from '../../lib/Vendor/Vendor';



interface VendorTableProps {
    class?: string;
}

interface VendorTableState {
    data?: Item<any>[];
    pagination: false | TablePaginationConfig;
    loading: boolean;
    clickedRecord: Vendor;
    modal: React.ReactElement;
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
        modal: null
    } );
    let params = useParams<IVendorTableParams>();

    React.useEffect( () => {
        switch ( params.action ) {
            case "edit":
                if ( params.vendor_id ) {
                    setModal( <VendorFormModal vendorId={parseInt( params.vendor_id )} /> );
                }
                break;
            case "add":
                if ( params.vendor_id ) {
                    setModal( <VendorFormModal /> );
                }
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params.vendor_id, params.action ] );

    const result = useGetVendorsQuery();


    const columns: ColumnProps<Extract<GetVendorsQuery, 'Vendor'>>[] = [
        ...Vendor.Columns,
        ...[
            {
                title: 'Action',
                key: 'action',
                // dataIndex: '',
                render: ( text, record ) => (
                    <span>
                        <Link to={`/Vendor/${ record.id }/edit`}><EditOutlined className="IconButton" /></Link>
                        <Divider type="vertical" />
                        {/* TODO */}
                        <a><DeleteOutlined className="IconButton" /></a>
                    </span >
                ),
            }
        ]
    ];

    const setModal = ( modal: React.ReactElement, clickedRecord?: Vendor ) => {
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
                dataSource={result.data ? result.data.Vendor : []}
                rowKey={Vendor => Vendor.id.toString()}
                pagination={state.pagination}
                loading={result.loading}
                onChange={onChange}
            />
        </div>
    );
};
