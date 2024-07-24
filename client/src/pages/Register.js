import React from "react";
import { Button, Form, Input } from "antd";
import '../resources/authentication.css'

function Register() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div classname="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="username" label="username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="password">
          <Input />
        </Form.Item>
        <Form.Item name="cpassword" label="confirm password">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
      </Form>
    </div>
  );
}
export default Register;
