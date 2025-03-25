import React from "react";
import { motion } from "framer-motion";

const iconLogo = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    alt: "Flask",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    alt: "Bootstrap",
  },
  {
    src: "https://www.svgrepo.com/show/374118/tailwind.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    alt: "Flutter",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    alt: "PHP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    alt: "C++",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    alt: "C#",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express.js",
  },
];

const Icons = ({ icons = iconLogo }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 justify-items-center items-center gap-4 max-w-lg md:max-w-3xl mx-auto place-items-center">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="rounded-xl border-4 bg-white shadow-lg border-slate-200 p-5 flex mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <img src={icon.src} width="40" height="40" alt={icon.alt} />
        </motion.div>
      ))}
    </div>
  );
};

export default Icons;
