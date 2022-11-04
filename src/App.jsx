import React from "react";
import Class from "./components/file";
import Abhi from "./components/hero/btnhero";
import Application from "./components/apply/apply";
import Cards from "./components/card/card";
import Head from "./components/head/head";
import Partner from "./components/review/review";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Head />
      <Abhi />
      <Cards />
      <Class />
      <Partner />
      <Application />
      <Footer />
    </>
  );
};
export default App;
