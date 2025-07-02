// eslint-disable-next-line no-unused-vars
import React from "react";
import MyImg from "../components/images/IMG.jpg";
import "../styles/about.css";

function About() {
  return (
    <section className="about-me">
      <div className="content">
        <h2>About Me</h2>
        <p className="about-text">
          Hi there! I’m Nicole Ables, a passionate full-stack developer based in Brownwood, Texas. 
          I recently completed an edX bootcamp through The University of Austin Texas, where I gained 
          critical skills to build dynamic web applications and deploy them. <br /><br />
          I am proficient in <strong>JavaScript</strong> (React, Node.js), <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Git</strong>. 
          I am also familiar with database management using <strong>SQL</strong> and <strong>MongoDB</strong>. 
          I adapt swiftly to new programming languages, frameworks, and tools. During the bootcamp, 
          I collaborated on group projects, demonstrating strong teamwork and communication skills. <br /><br />
          I’m passionate about creating web applications that solve real-world problems, 
          and I’m committed to delivering user-friendly experiences, whether it’s front-end design or back-end functionality.
        </p>
      </div>
      <img src={MyImg} alt="Nicole Ables" className="resized-image" />
    </section>
  );
}

export default About;
