/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "./Navigation";
import "../styles/header.css";

function Header() {
  return (
    <header className="header-class">
      <h1>Hello, I'm <span>Nicole Ables</span></h1>
      <p>Transforming ideas into reality as a full-stack web developer</p>
      <Navigation />
    </header>
  );
}

export default Header;
