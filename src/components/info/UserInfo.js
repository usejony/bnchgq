import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Radio, Button } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //保存
  _onSubmit(e) {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue())
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };
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
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    return (
        <Form onSubmit={this._onSubmit.bind(this)} style={{paddingBottom: 30,paddingTop: 20}}>
          <FormItem {...formItemLayout} label="手机:">
            {getFieldDecorator('tel')(
              <Input disabled />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="姓名：">
            {getFieldDecorator('name', {
              rules: [{
                required: true,
                message: '请输入您的姓名!'
              }]
            })(
              <Input placeholder="请输入您的姓名" />
              )}
          </FormItem>
          <FormItem {...formItemLayout} label="性别:">
            {getFieldDecorator('gender')(
              <RadioGroup style={{ marginLeft: 20 }}>
                <Radio value="0">女</Radio>
                <Radio value="1">男</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="您的职位：">
            {getFieldDecorator('job')(
              <Input placeholder="请填入你的职位信息" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="固定电话：">
            {getFieldDecorator('fixPhone')(
              <Input placeholder="请输入固定电话" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="邮箱：">
            {getFieldDecorator('email')(
              <Input placeholder="请输入您的邮箱地址" />
            )}
          </FormItem>
          <FormItem {...formBtnLayout}>
            <Button type="primary" htmlType="submit" style={{width: 150}}>保存</Button>
          </FormItem>
        </Form>
    );
  }
}

UserInfo = Form.create({
  mapPropsToFields(props) {
    console.log(props)
    return {
      tel: {
        value: props.data.tel,
      }
    }
  }
})(UserInfo);

const mapStateToProps = (state) => {
  return {
    data: state.logined.data
  }
}

export default connect(
  mapStateToProps
)(UserInfo);
