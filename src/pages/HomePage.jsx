import React from "react";
import Header from "../components/Header";
<<<<<<< HEAD
import Pfp from "../assets/pic.png";
import Icons from "../components/Icons";
import { AiOutlineCaretRight } from "react-icons/ai";
import ImageSlider from "../components/ImageSlider";
import MarqueeTicker from "../components/MarqueeTicker";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
=======
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";
>>>>>>> 6ce8e0f4098fd54deaa2c9ea7794d0a839dceb44

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary overflow-hidden">
      {/* Navigation bar */}
      <Header />
<<<<<<< HEAD
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
            className="md:h-[600px] h-[400px] md:w-96 w-1/2 md:mx-0 mx-auto"
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
                Denzel
                <br />
                Quilatan
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
      {/* <hr className="border-2 border-black w-full" /> */}
      {/* About me section */}
      <motion.section
        className="bg-zinc-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-row flex-wrap justify-between gap-10 container mx-auto items-center text-white">
          <motion.div
            className="flex flex-col gap-2 flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-start text-center font-black font-primary mb-10 md:mt-0 mt-15">
              ABOUT ME
            </h1>
            <motion.div
              className="text-xl text-justify md:text-start mx-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p>
                I’m a <strong>Full-Stack Developer</strong> specializing in
                building dynamic, responsive, and user-friendly web
                applications. My main focus is on the <strong>MERN</strong>{" "}
                stack{" "}
                <strong>(MongoDB, Express.js, React.js, and Node.js)</strong>{" "}
                but I’m always exploring new technologies to expand my skill
                set.
              </p>
              <p className="pt-5">
                Ever since I wrote my first line of code, I’ve been{" "}
                <strong>captivated </strong>
                by the way programming allows me to solve real-world problems
                through <strong>creativity</strong> and <strong>logic.</strong>{" "}
                Over the years, I’ve honed my skills, turning ideas into fully
                functional digital products.
              </p>
            </motion.div>
          </motion.div>

          <div className="md:block hidden my-10 h-[500px] min-h-[1em] w-0.5 bg-white mx-10"></div>
          <motion.div
            className="flex flex-col text-xl text-center mx-10 md:mb-0 mb-15"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-5xl mb-10 font-bold">EXPERIENCE</h3>
            <div className="flex flex-col gap-5 text-start">
              <div className="flex flex-row gap-5 ">
                <AiOutlineCaretRight color="red" size={30} />
                <div>
                  <p className="font-black text-5xl">2022</p>{" "}
                  <h1 className="font-semibold">
                    SPECIAL PROGRAM FOR EMPLOYMENT OF STUDENTS (SPES)
                  </h1>
                  <ul className="flex flex-col gap-1 mt-3 text-left">
                    <li> - Web Developer</li>
                    <li> - City Government of Naga</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <AiOutlineCaretRight color="red" size={30} />
                <div>
                  <p className="font-black text-5xl">2023</p>{" "}
                  <h1 className="font-semibold">
                    SPECIAL PROGRAM FOR EMPLOYMENT OF STUDENTS (SPES)
                  </h1>
                  <ul className="flex flex-col gap-1 mt-3 text-left">
                    <li> - Web Developer</li>
                    <li> - City Government of Naga</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.h1
          className="text-5xl font-bold text-center text-white mb-10 md:text-6xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          SKILL SET
        </motion.h1>
        <Icons />
        <ImageSlider />
      </motion.section>
      {/* Works section */}
      <section className="bg-primary">
        <MarqueeTicker />
        <div className="container mx-auto">
          <p className="text-center mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className="font-black font-header text-7xl text-center mt-10">
            PROJECTS
          </h1>
          <div className="flex flex-col justify-between gap-10">
            <Projects />
          </div>
        </div>
      </section>
      <section className="bg-zinc-800">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
=======
      {/* Home section */}
      <HomeSection />
      {/* About me section */}
      <AboutSection />
      {/* Works section */}
      <WorkSection />
      {/* Contact section */}
      <ContactSection />
>>>>>>> 6ce8e0f4098fd54deaa2c9ea7794d0a839dceb44
    </div>
  );
};

export default HomePage;
