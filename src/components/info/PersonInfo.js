import React from 'react';
import { Tabs, Icon } from 'antd';
import UserInfo from './UserInfo';
import CompanyInfo from './CompanyInfo';

import HeadPath from '../../utils/HeadPath';

const TabPane = Tabs.TabPane;
const PersonInfo = () => (
  <div className="body">
    <HeadPath title="我的资料" />
    <div className="content border">
      <Tabs defaultActiveKey="1" style={styles.tabs}>
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
const styles = {
  infoBox: {
    paddingTop: 30,
  },
  tabs: {
    marginLeft: 50,
    marginRight: 50,
  },
  paneBox: {
    width: 500
  },
  pane: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default PersonInfo;