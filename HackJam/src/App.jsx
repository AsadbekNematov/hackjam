import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Collaborators from "./components/Collaborators";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Home />
      <About />
      <Schedule />
      <Collaborators />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
