import { Table } from 'antd';
import React = require('react');
import gql from 'graphql-tag';
import { graphql, ChildProps } from '@apollo/react-hoc';
import { ColumnProps } from 'antd/es/table';
import { GetItemsHardwareFastenerBolt, GetItemsHardwareFastenerBolt_items } from '../queries/types'


// class Item {
//   id: number
//   name: string
//   description: string
//   class: string
// }
// class HardwareFastenerBolt extends Item {
//   unit: "usc" | "metric"
// }

const QUERY_ITEMS = gql`
# query GetItemsHardwareFastener ( $ProjectStub: String )  {
#   item(where: {class: { _eq: $ProjectStub }}) {
query GetItemsHardwareFastenerBolt {
  items: items_hardware_fastener_bolt {
    id
    name
    description
    unit
  }
}
`


const columns: ColumnProps<GetItemsHardwareFastenerBolt_items>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
    //   {
    //     text: 'Jim',
    //     value: 'Jim',
    //   },
    //   {
    //     text: 'Submenu',
    //     value: 'Submenu',
    //     children: [
    //       {
    //         text: 'Green',
    //         value: 'Green',
    //       },
    //       {
    //         text: 'Black',
    //         value: 'Black',
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'description',
    title: 'Description',
    dataIndex: 'description',
    defaultSortOrder: 'descend',
    // sortDirections: ['descend'],
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    filters: [
      {
        text: 'Metric',
        value: 'metric',
      },
      {
        text: 'USC/Imperial/US',
        value: 'usc',
      },
    ],
    filterMultiple: true,
    onFilter: (value, item) => item.unit == value,
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ['descend', 'ascend'],
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];








interface ItemTableProps {
  class?: string
}

interface ItemTableState {
  data?: GetItemsHardwareFastenerBolt
  pagination: pagination
  loading: boolean
}

interface pagination {
  total: number
  pageSize: number
  current: number
}

export default graphql<ItemTableProps, GetItemsHardwareFastenerBolt>(QUERY_ITEMS,
  {
    // options:
    //     props => ({
    //         variables: {
    //             class: "HardwareFastener"
    //             // ProjectStub: props.match.params.project_id
    //         }
    //     })
  })(
    class ItemTable extends React.Component<ChildProps<ItemTableProps, GetItemsHardwareFastenerBolt>, ItemTableState> {
      state: ItemTableState = {
        data: undefined,
        pagination: {total: 0, pageSize: 100, current:0},
        loading: false,
      };

      componentDidMount() {
        this.loadData();
      }

      loadData() {

      }

      handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        // this.fetch({
        //   results: pagination.pageSize,
        //   page: pagination.current,
        //   sortField: sorter.field,
        //   sortOrder: sorter.order,
        //   ...filters,
        // });
      };

      // fetch = (params = {}) => {
      //   console.log('params:', params);
      //   this.setState({ loading: true });
      //   reqwest({
      //     url: 'https://randomuser.me/api',
      //     method: 'get',
      //     data: {
      //       results: 10,
      //       ...params,
      //     },
      //     type: 'json',
      //   }).then(data => {
      //     const pagination = { ...this.state.pagination };
      //     // Read total count from server
      //     // pagination.total = data.totalCount;
      //     pagination.total = 200;
      //     this.setState({
      //       loading: false,
      //       data: data.results,
      //       pagination,
      //     });
      //   });
      // };



      onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }

      render() {

        const { data } = this.props;
        let { loading, error } = this.props.data!;


        // if (data && (data.loading || !data.items)) return <span>Loading</span>
        if (error) return <span>Error</span> 
        // if (data && data.items && data.items.length != 1) {
          // return <span> Error </span>
        // }
        // let  = data!.project![0]
        console.log("data is", data)
        // this.setState({data: data.items})
        // return 



        // return (
        //     <div>


        //         <span> Match project_id : {match.params.project_id}</span>
        //         <br />
        //         <span>{project.stub}</span>
        //         <br />
        //         <span>{project.description}</span>
        //     </div>
        // )
        console.log('returning Table')
        return (
          <Table
            columns={columns}
            dataSource={data.items}
            rowKey={item => item.id.toString()}
            pagination={this.state.pagination}
            loading={loading}
            onChange={this.onChange}
          />
        )
      }

    }
    )