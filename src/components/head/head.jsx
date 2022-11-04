import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

const Head = () => {
  return (
    <div className="Topnav">
      <h3>LOGO</h3>
    <Link to="/">Home</Link>
      <Link to="/Service">Our Services</Link>
      <Link to="/About">About us</Link>
    </div>
  );
};

export default Head;
