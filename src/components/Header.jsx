import React from "react";
import Navigation from "./Navigation";
import "../index.css";

function Header() {
  return (
    <header className="header-class">
      <h1>Hello, I'm Nicole Ables</h1>
      <p>I'm a full-stack web developer</p>
      <Navigation />
    </header>
  );
}

export default Header;