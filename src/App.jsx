import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import WorkSection from "./components/sections/WorkSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ServicesSection from "./components/sections/ServicesSection";
import Footer from "./components/sections/FooterSection";


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smooth: true,
    });

    window.lenis = lenis; // make accessible

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
    <div className="max-h-full overflow-hidden bg-black" data-theme="black">
      
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

      {/* Experience section */}
      <section>
        <ExperienceSection />
      </section>

      {/* Services section */}
      <section>
        <ServicesSection />
      </section>

      {/* Works section */}
      <section id="works">
        <WorkSection />
      </section>

      {/* Contact section */}
      <section id="contact">
        <ContactSection />
      </section>
      
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
