"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsPhone } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

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
    image: "/assets/work/thump1.png",
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
    image: "/assets/work/MXVNano.png",
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
    image: "/assets/work/thump1.png",
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
    image: "/assets/work/thumpvtd.png",
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
    image: "/assets/work/thump2.png",
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
    image: "/assets/work/thump4.png",
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
    image: "/assets/work/thump2.png",
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
    image: "/assets/work/thump3.png",
    mobile: "",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Project (Web)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.mobile} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsPhone className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Live Project (Mobile)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center bg-pink-50/20 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-back/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} alt={project.title} fill />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
                <button className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all">
                  <PiCaretLeftBold onClick={handlePrevSlide} />
                </button>
                <button className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all">
                  <PiCaretRightBold onClick={handleNextSlide} />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
