import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023",
    title: "Special Program for Employment of Students (SPES)",
    description: "Developed a desktop app using C# and MySQL.",
  },
  {
    year: "2024",
    title: "Special Program for Employment of Students (SPES)",
    description: "Designed in Figma and developed apps using C# and MySQL.",
  },
  {
    year: "2025",
    title: "On-The-Job Training (OJT)",
    description: "Enhanced UI skills with Figma and backend with MySQL & C#.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExperienceSection = () => {
  return (
    <motion.section
      className="w-full py-20 px-6 "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-5xl md:text-subheading text-center text-primary font-black mb-2 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        WORK EXPERIENCE
      </motion.h2>

      <div className="relative flex flex-col gap-20 before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:-translate-x-1/2 md:before:bg-white/20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="grid md:grid-cols-[1fr_200px_1fr] gap-x-2 group"
            variants={itemVariants}
          >
            {/* Left: Year & Title */}
            <motion.div
              className="text-center md:text-right text-primary"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-5xl font-bold">{exp.year}</h3>
              <p className="text-2xl text-paragraph ">{exp.title}</p>
            </motion.div>

            {/* Middle: Dot */}
            <motion.div
              className="hidden md:flex justify-center relative min-w-[20px] items-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-5 h-5 bg-red-600 rounded-full shadow-2xl  group-hover:shadow-red-500 transition-all duration-300" />
            </motion.div>

            {/* Right: Description */}
            <motion.div
              className=" text-primary  text-center my-5 md:my-0 pt-2 md:max-w-md border-2 border-white/20 p-4 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-red-400/20 transition-shadow duration-300"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-2xl text-wrap text-center md:text-start ">
                {exp.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
