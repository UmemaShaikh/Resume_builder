import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import WelcomeMessage from './welcome';

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    if (values.password !== values.cpassword) {
      message.error("Passwords do not match!");
      return;
    }
    try {
      await axios.post("/api/user/register", values);
      setLoading(false);
      message.success("Registration successful");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed. Please try again.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("shaikhresume-user")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {/* {!loading && (<Spin size="large"/>)} */}
      {loading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
       <WelcomeMessage />
      <Form layout="vertical" onFinish={onFinish}>
        <h1>CREATE ACCOUNT</h1>
        <hr />
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input type="password" placeholder="Enter password" />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" placeholder="confirm password" />
        </Form.Item>
        <div className="d-flex flex-column align-items-center justify-content-between">
          <Button type="primary" htmlType="submit">
            REGISTER
          </Button>
          <p>
            Already have an account
            <Link to="/login" className="custom-link">
            &nbsp;Click here to login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}
export default Register;
