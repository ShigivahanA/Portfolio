import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending message...", {
      style: {
        background: "#e5e5e5",
        color: "#14213d",
      },
    });

    const formData = new FormData(event.target);
    formData.append("access_key", "1f07a246-8e45-494d-9e60-ceb5c03925fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!", {
        style: {
          background: "#e5e5e5",
          color: "#000000",
          fontWeight: "600",
        },
      });
      event.target.reset();
    } else {
      toast.error("❌ " + data.message, {
        style: {
          background: "#14213d",
          color: "#ffffff",
        },
      });
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center 
                 px-6 md:px-12 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] 
                 py-16 scroll-mt-20"
    >
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={4000} />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#14213d] mb-8"
      >
        Contact Me
        <span className="block w-20 h-1 bg-[#fca311] mx-auto mt-2 rounded"></span>
      </motion.h2>

      <p className="text-lg text-[#14213d]/80 max-w-2xl text-center mb-10">
        Have a project in mind or just want to say hi? Fill out the form below or
        connect with me on social platforms. I’ll try to get back as soon as possible! 🚀
      </p>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-md p-6 rounded-xl 
                   shadow-lg space-y-4 border border-[#e5e5e5]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#e5e5e5] 
                     bg-white text-[#14213d] focus:outline-none focus:ring-2 
                     focus:ring-[#fca311]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#e5e5e5] 
                     bg-white text-[#14213d] focus:outline-none focus:ring-2 
                     focus:ring-[#fca311]"
        />
        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg border border-[#e5e5e5] 
                     bg-white text-[#14213d] focus:outline-none focus:ring-2 
                     focus:ring-[#fca311]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#fca311] text-black py-3 rounded-lg font-medium 
                hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="flex gap-6 mt-10 mb-10">
        <a
          href="mailto:shigivahan@gmail.com"
          className="p-3 rounded-full bg-[#e5e5e5] text-[#14213d] 
                     hover:bg-[#fca311] hover:text-white transition"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://linkedin.com/in/shigivahan"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-[#e5e5e5] text-[#14213d] 
                     hover:bg-[#fca311] hover:text-white transition"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/shigivahanA"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-[#e5e5e5] text-[#14213d] 
                     hover:bg-[#fca311] hover:text-white cursor-pointer transition"
        >
          <Github size={24} />
        </a>
      </div>

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
    </motion.section>
  );
};

export default Contact;
