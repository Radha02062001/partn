import React from "react";
import Mainhero from "../hero/btnhero";
import Class from "../file";
import Cards from "../card/card";
import Application from "../apply/apply";
import Head from "../head/head";
const Home = () => {
  return (
    <>
    <Mainhero />
      <Class/>
      <Cards/>
      <Application/></>
  )
}

export default Home;