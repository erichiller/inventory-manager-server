import { Table, Divider, message, Alert, Popover, Pagination, Modal, Spin } from 'antd';
import React, { useState } from 'react';
import { ColumnProps } from 'antd/es/table';
import {
    // withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, ItemHardwareFastenerBoltSelectColumn, useItemHardwareFastenerBoltQuery, useGetIconQuery, 
    useGetItemsQuery, GetItemQuery, GetItemsQueryVariables, GetItemsQuery,
    // ItemSelectColumn 
} from '../../lib/types/graphql';
import { LabelDrawModal } from '../draw/LabelDrawModal';
import { Item, ItemHardwareFastenerBolt } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { toTitleCase, QueryResultTypePlus } from '../../lib/helpers';

import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { render } from 'react-dom';
import { ItemSearch } from './ItemSearch';
import { GenericItem } from '../../lib/item/Item';
import { EditOutlined, PrinterOutlined, DeleteOutlined, TagOutlined } from '@ant-design/icons';
import { PageSpinGQL } from '../shared/PageSpin';
import { ItemTableMouseOver } from './ItemTableMouseOver';
import { ItemEditModal } from './ItemEditModal';
// import DocumentNode from 'graphql-tag';


interface ItemTableState {
    data?: Item<any>[];
    pagination: pagination;
    loading: boolean;
    clickedItem: Item<any>;
    modal?: React.ReactElement;
}

interface pagination {
    total: number;
    pageSize: number;
    current: number;
}

type ItemTableProps<T, Q extends typeof useGetItemsQuery> = {
    data?: T[];
    query: Q; // QueryResultTypePlus
    variables: GetItemsQueryVariables;
} | {
    data: T[];
    query?: Q; // QueryResultTypePlus
    variables?: GetItemsQueryVariables;
};
// interface ItemTableProps<T> {
//     // collapsed?: boolean;
//     data?: T[];
//     query?
//     // itemClass: T;
//     // displayData?: ( data: T, index: number ) => React.ReactNode;
//     // filter:
//     // loading?: boolean;
// }

export type visibleHandler = ( c?: React.ReactElement ) => void;




