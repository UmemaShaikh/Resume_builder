import React, { useEffect,useState } from "react";
import { Button, Form, Input,message } from "antd";
import '../resources/authentication.css'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';


function Register() {
  const[loading,setLoading]= useState(false);
  const navigate=useNavigate()
  const onFinish = async(values) => {
    setLoading(true);
    // console.log('form values:',values);
    try{
       const user=await axios.post('/api/user/login', values)  
         message.success("Login successful");
         localStorage.setItem("shaikhresume-user",JSON.stringify(user.data));
         setLoading(false);
         navigate('/home')
     }catch(error) {
        setLoading(false);
        message.error("login failed. Please try again.");
}
};

useEffect(()=>{
  if(localStorage.getItem("shaikhresume-user")){
    navigate('/home')
  }
});
  return (
    <div className="auth-parent">
      {loading && <div class="text-center" >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
       </div>
      </div>}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username" required='true'>
          <Input placeholder="Enter username" />
        </Form.Item>
        <Form.Item name="password" label="Password" required='true'>
          <Input type="password" placeholder="Enter password"/>
        </Form.Item>
        <div className="d-flex flex-column align-items-center justify-content-between">  
        <Button type="primary" htmlType="submit">
          Login
        </Button>
         <Link to='/register'  className="custom-link">Click here to Register</Link>
       
         </div>
      </Form>
    </div>
  );
}
export default Register;