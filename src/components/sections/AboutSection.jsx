import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCaretRight } from "react-icons/ai";
import Icons from "../Icons";
import ImageSlider from "../ImageSlider";
import Particles from "../animations/Particles";

const AboutSection = () => {
  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden bg-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Particles Background */}
      <Particles
        particleCount={500}
        particleSpread={20}
        speed={0.1}
        particleColors={["#ffffff", "#ffffff", "#ffffff"]}
        alphaParticles={true}
        particleBaseSize={300}
        sizeRandomness={1.5}
        className="relative inset-0 -z-0 border border-red-500 h-screen left-0"
        cameraDistance={20}
        moveParticlesOnHover={true}
        particleHoverFactor={0.8}
      />
      {/* About Section Content */}
      <div className="absolute top-10 right-50 flex flex-row flex-wrap justify-between gap-10 container mx-auto items-center text-white w-full z-20">
        <motion.div
          className="flex flex-col gap-2 flex-1 z-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl md:text-start text-center font-black font-primary mb-10 md:mt-0 mt-15">
            ABOUT ME
          </h1>
          <div className="text-xl text-justify md:text-start mx-10">
            <p>
              I'm a <strong>Full-Stack Developer</strong> specializing in
              building dynamic, responsive, and user-friendly web applications.
              My main focus is on the <strong>MERN</strong> stack but I'm always
              exploring new technologies to expand my skill set.
            </p>
            <p className="pt-5">
              Ever since I wrote my first line of code, I've been captivated by
              the way programming allows me to solve real-world problems through
              <strong> creativity</strong> and <strong>logic.</strong>
            </p>
          </div>
        </motion.div>

        <div className="md:block hidden my-10 h-[500px] w-0.5 bg-zinc-700 mx-10"></div>

        <motion.div
          className="flex flex-col text-xl text-center mx-10 md:mb-0 mb-15"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-5xl mb-10 font-bold">EXPERIENCE</h3>
          <div className="flex flex-col gap-5 text-start">
            {[2022, 2023].map((year) => (
              <div className="flex flex-row gap-5" key={year}>
                <AiOutlineCaretRight color="red" size={30} />
                <div>
                  <p className="font-black text-5xl">{year}</p>
                  <h1 className="font-semibold">
                    SPECIAL PROGRAM FOR EMPLOYMENT OF STUDENTS (SPES)
                  </h1>
                  <ul className="flex flex-col gap-1 mt-3 text-left">
                    <li>- Web Developer</li>
                    <li>- City Government of Naga</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skill Set Section */}
      <motion.h1
        className="absolute text-5xl font-bold text-center text-white mb-10 md:text-6xl z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        SKILL SET
      </motion.h1>
      <Icons />
      <ImageSlider />
    </motion.section>
  );
};

export default AboutSection;
