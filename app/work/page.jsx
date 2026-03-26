"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsPhone } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "Fintech",
    title: "Technical Leader — Brighte",
    description:
      "Australian fintech company specializing in clean-energy home installations. Led a cross-functional team of 12 to build vendor webhook management and CDR income-detection systems with retry mechanisms.",
    stack: ["TypeScript", "Node.js", "NestJS", "ReactJS", "Next.js", "PostgreSQL", "DynamoDB", "AWS Lambda", "AWS EventBridge"],
    live: "",
    mobile: "",
    github: "",
  },
  {
    num: "02",
    category: "Trading Platform",
    title: "Fullstack Developer — NanoTrading",
    description:
      "Commodities trading app for nano-sized markets. Built end-to-end from real-time order management to mobile interface, handling high-frequency data with Kafka and Redis.",
    stack: ["TypeScript", "Node.js", "Express.js", "Next.js", "React Native", "Kafka", "Redis", "MongoDB", "Docker", "Nginx"],
    live: "https://nano.mxv.com.vn:8441/",
    mobile: "",
    github: "",
  },
  {
    num: "03",
    category: "Trading Platform",
    title: "Fullstack Developer — MXV Exchange",
    description:
      "Online trading platform for energy and agricultural commodities. Designed microservices architecture for high-volume transactions with real-time data processing.",
    stack: ["TypeScript", "Node.js", "NestJS", "Next.js", "React Native", "Kafka", "Redis", "MongoDB", "PostgreSQL", "Docker"],
    live: "https://sat.mxv.com.vn/",
    mobile: "https://apps.apple.com/vn/app/mxv-rubber/id6483337283",
    github: "",
  },
  {
    num: "04",
    category: "Web Development",
    title: "Freelance — VitaDairy",
    description:
      "Admin management system for VitaDairy Vietnam. Developed and optimized UI components, integrated AWS services, and improved backend performance.",
    stack: ["TypeScript", "NestJS", "React.js", "PostgreSQL", "AWS S3", "AWS RDS", "Redis"],
    live: "",
    mobile: "",
    github: "",
  },
  {
    num: "05",
    category: "Mobile",
    title: "Freelance — Traphaco ZMA",
    description:
      "Zalo Mini App for Traphaco loyalty program. Refactored backend logic, fixed critical bugs, and improved system performance for a better user experience.",
    stack: ["TypeScript", "NestJS", "React.js", "PostgreSQL", "AWS S3", "Redis"],
    live: "",
    mobile: "",
    github: "",
  },
  {
    num: "06",
    category: "E-Commerce",
    title: "Fullstack Developer — TrePhuongBac",
    description:
      "Premier online store for eco-friendly bamboo products. Built full e-commerce backend and storefront with MongoDB and Next.js.",
    stack: ["TypeScript", "Node.js", "Express.js", "Next.js", "MongoDB", "Nginx"],
    live: "",
    mobile: "",
    github: "",
  },
  {
    num: "07",
    category: "Social Media",
    title: "Backend Developer — Amai Content",
    description:
      "Social media management platform for Facebook, Google, and Instagram. Integrated bank payment APIs (Vietcombank, ACB) and built real-time messaging with Messenger API.",
    stack: ["TypeScript", "Express.js", "MySQL", "MongoDB", "Puppeteer", "Selenium", "Next.js"],
    live: "https://amaicontent.com/",
    mobile: "",
    github: "",
  },
  {
    num: "08",
    category: "EdTech",
    title: "Backend Developer — JUSEI Master",
    description:
      "Study application for Japanese Judo therapy national exams. Developed data analysis features and optimized scalable MongoDB schemas for large datasets.",
    stack: ["TypeScript", "NestJS", "MongoDB"],
    live: "",
    mobile: "",
    github: "",
  },
];

const categoryColors = {
  "Fintech": "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  "Trading Platform": "bg-blue-500/15 text-blue-400 border-blue-500/25",
  "Web Development": "bg-violet-500/15 text-violet-400 border-violet-500/25",
  "Mobile": "bg-orange-500/15 text-orange-400 border-orange-500/25",
  "E-Commerce": "bg-pink-500/15 text-pink-400 border-pink-500/25",
  "Social Media": "bg-sky-500/15 text-sky-400 border-sky-500/25",
  "EdTech": "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
};

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      className="min-h-[80px] py-12 xl:py-16"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
          className="text-center xl:text-left mb-12"
        >
          <span className="text-accent/70 text-sm tracking-widest uppercase font-medium">Portfolio</span>
          <h2 className="h2 mt-2">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-white/50 max-w-[600px] mt-3 mx-auto xl:mx-0 text-sm leading-relaxed">
            A selection of projects across fintech, trading platforms, e-commerce, and more — showcasing fullstack expertise and technical leadership.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 + index * 0.08, duration: 0.5, ease: "easeOut" },
              }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 group hover:box-glow transition-all duration-300 gradient-border relative overflow-hidden"
            >
              {/* Scan line on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent -top-1 group-hover:top-full transition-all duration-700 ease-in-out" />
              </div>

              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 leading-none">
                  {project.num}
                </span>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${categoryColors[project.category] ?? "bg-accent/10 text-accent border-accent/20"}`}>
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white/4 text-white/65 text-xs rounded-md border border-white/6 hover:bg-accent/15 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.live || project.mobile || project.github) && (
                <div className="flex items-center gap-3 pt-2 border-t border-white/6">
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_12px_rgba(0,255,153,0.3)] transition-all duration-200">
                            <BsArrowUpRight className="text-white/70 text-base hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {project.mobile && (
                    <Link href={project.mobile} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_12px_rgba(0,255,153,0.3)] transition-all duration-200">
                            <BsPhone className="text-white/70 text-base hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Mobile App</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_12px_rgba(0,255,153,0.3)] transition-all duration-200">
                            <BsGithub className="text-white/70 text-base hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
