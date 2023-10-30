import React from "react";
import CardP from "./CardP";
import { motion } from "framer-motion";
import { headContainerAnimation2 } from "../motion";

const Projects = () => {
  return (
    <div
      name="projects"
      className="mt-44 md:mt-0 w-full h-screen text-gray-300 bg-slate-900"
    >
      <motion.div
        {...headContainerAnimation2}
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-purple-500">
            Projects
          </h1>
          <p className="py-6">
            Hover Over The Card to Check Some of my Recent Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 content-div">
          <CardP
            title="Moviefy"
            img="https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            github="https://github.com/nbboudjije/moviefy"
            demo="https://moviefy-647dd.web.app/"
          />
          <CardP
            title="ModernLP"
            img=""
            github="https://github.com/nbboudjije/modernLP"
            demo="https://nbboudjije.github.io/modernLP/"
          />
          <CardP
            title="Gamify"
            img=""
            github="https://github.com/nbboudjije/gamify-modern-lp"
            demo="https://nbboudjije.github.io/gamify-modern-lp/"
          />
          <CardP
            title="My ChatRoom"
            img=""
            github="https://github.com/nbboudjije/my-chatroom"
            demo="https://mychat-67c1c.web.app/"
          />
          <CardP title="Ecommercy - Soon" img="" github="" demo="" />
          <CardP
            title="Admin Dashboard"
            img=""
            github="https://github.com/nbboudjije/modern-admin"
            demo="https://nbboudjije.github.io/modern-admin/"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
