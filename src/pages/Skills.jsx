// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/skills.css";

function Skills() {
  return (
    <section className="my-skills">
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {/* Front-end Skills */}
          <div className="skills-card">
            <h3>Front-End</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Git</li>
              <li>JSX</li>
              <li>TypeScript</li>
            </ul>
          </div>

          {/* Back-end Skills */}
          <div className="skills-card">
            <h3>Back-End</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL Databases</li>
              <li>NoSQL Databases</li>
              <li>MVC</li>
              <li>ORM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
