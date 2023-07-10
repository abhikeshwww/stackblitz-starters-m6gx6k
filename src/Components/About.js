import React, { useState } from "react";
const About = () => {
  return (
    <div className="pt-32 pb-32 flex flex-col justify-center items-center">
      <div className="flex text-center relative">
        <h1 className="opacity-5 text-7xl mt-0 -mb-2">ABOUT ME</h1>
        <p className="text-4xl font-bold leading-10 absolute ">Know Me More</p>
        <span className="border border-blue-400 w-48 border-opacity-80 mb-11"></span>
      </div>

      <div className="flex justify-center ">
        <div className="flex-col">
          <h2 className="text-3xl font-bold">
            I'm <span className="text-blue-300">Abhikesh Wale,</span> a FrontEnd
            Developer
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incis nostrud exerlaborum.
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuitation ullamco laboris nin reprehenderit in
            voluptate velip proidentollorum.
          </p>
        </div>
        <div className="flex flex-1 flex-col w-1/4">
          <ul>
            <li>
              <b>Name</b>: Abhikesh Wale
            </li>
            <li>
              <b>Email:</b> abhikeshwale@gmail.com
            </li>
            <li>
              <b>Age:</b> 27
            </li>
            <li>
              <b>From:</b> Maharashtra, India
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex justify-center p-5">
          <li>
            <h1>4.5+</h1>
            <h2>Years Experiance</h2>
          </li>
          <li>
            <h1>JLPT N2</h1>
            <h2>Certified(8/2022)</h2>
          </li>
          <li>
            <h1>1.5+</h1>
            <h2>Years living in Japan</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
