import React from "react";
import { Button, Form, Input } from "antd";
import '../resources/authentication.css'
import {Link} from 'react-router-dom'


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
        <div className="d-flex align-items-center justify-content-between"> 
         <Link to='/register'>Click here to Register</Link>
         <Button type="primary" htmlType="submit">
          Login
        </Button>
         </div>
      </Form>
    </div>
  );
}
export default Register;