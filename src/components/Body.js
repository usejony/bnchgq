import React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Sider, siderAry } from './Sider';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../style/body.less';
const Body = () => {
  return (
    <Router>
      <div id="body">
        <div className='left'>
          <Sider />
        </div>
        <div className="right">
          {
            siderAry.map((item, index) => (
              <Route exact={item.exact ? item.exact : null} key={index} path={item.to} component={item.component} />
            ))
          }
        </div>
      </div>
    </Router>
  );
}

export default Body;