import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaReadme,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleN = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      <div>
        <h1 className="text-2xl font-bold text-gray-300">Nadjib Portfolio</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex p-3 gap-3 cursor-pointer">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700">
            <a
              href="https://linkedin.com/in/nadjib-boudjidj"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900">
            <a
              href="https://github.com/nbboudjije"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              <a href="nadjib.boudjidj99@gmail.com">Email</a>
              <FaMailBulk size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              href=""
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              My Resume
              <FaReadme size={30} />
            </a>
          </li>
        </ul>
      </div>

      <div className="md:hidden cursor-pointer z-10" onClick={toogleN}>
        {!open ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <div
        className={
          !open
            ? "hidden ease-in-out duration-500"
            : "w-full h-screen bg-slate-900 flex flex-col justify-center items-center absolute top-0 left-0 "
        }
      >
        <ul>
          <li className="py-6 text-4xl text-center">
            <Link to="home" onClick={toogleN} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl text-center">
            <Link to="about" onClick={toogleN} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl text-center">
            <Link to="skills" onClick={toogleN} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl text-center">
            <Link to="projects" onClick={toogleN} smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl text-center">
            <Link to="contact" onClick={toogleN} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
