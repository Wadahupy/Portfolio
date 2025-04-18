import React from "react";
import Header from "../components/Header";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary overflow-hidden">
      {/* Navigation bar */}
      <Header />
      {/* Home section */}
      <HomeSection />
      {/* About me section */}
      <AboutSection />
      {/* Works section */}
      <WorkSection />
      {/* Contact section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
