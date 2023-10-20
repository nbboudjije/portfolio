import React from "react";

const Hero = () => {
  return (
    <div name="home" className="bg-slate-900 w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
        <p className="text-purple-600">Hi, My Name Is </p>
        <h1 className="text-gray-300 text-4xl sm:text-7xl font-bold">
          Nadjib Boudjidj
        </h1>
        <h2 className="text-gray-500 text-4xl sm:text-7xl font-bold">
          I'm Front-End Devloper.
        </h2>
        <p className="max-w-[700px] text-gray-500 py-4">
          I am Nadjib Boudjidj, a highly skilled web developer with over three
          years of extensive experience in the industry. Throughout my career, I
          have collaborated with a diverse clientele, successfully delivering
          high-quality web solutions to over 20 freelance clients.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 hover:bg-purple-600 rounded-sm font-bold duration-300 animate-bounce">
            See My Projects Below
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
