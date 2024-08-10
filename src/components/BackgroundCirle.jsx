import React from "react";
import { motion } from "framer-motion";
export default function BackgroundCirle() {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,1,2,2,3,1],
        opacity:[0.9 ,0.7,0.5 ,0.8 ,0.9,0.5],
        borderRadius:["20%" , "20%" ,"50%","80%" , "20%"]
    }}
    transition={{
        duration:2.5
    }}
    className="relative flex justify-center items-center">
      <div className="border border-[#333333] h-[200px] w-[200px] rounded-full mt-52 animate-ping" />
      <div className="border [#333333] absolute h-[300px] w-[300px] rounded-full mt-52 animate-ping" />
      <div className="border border-[#f5fd14] absolute h-[500px] w-[500px] rounded-full mt-52" />
    </motion.div>
  );
}
