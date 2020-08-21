import { Table, Divider } from 'antd';
import * as React from 'react';
import { useGetLabelsQuery, LabelSelectColumn, Label, GetLabelsQuery } from '~lib/types/graphql';
import { LabelDrawModal } from '~components/Draw/LabelDrawModal';
import { Item } from '~lib/Item';
import { toTitleCase, computeDefaultPagination } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { useState } from 'react';



interface LabelTableProps {
    // data: any
    class?: string;
}



export const LabelTable: React.FC<LabelTableProps> = ( props ) => {
    const [ pagination, setPagination ] = React.useState < false | TablePaginationConfig>( {

        hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() } );


    const [ modal, setModal ] = useState<React.ReactElement>();

    const { data, loading, error } = useGetLabelsQuery();
    // const result = useGetLabelsQuery();


    const columns: ColumnProps<Extract<GetLabelsQuery, 'label'>>[] = [
        ...( Object.keys( LabelSelectColumn ).filter(
            key => [ "ID" ].includes( key ) ? false : key ).map(
                key => {
                    return {
                        key: key,
                        title: toTitleCase( key ),
                        dataIndex: LabelSelectColumn[ key ],
                    };
                } ) ),
        ...[
            {
                title: 'Action',
                key: 'action',
                // dataIndex: '',
                render: ( text, record: Label ) => (
                    <span>
                        <a onClick={( obj ) => {
                            obj.preventDefault();
                            // setState({
                            //   clickedItem: record,
                            //   // printModal: display.VISIBLE
                            // })
                            setModal( <LabelDrawModal
                                label={record}
                                visibleHandler={setModal} />
                                );
                        }
                        }> Print</a>
                        <Divider type="vertical" />
                        <a>Edit</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                    </span >
                ),
            }
        ]
    ];

    // viewPrintModal = ( change?: DISPLAY, clickedLabel?: Label ) => {
    //     console.log( "viewPrintModal () ? received", change );
    //     if ( change !== undefined && change != state.printModal ) {
    //         setState( {
    //             printModal: change,
    //             clickedLabel: clickedLabel
    //         } );
    //         console.log( "viewPrintModal () ? change detected; returning:", change == DISPLAY.VISIBLE );
    //         return change == DISPLAY.VISIBLE;
    //     }
    //     console.log( "viewPrintModal () ? NO change detected; returning:", state.printModal == DISPLAY.VISIBLE );
    //     return state.printModal == DISPLAY.VISIBLE;
    // }


    // const setModal = ( modal: React.ReactElement, clickedLabel?: Label ) => {
    //     console.log( "viewPrintModal () ? received", modal, clickedLabel );
    //     if ( !modal ) {
    //         setState( {
    //             ...state,
    //             clickedLabel: clickedLabel,
    //             modal: null
    //         } );
    //         console.log( "viewPrintModal(null) removing modal" );
    //         return;
    //     }
    //     setState( {
    //         ...state,
    //         modal: modal,
    //         clickedLabel: clickedLabel
    //     } );
    //     console.log( "viewPrintModal () ? provided new modal" );
    //     return;
    // };


    const handleTableChange = ( pagination, filters, sorter ) => {
        const pager = { ...pagination };
        pager.current = pagination.current;
        // setState( {
        //     ...state,
        //     pagination: pager,
        // } );
    };

    function onChange ( pagination, filters, sorter ) {
        console.log( 'params', pagination, filters, sorter );
    };

    if ( error ) return <span>Error</span>;
    console.log( "data is", data, data ? data.label : [] );
    return (
        <div>
            xxxx
            {modal}
            <Table
                columns={columns}
                dataSource={data ? data.label : []}
                rowKey={label => label.id.toString()}
                pagination={pagination}
                loading={loading}
                onChange={onChange}
            />
        </div>
    );
};
