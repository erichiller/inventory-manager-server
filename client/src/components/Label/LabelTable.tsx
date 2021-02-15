import { Table, Divider, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { useGetLabelsQuery, LabelSelectColumn, Label, GetLabelsQuery, useDeleteLabelMutation, GetLabelsDocument } from '~lib/types/graphql';
import { LabelDrawModal } from '~components/Draw/LabelDrawModal';
import { toTitleCase, computeDefaultPagination, Unpacked, ObjectColumnProperty, sortByCaseInsensitiveText, sortByDate, sortByDateString } from '~lib/UtilityFunctions';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import { Link, useParams, useHistory } from 'react-router-dom';
import { LabelExport } from '~lib/Label/LabelExport';
import { DeleteOutlined, EditOutlined, PrinterOutlined } from '@ant-design/icons';



interface LabelTableProps {
    // data: any
    class?: string;
}


interface ILabelTableParams {
    label_id: string;
    action: "edit" | 'create';
}

export const LabelTable: React.FC<LabelTableProps> = ( props ) => {
    const [ pagination, setPagination ] = React.useState<false | TablePaginationConfig>( {

        hideOnSinglePage: true, defaultPageSize: computeDefaultPagination()
    } );


    const history = useHistory();
    let params = useParams<ILabelTableParams>();
    const [ modal, setModal ] = useState<React.ReactElement>();


    const [ deleteLabelMutation, {
        data: deleteLabelMutationData,
        loading: deleteLabelMutationLoading,
        error: deleteLabelMutationError
    } ] = useDeleteLabelMutation();

    const { data, loading, error } = useGetLabelsQuery();

    const handleModalChange = ( modal: React.ReactElement ) => {
        if ( modal === null ) {
            history.push( '/label' );
        }
        setModal( modal );
    };

    useEffect( () => {
        switch ( params.action ) {
            case "edit":
                if ( params.label_id && data ) {
                    setModal( <LabelDrawModal
                        label={new LabelExport( data.label.find( label => label.id === params.label_id ) )}
                        visibleHandler={handleModalChange} />
                    );
                }
                break;
            case "create":
                setModal( <LabelDrawModal
                    label={new LabelExport()}
                    visibleHandler={handleModalChange} />
                );
                break;
            default:
                setModal( null );
                break;
        }
    }, [ data, params.label_id, params.action ] );

    useEffect( () => {
        if ( deleteLabelMutationError ) {
            message.error( `Failed to delete label: ${ deleteLabelMutationError.message }` );
        }
        if ( deleteLabelMutationLoading ) {
            return;
        }
        if ( !deleteLabelMutationLoading && deleteLabelMutationData ) {
            message.success( `Deletion of label id ${ deleteLabelMutationData.delete_label_by_pk.id } was successful` );
        }
    }, [ deleteLabelMutationError, deleteLabelMutationData, deleteLabelMutationLoading ] );

    const columnsOrdered: ObjectColumnProperty<Unpacked<GetLabelsQuery[ 'label' ]>>[] = [
        "id",
        "title",
        'created_at',
        'updated_at',
        'height',
        'width',
        'content',
        'item'
    ];

    const columns: ColumnProps<Unpacked<GetLabelsQuery[ 'label' ]>>[] = [
        {
            key: 'id',
            title: 'ID',
            render: ( text, record ) => <div style={{ 
                width: '12vw', 
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
             }}>{record.id}</div>,
        },
        {
            key: 'title',
            title: 'Title',
            dataIndex: 'title',
            sorter: sortByCaseInsensitiveText( 'title' )
        },
        {
            key: 'created_at',
            title: 'Created',
            render: ( _, record ) => new Date( record.created_at ).toLocaleString( 'en-US' ),
            sorter: sortByDateString( 'created_at' )
        },
        {
            key: 'updated_at',
            title: 'Updated',
            render: ( _, record ) => new Date( record.updated_at ).toLocaleString( 'en-US' ),
            sorter: sortByDateString( 'updated_at' )
        },
        {
            key: 'height',
            title: 'Height',
            render: ( _, record ) => record.height + "px"
        },
        {
            key: 'width',
            title: 'Width',
            render: ( _, record ) => record.width + "px"
        },
        { // Needs a canvas to render onto
            key: 'content',
            title: '',
            // render: ( _, record ) => new LabelExport(record).thumbnail
        },
        { // TODO: must use label_items_map and remove item_id column from label
            key: 'items',
            title: 'Items',
            render: ( _, record ) => record.item ? record.item.class + "/" + record.item.id : ""
        },
        {
            title: 'Action',
            key: 'action',
            // dataIndex: '',
            render: ( text, record: Label ) => (
                <span onMouseOver={event => event.preventDefault()}>

                    <Link to={`/label/${ record.id }/edit`}>
                        <PrinterOutlined className="IconButton" />
                    </Link>

                    <Divider type="vertical" />

                    <Link to={`/label/${ record.id }/edit`}>
                        <EditOutlined className="IconButton" />
                    </Link>
                    <Divider type="vertical" />
                    <a onClick={( obj ) => {
                        obj.preventDefault();
                        deleteLabelMutation( {
                            variables: {
                                label_id: record.id
                            },
                            refetchQueries: [
                                { query: GetLabelsDocument }
                            ]
                            // } ).then( result => {
                            //     message.info( `Successfully deleted label ID# ${ result.data.delete_label_by_pk.id }` );
                            // } ).catch( error => {
                            //     console.error( "MUTATE ERROR", error, "\nOn Label Object: ", record );
                            //     message.error( `Failure during deletion: ${ error }` );
                            // } ).finally( () => {
                            //     // props.visibleHandler( null );
                        } );
                    }
                    }>
                        <DeleteOutlined className="IconButton" />
                    </a>
                </span >
            ),
        }
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
