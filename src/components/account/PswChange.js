import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';

const FormItem = Form.Item;
const FormLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  }
}

const PswChange = ({form}) => {
  const _onSubmit = (e) => {
    e.preventDefault();
  }
  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={_onSubmit}>
      <FormItem {...FormLayout} label="原密码">
        {getFieldDecorator('oldPsw',{
          rules: [{
            required: true,
            message: '请输入正确的原始密码！'
          }]
        })(
          <Input placeholder="请输入账户原始密码"/>
        )}
      </FormItem>
      <FormItem {...FormLayout} label="新密码">
        {getFieldDecorator('newPsw',{
          rules: [{
            required: true,
            message: '请输入新密码！'
          }]
        })(
          <Input placeholder="请输入新密码"/>
        )}
      </FormItem>
      <FormItem {...FormLayout} label="确认密码">
        {getFieldDecorator('confirmPsw',{
          rules: [{
            required: true,
            message: '请确认新密码！'
          }]
        })(
          <Input placeholder="请确认新密码"/>
        )}
      </FormItem>

    </Form>
  )
};


export default Form.create()(PswChange);