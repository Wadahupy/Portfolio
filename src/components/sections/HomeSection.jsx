import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section className="flex flex-col justify-start h-dvh rounded-2xl mx-10 pt-10 sm:pt-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <motion.h1
          className="duration-600 text-4xl sm:text-5xl md:text-7xl xl:text-subheading 2xl:text-heading md:text-start text-center text-primary font-black font-primary mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          DENZEL QUILATAN
        </motion.h1>
        <div className="size-32 md:size-44 lg:size-48 xl:size-52 2xl:size-64 md:my-20 my-10 mx-auto relative duration-600">
          <svg
            className="w-full h-full animate-[spin_10s_linear_infinite]"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="
              M 100, 100
              m -75, 0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0
            "
              />
            </defs>
            <text
              fill="white"
              fontSize="14"
              fontFamily="monospace"
              letterSpacing="4"
            >
              <textPath href="#circlePath" startOffset="0%">
                Web Developer - Mobile Developer - UI/UX Designer -
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="flex flex-col text-lg justify-start lg:text-2xl md:text-xl md:text-start  duration-600 text-center text-paragraph h-full">
        <h4>Web Developer</h4>
        <h4>Mobile Developer</h4>
        <h4>UI/UX Designer</h4>
      </div>
      <div className="flex justify-center md:justify-start mt-6">
        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-primary text-secondary rounded-sm text-sm md:text-base font-semibold hover:bg-white/40 hover:text-primary shadow-md hover:bg-opacity-80 transition-all duration-300"
        >
          Download My CV
        </a>
      </div>
      <motion.div
        className="flex items-center justify-end h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="max-w-2xl text-right lg:text-2xl md:text-xl text-white md:my-8 my-4">
          <p className="mt-10 text-center md:text-right duration-600 hover:text-white text-gray-text paragraphs side-padding leading-relaxed text-paragraph text-sm md:text-xl">
            <span className="block mb-4 italic text-primary font-medium text-sm md:text-2xl">
              “In a world full of complexity, I find purpose in creating
              clarity.”
            </span>
            Whether I’m writing code or shaping user interfaces, my focus is
            always on the human behind the screen. I see technology not just as
            a tool, but as a canvas for thoughtful, purposeful design — and I’m
            here to make that canvas count.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default HomeSection;
