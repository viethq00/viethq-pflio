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
    category: "Fintech & Web Development",
    title: "Technical Leader - Brighte",
    description:
      "Brighte is an Australian fintech company specializing in clean-energy home installations. Led a cross-functional team of 12 members to develop vendor webhook management and CDR income detection systems. Designed comprehensive webhook management with retry mechanisms and built robust income analysis engine using bank transaction data.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "ReactJS" },
      { name: "Next.js" },
      { name: "PostgreSQL" },
      { name: "DynamoDB" },
      { name: "AWS Lambda" },
      { name: "AWS EventBridge" },
    ],
    live: "",
    mobile: "",
    github: "",
  },

  {
    num: "02",
    category: "Web & Mobile Development",
    title: "Fullstack Developer - NanoTrading",
    description:
      "Unlock the potential of the commodities market with NanoTrading, your go-to trading app designed specifically for nano-sized commodities. Whether you're an experienced trader or just starting out, NanoTrading makes it easy to buy, sell, and manage your investments with precision.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "Docker" },
      { name: "React Native" },
      { name: "Kafka" },
      { name: "Redis" },
      { name: "Nginx" },
      { name: "MongoDB" },
    ],
    live: "https://nano.mxv.com.vn:8441/",
    mobile: "",
    github: "",
  },

  {
    num: "03",
    category: "Web & Mobile Development",
    title: "Fullstack Developer - MXV Exchange",
    description:
      "MXV Exchange Platform is an online trading platform facilitating the trading of commodities in energy and agricultural groups. Designed and implemented microservices-based architecture for high-volume trading transactions with real-time data processing.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "Docker" },
      { name: "React Native" },
      { name: "Kafka" },
      { name: "Redis" },
      { name: "Nginx" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
    ],
    live: "https://sat.mxv.com.vn/",
    mobile: "https://apps.apple.com/vn/app/mxv-rubber/id6483337283",
    github: "",
  },

  {
    num: "04",
    category: "Web Development",
    title: "Freelancer Fullstack Developer - VitaDairy",
    description:
      "VitaDairy: an application founded and developed by VitaDairy Vietnam Joint Stock Company, in order to provide consumers with the safest and most economical solution when using VitaDairy's dairy products. Developed and optimized UI for admin management system.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "React.js" },
      { name: "AWS S3" },
      { name: "AWS RDS" },
      { name: "Redis" },
      { name: "PostgreSQL" },
    ],
    mobile: "",
    live: "",
    github: "",
  },

  {
    num: "05",
    category: "Mobile Development",
    title: "Freelancer Fullstack Developer - Traphaco ZMA",
    description:
      "Traphaco Zalo Mini App: Developed and optimized UI for Traphaco's Zalo mini app. Refactored backend logic for loyalty application, fixing critical bugs and improving system performance for better user experience.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "React.js" },
      { name: "AWS S3" },
      { name: "AWS RDS" },
      { name: "Redis" },
      { name: "PostgreSQL" },
    ],
    mobile: "",
    live: "",
    github: "",
  },

  {
    num: "06",
    category: "E-commerce Development",
    title: "Fullstack Developer - TrePhuongBac",
    description:
      "Discover TrePhuongBac, your premier online store for eco-friendly bamboo items. We offer stylish home décor, kitchenware, furniture, and accessories, all crafted from premium bamboo. Prioritizing sustainability and quality, TrePhuongBac ensures each product enhances your lifestyle while being environmentally friendly.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Next.js" },
      { name: "Nginx" },
      { name: "MongoDB" },
    ],
    mobile: "",
    live: "",
    github: "",
  },

  {
    num: "07",
    category: "Social Media Management",
    title: "Backend Developer - Amai Content",
    description:
      "Amai Content is an application optimizing content and managing social networks like Facebook, Google My Business, Instagram, etc. Built transaction management system for automated payments integrated with Vietcombank and A Chau Bank. Developed real-time messaging system for multi-platform content management using Facebook Messenger API.",
    stack: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Express.js" },
      { name: "Selenium" },
      { name: "Puppeteer" },
      { name: "Next.js" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
    mobile: "",
    live: "https://amaicontent.com/",
    github: "",
  },

  {
    num: "08",
    category: "Educational Technology",
    title: "Backend Developer - JUSEI Master",
    description:
      "JUSEI Master is a study application for the national examination for Judo therapy experts. Developed data analysis and statistics features, optimizing performance of backend queries. Designed and implemented scalable MongoDB schemas to handle large data sets efficiently.",
    stack: [
      { name: "TypeScript" },
      { name: "NestJS" },
      { name: "MongoDB" },
    ],
    mobile: "",
    live: "",
    github: "",
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[60px]">
          {/* Header Section */}
          <div className="text-center xl:text-left">
            <h2 className="text-4xl font-bold mb-4">My Work</h2>
            <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
              A collection of projects showcasing my expertise in full-stack development, 
              system architecture, and technical leadership across various domains.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.5 }
                }}
                className="bg-[#232329] rounded-xl p-8 hover:bg-[#2a2a32] transition-all duration-300 group"
              >
                {/* Project Number & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  <span className="text-accent text-sm font-medium px-3 py-1 bg-accent/10 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 text-white/80 text-sm rounded-md hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-colors duration-200">
                            <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project (Web)</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  {project.mobile && (
                    <Link href={project.mobile} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-colors duration-200">
                            <BsPhone className="text-white text-xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project (Mobile)</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-colors duration-200">
                            <BsGithub className="text-white text-xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
