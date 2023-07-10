import React from "react";
import "./style.css";
import About from './Components/About';
import Head from './Components/Head';
import Home from './Components/Home';

export default function App() {
  return (
    <div>
      <Head></Head>
    <Home></Home>
    <About/>
    </div>
  );
}
