import React from "react";
import Case1 from "./case-1.png";
import Case2 from "./case-2.png";
import Case3 from "./case-3.png";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Amazon Clone",
      description:
        "A fully responsive e-commerce application built with React and Redux, replicating Amazon's core features. Users can add or remove items to their cart. Includes Firebase authentication, demonstrating skills in front-end development and state management. Also optimized for both desktop and mobile devices.",
      link: "https://amazon-react-clone-coral.vercel.app/",
    },
    {
      id: 2,
      name: "AirBnb",
      description:
        "An Airbnb clone built with React, featuring a custom date picker component. Users can search for listings, select dates, and book stays. This project showcases my skills in front-end development and UI/UX design. Supported only on desktop",
      link: "https://airbnb-react-js-inky.vercel.app/",
    },
    {
      id: 3,
      name: "Meet Ahsan",
      description:
        "An innovative educational platform designed to connect learners with expert instructors. 'Meet Ahsan' offers a wide range of courses, personalized learning paths, and interactive sessions. Built with a user-friendly interface, the platform focuses on making education accessible and engaging for everyone. This project demonstrates my ability to create impactful digital learning experiences.",
      link: "https://meet-ahsan.vercel.app",
    },
  ];

  const images = [Case1, Case2, Case3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute flex flex-col items-center top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Projects
        <span className="text-sm tracking-widest mt-3">Scroll-x</span>
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[85%] flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 p-10 md:p-16 lg:p-24 h-screen mt-20 min-[320px]:w-screen max-[770px]:w-screen xl2:w-[800px]"
          >
            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={images[index]}
              alt={`Project ${project.name}`}
              className="w-full h-auto object-cover"
            />

            <div className="space-y-10 px-0 md:px-0 max-w-6xl">
              <a href={project.link} target="_blank">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1} of {projects.length}
                  </span>
                  : {project.name}
                </h4>
                <p className="text-center text-sm">{project.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/30 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
