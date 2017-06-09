import React from 'react';
import { Tabs, Icon } from 'antd';

import HeadPath from '../../utils/HeadPath';
import EmailPinless from './EmailPinless';
import PswChange from './PswChange';

const TabPane = Tabs.TabPane;

const AccounManage = () => (
  <div className="body">
    <HeadPath title="账户管理"/>
    <div className="content border">
      <Tabs defaultActiveKey="1" style={styles.tabs}>
        <TabPane tab={<span><Icon type="mail" />邮箱绑定</span>} key="1" >
            <EmailPinless/>
        </TabPane>
        <TabPane tab={<span><Icon type="unlock" />密码修改</span>} key="2" >
            <PswChange/>
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
export default AccounManage;