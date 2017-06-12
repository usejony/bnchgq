import React, { Component } from 'react';
import Search from '../../utils/SectionSearch';
import Table from '../../utils/Table';
import HeadPath from '../../utils/HeadPath';
import config from '../../utils/config';
import { GET } from '../../utils/Request';
import { Spin } from 'antd';


export default class OrderManage extends Component {
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
          for(let i = 0; i < ary.length; i ++) {
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
        <HeadPath title="订单管理" />
        <div className='content'>
          <Search />
          <div className="form">
            {
              this.state.data
                ? <Table dataSource={this.state.data} />
                : <div className='tabSpin'><Spin size="large"/></div>
            }
            
          </div>
        </div>
      </div>
    );
  }
}