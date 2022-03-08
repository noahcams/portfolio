import React from "react";
import Typed from 'react-typed';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Android Developer</h1>
        <Typed className="typed-text" 
          strings={["Front End", "Back End", "Web Development", "Noah Camara"]}
          typeSpeed={40}
          backSpeed={60}
        />
        <Link to="/contact" className="btn-main">Contact Me</Link>
      </div>
    </div>
  )
}
