import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import OnlineEnquiry from './enquiry/OnlineEnquiry';
import EnquiryRecord from './records/EnquiryRecord';
import OrderManage from './orders/OrderManage';
import PersonInfo from './info/PersonInfo';
import AccountManege from './account/AccountManage';

const SubMenu = Menu.SubMenu;

export const siderAry = [
  {
    title: '在线询盘',
    icon: 'search',
    to: '/online',
    component: OnlineEnquiry
  },
  {
    title: '询价记录',
    icon: 'schedule',
    to: '/records',
    component: EnquiryRecord
  },
  {
    title: '订单管理',
    icon: 'paper-clip',
    to: '/orders',
    component: OrderManage
  },
  {
    title: '我的资料',
    icon: 'idcard',
    exact: true,
    to: '/',
    component: PersonInfo
  },
  {
    title: '账户管理',
    icon: 'setting',
    to: '/account',
    component: AccountManege
  }
];


export const Sider = () => (
  <Menu onClick={(e) => console.log('click', e)} mode="vertical" style={styles.menu}>
    {
      siderAry.map((item, index) => (
        <Menu.Item key={item.icon} style={styles.item}>
          <Link to={item.to} style={styles.link}><Icon type={item.icon}/>{item.title}</Link>
        </Menu.Item>
      ))
    }
  </Menu>
);

const styles = {
  link: {
    fontSize: 14,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red'
  },
  menu: {
    border: 'none'
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid'
  }
}
