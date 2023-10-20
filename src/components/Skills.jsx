import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { headContainerAnimation } from "../motion";
import Framer from "../assets/framermotion.png";
import Three from "../assets/threejs.png";
import Firebase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import ReactJS from "../assets/reactjs.png";
import Node from "../assets/nodejs.png";
import Jest from "../assets/jest.png";
import Mongodb from "../assets/mongodb.png";
import Vite from "../assets/vitejs.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-900 text-gray-300">
      <motion.div
        {...headContainerAnimation}
        className="max-w-[1000px] flex flex-col mx-auto p-4 w-full h-full"
      >
        <div>
          <h1 className="font-bold text-4xl border-b-4 border-purple-500">
            Skills
          </h1>
          <p className="">Technologies I Worked With</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 py-8 gap-4 ">
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={ReactJS} alt="" width={48} />
            <p className="my-2">REACT</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Node} alt="" width={48} />
            <p className="my-2">NODE JS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Framer} alt="" width={48} />
            <p className="my-2">Framer Motion</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Tailwind} alt="" width={48} />
            <p className="my-2">Tailwind Css</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Firebase} alt="" width={48} />
            <p className="my-2">Firebase</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Three} alt="" width={48} />
            <p className="my-2">Three Js</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Mongodb} alt="" width={48} />
            <p className="my-2">MongoDB</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Jest} alt="" width={48} />
            <p className="my-2">Jest</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <img src={Vite} alt="" width={48} />
            <p className="my-2">Vite</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
