import React from "react";
import { useParams, Link } from "react-router-dom";
import { certificates } from "../assets/assets";
import { motion } from "motion/react";

const CertificateDetail = () => {
  const { id } = useParams();
  const cert = certificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Certificate not found</h2>
        <Link to="/certificates" className="mt-4 text-[#fca311] hover:underline">
          ← Back to Certificates
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] text-[#14213d]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/certificates"
          className="inline-block mb-6 text-[#fca311] hover:text-[#14213d] transition"
        >
          ← Back to Certificates
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{cert.title}</h1>

        {/* Certificate Image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full rounded-xl shadow-lg mb-6"
          loading="lazy"
        />

        {/* Details */}
        <p className="text-lg mb-6 text-justify">{cert.details}</p>

        {/* Info */}
        <div className="mb-6 space-y-1">
          <p>
            <span className="font-semibold">Issuer:</span> {cert.issuer}
          </p>
          <p>
            <span className="font-semibold">Issued:</span> {cert.date}
          </p>
          {cert.expiry && (
              <p>
                <span className="font-semibold">Expiry:</span> {cert.expiry}
              </p>
            )}
        </div>

        {/* Skills Gained */}
        {cert.skills && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-[#14213d]">
              Skills Gained:
            </h3>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium 
                             bg-[#fca311] text-black hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verify Button */}
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#fca311] text-black font-semibold 
                       hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition"
          >
            Verify Certificate →
          </a>
        )}
      </div>
    </motion.section>
  );
};

export default CertificateDetail;
