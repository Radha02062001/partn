import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

const Head = () => {
  return (
    <div className="Topnav">
      <h3>LOGO</h3>
    <a href="https://aadhar-main.netlify.app/">Home</a>
      <Link to="/Service">Our Services</Link>
      <Link to="/About">About us</Link>
    </div>
  );
};

export default Head;
