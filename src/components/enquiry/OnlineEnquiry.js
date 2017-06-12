import React from 'react';

import HeadPath from '../../utils/HeadPath';
import styles from  '../../style/online.less';
import Table from './Table';

const OnlineEnquiry = () => (
  <div>
    <HeadPath title="在线询价"/>
    <div className={styles.process}>
      <h3 className={styles.processTitle}>询价流程</h3>
      <img src="../../src/imgs/process.png" alt=""/>
    </div>
    <div>
      <Table/>
    </div>
  </div>
);

export default OnlineEnquiry;