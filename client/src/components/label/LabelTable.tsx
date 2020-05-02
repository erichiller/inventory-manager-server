import { Table, Divider } from 'antd';
import * as React from 'react';
import { ColumnProps } from 'antd/es/table';
import { withGetLabels, GetLabelsProps, LabelSelectColumn, Label, GetLabelsQueryResult, GetLabelsQuery } from '../../lib/types/graphql';
import { LabelDrawModal } from './../draw/LabelDrawModal';
import { Item } from '../../lib/item';
import { DISPLAY } from '../../lib/types/enums';
import { toTitleCase } from '../../lib/UtilityFunctions';



interface LabelTableProps {
    // data: any
    class?: string;
}

interface LableTableState {
    data?: Item<any>[];
    pagination: pagination;
    loading: boolean;
    clickedLabel: Label;
    modal: React.ReactElement;
}

interface pagination {
    total: number;
    pageSize: number;
    current: number;
}

export const LabelTable = withGetLabels()(
    class extends React.Component<GetLabelsProps<LabelTableProps>, LableTableState> {
        state: LableTableState = {
            data: undefined,
            pagination: { total: 0, pageSize: 100, current: 0 },
            loading: false,
            clickedLabel: undefined,
            modal: null
        };

        componentDidMount () {
            // this.loadData()

        }


        // get Columns (): ColumnProps<Omit<GetLabelsQuery, '__typename'>>[] {
            get Columns(): ColumnProps<Extract<GetLabelsQuery, 'label'>>[] {
            return [
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
                        render: ( text, record ) => (
                            <span>
                                <a onClick={( obj ) => {
                                    obj.preventDefault();
                                    // this.setState({
                                    //   clickedItem: record,
                                    //   // printModal: display.VISIBLE
                                    // })
                                    this.setModal( <LabelDrawModal
                                            label={this.state.clickedLabel}
                                            visibleHandler={this.setModal} />
                                        , record );
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
        }

        // viewPrintModal = ( change?: DISPLAY, clickedLabel?: Label ) => {
        //     console.log( "viewPrintModal () ? received", change );
        //     if ( change !== undefined && change != this.state.printModal ) {
        //         this.setState( {
        //             printModal: change,
        //             clickedLabel: clickedLabel
        //         } );
        //         console.log( "viewPrintModal () ? change detected; returning:", change == DISPLAY.VISIBLE );
        //         return change == DISPLAY.VISIBLE;
        //     }
        //     console.log( "viewPrintModal () ? NO change detected; returning:", this.state.printModal == DISPLAY.VISIBLE );
        //     return this.state.printModal == DISPLAY.VISIBLE;
        // }


        setModal = ( modal: React.ReactElement, clickedLabel?: Label ) => {
            console.log( "viewPrintModal () ? received", modal, clickedLabel );
            if ( !modal ) {
                this.setState( {
                    clickedLabel: clickedLabel,
                    modal: null
                } );
                console.log( "viewPrintModal(null) removing modal" );
                return;
            }
            this.setState( {
                modal: modal,
                clickedLabel: clickedLabel
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
        }

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
                        dataSource={data.label}
                        rowKey={label => label.id.toString()}
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