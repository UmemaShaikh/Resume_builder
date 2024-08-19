import React from "react";
import {Button,Dropdown} from "antd";
import './../resources/defaultlayout.css'
import { Link,useNavigate } from 'react-router-dom';
import { UserOutlined } from "@ant-design/icons";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => {
        localStorage.removeItem('shaikhresume-user');
        navigate('/login');
      }}>Logout</span>
  );
}; 

function DefaultLayout(props){
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem('shaikhresume-user'))
  const items= [
    {
      key: '1',
      label: (
        <Link to="/home" style={{textDecoration:'none'}}>Home</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/profile" style={{textDecoration:'none'}}>Profile</Link>
      ),
    },
    {
      key: '3',
      label:<LogoutButton />,
    },
  ];
  

    return(
        <div className="layout">
         <div className="header">
           <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>Resume Builder</h1>
           <Dropdown menu={{items}} placement="bottomLeft">
           <Button icon={<UserOutlined />}>{user.username}</Button>
           </Dropdown>
         </div>
         <div className="content" style={{overflow:'scroll'}}>
           {props.children}
         </div>
        </div>
    )
}
export default DefaultLayout