import { Button, Form, Input } from 'antd';
import React from 'react';

export interface RechargePageProps {}

const RechargePage: React.FunctionComponent<RechargePageProps> = (props) => {
  const onSubmit = (values: string) => {
    console.log(values);
  };
  return (
    <div className="container">
      <div className="recharge">
        <p className="recharge__header">Recharge</p>
        <Form
          name="recharge"
          // initialValues={initialValue}
          layout="vertical"
          onFinish={onSubmit}
          autoComplete="off"
          className="recharge__form"
        >
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: 'Please input amount!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block danger htmlType="submit">
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RechargePage;
