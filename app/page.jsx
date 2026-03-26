"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const roles = [
  "Senior Software Engineer",
  "Fullstack Developer",
  "Technical Leader",
  "System Architect",
];

function useTyping(texts, typingSpeed = 75, deletingSpeed = 40, pause = 2200) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const current = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, charIndex + 1);
        setDisplayText(next);
        if (next.length === current.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        const next = current.slice(0, charIndex - 1);
        setDisplayText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setCharIndex(0);
          setTextIndex((t) => (t + 1) % texts.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, textIndex, texts, typingSpeed, deletingSpeed, pause]);

  return displayText;
}

export default function Home() {
  const role = useTyping(roles);

  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8 xl:gap-0">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            {/* Role badge with typing animation */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-accent/80 text-sm font-medium tracking-widest uppercase cursor-blink">
                {role}
              </span>
            </div>

            {/* Name headline */}
            <h1 className="h1 mb-6 leading-tight">
              Hello, I&apos;m{" "}
              <br />
              <span className="text-shimmer">Ha Quoc Viet</span>
            </h1>

            {/* Description */}
            <p className="max-w-[500px] mb-4 text-white/70 leading-relaxed">
              Fullstack developer based in Vietnam — building high-performance
              web &amp; mobile applications from frontend to backend with a focus
              on scalability and clean architecture.
            </p>

            {/* Quote */}
            <p className="max-w-[500px] text-sm text-white/40 italic mb-8 border-l-2 border-accent/40 pl-4">
              &ldquo;How you do anything is how you do everything.&rdquo;
            </p>

            {/* CTA row */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <a
                href="/assets/CV_HaQuocViet_SeniorSE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV_HaQuocViet_SeniorSE.pdf"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 group hover:box-glow transition-all duration-300"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </a>
              <div className="mb-0">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="w-10 h-10 border border-accent/40 rounded-full flex justify-center items-center text-accent/80 text-base hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } }}
            className="order-1 xl:order-none"
          >
            <Photo />
          </motion.div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
