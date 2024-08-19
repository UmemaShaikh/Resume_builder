import React from 'react';
import {Form ,Input} from 'antd';
import TextArea from 'antd/es/input/TextArea';

function PersonalInfo() {
  return (
    <div>
       <div className="row">
        <div className="col-md-4">
          <Form.Item name="firstName" label="First Name" rules={[{required:true, message:"Please enter your firstname"}]}>
            <Input/>
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="lastName" label="Last Name" rules={[{required:true, message:"Please enter your laststname"}]}>
            <Input/>
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="Email" label="E-mail" rules={[{required:true, message:"Please enter your email"}]}>
            <Input/>
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="mobilenum" label="Mobile Number" rules={[{required:true, message:"Please enter your mobile number"}]}>
            <Input/>
          </Form.Item>
        </div>

        <div className="col-md-4">
          <Form.Item name="portfolio" label="Portfolio" rules={[{required:true, message:"Please enter your portfolio URL"}]}>
            <Input/>
          </Form.Item>
        </div>
        
        <div className="col-md-12">
        <Form.Item name="objective" label="Objective" rules={[{required:true, message:"Please enter your objective"}]}>
            <TextArea/>
          </Form.Item>
        </div>

        <div className="col-md-12">
        <Form.Item name="address" label="Address" rules={[{required:true, message:"Please enter your address"}]}>
            <TextArea/>
          </Form.Item>
        </div>
       </div>
    </div>
  )
}

export default PersonalInfo