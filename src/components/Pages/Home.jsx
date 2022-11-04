import React from "react";
import Mainhero from "../hero/btnhero";
import Class from "../file";
import Cards from "../card/card";
import Application from "../apply/apply";
import Partner from "../review/review";
import Bottom from "../footer/footer";
const Home = () => {
  return (
    <>
      <Mainhero />
      <Class />
      <Cards />
      <Application />
      <Partner />
      <Bottom />
    </>
  );
};

export default Home;
