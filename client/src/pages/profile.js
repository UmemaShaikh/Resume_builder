import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Tabs,Form, Button,message} from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';


function Profile(){
  const [loading,setLoading]= useState(false)
  const user=JSON.parse(localStorage.getItem("shaikhresume-user"))
  const onFinish = async(values) => {
    setLoading(true);
    try{
        const result=await axios.post('http://localhost:3000/api/user/update', {...values, _id:user._id });
        localStorage.setItem("shaikhresume-user",JSON.stringify(result.data));
        setLoading(false)
        message.success("Profile updated successfully");
     }catch(error) {
       setLoading(false)
       message.error("Profile update is failed. Please try again.");
}
};
  const items = [
    {
      key: '1',
      label: 'Personal Info',
      children: <PersonalInfo/>,
    
    },
  {
    key: '2',
    label: 'Education and Skills',
    children:<SkillsEducation/>,
  },
  {
    key: '3',
    label: 'Experience and Project',
    children:<ExperienceProjects/>,
  },
];
  return(
     <DefaultLayout> 
      
      <div className='update-profile'>
      {loading && <div class="text-center" >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
       </div>
      </div>}
        <h3>Update Profile</h3>
        <hr />
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
        <Tabs items={items} />
        <Button htmlType='submit'>UPDATE</Button>
        </Form>
        </div>
        </DefaultLayout>
    ) ;
};
    
    
export default Profile;