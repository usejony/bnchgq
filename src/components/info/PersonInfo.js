import React from 'react';
import { Tabs, Icon } from 'antd';

import UserInfo from './UserInfo';
import CompanyInfo from './CompanyInfo';
import HeadPath from '../../utils/HeadPath';
const TabPane = Tabs.TabPane;
const PersonInfo = () => (
  <div>
    <HeadPath title="我的资料" />
    <div className='tabBox'>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Icon type="user" />个人信息</span>} key="1" >
            <UserInfo />
        </TabPane>
        <TabPane tab={<span><Icon type="home" />个人信息</span>} key="2" >
            <CompanyInfo />
        </TabPane>
      </Tabs>
    </div>
  </div>
);


export default PersonInfo;