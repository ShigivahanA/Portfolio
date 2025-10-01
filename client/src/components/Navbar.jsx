import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition duration-500 ${
        isScroll
          ? "bg-white/50 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-20 cursor-pointer mr-14"
          alt="logo"
        />
      </Link>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 transition transform transition duration-300 hover:scale-105 hover:shadow-lg ${
          isScroll ? "" : "bg-[#fca311] shadow-lg backdrop-blur-lg"
        }`}
      >
        {[
          { href: "#top", label: "Home" },
          { href: "#about", label: "About" },
          { to: "/projects", label: "Projects" },
          { to: "/certificates", label: "Certificates" },
          { href: "#contact", label: "Contact" },
        ].map((item, idx) => (
          <li key={idx}>
            {item.to ? (
              <Link
                to={item.to}
                className="font-medium text-[#14213d]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="font-medium text-[#14213d]"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="block md:hidden ml-3 text-[#14213d]" onClick={openMenu}>
        <span className="text-3xl">☰</span>
      </button>

      {/* Mobile Side Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-lg transition duration-500"
        onClick={closeMenu}
      >
        <div
          className="absolute right-6 top-6 cursor-pointer text-[#14213d] hover:text-[#fca311]"
          onClick={closeMenu}
        >
          ✕
        </div>
        {[
          { href: "#top", label: "Home" },
          { href: "#about", label: "About" },
          { to: "/projects", label: "Projects" },
          { to: "/certificates", label: "Certificates" },
          { href: "#contact", label: "Contact" },
        ].map((item, idx) => (
          <li key={idx}>
            {item.to ? (
              <Link
                onClick={closeMenu}
                to={item.to}
                className="font-medium text-[#14213d] hover:text-[#fca311] transition"
              >
                {item.label}
              </Link>
            ) : (
              <a
                onClick={closeMenu}
                href={item.href}
                className="font-medium text-[#14213d] hover:text-[#fca311] transition"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
