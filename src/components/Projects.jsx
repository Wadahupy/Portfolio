import React from "react";
import { motion } from "framer-motion";
import Proj_1 from "../assets/images/projects/1.png";
import Proj_2 from "../assets/images/projects/2.png";
import Proj_3 from "../assets/images/projects/3.png";
import Proj_4 from "../assets/images/projects/4.png";
import Proj_5 from "../assets/images/projects/5.png";
import Proj_6 from "../assets/images/projects/6.png";
import Proj_7 from "../assets/images/projects/7.png";

const projects = [
  {
    id: 1,
    title: "Heart Sound Detection Model",
    description:
      "A deep learning model using CNN-LSTM to classify heart sounds.",
    technologies: ["Python", "TensorFlow", "Flask"],
    image: Proj_1,
    github: "https://github.com/your-repo/heart-sound-classification",
  },
  {
    id: 2,
    title: "Pet Cemetery Management System",
    description: "A digital information system for pet cemetery services.",
    technologies: ["React", "Firebase", "TypeScript"],
    image: Proj_2,
    github: "https://github.com/your-repo/pet-cemetery-management",
  },
  {
    id: 3,
    title: "Car-lo AI Assistant",
    description: "Conversational AI for vehicle service bookings.",
    technologies: ["React", "Express.js", "MongoDB"],
    image: Proj_3,
    github: "https://github.com/your-repo/car-lo-ai",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment gateway integration.",
    technologies: ["React", "Node.js", "Stripe"],
    image: Proj_4,
    github: "https://github.com/your-repo/ecommerce-platform",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website with a custom CMS.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: Proj_5,
    github: "https://github.com/your-repo/portfolio",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description:
      "A weather forecast app with real-time updates and location tracking.",
    technologies: ["Flutter", "OpenWeatherMap API"],
    image: Proj_6,
    github: "https://github.com/your-repo/weather-app",
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description: "A social media dashboard for managing multiple accounts.",
    technologies: ["React", "Redux", "Firebase"],
    image: Proj_7,
    github: "https://github.com/your-repo/social-media-dashboard",
  },
];

const Projects = () => {
  return (
    <div className="p-8 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm mt-1">{project.description}</p>
            <p className="text-xs mt-2">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-2 inline-block hover:underline relative overflow-hidden"
            >
              GitHub Repo
              <motion.span
                className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
