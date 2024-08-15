import React from "react";
import { motion } from "framer-motion";
import Image1 from "./bg-2.jpg";

export default function BackgroundCirle() {
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
        <div className="border border-[#333333] h-[200px] w-[200px] rounded-full  animate-ping" />
        <div className="border [#333333] absolute h-[350px] w-[350px] rounded-full  animate-ping" />
        <div className="border border-[#787575] border-2		border-r-white absolute  h-[620px] w-[620px] rounded-full animate-spin" />
      </motion.div>
      <div>
        <img
          src={Image1}
          alt=""
          className="w-44 h-44 rounded-full -mt-52 mx-auto"
        />
      </div>
    </>
  );
}
