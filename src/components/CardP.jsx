import React from "react";

const CardP = ({ title, img, github, demo }) => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
      }}
      className="shadow-lg rounded-md group flex justify-center items-center mx-auto hover:scale-110 duration-300 "
    >
      <div className="opacity-0 group-hover:opacity-100 duration-500 text-center">
        <span className="text-2xl font-bold text-white ">{title}</span>
        <div className="pt-8 text-center">
          <a href="">
            <button className="bg-white m-2 p-3 text-gray-700 rounded-lg text-center font-bold text-lg">
              <a href={demo}>Live Demo</a>
            </button>
          </a>
          <a href="">
            <button className="bg-slate-200 m-2 p-3 text-gray-700 rounded-lg text-center font-bold text-lg">
              <a href={github}>Github Code</a>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardP;
