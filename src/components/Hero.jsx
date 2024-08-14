import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirle from "./BackgroundCirle";
function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The Name's Ammar",
      "Guy-who-loves-Coffee.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center text-center overflow-hidden mt-32">
      <div className="mt-60">
        <BackgroundCirle />
      </div>

      <div>
        <h2 className="text-md uppercase tracking-[8px] ms-8 text-gray-500">
          Front End Developer
        </h2>
        <h1 className="lg:text-4xl mt-2 font-semibold md:text-2xl sm:text-2xl mr-2">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* Button for About,Skills*/}
      </div>
    </div>
  );
}

export default Hero;
