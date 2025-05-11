import React from "react";
import { motion } from "framer-motion";
import Pfp from "../../assets/pic.png";

const HomeSection = () => {
  return (
    <section className="w-full h-screen flex md:flex-row flex-col justify-start flex-wrap px-10">
      <motion.h1
        className="md:text-tiny text-7xl text-white grid grid-cols-1 md:grid-cols-1 gap-4 font-black font-primary "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        DENZEL QUILATAN
      </motion.h1>
      <div className=" md:text-5xl text-6xl text-white text-start">
        <h4>Full-stack Developer</h4>
        <h4>Web Developer</h4>
        <h4>UI/UX Designer</h4>
      </div>

      {/* <motion.img
          src={Pfp}
          alt="Profile"
          className="md:h-[600px] h-[400px] w-80 md:mx-0 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        /> */}
      <div
        className="flex flex-col"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="my-auto text-black md:text-start text-center">
          {/* <motion.h1
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
            </motion.h1> */}
          {/* <h1 className="text-2xl text-black text-justify mr-20 pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.{" "}
        </h1> */}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
