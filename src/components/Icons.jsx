import { motion } from "framer-motion";
import javascript from "../assets/icons/javascript.svg";
import flask from "../assets/icons/flask.svg";
import python from "../assets/icons/python.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import tailwind from "../assets/icons/tailwind.svg";
import flutter from "../assets/icons/flutter.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/html.svg";
import react from "../assets/icons/react.svg";
import php from "../assets/icons/php.svg";
import cplus from "../assets/icons/c++.svg";
import csharp from "../assets/icons/csharp.svg";
import node from "../assets/icons/node.svg";
import mysql from "../assets/icons/mysql.svg";
import express from "../assets/icons/express.svg";

const iconLogo = [
  {
    src: javascript,
    alt: "Javascript",
  },
  {
    src: flask,
    alt: "Flask",
  },
  {
    src: python,
    alt: "Python",
  },
  {
    src: bootstrap,
    alt: "Bootstrap",
  },
  {
    src: tailwind,
    alt: "Tailwind CSS",
  },
  {
    src: flutter,
    alt: "Flutter",
  },
  {
    src: html,
    alt: "HTML5",
  },
  {
    src: css,
    alt: "CSS3",
  },
  {
    src: react,
    alt: "React",
  },
  {
    src: php,
    alt: "PHP",
  },
  {
    src: cplus,
    alt: "C++",
  },
  {
    src: csharp,
    alt: "C#",
  },
  {
    src: node,
    alt: "MongoDB",
  },
  {
    src: mysql,
    alt: "MySQL",
  },
  {
    src: express,
    alt: "Express.js",
  },
];

const Icons = ({ icons = iconLogo }) => {
  const loopIcons = [...icons, ...icons];

  return (
    <div className="relative overflow-hidden w-full py-4 gap-4 mx-auto flex flex-wrap z-10 side-padding justify-center">
      
      {/* Scrolling container */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        {loopIcons.map((icon, index) => (
          <div key={index} className="shrink-0 p-4 rounded-xl shadow-lg ">
            <img
              src={icon.src}
              width="120"
              height="120"
              alt={icon.alt || "icon"}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* Gradient edges for fade effect */}
      <div className="bg-gradient-to-l from-black/70 via-transparent to-black/70 absolute w-full h-full" />
      <div className="absolute top-0 left-0 h-full w-50 bg-gradient-to-r from-black via-black to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-50 bg-gradient-to-l from-black via-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Icons;
