import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Radio, Input, Cascader, Button } from 'antd';
import addressData from '../../utils/addressData';

const FormItem = Form.Item, RadioGroup = Radio.Group;
class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  _onSubmit(e) {
    const { getFieldsValue, validateFieldsAndScroll } = this.props.form
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        let location = getFieldsValue().location.join('');
        let locationDetail = getFieldsValue().locationDetail;
        const obj = Object.assign({}, getFieldsValue(), {
          address: `${location}${locationDetail}`
        });
        console.log(obj);
      } else {
        alert('请正确填写信息！');
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 9 }
      }
    }
    const formRadioLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
      }
    }
    const formBtnLayout = {
      wrapperCol: {
        xs: {
          span: 10,
          offset: 5
        },
        sm: {
          span: 8,
          offset: 6
        }
      }
    }
    return (
      <Form onSubmit={this._onSubmit.bind(this)} style={{ paddingBottom: 30, paddingTop: 20 }}>
        <FormItem {...formRadioLayout} label="公司类型:">
          {getFieldDecorator('companyGenre', {
            initialValue: '个体经营'
          })(
            <RadioGroup style={{ marginLeft: 20 }}>
              <Radio value="企业单位">企业单位</Radio>
              <Radio value="个体经营">个体经营</Radio>
              <Radio value="事业单位或者社会群体">事业单位或者社会群体</Radio>
            </RadioGroup>
            )}
        </FormItem>
        <FormItem {...formItemLayout} label="公司编号：">
          {getFieldDecorator('companyNumber')(
            <Input placeholder="请输入..." />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="公司名称：">
          {getFieldDecorator('companyName')(
            <Input placeholder="请输入..." />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="固定电话：">
          {getFieldDecorator('fixPhone')(
            <Input placeholder="请输入..." />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="传真：">
          {getFieldDecorator('fax')(
            <Input placeholder="请输入..." />
          )}
        </FormItem>
        <FormItem {...formItemLayout} hasFeedback label="主营行业：">
          {getFieldDecorator('mainVocation', {
            rules: [{
              required: true,
              message: '请填写主营行业!'
            }]
          })(
            <Input placeholder="请输入..." />
            )}
        </FormItem>
        <FormItem {...formItemLayout} hasFeedback label="主营产品：">
          {getFieldDecorator('mainProduct', {
            rules: [{
              required: true,
              message: '请输入主营产品!'
            }]
          })(
            <Input placeholder="请输入..." />
            )}
        </FormItem>
        <FormItem {...formItemLayout} label="公司简介">
          {getFieldDecorator('companyIntro')(
            <Input type="textarea" rows="5" style={{ resize: 'none' }} placeholder="请输入..." />
          )}
        </FormItem>
        <FormItem {...formItemLayout} hasFeedback label="Email：">
          {getFieldDecorator('email', {
            validateTrigger: 'onBlur',
            rules: [{
              pattern: /^(\w+)@([0-9a-zA-Z]+)(\.\w+)+$/,
              message: '请输入正确的邮箱！'
            }]
          })(
            <Input placeholder="请输入..." />
            )}
        </FormItem>
        <FormItem {...formItemLayout} label="公司网址">
          {getFieldDecorator('website')(
            <Input placeholder="请输入..." />
          )}
        </FormItem>
        <FormItem {...formItemLayout} hasFeedback label="公司所在地：">
          {getFieldDecorator('location', {
            rules: [{
              required: true,
              message: '务必输入公司所在地'
            }]
          })(
            <Cascader options={addressData} placeholder="请选择公司地址" />
            )}
        </FormItem>
        <FormItem {...formItemLayout} hasFeedback label="详细地址：">
          {getFieldDecorator('locationDetail', {
            rules: [{
              required: true,
              message: '请务必输入公司的详细地址'
            }]
          })(
            <Input placeholder="请输入..." />
            )}
        </FormItem>
        <FormItem {...formBtnLayout}>
          <Button type="primary" htmlType="submit" style={{ width: 150 }}>保存</Button>
        </FormItem>
      </Form>
    );
  }
}
CompanyInfo = Form.create()(CompanyInfo);

export default CompanyInfo;
