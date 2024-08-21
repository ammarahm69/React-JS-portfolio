import React from "react";
import { motion } from "framer-motion";
import { FcGraduationCap } from "react-icons/fc";

function Education() {
  return (
    <div className="h-auto md:h-screen relative flex flex-col text-center md:text-left overflow-hidden md:flex-row max-w-full px-5 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl md:text-3xl font-semibold">
        Education
      </h3>
      {/* Conditionally apply motion.div only on md and above */}
      <motion.div
        initial={{ y: -200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.3 }}
        className="hidden md:block mt-20 md:mt-0"
      >
        <p className="text-xl md:text-3xl tracking-widest flex items-center justify-center">
          <FcGraduationCap className="mr-2 md:mr-4 -mt-1 md:-mt-2" />
          Virtual University Of Pakistan (BSCS)
        </p>
        <p className="text-lg md:text-xl text-center mt-4 md:mt-6 font-semibold tracking-widest text-red-500">
          2024-2028
        </p>
      </motion.div>
      {/* Show content without motion on small screens */}
      <div className="block md:hidden mt-20 md:mt-0">
        <p className="text-xl md:text-3xl tracking-widest flex items-center justify-center mt-8">
          <FcGraduationCap className="-mt-1 mr-2" />
          Virtual University Of Pakistan (BSCS)
        </p>
        <p className="text-lg md:text-xl text-center mt-4 md:mt-6 font-semibold tracking-widest text-red-500">
          2024-2028
        </p>
      </div>
    </div>
  );
}

export default Education;
