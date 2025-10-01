import React,{useState} from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../assets/assets";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);


  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#e5e5e5]">
        <h2 className="text-2xl font-bold text-[#14213d]">Project not found</h2>
        <Link
          to="/projects"
          className="mt-4 text-[#fca311] hover:text-[#14213d] transition"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
    <Helmet>
      <title>{project.title} | Project Details</title>
      <meta name="description" content={`Details about the project "${project.title}". Tech stack: ${project.tech.join(", ")}.`} />
      <link rel="canonical" href={`https://shigiportfolio.vercel.app/projects/${project.id}`} />
    </Helmet>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] text-[#14213d]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          to="/projects"
          className="inline-block mb-6 text-[#fca311] hover:text-[#14213d] font-medium transition"
        >
          ← Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
          {project.title}
        </h1>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl shadow-lg mb-6"
          loading="lazy"
        />

        {/* Description */}
        <p className="text-lg mb-6">{project.details}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#fca311]/20 text-[#14213d] rounded-lg font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-[#14213d] mb-4">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer w-full h-48 object-cover rounded-lg shadow-md border border-[#e5e5e5] hover:shadow-xl"
                />
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#14213d] text-white hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#fca311] transition"
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#fca311] text-black hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default ProjectDetail;
