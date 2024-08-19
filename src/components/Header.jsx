import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { PiReadCvLogo } from "react-icons/pi";

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ""; // Adjust path if necessary
    link.download = "Ammar_CV.pdf";
    link.click();
  };

  return (
    <button
      className="flex items-center text-gray-300 cursor-pointer"
      onClick={handleDownload}
    >
      <PiReadCvLogo className="w-7 h-7" />
      <p className="uppercase hidden md:inline-flex text-gray-400 ms-3">
        Download CV
      </p>
    </button>
  );
};

function Header() {
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
        <DownloadCVButton />
      </motion.div>
    </header>
  );
}

export default Header;
