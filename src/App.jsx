import React from "react";
import Class from "./components/file";
import Abhi from "./components/hero/btnhero";
import Application from "./components/apply/apply";
import Cards from "./components/card/card";
import Head from "./components/head/head";
import Heads from "./components/aboutus/about";

const App = () => {
  return (
    <>
      <Head />
      <Abhi />

      <Class />
      <Cards />

      <Application />
      <Heads />
    </>
  );
};
export default App;
