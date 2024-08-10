import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }} // Initial state
        animate={{x:0 , opacity:1 , scale:1}} // Animate to this state
        transition={{ duration:1.5 }} // Duration of the animation
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://web.facebook.com/profile.php?id=100016571412698"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://web.facebook.com/profile.php?id=100016571412698"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://web.facebook.com/profile.php?id=100016571412698"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{ x:500 , opacity:0 , scale:0.5 }} // Initial state
        animate={{ x:0 , opacity:1 , scale:1}} // Animate to this state
        transition={{ duration: 1.5 }} // Duration of the animation
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
