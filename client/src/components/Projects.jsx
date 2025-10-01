import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center 
                 px-6 md:px-12 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] 
                 py-16 pb-28 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#14213d] mb-12 relative text-center"
      >
        My Projects
        <span className="block w-16 h-1 bg-[#fca311] mx-auto mt-2 rounded"></span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full items-stretch">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}   // 👈 starts lower
            whileInView={{ opacity: 1, y: 0 }} // 👈 moves up into place
            transition={{ duration: 0.6, delay: index * 0.2 }} // stagger effect
          >
            <ProjectCard project={project} variant="home" />
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-20 mb-20"
      >
        <Link
          to="/projects"
          className="px-8 py-3 rounded-full bg-[#fca311] text-black font-semibold 
                     shadow transition hover:bg-[#14213d] hover:text-white"
        >
          Explore More Projects →
        </Link>
      </motion.div>

      {/* Heartbeat Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className="w-full h-28"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,50 300,150 450,100 C600,50 750,150 900,100 C1050,50 1200,150 1440,100 L1440,150 L0,150 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default Projects;
