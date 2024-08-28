import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirle from "./BackgroundCirle";
import { Link } from "react-router-dom";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The Name's Ammar",
      "Guy-who-loves-Coffee.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center text-center overflow-hidden mt-32">
      <div className="mt-72">
        <BackgroundCirle />
      </div>

      <div className="z-20">
        <h2 className="text-md uppercase tracking-[8px] ms-8 text-gray-500">
          Front End Developer
        </h2>
        <h1 className="lg:text-4xl mt-2 font-semibold md:text-2xl sm:text-2xl mr-1">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* Button for About,Skills*/}
        <div className="pt-4">
         <a href="#about">
            <button className="heroButton">About</button>
         </a>
         
          <a href="#education">
            <button className="heroButton tracking-widest">Education</button>
          </a>
          <a href="#skills">
            <button className="heroButton tracking-widest">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton tracking-widest">Projects</button>
          </a>
          <a href="#contact">
            <button className="heroButton tracking-widest">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
