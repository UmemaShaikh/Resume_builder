import React from "react";
import { Button, Form, Input } from "antd";
import {Link} from 'react-router-dom'
import '../resources/authentication.css'

function Register() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-space-between">
            <Link to="/login">Click here to Login</Link>
         <Button type="primary" htmlType="submit">
          Login
        </Button>
         </div>
      </Form>
    </div>
  );
}
export default Register;