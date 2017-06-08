import React from 'react';
import HeadPath from '../../utils/HeadPath';

import Table from './Table';

const OnlineEnquiry = () => (
  <div id="online">
    <HeadPath title="在线询价"/>
    <div className="process">
      <h3 className="process-title">询价流程</h3>
      <img src="../../src/imgs/process.png" alt=""/>
    </div>
    <div className='form'>
      <Table/>
    </div>
  </div>
);

export default OnlineEnquiry;