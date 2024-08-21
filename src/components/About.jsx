import React from "react";
import { motion } from "framer-motion";
import Image2 from "./bg-4.jpeg";

function About() {
  return (
    <div className="flex flex-col relative h-auto md:h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center mt-24 md:mt-36">
      <h3 className="absolute top-10 md:top-16 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl md:text-3xl font-semibold">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={Image2}
        className="mt-20 md:mt-0 flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[450px]"
      />
      <div className="space-y-3 px-4 md:px-10 mt-10 md:mt-14">
        <h1 className="text-2xl md:text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}
          background
        </h1>
        <p className="text-sm md:text-base">
          Hello! My name is <span className="text-red-500">Ammar Ahmed</span>, I
          like creating new things for internet. From a younger age, I have been
          interested in programming. As a kid, most of my time I've spent in
          inspect element playing with colors and codes, generating loops for
          sending infinite messages, cracking locked screen overflows, and many
          more. Finally, at the age of 17, I decided to convert this passion
          into a career. I am a passionate Frontend Web Developer with
          experience in building websites using the latest technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
