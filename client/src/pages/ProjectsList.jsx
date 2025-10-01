import React from "react";
import { motion } from "motion/react";
import { projects } from "../assets/assets";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProjectsList = () => {
  return (
    <>
    <Helmet>
      <title>All Projects | Shigivahan Athithan</title>
      <meta name="description" content="Browse all my software development and data projects, including full-stack apps, dashboards, AI tools, and more." />
      <link rel="canonical" href="https://shigiportfolio.vercel.app/projects" />
    </Helmet>
    <motion.section
      id="projects-list"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen px-6 md:px-12 py-16 
                 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] scroll-mt-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-[#14213d] mb-12 relative text-center"
      >
        All Projects
        <span className="block w-20 h-1 bg-[#fca311] mx-auto mt-2 rounded"></span>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="list" />
        ))}
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12 flex justify-center"
      >
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-[#fca311] text-black font-semibold 
                     shadow hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition mb-20 lg:mb-10"
        >
          ← Back to Home
        </Link>
      </motion.div>
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
    </motion.section>
    </>
  );
};

export default ProjectsList;
