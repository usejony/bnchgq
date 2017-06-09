import React from 'react';
import { connect } from 'react-redux';
import { Steps, Icon, Form, Input, Button, message} from 'antd';

const Step = Steps.Step;
const FormItem = Form.Item;
const FormLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  }
}
const BtnLayout = {
  labelCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 10,
      offset: 9
    }
  }
}
const EmailPinless = ({ email, form }) => {
  const _onSubmit = (e) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err,values) => {
      if(!err) {
        console.log(values);
      } else {
        message.error('请确认是否填写邮箱！');
      }
    })
  }
  return (
    <div style={styles.box}>
      <h3 style={styles.h3}>绑定邮箱您将获得以下服务</h3>
      <p>1、绑定邮箱可以接收报价信息、下单信息、订单发货通知等，在邮件中进行订单确认、收货确认等操作。</p>
      <p>2、您可以绑定多个邮箱，方便您及时了解最新的订单信息。</p>
      <div style={styles.pinless}>
        <h4 style={styles.title}>已绑定的邮箱</h4>
        <p style={styles.haveEmail}>
          {
            email
              ? <span style={styles.email}>{email}</span>
              : <span style={styles.note}>您暂时未绑定邮箱</span>
          }
        </p>
        <h4 style={styles.title}>新增绑定邮箱</h4>
        <Steps style={styles.steps}>
          <Step status='process' title="新增邮箱" icon={<Icon type="plus-circle" />} />
          <Step status='wait' title="激活邮箱" icon={<Icon type="clock-circle" />} />
          <Step status='wait' title="绑定成功" icon={<Icon type="smile" />} />
        </Steps>
        <Form style={{ marginTop: 20 }} onSubmit={_onSubmit}>
          <FormItem {...FormLayout} label="新增邮箱:">
            {form.getFieldDecorator('email', {
              rules: [{
                pattern: /^(\w+)@([0-9a-zA-Z]+)(\.[a-z]{2,4})+$/,
                required: true,
                message: '请填写邮箱'
              }]
            })(
              <Input placeholder="请填写需要绑定的邮箱" />
              )}
          </FormItem>
          <FormItem style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" style={styles.btn}>绑定</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
};

const styles = {
  box: {
    paddingTop: 10
  },
  h3: {
    marginBottom: 10
  },
  pinless: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 15,
    marginTop: 20
  },
  haveEmail: {
    marginTop: 8
  },
  email: {
    fontSize: 13,
    color: '#2d70b8'
  },
  note: {
    fontSize: 14,
    color: 'red'
  },
  steps: {
    marginTop: 20
  },
  btn: {
    width: 100
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.logined.data.email
  }
}

export default connect(
  mapStateToProps
)(Form.create()(EmailPinless));