import React from "react";
import Proficient from "./Proficient";
import Html from "./html.svg";
import Css from "./css.svg";
import Js from "./javascript.svg";
import Tailwind from "./tailwind.svg";
import Taterial from "./materialui.svg";
import ReactIcon from "./react.svg";
import FirebaseIcon from "./firebase.svg";
import Bootstrap from "./bootstarp.svg";
function Skills() {
  const skills = [
    { id: 1, image: Html, proficiency: "90%" },
    { id: 2, image: Css, proficiency: "75%" },
    { id: 3, image: Js, proficiency: "60%" },
    { id: 4, image: Tailwind, proficiency: "70%" },
    { id: 5, image: Taterial, proficiency: "70%" },
    { id: 6, image: ReactIcon, proficiency: "75%" },
    { id: 7, image: FirebaseIcon, proficiency: "65%" },
    { id: 8, image: Bootstrap, proficiency: "80%" },
  ];
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px:10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Skills
      </h3>

      <h3 className="absolute uppercase tracking-[3px] top-40 text-gray-500 text-sm">
        Hover a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 absolute top-56">
        {skills.map((skill) => (
          <Proficient
            key={skill.id}
            image={skill.image}
            proficiency={skill.proficiency}
            directionLeft={skill.directionLeft}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
