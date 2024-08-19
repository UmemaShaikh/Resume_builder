import React from "react";
import "../../resources/templates.css";

function Template5() {
  const user = JSON.parse(localStorage.getItem("shaikhresume-user"));
  return (
    <div className="template5-parent">
      <div className="template-header d-flex flex-column align-items-center">
        <h1
          style={{
            color: '#20349F',
          }}
        >
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <p>
          {user.Email} | {user.mobilenum}
        </p>
        <p>{user.address}</p>
      </div>

      <div className="divider mt-3"></div>

      <div className="objective mt-3">
        <h3>objective</h3>
        <p>{user.objective}</p>
      </div>

      <div className="divider mt-3"></div>

      <div className="Education mt-3">
        <h3>Education</h3>
        {user.Education.map((Education) => {
          return (
            <div className="d-flex align-items-baseline">
              <h6 style={{ width: 120 }}>
                <b>{Education.year}:</b>
              </h6>
              <p>
                <b>{Education.Qualification}</b> with{" "}
                <b>{Education.Percentage}%</b> in {Education.Institution}{" "}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>
      <div className="Experience mt-3">
        <h3>Experience</h3>
        {user.Experience.map((exp) => {
          return (
            <div className="d-flex align-items-baseline">
              <h6 style={{ width: 120 }}>
                <b>{exp.year}:</b>
              </h6>
              <p>
                <b>{exp.Company}</b> in <b>{exp.Place}</b>{" "}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>
      <div className="projects mt-2">
        <h3>Projects</h3>
        {user.projects.map((project, index) => (
          <div key={index} className="d-flex flex-column">
            <b>
              {" "}
              <p style={{color:'#20349F'}}>{project.Title}</p>
            </b>
            <p>{project.year}</p>
            <ul type="square">
              {project.description.split("\n").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="divider mt-3"></div>
      <div className="skills mt-2">
        <h3>Skills</h3>
        <ul type="square" className="d-flex flex-column">
          {user.skills.map((skill) => (
            <li>{skill.technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Template5;
