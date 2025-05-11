import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "../components/Header";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import WorkSection from "../components/sections/WorkSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Navigation bar */}

      <Header />

      {/* Home section */}
      <section id="home">
        <HomeSection />
      </section>

      {/* About me section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Works section */}
      <section id="works">
        <WorkSection />
      </section>

      {/* Contact section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default HomePage;
