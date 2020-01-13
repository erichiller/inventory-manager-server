import { Table, Divider } from 'antd';
import React = require( 'react' );
import { ColumnProps } from 'antd/es/table';
import { ItemHardwareFastenerBolt, withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, ItemHardwareFastenerBoltSelectColumn, Item } from '../../types/graphql';
import { LabelDrawModal } from '../draw/LabelDrawModal';
import { GenericItem } from '../../types/Generics';
import { DISPLAY } from '../../types/enums';
import { toTitleCase } from '../../lib/helpers';
import { EditHardwareFastenerBolt } from './edit/EditHardwareFastenerBolt';

interface ItemTableProps {
    // data: any
    class?: string;
}

interface ItemTableState {
    data?: GenericItem[];
    pagination: pagination;
    loading: boolean;
    clickedItem: GenericItem;
    modal?: React.ReactElement;
}

interface pagination {
    total: number;
    pageSize: number;
    current: number;
}

export type visibleHandler = ( c?: React.ReactElement ) => void;

export default withItemHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemHardwareFastenerBoltProps<ItemTableProps>, ItemTableState> {
        state: ItemTableState = {
            data: undefined,
            pagination: { total: 0, pageSize: 100, current: 0 },
            loading: false,
            clickedItem: undefined,
            modal: null
        };

        componentDidMount () {
            // this.loadData()

        }
        get PrintModal(): React.ReactElement {
            return <LabelDrawModal
                item={this.state.clickedItem}
                visible={DISPLAY.VISIBLE}
                visibleHandler={this.setModal} />;
        }

        getRecordEditModal(record: GenericItem): React.ReactElement {

            switch ( record.class ){
                case "item_hardware_fastener_bolt":
                    return <EditHardwareFastenerBolt visibleHandler={this.setModal} item={record as ItemHardwareFastenerBolt} />;
                    break;

            }
        }


        get Columns (): ColumnProps<ItemHardwareFastenerBolt>[] {
            return [
                ...( Object.keys( ItemHardwareFastenerBoltSelectColumn ).filter(
                    key => [ "ID" ].includes( key ) ? false : key ).map(
                        key => {
                            return {
                                key: key,
                                title: toTitleCase( key ),
                                dataIndex: ItemHardwareFastenerBoltSelectColumn[ key ],
                            };
                        } ) ),
                ...[
                    {
                        title: 'Action',
                        key: 'action',
                        // dataIndex: '',
                        render: ( text, record ) => (
                            <span>
                                <a onClick={( obj ) => {
                                    this.setModal( this.PrintModal, record );
                                }
                                }> Print</a>
                                <Divider type="vertical" />
                                <a onClick={( obj ) => {
                                    this.setModal( this.getRecordEditModal(record), record );
                                }
                                }> Print</a>
                <Divider type="vertical" />
                <a>Delete</a>
                            </span >
                        ),
                    }
                ]
            ];
        }



        setModal = ( modal: React.ReactElement, clickedItem?: Item ) => {
            console.log( "viewPrintModal () ? received", modal, clickedItem );
            if ( ! modal ){
                this.setState({
                    clickedItem: clickedItem,
                    modal: null
                });
                console.log( "viewPrintModal(null) removing modal");
                return;
            }
            this.setState( {
                modal: modal,
                clickedItem: clickedItem
            } );
            console.log( "viewPrintModal () ? provided new modal" );
            return;
        };

        handleTableChange = ( pagination, filters, sorter ) => {
            const pager = { ...this.state.pagination };
            pager.current = pagination.current;
            this.setState( {
                pagination: pager,
            } );
        };

        onChange ( pagination, filters, sorter ) {
            console.log( 'params', pagination, filters, sorter );
        }

        render () {

            const { data } = this.props;
            let { loading, error } = this.props.data!;
            if ( error ) return <span>Error</span>;
            console.log( "data is", data );
            return (
                <div>
                    {this.state.modal}

                    <Table
                        columns={this.Columns}
                        dataSource={data.items}
                        rowKey={item => item.id.toString()}
                        pagination={this.state.pagination}
                        loading={loading}
                        onChange={this.onChange}
                    >
                    </Table>
                </div>
            );
        }

    }
);