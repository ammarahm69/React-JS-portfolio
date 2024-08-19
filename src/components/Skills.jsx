import React from "react";
import Proficient from "./Proficient";
import Html from "./html.svg";
import Css from "./css.svg";
import Js from "./javascript.svg";
import Tailwind from "./tailwind.svg";
import Taterial from "./materialui.svg";
import ReactIcon from "./react.svg";
import FirebaseIcon from "./firebase.svg";
import Bootstrap from './bootstarp.svg'
function Skills() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px:10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Skills
      </h3>

      <h3 className="absolute uppercase tracking-[3px] top-40 text-gray-500 text-sm">
        Hover a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 absolute top-56">
        <Proficient />
        <Proficient />
        <Proficient />
        <Proficient />
        <Proficient />
        <Proficient />
        <Proficient />
        <Proficient />
        <Proficient />
      </div>
    </div>
  );
}

export default Skills;
