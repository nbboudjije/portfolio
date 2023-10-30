import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "../motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="mt-40 md:mt-0 w-full h-screen bg-slate-900 flex justify-center items-center "
    >
      <motion.div {...fadeAnimation}>
        <form
          method="POST"
          action="https://getform.io/f/06944a83-f5d4-4d57-96c6-f1d9c967cf42"
          className="flex flex-col max-w-[600px] w-full "
        >
          <div>
            <p className="text-4xl font-bold border-b-4 border-purple-500 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              You Can Send Me a Message below or email me at:
              nadjib.boudjidj99@gmail.com
            </p>
          </div>
          <input
            className="p-2 rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="p-2 my-4 rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 rounded-lg"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-500 text-gray-300 font-bold px-3 py-5  my-4 text-md"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
