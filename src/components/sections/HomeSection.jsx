import React from "react";
import { motion } from "framer-motion";
import Pfp from "../../assets/pic.png";

const HomeSection = () => {
  return (
    <div className="container mx-auto">
      {/* Head section */}
      <section className=" flex md:flex-row flex-col gap-10 my-20 mb-50 md:justify-start justify-center items-center flex-wrap w-full container">
        <motion.h1
          className=" md:text-8xl text-6xl md:[writing-mode:sideways-lr] font-primary text-center font-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          PORTFOLIO
        </motion.h1>
        <motion.img
          src={Pfp}
          alt="Profile"
          className="md:h-[600px] h-[400px] w-80 md:mx-0 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="my-auto text-black md:text-start text-center">
            <motion.h1
              className="md:text-6xl text-4xl font-light"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Hi There! I'm
            </motion.h1>
            <motion.h1
              className="md:text-9xl text-7xl font-black"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              sample
              <br />
              sample
            </motion.h1>
            <motion.h1
              className="md:text-3xl text-4xl text-red-500 font-bold pt-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              ASPIRING WEB DEVELOPER
            </motion.h1>
            {/* <h1 className="text-2xl text-black text-justify mr-20 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{" "}
        </h1> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
