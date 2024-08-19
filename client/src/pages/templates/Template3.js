import React from "react";
import "../../resources/templates.css";

function Template3() {
  const user = JSON.parse(localStorage.getItem("shaikhresume-user"));
  return (
    <div className="template3-parent">
      <div className="template-header-flex flex-column justify-content-end">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <div>
          <p>{user.Email}</p>
          <p>{user.address}</p>
        </div>
      </div>

      <div className="divider mt-2"></div>
      <div className="objective mt-2">
      <h3>Objective</h3>

        <p>{user.objective}</p>
      </div>

      <div className="divider mt-2"></div>

      <div className="projects mt-2">
        <h3>Projects</h3>
        {user.projects.map((project, index) => (
          <div key={index} className="d-flex flex-column">
            <b>
              {" "}
              <p>{project.Title}</p>
            </b>
            <p style={{ fontSize: 18 }}>{project.year}</p>
            <ul>
              {project.description.split("\n").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="divider mt-2"></div>

      <div className="Education mt-2">
        <h3>Education</h3>
        {user.Education.map((Education) => {
          return (
            <div className="d-flex align-items-center">
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

      <div className="divider mt-2"></div>
      <div className="Experience mt-2">
        <h3>Experience</h3>
        {user.Experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
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

      <div className="divider mt-2"></div>
      

      <div className="Skills mt-2">
        <h3>Skills</h3>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill.technology}</li>
          ))}
        </ul>
      </div>


    </div>
  );
}

export default Template3;
