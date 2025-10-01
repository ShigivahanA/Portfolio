import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fff] text-black py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-[#fca311] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#fca311] transition">
            About
          </a>
          <Link to="/projects" className="hover:text-[#fca311] transition">
            Projects
          </Link>
          <Link to="/certificates" className="hover:text-[#fca311] transition">
            Certificates
          </Link>
          <a href="#contact" className="hover:text-[#fca311] transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="mailto:your@email.com"
            className="p-2 rounded-full bg-white/10 hover:bg-[#fca311] hover:text-black transition"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-[#fca311] hover:text-black transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-[#fca311] hover:text-black transition"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
