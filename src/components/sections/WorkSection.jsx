import React from "react";
import MarqueeTicker from "../MarqueeTicker";
import Projects from "../Projects";

const WorkSection = () => {
  return (
    <section className="bg-primary">
      <MarqueeTicker />
      <div className="container mx-auto">
        <p className="text-center mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
  );
};

export default WorkSection;
