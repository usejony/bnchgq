import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import '../style/header.less';

const ComHeader = ({loginInfo}) => (
  <div id="header-box">
    <Row>
      <Col span={2}></Col>
      <Col span={10}>
        <div className="header-left">
          <img src="../../src/imgs/logo.png" alt="www.ec160.com"/>
        </div>
      </Col>
      <Col span={10}>
        <div className="header-right">
            <span>亲！欢迎进入E路通询盘系统</span>
            <ul className="header-tab">
              <li>{loginInfo.tel}</li>
              <li>退出</li>
              <li>帮助中心</li>
            </ul>
        </div>
      </Col>
      <Col span={2}></Col>
    </Row>
  </div>
);

const mapStateToProps = (state) => {
  return {
    loginInfo: state.logined.data
  }
}

export default connect(
  mapStateToProps
)(ComHeader);

