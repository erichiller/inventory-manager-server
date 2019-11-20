import { Table, Divider } from 'antd';
import React = require('react');
import { ColumnProps } from 'antd/es/table';
import { ItemHardwareFastenerBolt, withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps, ItemHardwareFastenerBoltSelectColumn } from '../types/graphql';
import { LabelDrawModal } from './draw/LabelDrawModal';
import { GenericItem } from '../types/Generics';
import { DISPLAY } from '../types/enums';
import { toTitleCase } from '../lib/helpers';

interface ItemTableProps {
  // data: any
  class?: string;
}

interface ItemTableState {
  data?: GenericItem[];
  pagination: pagination;
  loading: boolean;
  clickedItem: GenericItem;
  printModal: DISPLAY;
}

interface pagination {
  total: number;
  pageSize: number;
  current: number;
}

export default withItemHardwareFastenerBolt()(
  class ItemTable extends React.Component<ItemHardwareFastenerBoltProps<ItemTableProps>, ItemTableState> {
    state: ItemTableState = {
      data: undefined,
      pagination: { total: 0, pageSize: 100, current: 0 },
      loading: false,
      clickedItem: undefined,
      printModal: DISPLAY.HIDDEN
    };

    componentDidMount() {
      // this.loadData()

    }


    get Columns(): ColumnProps<ItemHardwareFastenerBolt>[] {
      return [
        ...(Object.keys(ItemHardwareFastenerBoltSelectColumn).filter(
          key => ["ID"].includes(key) ? false : key).map(
            key => {
              return {
                key: key,
                title: toTitleCase(key),
                dataIndex: ItemHardwareFastenerBoltSelectColumn[key],
              };
            })),
        ...[
          {
            title: 'Action',
            key: 'action',
            // dataIndex: '',
            render: (text, record) => (
              <span>
                <a onClick={ (obj) => {
                  // this.setState({
                  //   clickedItem: record,
                  //   // printModal: display.VISIBLE
                  // })
                  this.viewPrintModal(DISPLAY.VISIBLE, record);
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

    viewPrintModal = (change?: DISPLAY, clickedItem?: ItemHardwareFastenerBolt) => {
      console.log("viewPrintModal () ? received", change);
      if ( change !== undefined && change != this.state.printModal ){
        this.setState({
          printModal: change,
          clickedItem: clickedItem
        });
        console.log("viewPrintModal () ? change detected; returning:", change == DISPLAY.VISIBLE);
        return change == DISPLAY.VISIBLE;
      }
      console.log("viewPrintModal () ? NO change detected; returning:", this.state.printModal == DISPLAY.VISIBLE);
      return this.state.printModal == DISPLAY.VISIBLE;
    }

    handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
        pagination: pager,
      });
    }

    onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter);
    }

    render() {

      const { data } = this.props;
      let { loading, error } = this.props.data!;
      if (error) return <span>Error</span>;
      console.log("data is", data);
      return (
        <div>
          { this.state.printModal ? 
          <LabelDrawModal 
            item={this.state.clickedItem} 
            visible={this.state.printModal}
            visibleHandler={this.viewPrintModal} />
          : null }
          
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