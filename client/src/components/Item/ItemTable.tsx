import { Table, Divider, message, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import {
    GetItemsQueryVariables, GetItemsQuery, GetItemsDocument, useDeleteItemMutation,
} from '~item/Item.ops';
import { LabelDrawModal } from '../Draw/LabelDrawModal';
import { Item } from '~lib/Item';

import { useLazyQuery } from '@apollo/client/react';
import { EditOutlined, PrinterOutlined, DeleteOutlined, TagOutlined } from '@ant-design/icons';
import { ItemTableMouseOver } from './ItemTableMouseOver';
import { ItemFormModal } from './ItemFormModal';
import { useParams, Link, useHistory } from 'react-router-dom';
import { SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import { computeDefaultPagination } from '~lib/UtilityFunctions';


type ItemTableProps<T, Q extends typeof GetItemsDocument> = {
    data?: T[];
    query: Q; // QueryResultTypePlus
    variables: GetItemsQueryVariables;
} | {
    data: T[];
    query?: Q; // QueryResultTypePlus
    variables?: GetItemsQueryVariables;
};

interface IItemTableParams {
    /** item_id is Int as string */
    item_id: string;
    action: "edit";
}

/**
 * Set to a React Modal Component or  
 * Set to `null` to remove the modal from the screen.
 */
export type visibleHandler = ( c?: React.ReactElement ) => void;




export const ItemTable = <T extends Item<any>, Q extends typeof GetItemsDocument> ( props: ItemTableProps<T, Q> & { children?: React.ReactNode; } ) => {
    // let result: QueryResult<GetItemsQuery, GetItemsQueryVariables>;

    // let location = useLocation();
    let params = useParams<IItemTableParams>();

    // console.log( { location, cls: 'ItemTable', params});

    // return <ItemSearch />;

    const [ data, setData ] = useState( props.data );
    // const [ clickedItem, setClickedItem ] = useState<T>();
    const [ currentRecord, setCurrentRecord ] = useState<T>();
    let currentRecordRef = React.useRef<T>();
    const history = useHistory();


    const [ mouseOverVisible, setMouseOverVisible ] = useState<boolean>( false );
    const mouseOverRef = React.useRef<HTMLDivElement>();
    const [ modal, setModal ] = useState<React.ReactElement>();

    const [ deleteItemMutation, {
        data: deleteItemMutationData,
        loading: deleteItemMutationLoading,
        error: deleteItemMutationError
    } ] = useDeleteItemMutation();

    const [ getItemsQuery, result ] = useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(
        props.query,
        {
            variables: props.variables
        }
    );
    let loading = result?.loading ?? false;

    useEffect( () => {
        switch ( params.action ) {
            case "edit":
                if ( params.item_id && !currentRecord ) {
                    Item.ItemFactory( { id: parseInt( params.item_id ) } )
                        .then( item => {
                            console.info( "loaded item from ItemFactory", item );
                            setModal( getRecordEditModal( item as T ) );
                            setCurrentRecord( item as T );
                        } )
                        .catch( () => console.log( "error" ) );
                } else if ( currentRecord ) {
                    console.log( { _cls: "ItemTable", method: 'useEffect for currentRecord & params.action', currentRecord, msg: "run", params_action: params.action } );
                    setModal( getRecordEditModal( currentRecord ) );
                }
                break;
            default:
                setModal( null );
                break;
        }
    }, [ params.item_id, params.action ] );

    useEffect( () => {
        if ( deleteItemMutationError ) {
            message.error( `Failed to delete item: ${ deleteItemMutationError.message }` );
        }
        if ( deleteItemMutationLoading ){
            return;
        }
        if ( !deleteItemMutationLoading && deleteItemMutationData ) {
            message.success( `Deletion of item # ${ deleteItemMutationData.delete_item_by_pk.id } was successful` );
        }
    } );

    useEffect( () => {
        if ( !props.data ) {
            let variables = props.variables;
            if ( !variables.categories || variables.categories.length === 0 ) {
                variables.categories = null;
            }
            console.log( { cls: 'ItemTable', action: "!props.data", result }, '\ndata:', result?.data );
            getItemsQuery( { variables: props.variables } );
        } else {
            console.debug( `data received in props ${ props.data } not running GraphQL` );
        }
    }, [] );

    useEffect( () => {
        console.log( { cls: 'ItemTable', action: "!props.data useEffect", result }, "\ndata:", result?.data );
        if ( result === undefined ) {
            return;
        }
        if ( result.loading ) {
            loading = true;
            return;
        }
        if ( result.error ) {
            message.error( result.error );
            return;
        }
        if ( result.data ) {
            setData( Item.ItemsFactory( result.data.items ) as T[] );
            if ( result.data.items.length > 0 ) {
                message.info( `loaded data, found ${ result.data.items.length } items` );
            } else {
                message.warning( `No Items found matching your filters` );
            }
        }
    }, [ result ] );

    const getRecordEditModal = ( record: Item<any> ): React.ReactElement => {
        return <ItemFormModal
            item={record}
            // item={currentRecord.current}
            visibleHandler={() => history.goBack()}
            recordEditComponent={record.editComponent}
            mutationHandler={record.editHandler}
        />;
    };

    const getLabelDrawModal = ( record: T ): React.ReactElement => {
        return <LabelDrawModal
            item={record}
            label={record.labelTemplate.label}
            visibleHandler={( x ) => {
                getItemsQuery( { variables: props.variables } );
                setModal( x );
            }} />;
    };

    const getColumns = (): ColumnProps<T>[] => {
        let columns: { [ key: string ]: ColumnProps<T>; } = {};
        if ( data && data.length ) {
            data.forEach( d => {
                // console.log( { class: 'ItemTable', method: 'getColumns', d, d_Columns: d.Columns } );
                d.Columns.forEach( c => columns[ c.key ] = c );
            } );
        }
        return [
            {
                key: 'icon',
                title: '',
                responsive: [ 'xl' ],
                render: ( _, record: T ) => {
                    // console.log( { q: 'render icon ?', record, icon: record.icon } ); 
                    return ( record.icon === null ? null : < record.icon /> );
                }
            },
            ...Object.values( columns ?? Item.Columns ),
            ...[
                {
                    title: 'Action',
                    key: 'action',
                    // dataIndex: '',
                    // TODO: see `responsive` which lets define breakpoints at which to display column
                    className: 'action_no_mouseover',

                    render: ( _: string, record: T ) => (
                        <span onMouseOver={event => event.preventDefault()}>
                            <Link to={`/item/${ record.id }/edit`}>
                                <EditOutlined className="IconButton" />
                            </Link>

                            <Divider type="vertical" />

                            <a onClick={( obj ) => {
                                obj.preventDefault();
                                setCurrentRecord( record );
                                setModal( getLabelDrawModal( record ) );
                            }
                            }><TagOutlined className="IconButton" /></a>

                            <Divider type="vertical" />

                            {/* TODO */}
                            <a onClick={( obj ) => {
                                obj.preventDefault();
                                // TODO: this should add row to print list
                            }
                            }><PrinterOutlined className="IconButton" /></a>

                            <Divider type="vertical" />
                            <a onClick={( obj ) => {
                                obj.preventDefault();
                                deleteItemMutation( {
                                    variables: {
                                        id: record.id
                                    },
                                    refetchQueries: [
                                        { query: GetItemsDocument }
                                    ]
                                } );
                            }
                            }>
                                <DeleteOutlined className="IconButton" />
                            </a>
                        </span >
                    ),
                }
            ]
        ];
    };

    // const handleTableChange = ( pagination, filters, sorter ) => {
    //     const pager = { ...state.pagination };
    //     pager.current = pagination.current;
    //     setState( {
    //         pagination: pager,
    //     } );
    // };

    const onChange = ( pagination: TablePaginationConfig, filters: Record<string, React.ReactText[]>, sorter: SorterResult<T> | SorterResult<T>[], extra: TableCurrentDataSource<T> ) => {
        console.log( { action: 'onChange params', pagination, filters, sorter, extra } );
    };
    // const setMouseOverRef: React.LegacyRef<HTMLDivElement> = ( ref ) => {
    //     console.log({method: 'setMouseOverRef'})
    //     setMouseOver({visible: mouseOver.visible, ref: ref});
    // }



    return (
        <div
            onMouseLeave={() => {
                // console.log( { 'class of target_TOP_DIV': ( event.target as HTMLTableDataCellElement ).className.toString(), eventType: 'onMouseOut', event, currentTarget: event.currentTarget, target: event.target } );
                setMouseOverVisible( false );

                // currentRecord = { current: null };
                setCurrentRecord( null );
            }} >
            {/* Modal */}
            {modal}
            {/* Hover / OnMouseOver */}
            <ItemTableMouseOver forwardRef={mouseOverRef} visible={mouseOverVisible}>
                {currentRecord && currentRecord ? <currentRecord.mouseOverRowComponent /> : <Spin spinning={true} />}
            </ItemTableMouseOver>

            {/* <div ref={testRef} style={{backgroundColor: 'red', width: 500, height: 500, position: 'absolute', zIndex: 5}}> ERIC WAS HERE </div> */}

            {/* {console.log( "Table has data:\n", data )} */}
            <div
                // onMouseLeave={event => {
                //     console.log( { 'class of target_INNER_DIV': ( event.target as HTMLTableDataCellElement ).className.toString(), eventType: 'onMouseOut', event, currentTarget: event.currentTarget, target: event.target })
                //     setMouseOver( { visible: false, position: [ null, null ] } );
                //     setCurrentRecord( null );
                // }} >
                onMouseOver={event => {
                    // console.log( { 
                    //     'class of target_INNER_DIV': ( event.target as HTMLTableDataCellElement ).className.toString(), 
                    //     eventType: 'onMouseOver', 
                    //     event, 
                    //     screen: { x: event.screenX, y: event.screenY },
                    //     client: { x: event.clientX, y: event.clientY },
                    //     screen_size: screen.width, // shows the actual monitor size
                    //     innerWidth: window.innerWidth,
                    //     elementWidth: mouseOverRef.current.offsetWidth,
                    //     // event_json: JSON.stringify(event),
                    //     currentTarget: event.currentTarget, 
                    //     target: event.target });
                    if ( ( event.target as HTMLTableDataCellElement ).className.toString() !== "ant-table-cell" ) {
                        setMouseOverVisible( false );
                        return;
                    }
                    if ( currentRecord && currentRecord && !mouseOverVisible ) {
                        setMouseOverVisible( true );
                    }
                    if ( mouseOverRef && mouseOverRef.current ) {
                        let newX: number = event.pageX + 3;
                        let newY: number = event.pageY + 3;
                        if ( newX > mouseOverRef.current.offsetWidth - 3 ) {
                            newX = newX - mouseOverRef.current.offsetWidth - 3;
                        }
                        if ( newY > mouseOverRef.current.offsetHeight - 3 ) {
                            newY = newY - mouseOverRef.current.offsetHeight - 3;
                        }
                        mouseOverRef.current.style.left = `${ newX.toString() }px`;
                        mouseOverRef.current.style.top = `${ newY.toString() }px`;
                    }
                }}
            >
                <Table
                    className="ItemTable"
                    columns={getColumns()}
                    dataSource={data}
                    rowKey={item => item.id.toString()}
                    onRow={( record ) => {
                        return {
                            onMouseOver: () => {
                                // let {
                                //     target,
                                //     // relatedtarget,
                                //     view,
                                //     type,
                                //     currentTarget,
                                //     nativeEvent,
                                //     isTrusted,
                                //     // isProgagationStopped,
                                //     isDefaultPrevented,
                                //     eventPhase,
                                //     detail,
                                //     defaultPrevented,
                                //     cancelable,
                                //     bubbles } = event;
                                // console.log( {
                                //     'class of target': ( target as HTMLTableDataCellElement ).className,
                                //     'class of target eval': ( target as HTMLTableDataCellElement ).className.toString() === "ant-table-cell",
                                //     target,
                                //     view,
                                //     type,
                                //     currentTarget,
                                //     nativeEvent,
                                //     isTrusted,
                                //     isDefaultPrevented,
                                //     eventPhase,
                                //     detail,
                                //     defaultPrevented,
                                //     cancelable,
                                //     bubbles
                                // } );

                                // if ( event.target.class === "antd-table-cell" )
                                // setMouseOver( { visible: mouseOver.visible, position: [ event.pageX, event.pageY ] } );

                                // console.log( currentRecordRef.current );
                                if ( currentRecordRef.current != record ) {
                                    setCurrentRecord( record );
                                    // console.log( "setting currentRecordRef" );
                                    // currentRecordRef = {current: record};
                                }
                            }
                        };
                    }}
                    pagination={{ hideOnSinglePage: true, defaultPageSize: computeDefaultPagination() }}
                    loading={loading}
                    onChange={onChange}
                >
                </Table>
            </div>
        </div>
    );
};

