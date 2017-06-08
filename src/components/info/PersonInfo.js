import React from 'react';
import { Tabs, Icon } from 'antd';
import UserInfo from './UserInfo';
import CompanyInfo from './CompanyInfo';

import HeadPath from '../../utils/HeadPath';

const TabPane = Tabs.TabPane;
const PersonInfo = () => (
  <div id="info">
    <HeadPath title="我的资料" />
    <div className="content border" style={styles.infoBox}>
      <Tabs defaultActiveKey="1" style={styles.tabs}>
        <TabPane tab={<span><Icon type="user" />个人信息</span>} key="1" style={styles.pane}>
          <UserInfo />
        </TabPane>
        <TabPane tab={<span><Icon type="home" />个人信息</span>} key="2" style={styles.pane}>
          {/*<CompanyInfo />*/}
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
}

export default PersonInfo;