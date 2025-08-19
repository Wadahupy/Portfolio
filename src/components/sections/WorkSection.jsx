import MarqueeTicker from "../MarqueeTicker";
import Projects from "../Projects";

const WorkSection = () => {
  return (
    <section>
      <MarqueeTicker />
      <div className="mx-10 text-white/90">
        <h1 className="duration-600 text-4xl sm:text-5xl md:text-7xl xl:text-subheading  md:text-center text-center text-white/90 font-black font-primary mt-10">
          PROJECTS
        </h1>
        <div className="flex flex-col justify-between gap-10">
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
