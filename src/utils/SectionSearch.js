import React, { Component } from 'react';
import { Input, DatePicker, Select, Button } from 'antd';

const { RangePicker } = DatePicker;
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';

import styles from '../style/sectionSearch.less';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineNum: '10'
    }
  }
  lineHandle(e) {
    this.setState({
      lineNum: e
    });
    console.log('line:',e);
  }
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.box}>
          <span>
            <span>询盘编号：</span>
            <Input placeholder="输入编号..." className={styles.numInp} />
          </span>
          <span>
            <span>提交日期：</span>
            <RangePicker format={dateFormat} className={styles.dateRange}/>
          </span>
          <span>
            <span>每页行数：</span>
            <Select defaultValue={this.state.lineNum} className={styles.lineNum} onChange={this.lineHandle.bind(this)}>
              <Option value='10'>10</Option>
              <Option value='15'>15</Option>
              <Option value='20'>20</Option>
              <Option value='25'>25</Option>
            </Select>
          </span>
          <span>
            <Button type="primary" className={styles.btn}>查询</Button>
          </span>
        </div>
      </div>
    );
  }
}