export const ItemTable = <T extends Item<any>, Q extends typeof useGetItemsQuery> ( props: ItemTableProps<T, Q> & { children?: React.ReactNode; } ) => {
    let loading = true;
    let result: QueryResult<GetItemsQuery, GetItemsQueryVariables>;

    // return <ItemSearch />;

    const [ data, setData ] = useState( props.data );
    // const [ clickedItem, setClickedItem ] = useState<T>();
    const [ currentRecord, setCurrentRecord ] = useState<T>();
    let currentRecordRef = React.useRef<T>();
    

    const [ mouseOverVisible, setMouseOverVisible ] = useState<boolean>( false );
    const mouseOverRef = React.useRef<HTMLDivElement>();
    const [ modal, setModal ] = useState<React.ReactElement>();

    if ( !props.data ) {
        let variables = props.variables;
        if ( !variables.categories || variables.categories.length === 0 ) {
            variables.categories = null;
        }
        result = props.query( {
            variables: props.variables
        } );
        loading = result.loading;

        React.useEffect( () => {
            if ( result.error ) {
                message.error( result.error );
            }
            if ( result.data ) {
                setData( Item.ItemFactory( result.data.items ) as T[] );
                if ( result.data.items.length > 0 ) {
                    message.info( `loaded data, found ${ result.data.items.length } items` );
                } else {
                    message.warning( `No Items found matching your filters` );
                }
            }
        }, [ result.data, result.error ] );
    } else {
        console.debug( `data received in props ${ props.data } not running GraphQL` );
    }

    const getRecordEditModal = ( record: Item<any> ): React.ReactElement => {
        return <ItemEditModal
            item={currentRecord}
            // item={currentRecord.current}
            visibleHandler={() => setModal( null )}
            recordEditComponent={record.editComponent}
        />;
        // switch ( record.class ) {
        //     // TODO: replace this with an edit modal defined within the Item subclass
        //     case "item_hardware_fastener_bolt":
        //         return <EditHardwareFastenerBolt visibleHandler={setModal} item={record as ItemHardwareFastenerBolt} />;
        //         break;
        // }
    };

    const getLabelDrawModal = ( record: T ): React.ReactElement => {
        return <LabelDrawModal item={record} visibleHandler={setModal} />;
    };

    const getColumns = (): ColumnProps<T>[] => {
        let columns: { [ key: string ]: ColumnProps<T>; } = {};
        if ( data && data.length ) {
            data.forEach( d => {
                console.log( { class: 'ItemTable', method: 'getColumns', d, d_Columns: d.Columns } );
                d.Columns.forEach( c => columns[ c.key ] = c );
            } );
        }
        return [
            {
                key: 'icon',
                title: 'icon',
                render: ( text, record: T ) => { console.log( { q: 'render icon ?', record, icon: record.icon } ); return record.icon; }
            },
            ...Object.values( columns ?? Item.Columns ),
            ...[
                {
                    title: 'Action',
                    key: 'action',
                    // dataIndex: '',
                    className: 'action_no_mouseover',
                    render: ( text, record: T ) => (
                        <span onMouseOver={event => event.preventDefault()}>
                            <a onClick={( obj ) => {
                                obj.preventDefault();
                                setCurrentRecord(record );
                                setModal( getRecordEditModal( record ) );
                            }
                            }><EditOutlined className="IconButton" /></a>

                            <Divider type="vertical" />

                            <a onClick={( obj ) => {
                                obj.preventDefault();
                                // currentRecord = { current: record };
                                setCurrentRecord(record)
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
                            {/* TODO */}
                            <a><DeleteOutlined className="IconButton" /></a>
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

    const onChange = ( pagination, filters, sorter ) => {
        console.log( 'params', pagination, filters, sorter );
    };
    // const setMouseOverRef: React.LegacyRef<HTMLDivElement> = ( ref ) => {
    //     console.log({method: 'setMouseOverRef'})
    //     setMouseOver({visible: mouseOver.visible, ref: ref});
    // }



    return (
        <div
            onMouseLeave={event => {
                console.log( { 'class of target_TOP_DIV': ( event.target as HTMLTableDataCellElement ).className.toString(), eventType: 'onMouseOut', event, currentTarget: event.currentTarget, target: event.target } );
                setMouseOverVisible( false );

                // currentRecord = { current: null };
                setCurrentRecord(null);
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
                        setMouseOverVisible(false);
                        return;
                    }
                    if ( currentRecord && currentRecord && !mouseOverVisible ) {
                        setMouseOverVisible( true );
                    }
                    if ( mouseOverRef && mouseOverRef.current ) {
                        let newX: number = event.pageX + 3;
                        if ( newX > mouseOverRef.current.offsetWidth - 3 ){
                            newX = newX - mouseOverRef.current.offsetWidth - 3; 
                        }
                        mouseOverRef.current.style.left = `${ newX.toString() }px`;
                        mouseOverRef.current.style.top = `${ event.pageY.toString() }px`;
                    }
                }}
            >
                <Table
                    style={{
                        userSelect: 'none'
                    }}
                    columns={getColumns()}
                    dataSource={data}
                    rowKey={item => item.id.toString()}
                    onRow={( record, rowIndex ) => {
                        return {
                            onMouseOver: event => {
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

                                console.log( currentRecordRef.current );
                                if ( currentRecordRef.current != record ){
                                    setCurrentRecord( record);
                                    console.log("setting currentRecordRef");
                                    // currentRecordRef = {current: record};
                                }
                            }
                        };
                    }}
                    pagination={{ hideOnSinglePage: true }}
                    loading={loading}
                    onChange={onChange}
                >
                </Table>
            </div>
        </div>
    );
};

