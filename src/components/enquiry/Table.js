import React, { Component } from 'react';
import { Select, Checkbox, Radio, Input, Cascader, Button } from 'antd';

import {addressData} from '../../utils/addressData';
//antd扩展；
const Option = Select.Option;
const RadioGroup = Radio.Group;

const LETTER = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const BRAND = [
  '深圳百能',
  '深圳超越',
  '广东美信',
  '华腾',
  '爱上的咖啡机了'
];


export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'A',
      selectScene: 1,
      selectCommodity: 1,
      textarea: ''
    }
  }

  handle(value) {
    this.setState({
      selectValue: value
    });
  }

  checkHandle(e) {
    console.log(e.target.checked);
  }
  sceneHandle(e) {
    this.setState({
      selectScene: e.target.value
    });
    console.log('scene:',e.target.value);
  }
  commodityHandle(e) {
    this.setState({
      selectCommodity: e.target.value
    });
    console.log('commodity:',e.target.value)
  }
  addressHandle(e) {
    console.log(e)
  }

  textareaHandle(e) {
    this.setState({
      textarea: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert('2')
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
      <table className="table text">
        <tbody>
          <tr>
            <th>品牌：</th>
            <td>
              <span className="letter">
              <span>开头字母</span>
              <Select defaultValue={this.state.selectValue} className="letter-select" onChange={this.handle.bind(this)}>
                {
                  LETTER.map((item, index) => (
                    <Option key={index} value={item}>{item}</Option>
                  ))
                }
              </Select>
              </span>
              <span className="brand">
                <span>品牌</span>
                <Select defaultValue={'深圳百能'} className="brand-select" onChange={this.handle.bind(this)}>
                  {
                    BRAND.map((item,index) => (
                      <Option key={index} value={item}>{item}</Option>
                    ))
                  }
                </Select>
              </span>
              <span className="extra">
                <Checkbox value={1} onChange={this.checkHandle.bind(this)}>其他</Checkbox>
              </span>
            </td>
          </tr>
          <tr>
            <th>类别：</th>
            <td>
              <Select defaultValue={'IC类'} className="category-select" onChange={this.handle.bind(this)} >
                <Option value="IC类">IC类</Option>
                <Option value="IQ类">IQ类</Option>
                <Option value="ID类">ID类</Option>
                <Option value="IU类">IU类</Option>
              </Select>
            </td>
          </tr>
          <tr>
            <th>应用场景：</th>
            <td>
              <RadioGroup value={this.state.selectScene} className="scene-check" onChange={this.sceneHandle.bind(this)}>
                <Radio value={1}>智能交通</Radio>
                <Radio value={2}>智能家居</Radio>
                <Radio value={3}>智能电网</Radio>
              </RadioGroup>
            </td>
          </tr>
          <tr>
            <th>型号：</th>
            <td>
              <Input placeholder="请输入型号..."/>
            </td>
          </tr>
          <tr>
            <th>封装：</th>
            <td>
              <Input placeholder="请输入封装..."/>
            </td>
          </tr>
          <tr>
            <th>数量：</th>
            <td>
              <Input placeholder="请输入数量..."/>
            </td>
          </tr>
          <tr>
            <th>目标价：</th>
            <td>
              <Input placeholder="请输入你的目标价..."/><span>元(人民币)</span>
            </td>
          </tr>
          <tr>
            <th>月用量：</th>
            <td>
              <Input placeholder="请输入你的月用量..."/><span></span>
            </td>
          </tr>
          <tr>
            <th>&nbsp;</th>
            <td>
              <RadioGroup value={this.state.selectCommodity} onChange={this.commodityHandle.bind(this)}>
                <Radio value={1}>现货</Radio>
                <Radio value={2}>期货</Radio>
                <Radio value={3}>不限</Radio>
              </RadioGroup>
            </td>
          </tr>
          <tr style={{height: 80}}>
            <th>送货信息：</th>
            <td>
              <div>
                <span>
                  <span>联系人：</span>
                  <Input/>
                </span>
                <span style={{marginLeft: 20}}>
                  <span>联系电话：</span>
                  <Input/>
                </span>
              </div>
              <div style={{marginTop: 8}}>
                <span>
                  <span>收货地址：</span>
                  <Cascader options={addressData} onChange={this.addressHandle.bind(this)} className="addressSelect" placeholder="请选择收货地址"/>
                  <span style={{marginLeft: 20}}>
                    <span>详细地址：</span>
                    <Input placeholder="请输入详细地址"/>
                  </span>
                </span>
              </div>
            </td>
          </tr>
          <tr style={{height: 100}}>
            <th>备注：</th>
            <td>
              <Input className="textarea" type="textarea" rows={4} value={this.state.textarea} onChange={this.textareaHandle.bind(this)} placeholder="请输入备注..."/>
            </td>
          </tr>
          <tr style={{height: 100}}>
            <td colSpan={2} style={{textAlign: 'center'}}>
              <Button type="primary" htmlType="submit" className='online-submit'>提交询盘</Button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    );
  }
}