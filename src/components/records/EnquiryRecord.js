import React, { Component } from 'react';
import Search from '../../utils/SectionSearch';
import Table from '../../utils/Table';
import { Link } from 'react-router'
import HeadPath from '../../utils/HeadPath';
import config from '../../utils/config';
import { GET } from '../../utils/Request';
import { Spin } from 'antd';
import styles from '../../style/records.less';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const url = config.api.base + config.api.records;
    const params = {
      token: 'dudu'
    };
    GET(url)
      .then(data => {
        if (data && data.success) {
          let ary = data.data;
          for(let i =0; i < ary.length; i++) {
            ary[i].key = i;
          }
          this.setState({
            data: ary
          });
        }
      })
      .catch(e => {
        console.log('请求数据出错:', e);
      });
  }

  render() {
    return (
      <div>
        <HeadPath title="询盘记录" />
        <div className='content'>
          <Search />
          <div className='form'>
            {
              this.state.data
                ? <Table dataSource={this.state.data} />
                : <div className="tabSpin"><Spin size="large"/></div>
            }
            
          </div>
        </div>
      </div>
    );
  }
}