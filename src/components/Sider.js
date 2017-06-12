import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import OnlineEnquiry from './enquiry/OnlineEnquiry';
import EnquiryRecord from './records/EnquiryRecord';
import OrderManage from './orders/OrderManage';
import PersonInfo from './info/PersonInfo';
import AccountManege from './account/AccountManage';

import styles from '../style/slider.less';

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
    to: '/info',
    component: PersonInfo
  },
  {
    title: '账户管理',
    icon: 'setting',
     exact: true,
    to: '/',
    component: AccountManege
  }
];


export const Sider = () => (
  <Menu onClick={(e) => console.log('click', e)} mode="vertical" className={styles.menu}>
    {
      siderAry.map((item, index) => (
        <Menu.Item key={item.icon} className={styles.item}>
          <Link to={item.to} className={styles.link}><Icon type={item.icon}/>{item.title}</Link>
        </Menu.Item>
      ))
    }
  </Menu>
);
