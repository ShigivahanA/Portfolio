import React from "react";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="top"
      className="w-full text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 lg:pt-28 sm:pt-32 
      bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] relative"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={assets.my_image}
          alt="Profile"
          className="rounded-full  w-40 sm:w-32 md:w-40 lg:w-44 xl:w-56 shadow-lg border-4 border-[#0000]"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-Ovo text-xl sm:text-2xl lg:text-3xl flex items-end gap-2 mb-3 text-[#14213d]"
      >
        Hi, I’m{" "}
        <span className="text-[#fca311] font-bold">Shigivahan Athithan</span>
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-4xl lg:text-[45px] font-Ovo text-[#000000]"
      >
        Transforming Concepts into Results
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-[#14213d]/80"
      >
        Blending logic and creativity to craft meaningful digital experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
      >
        <a
          href="/resume.pdf"
          download
          className="px-10 py-3 border-2 rounded-full flex gap-2 items-center 
          bg-[#fca311] border-[#fca311] text-[#000000] font-medium hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]
          mb:-10 lg:mb-30 transition"
        >
          Download Resume
          <img
            src={assets.download_icon}
            alt=""
            className="w-4 invert-[0.2]"
          />
        </a>
      </motion.div>

      {/* Heartbeat Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,50 300,150 450,100 C600,50 750,150 900,100 C1050,50 1200,150 1440,100 L1440,150 L0,150 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
