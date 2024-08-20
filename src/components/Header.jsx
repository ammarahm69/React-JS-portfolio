import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PiReadCvLogo } from "react-icons/pi";
import resume from "../pdf/front-end-cv.pdf";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }} // Initial state
        animate={{ x: 0, opacity: 1, scale: 1 }} // Animate to this state
        transition={{ duration: 1.5 }} // Duration of the animation
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/ammarahm69"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ammar-ahmed-0497b628b/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/ammar_ahm69/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* CV Icon */}
        <a
          href={resume}
          target="_blank"
          className="flex items-center space-x-2"
        >
          <PiReadCvLogo
            className="text-gray-500 hover:text-gray-700"
            size={28}
          />
          <span className="text-gray-500 hover:text-gray-700">Download CV</span>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
