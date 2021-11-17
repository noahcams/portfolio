import React from "react";
import Typed from 'react-typed';

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Software Engineer</h1>
        <Typed className="typed-text" 
          strings={["Front End", "Back End", "MERN Stack", "Web Development", "Noah Camara"]}
          typeSpeed={40}
          backSpeed={60}
        />
        <a href="#" className="btn-main">Contact Me</a>
      </div>
    </div>
  )
}
