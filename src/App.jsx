import React from "react";
import Class from "./components/file";
import Abhi from "./components/hero/btnhero";
import Application from "./components/apply/apply";
import Cards from "./components/card/card";
import Head from "./components/head/head";
import Heads from "./components/aboutus/about";
import Service from "./components/our service/service";

const App = () => {
  return (
    <>
      <Head />
      <Abhi />
      <Service />
      <Heads />
      <Application />
    </>
  );
};
export default App;
