import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const CertificateCard = ({ cert, showMeta = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden 
                 border border-[#e5e5e5] hover:shadow-lg 
                 transition cursor-pointer hover:-translate-y-1 duration-500 
                 flex flex-col h-full"
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-40 object-cover"
        loading="lazy"
      />

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[#14213d] mb-2 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">Issued by {cert.issuer}</p>

        {showMeta && (
          <p className="text-sm text-gray-500 mb-4">
            {cert.displaydate}
            {cert.expiry && ` · ${cert.expiry}`}
          </p>
        )}
        <div className="mt-auto">
          <Link
            to={`/certificates/${cert.id}`}
            className="block w-full text-center px-4 py-2 rounded-md 
                       bg-[#fca311] text-black font-medium 
                      hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
