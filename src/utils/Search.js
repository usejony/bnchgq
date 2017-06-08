import React, { Component } from 'react';
import { Input, DatePicker, Select, Button } from 'antd';

const { RangePicker } = DatePicker;
const Option = Select.Option;
const dateFormat = 'YYYY/MM/DD';
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
      <div style={styles.search}>
        <div style={styles.box}>
          <span>
            <span>询盘编号：</span>
            <Input placeholder="输入编号..." style={styles.numInp} />
          </span>
          <span>
            <span>提交日期：</span>
            <RangePicker format={dateFormat} style={styles.dateRange}/>
          </span>
          <span>
            <span>每页行数：</span>
            <Select defaultValue={this.state.lineNum} style={styles.lineNum} onChange={this.lineHandle.bind(this)}>
              <Option value='10'>10</Option>
              <Option value='15'>15</Option>
              <Option value='20'>20</Option>
              <Option value='25'>25</Option>
            </Select>
          </span>
          <span>
            <Button type="primary" style={styles.btn}>查询</Button>
          </span>
        </div>
      </div>
    );
  }
}

const styles = {
  search: {
    marginTop: 5,
    paddingTop: 30,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: '#ededed',
    borderStyle: 'solid'
  },
  box: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  numInp: {
    width: 180,
  },
  dateRange: {
    width: 200
  },
  btn: {
    width: 80,
    height: 30
  }
}