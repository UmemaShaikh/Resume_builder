import React from 'react';
import '../../resources/templates.css'

function Template2() {
  const user= JSON.parse(localStorage.getItem("shaikhresume-user"));
  return (
    <div className='template2-parent'>
      <div className='template-header d-flex flex-column justify-content-end'>
        <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
        <div>
          <p>{user.Email}</p>
          <p>{user.address}</p>
          <p>{user.mobilenum}</p>
        </div>
      </div>
      
      <div className='divider mt-3'></div>

      <div className='objective mt-3'>
        <h3>objective</h3>
        {/* <hr /> */}
        <p>{user.objective}</p>
      </div>

      <div className='divider mt-3'></div>

      <div className='Education mt-3'>
        <h3>Education</h3>
        {/* <hr /> */}
        {user.Education.map((Education)=>{
          return (<div className='d-flex align-items-center'>
            <h6 style={{width:120}}><b>{Education.year}:</b></h6>
            <p><b>{Education.Qualification}</b> with <b>{Education.Percentage}%</b> in {Education.Institution} </p>
          </div>
          );
        })}
      </div>

      <div className='divider mt-3'></div>
      <div className='Experience mt-3'>
        <h3>Experience</h3>
        {/* <hr /> */}
        {user.Experience.map((exp)=>{
          return (<div className='d-flex align-items-center'>
            <h6 style={{width:120}}>
              <b>{exp.year}:</b>
              </h6>
            <p><b>{exp.Company}</b> in <b>{exp.Place}</b> </p>
          </div>
          );
        })}
      </div>

      <div className='divider mt-3'></div>
      <div className='projects mt-3'>
        <h3>Projects</h3>
        {/* <hr /> */}
        {user.projects.map((project)=>{
          return (<div className='d-flex align-items-center'>
            <h6>
              <b>{project.Title} [{project.year}]:</b>
            </h6>
            <p>{project.description}</p>
          </div>
          );
        })}
      </div>


      <div className='divider mt-3'></div>
      <div className='Skills mt-3'>
        <h3>Skills</h3>
        {/* <hr /> */}
        {user.skills.map((skill)=>{
          return (
             <p>{skill.technology}</p>           
          );
        })}
      </div>

    </div>
  );
}

export default Template2