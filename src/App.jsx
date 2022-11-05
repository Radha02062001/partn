import React from "react";
import Head from "./components/head/head";
import About from "./components/aboutus/about";
import Service from "./components/our service/service";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  ); 
};
export default App;
