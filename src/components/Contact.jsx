import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-3xl font-semibold">
        Contact
      </h3>
      <div className="space-y-10 flex flex-col mt-24">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <FaPhoneAlt color="#F7AB0A" className="animate-pulse h-7 w-7" />
            <p className="text-2xl">0312-2043539</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope color="#F7AB0A" className="animate-pulse h-7 w-7" />
            <p className="text-2xl">ammar69aa59@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaLocationDot color="#F7AB0A" className="animate-pulse h-7 w-7" />
            <p className="text-2xl">Gulistan-E-Johar Karachi,Pakistan</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input type="text" className="contactInput" />
            <input type="text" className="contactInput" />
          </div>
          <input type="text" className="contactInput" />

          <textarea className="contactInput"></textarea>
          <button className="">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
