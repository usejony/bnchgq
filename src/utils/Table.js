import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

const columns = [{
  title: '提交日期',
  dataIndex: 'date',
  key: 'date',
  sorter: (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime(),
}, {
  title: '询盘编号',
  dataIndex: 'number',
  key: 'number',
  sorter: (a, b) => a.number - b.number,
}, {
  title: '类别',
  dataIndex: 'category',
  key: 'category',
  sorter: (a, b) => a.category.localeCompare(b.category),
},{
  title: '品牌',
  dataIndex: 'brand',
  key: 'brand',
  sorter: (a,b) => a.brand.localeCompare(b.brand),
},{
  title: '状态',
  dataIndex: 'status',
  key: 'status'
},{
  title: '操作',
  dataIndex: 'handle',
  key: 'handle',
  render: () => (
    <span>
      <a href="void(0)">查看</a>
      <span className="ant-divider"/>
      <a href="void(0)">删除</a>
    </span>
  )
},{
  title: '',
  dataIndex: 'order',
  key: 'order',
  render: () => (
    <span>
      <a href="void(0)">前往下单</a>
      <span className="ant-divider"/>
      <a href="void(0)">新建询盘</a>
    </span>
  )
}];



const table = ({dataSource}) => (
  <Table bordered columns={columns} dataSource={dataSource} onChange={onChange} />
);

export default table;