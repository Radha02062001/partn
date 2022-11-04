import React from "react";
import Class from "./components/file";
import Abhi from "./components/hero/btnhero";
import Application from "./components/apply/apply";
import Cards from "./components/card/card";
import Head from "./components/head/head";
import Heads from "./components/aboutus/about";
import Service from "./components/our service/service";
import Partner from "./components/review/review";
import Bottom from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Head />
      <Abhi />
      <Class />
      <Cards />
      <Service />
      <Heads />
      <Application />
      <Partner />
      <Bottom />
    </>
  );
};
export default App;
