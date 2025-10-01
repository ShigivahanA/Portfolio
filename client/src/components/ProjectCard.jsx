import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, variant = "home" }) => {
  const isHome = variant === "home";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`h-full flex flex-col justify-between rounded-2xl shadow-md 
        transition cursor-pointer hover:-translate-y-1 duration-500 overflow-hidden ${
          isHome
            ? "bg-gradient-to-r from-[#ffffff] to-[#e5e5e5] text-[#14213d]"
            : "bg-[#ffffff] text-[#14213d] border border-[#e5e5e5]"
        }`}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title + Description */}
        {isHome ? (
          <p className="text-md mb-4 text-[#000000]/80 font-semibold">
            {project.title}
          </p>
        ) : (
          <>
            <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-4 text-[#000000]/70 line-clamp-3">
              {project.description}
            </p>
          </>
        )}

        {/* Tech Stack (home only) */}
        {isHome && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-[#fca311]/10 text-[#14213d] border border-[#fca311]/30 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <div className="mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="block text-center px-4 py-2 rounded-lg font-medium 
                       bg-[#fca311] text-[#000000] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition"
          >
            {isHome ? "Learn More →" : "Check Out →"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
