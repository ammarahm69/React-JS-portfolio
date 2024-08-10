import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirle from "./BackgroundCirle";
function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ammar Ahmed",
      "Guy-who-loves-Coffee.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center text-center overflow-hidden mt-32">
        <BackgroundCirle />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
      </h1>
    </div>
  );
}

export default Hero;
