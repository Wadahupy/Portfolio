import { motion } from "framer-motion";
import Icons from "../Icons";
import Pfp from "../../assets/pic.png";

const AboutSection = () => {
  return (
    <motion.section
      className="w-full min-h-screen px-10 my-16 md:my-24 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <h1 className="text-5xl md:text-heading text-center md:text-start text-primary font-black mb-2 py-20 duration-300">
        ABOUT ME
      </h1>

      {/* Image + Text Layout */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-20 mx-auto">
        {/* Text Content */}
        <motion.div
          className="w-full text-paragraph text-lg md:text-3xl leading-relaxed text-justify md:px-10 text-body px-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            I&apos;m a <strong>Full-Stack Developer</strong> specializing in building
            dynamic, responsive, and user-friendly web applications. My main
            focus is on the <strong>MERN</strong> stack, but I&apos;m always
            exploring new technologies to expand my skill set.
          </p>
          <p className="pt-5">
            Ever since I wrote my first line of code, I&apos;ve been captivated by
            how programming allows me to solve real-world problems through
            <strong> creativity</strong> and <strong>logic</strong>.
          </p>
        </motion.div>

        {/* Responsive Image */}
        <motion.div
          className="flex justify-center w-full h-full md:basis-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src={Pfp}
            alt="Profile"
            className="w-auto md:h-[500px] h-96 object-fit rounded-xl shadow-xl "
          />
        </motion.div>
      </div>

      {/* Skill Icons */}
      <div className="mt-20">
        <Icons />
      </div>
    </motion.section>
  );
};

export default AboutSection;
