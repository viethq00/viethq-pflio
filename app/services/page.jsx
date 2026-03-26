"use client";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Robust, scalable web applications built with modern stacks — React, Next.js, Node.js, and cloud infrastructure tailored to your business goals.",
    href: "/contact",
    badge: "Full-Stack",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "High-performance cross-platform mobile apps for iOS and Android using React Native with seamless UX and native-feel interactions.",
    href: "/contact",
    badge: "iOS & Android",
  },
  {
    num: "03",
    title: "System Architecture",
    description:
      "Microservices design, API integrations, real-time data pipelines with Kafka and Redis — built for scale and reliability.",
    href: "/contact",
    badge: "Backend",
  },
  {
    num: "04",
    title: "Technical Leadership",
    description:
      "End-to-end delivery leadership: sprint planning, code review, mentoring, and aligning cross-functional teams to ship on time.",
    href: "/contact",
    badge: "Leadership",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] py-12 xl:py-0 flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5, ease: "easeOut" },
          }}
          className="mb-12 text-center xl:text-left"
        >
          <span className="text-accent/70 text-sm tracking-widest uppercase font-medium">What I offer</span>
          <h2 className="h2 mt-2">My <span className="text-accent">Services</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8 + index * 0.1, duration: 0.5, ease: "easeOut" },
              }}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5 group hover:box-glow transition-all duration-300 gradient-border relative overflow-hidden"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                    {service.badge}
                  </span>
                  <Link
                    href={service.href}
                    className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-accent border border-white/10 group-hover:border-accent transition-all duration-300 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,153,0.4)]"
                  >
                    <BsArrowUpRight className="text-white group-hover:text-primary text-lg transition-colors duration-300" />
                  </Link>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl xl:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/55 leading-relaxed text-sm xl:text-base">
                {service.description}
              </p>

              {/* Bottom divider */}
              <div className="border-t border-white/8 pt-4 mt-auto">
                <Link href={service.href} className="text-accent/60 text-sm hover:text-accent transition-colors duration-200 flex items-center gap-2 group/link">
                  Get in touch
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
