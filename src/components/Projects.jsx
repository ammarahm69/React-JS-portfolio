import React from "react";
import Case1 from "./case-1.png";
import { motion } from "framer-motion";
function Projects() {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:5}}
    
    className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[85%] flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 p-10 md:p-16 lg:p-24 h-screen mt-20 min-[320px]:w-screen max-[770px]:w-screen xl2:w-[800px] "
          >
            <motion.img
            initial={{
              y:-300,
            }}
            transition={{duration:1.2}}
            whileInView={{opacity:1 , y:0}}
            viewport={{once: true}}
              src={Case1}
              alt={`Project ${project}`}
              className="w-full h-auto object-cover"
            />

            <div className="space-y-10 px-0 md:px-0 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {" "}
                  Case Study {index + 1} of {projects.length}
                </span>
                : Amazon-Clone
              </h4>
              <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat! Veritatis dolores aut aliquam nihil quae, error esse facilis, ducimus inventore quas, quaerat corrupti sed earum in asperiores dolore praesentium!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/30 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
