import React from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "../motion";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-900 text-gray-300">
      <motion.div
        {...slideAnimation("up")}
        className="flex flex-col justify-center item-center max-w-[1000px] mx-auto"
      >
        <div>
          <h1 className="font-bold text-4xl border-b-4 border-purple-500">
            About
          </h1>
        </div>
        <div className="px-4 my-4 text-center">
          <div className="grid grid-cols-2 gap-8">
            <h1 className="sm:text-right font-bold text-4xl">
              Hi, I'm Nadjib, Nice to meet you
            </h1>
            <p>
              My primary expertise lies in React JS, Tailwind Css, Firebase,
              Node Js and I have a proven track record of developing more than
              15 innovative and interactive projects.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
