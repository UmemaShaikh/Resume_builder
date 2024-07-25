import React from "react";
import { Button, Form, Input, message } from "antd";
import '../resources/authentication.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Register() {
  const onFinish = async(values) => {
    try{
      await axios.post('/api/user/register',values);
      message.success("Registration successful");
    }catch(error){
      message.error("registration failed")
    }
  };
  return (
    <div className="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input/>
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input />
        </Form.Item>
         <div className="d-flex align-items-center justify-content-between">
            <Link to='/login'>Click here to login</Link>
         <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
         </div>
       
      </Form>
    </div>
  );
}
export default Register;
