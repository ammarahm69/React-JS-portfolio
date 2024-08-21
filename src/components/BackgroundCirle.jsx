import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image1 from "./bg-2.jpg";

// Utility function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function BackgroundCirle() {
  const [randomColor, setRandomColor] = useState(getRandomColor());

  useEffect(() => {
    // Change the color every 2 seconds
    const intervalId = setInterval(() => {
      setRandomColor(getRandomColor());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 1, 2, 2, 3, 1],
          opacity: [0.9, 0.7, 0.5, 0.8, 0.9, 0.8],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex justify-center items-center"
      >
        <div className="border-2 border-[#333333] h-[200px] w-[200px] rounded-full animate-ping" />
        <div
          className="border-4 absolute h-[350px] w-[350px] rounded-full animate-ping"
          style={{
            borderColor: randomColor,
            boxShadow: `0 0 15000px ${randomColor}, 0 0 15000px ${randomColor}`,
          }}
        />
        <div className="border-2 border-[#787575] absolute h-[620px] w-[620px] rounded-full" />
      </motion.div>
      <div>
        <img
          src={Image1}
          alt=""
          className="w-44 h-44 rounded-full -mt-60 mx-auto"
        />
      </div>
    </>
  );
}
