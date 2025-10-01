import React from "react";
import { motion } from "motion/react";
import { skillIcons } from "../assets/assets"; // ✅ from assets.js

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 
                 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5]"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#14213d] mb-10 relative"
      >
        About Me
        <span className="block w-16 h-1 bg-[#fca311] mx-auto mt-2 rounded"></span>
      </motion.h2>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl text-center md:text-left 
                   bg-white/80 backdrop-blur-md shadow-lg rounded-2xl 
                   p-8 md:p-12 space-y-6 border border-[#e5e5e5] mb-30"
      >
        <motion.p
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg leading-relaxed text-[#14213d]"
        >
          Hello! 👋 I'm{" "}
  <span className="font-semibold text-[#fca311]">
    Shigivahan Athithan
  </span>
  , a{" "}
  <span className="font-semibold text-[#000000]">Full Stack Developer</span> and{" "}
  <span className="font-semibold text-[#000000]">Data Science Enthusiast</span>.
  I enjoy designing intelligent, user-friendly applications and leveraging data
  to solve complex problems in real-world domains like healthcare, finance, and
  education.
        </motion.p>

        <motion.p
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg leading-relaxed text-[#14213d]"
        >
          With hands-on experience in{" "}
  <span className="font-semibold text-[#fca311]">
    React, Node.js, Python, TensorFlow, and SQL
  </span>
  , I have built projects ranging from{" "}
  <span className="font-semibold text-[#000000]">
    machine learning research
  </span>{" "}
  published in IEEE/Scopus to{" "}
  <span className="font-semibold text-[#000000]">
    hackathon-winning web apps
  </span>
  . Beyond coding, I love exploring new technologies, contributing to open
  source, and constantly challenging myself to grow as a developer and analyst.
        </motion.p>

        {/* Skills Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 mt-6 place-items-center"
        >
          {skillIcons.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 
                         rounded-xl bg-[#ffffff] hover:bg-[#fca311] 
                         border border-[#e5e5e5] shadow-md transition"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 text-[#14213d]"
              />
            </motion.div>
          ))}
        </motion.div>
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
    </section>
  );
};

export default About;
