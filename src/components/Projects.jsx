import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    category: "School",
  },
  {
    id: 2,
    title: "Pet Cemetery Management System",
    description: "A digital information system for pet cemetery services.",
    technologies: ["React", "Firebase", "TypeScript"],
    image: Proj_2,
    github: "https://github.com/your-repo/pet-cemetery-management",
    category: "School",
  },
  {
    id: 3,
    title: "Car-lo AI Assistant",
    description: "Conversational AI for vehicle service bookings.",
    technologies: ["React", "Express.js", "MongoDB"],
    image: Proj_3,
    github: "https://github.com/your-repo/car-lo-ai",
    category: "Personal",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment gateway integration.",
    technologies: ["React", "Node.js", "Stripe"],
    image: Proj_4,
    github: "https://github.com/your-repo/ecommerce-platform",
    category: "Personal",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website with a custom CMS.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: Proj_5,
    github: "https://github.com/your-repo/portfolio",
    category: "Personal",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description:
      "A weather forecast app with real-time updates and location tracking.",
    technologies: ["Flutter", "OpenWeatherMap API"],
    image: Proj_6,
    github: "https://github.com/your-repo/weather-app",
    category: "Personal",
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description: "A social media dashboard for managing multiple accounts.",
    technologies: ["React", "Redux", "Firebase"],
    image: Proj_7,
    github: "https://github.com/your-repo/social-media-dashboard",
    category: "Personal",
  },


  {
    id: 8,
    title: "CodeHub",
    description:
      "E-library management system for managing programming books and resources.",
    technologies: ["PHP", "html", "bootstrap", "MySQL"],
    image: Proj_1,
    github: "https://github.com/your-repo/heart-sound-classification",
    category: "School",
  },
];

const categories = ["All", "School", "Personal"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    const lenisEl = window.lenis; 

    if (selectedProject && lenisEl) {
      lenisEl.stop();
    } else if (lenisEl) {
      lenisEl.start();
    }
  }, [selectedProject]);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveFilter(cat);
              setVisibleCount(6);
            }}
            className={`px-4 py-1 mt-5 rounded-full border transition-all duration-300 ${
              activeFilter === cat
                ? "bg-primary text-secondary"
                : "bg-white text-primary border-primary dark:bg-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group overflow-hidden rounded-xl shadow-lg object-cover cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-300 filter grayscale group-hover:filter-none"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2  w-full  bg-primary text-xl text-secondary rounded-full hover:bg-primary/80 transition"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-black/90 rounded-xl max-w-lg w-full p-6 relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-0 right-1 text-gray-400 hover:text-red-500 text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-white">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-3">
                {selectedProject.description}
              </p>
              <p className="text-smtext-gray-400 mb-2">
                <strong>Technologies:</strong>{" "}
                {selectedProject.technologies.join(", ")}
              </p>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Repository →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
