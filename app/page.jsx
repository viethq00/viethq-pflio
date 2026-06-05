import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Metrics from "@/components/sections/Metrics";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import RevealManager from "@/components/RevealManager";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <Services />
        <Metrics />
        <About />
        <Experience />
        <TechStack />
        <Work />
        <Contact />
      </main>
      <Footer />
      <RevealManager />
    </>
  );
}
