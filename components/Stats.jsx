"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    count: 5,
    suffix: "+",
    text: "Years of Experience",
    icon: "🚀",
  },
  {
    count: 8,
    suffix: "+",
    text: "Projects Completed",
    icon: "💼",
  },
  {
    count: 6,
    suffix: "+",
    text: "Happy Clients",
    icon: "⭐",
  },
  {
    count: 2,
    suffix: "",
    text: "Languages Spoken",
    icon: "🌏",
  },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-4 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.4 + index * 0.1, duration: 0.5, ease: "easeOut" },
              }}
              className="glass-card rounded-xl p-5 xl:p-6 flex flex-col gap-2 hover:box-glow transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <CountUp
                    end={item.count}
                    duration={2.5}
                    delay={1.4 + index * 0.1}
                    className="text-3xl xl:text-5xl font-extrabold text-accent text-glow"
                  />
                  <span className="text-2xl xl:text-3xl font-bold text-accent/80">{item.suffix}</span>
                </div>
                <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-float">
                  {item.icon}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-snug">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
