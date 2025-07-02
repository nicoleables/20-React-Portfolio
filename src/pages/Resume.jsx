// eslint-disable-next-line no-unused-vars
import React from "react";
import MyResume from "../components/files/Resume.pdf";
import "../styles/resume.css";

function Resume() {
  return (
    <section className="my-resume">
      <h2>Resume</h2>
      <embed src={MyResume} type="application/pdf" className="resume-preview" />
      <a href={MyResume} download className="resume-button">Download Resume</a>
    </section>
  );
}

export default Resume;
