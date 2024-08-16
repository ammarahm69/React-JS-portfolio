import React from "react";
import { motion } from "framer-motion";
import Image2 from "./bg-4.jpeg";

function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-36">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={Image2}
        className="mt-36 md:mb-0 flex-shrink-0 w-72 h-72 rounded-full object-cover md:rounded-lg md:w-64 xl:w-[400px] xl:h-[450px]"
      />
      <div className="space-y-3 px-0 md:px-10 mt-14">
        <h1 className="text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "}
          background
        </h1>
        <p className="">
          Hello! My name is <span className="text-red-500">Ammar Ahmed</span>, I
          like creating new things for internet. From a younger age, I have been
          interested in programming, as a kid most of my time I've spent in
          inspect element playing with colors and codes generating loops for
          sending infinite messages, cracking locked screen overflows and many
          more. so finally at the age of 17. I decided to convert this passion
          into career. A passionate Frontend Web Developer having an experience
          of building Websites with latest technology.
        </p>
      </div>
    </div>
  );
}

export default About;
