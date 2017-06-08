import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.RadioGroup;
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    return (
      <div >
        <Form onSubmit={e => null}>
          <FormItem {...formItemLayout} label="手机">
            {getFieldDecorator('name',{
              valuePropName: 'disabled',
            })(
              <Input/>
            )}
          </FormItem>
          {/*<FormItem {...formItemLayout} label="性别">
            {getFieldDecorator('gender')(
                <RadioGroup>
                  <Radio value="0">男</Radio>
                  <Radio value="1">女</Radio>
                </RadioGroup>
            )}
          </FormItem>*/}
        </Form>
      </div>
    );
  }
}

const User = Form.create()(UserInfo);
export default User;
