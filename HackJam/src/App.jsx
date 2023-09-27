import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Socials from "./components/Socials";
import Sponsors from "./components/Sponsors";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <About />
      <Schedule />
      <Sponsors />
      <Socials />
      <FAQ />
    </>
  );
}

export default App;
