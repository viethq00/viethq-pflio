import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import RevealManager from "@/components/RevealManager";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <Services />
        <About />
        <Approach />
        <Experience />
        <Work />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <RevealManager />
    </>
  );
}
