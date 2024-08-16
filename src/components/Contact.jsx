import React from "react";

function Contact() {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Contact
      </h3>
      <div className="space-y-10 flex flex-col">
        <h4 className="text-4xl font-semibold text-center">
            I have got just what you need {" "}
            <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
