import { Table, Divider } from 'antd';
import React = require('react');
import { graphql, ChildProps } from '@apollo/react-hoc';
import { ColumnProps } from 'antd/es/table';
import { ItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltQueryResult, withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltProps, ItemsHardwareFastenerBoltDocument, ItemsHardwareFastenerBoltSelectColumn } from '../queries/types'

import { LabelDrawModal } from './ItemPrint';

function toTitleCase(s: string) {
  return s.replace('_', ' ').split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}


// const columns: ColumnProps<ItemsHardwareFastenerBolt>[] = Object.keys(ItemsHardwareFastenerBoltSelectColumn).filter(key => ["ID"].includes(key) ? false : key).map(key => {
//   return {
//     key: key,
//     title: toCamelCase(key),
//     dataIndex: key.toLowerCase(),
//   }
// });

// console.log(columns)
// [
//   {
//     key: 'name',
//     title: 'Name',
//     dataIndex: 'name',
//     // filters: [
//     //   {
//     //     text: 'Joe',
//     //     value: 'Joe',
//     //   },
//     //   {
//     //     text: 'Jim',
//     //     value: 'Jim',
//     //   },
//     //   {
//     //     text: 'Submenu',
//     //     value: 'Submenu',
//     //     children: [
//     //       {
//     //         text: 'Green',
//     //         value: 'Green',
//     //       },
//     //       {
//     //         text: 'Black',
//     //         value: 'Black',
//     //       },
//     //     ],
//     //   },
//     // ],
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     // onFilter: (value, record) => record.name.indexOf(value) === 0,
//     // sorter: (a, b) => a.name.length - b.name.length,
//     sorter: (a, b) => a.name.localeCompare(b.name),
//     sortDirections: ['descend', 'ascend'],
//   },
//   {
//     key: 'description',
//     title: 'Description',
//     dataIndex: 'description',
//     defaultSortOrder: 'descend',
//     // sortDirections: ['descend'],
//     // sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Unit',
//     dataIndex: 'unit',
//     filters: [
//       {
//         text: 'Metric',
//         value: 'metric',
//       },
//       {
//         text: 'USC/Imperial/US',
//         value: 'usc',
//       },
//     ],
//     filterMultiple: true,
//     onFilter: (value, item) => item.unit == value,
//     sorter: (a, b) => a.name.localeCompare(b.name),
//     sortDirections: ['descend', 'ascend'],
//   },
// ];

export enum display {
  VISIBLE = 1,
  HIDDEN = 0
}

interface ItemTableProps {
  // data: any
  class?: string
}

interface ItemTableState {
  data?: ItemsHardwareFastenerBolt[]
  pagination: pagination
  loading: boolean
  clickedItem: ItemsHardwareFastenerBolt
  printModal: display
}

interface pagination {
  total: number
  pageSize: number
  current: number
}

export default withItemsHardwareFastenerBolt()(
  class ItemTable extends React.Component<ItemsHardwareFastenerBoltProps<ItemTableProps>, ItemTableState> {
    state: ItemTableState = {
      data: undefined,
      pagination: { total: 0, pageSize: 100, current: 0 },
      loading: false,
      clickedItem: undefined,
      printModal: display.HIDDEN
    };

    componentDidMount() {
      // this.loadData()

    }


    get Columns(): ColumnProps<ItemsHardwareFastenerBolt>[] {
      return [
        ...(Object.keys(ItemsHardwareFastenerBoltSelectColumn).filter(
          key => ["ID"].includes(key) ? false : key).map(
            key => {
              return {
                key: key,
                title: toTitleCase(key),
                dataIndex: ItemsHardwareFastenerBoltSelectColumn[key],
              }
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
                  this.viewPrintModal(display.VISIBLE, record)
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

    viewPrintModal = (change?: display, clickedItem?: ItemsHardwareFastenerBolt) => {
      console.log("viewPrintModal () ? received", change)
      if ( change !== undefined && change != this.state.printModal ){
        this.setState({
          printModal: change,
          clickedItem: clickedItem
        })
        console.log("viewPrintModal () ? change detected; returning:", change == display.VISIBLE)
        return change == display.VISIBLE
      }
      console.log("viewPrintModal () ? NO change detected; returning:", this.state.printModal == display.VISIBLE)
      return this.state.printModal == display.VISIBLE
    }

    handleTableChange = (pagination, filters, sorter) => {
      const pager = { ...this.state.pagination };
      pager.current = pagination.current;
      this.setState({
        pagination: pager,
      });
    };

    onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter);
    }

    render() {

      const { data } = this.props;
      let { loading, error } = this.props.data!;
      if (error) return <span>Error</span>
      console.log("data is", data)
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
      )
    }

  }
)