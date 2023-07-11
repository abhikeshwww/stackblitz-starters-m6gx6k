import React from "react";
import "./style.css";
import About from "./Components/About";
import Head from "./Components/Head";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="font-Sora">
      <Head></Head>
      <Home></Home>
      <About />
      <Resume />
      <Contact />
    </div>
  );
}
