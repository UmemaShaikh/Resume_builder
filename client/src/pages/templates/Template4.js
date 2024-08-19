import React from "react";
import "../../resources/templates.css";

function Template4() {
  const user = JSON.parse(localStorage.getItem("shaikhresume-user"));
  return (
    <div className="template4-parent">
      <div className="template-header d-flex flex-column align-items-center">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <p>
          {user.Email} | {user.mobilenum}
        </p>
        <p>{user.address}</p>
      </div>

      <div className="divider mt-2"></div>

      <div className="objective mt-2">
        <h3>Objective</h3>
        <hr />

        <p>{user.objective}</p>
      </div>

      <div className="divider mt-2"></div>

      <div className="education mt-2">
        <h3>Education</h3>
        <hr />

        {user.Education.map((Education) => (
          <div className="d-flex align-items-center">
            <h6 style={{ width: 120 }}>
              <b>{Education.year}:</b>
            </h6>
            <p>
              {Education.Qualification} {Education.Percentage}%{" "}
            </p>
            <p>&nbsp;{Education.Institution}</p>
          </div>
        ))}
      </div>

      <div className="divider mt-2"></div>
      <div className="experience mt-2">
        <h3>Experience</h3>
        <hr />

        {user.Experience.map((exp) => (
          <div className="d-flex">
            <h6 style={{ width: 120 }}>
              <b>{exp.year}:</b>
            </h6>
            <p>
              <b>{exp.Company}</b> in {exp.Place}
            </p>
          </div>
        ))}
      </div>

      <div className="divider mt-2"></div>
      <div className="projects mt-2">
        <h3>Projects</h3>
        <hr />
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
      <div className="skills mt-2">
        <h3>Skills</h3>
        <hr />
        <ul className="d-flex flex-column">
          {user.skills.map((skill) => (
            <li>{skill.technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Template4;
