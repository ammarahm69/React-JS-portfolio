import React from "react";
import { motion } from "framer-motion";
import { FcGraduationCap } from "react-icons/fc";

function Education() {
  return (
    <div className="h-screen relative flex flex-col text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Education
      </h3>
      <motion.div
        initial={{ x: -400 }}
        whileInView={{ x: 0}}
        transition={{ duration: 1.3 }}
      >

        <p className="text-3xl tracking-widest text-center flex"><FcGraduationCap className="mr-4 -mt-2" size={50}/>Virtual University Of Pakistan (BSCS)</p>
        <p className=" text-center mt-6 font-semibold tracking-widest text-red-500">2024-2028</p>
      </motion.div>
    </div>
  );
}

export default Education;
