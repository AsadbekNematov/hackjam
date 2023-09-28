import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Socials from "./components/Socials";
import Sponsors from "./components/Sponsors";

function App() {

  return (
    <>
      <Home />
      <About />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Socials />
    </>
  );
}

export default App;
