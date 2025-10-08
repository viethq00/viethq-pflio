"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiNestjs,
  SiDocker,
  SiApachekafka,
  SiRedis,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiAmazonaws,
  SiNginx,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJira,
  SiTrello,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "I am a fullstack developer based in Vietnam, specializing in building and developing web applications from frontend to backend. I am passionate about creating innovative digital solutions that provide exceptional user experiences and exceed client expectations.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ha Quoc Viet",
    },
    {
      fieldName: "Phone",
      fieldValue: "+84 83536 6950",
    },
    {
      fieldName: "Experience",
      fieldValue: "5 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Vietnam",
    },
    {
      fieldName: "Email",
      fieldValue: "viethq00@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on a variety of projects using different technologies.",
  item: [
    {
      company: "CMC Global",
      position: "Fullstack Developer - Technical Leader",
      duration: "Mar. 2025 - Now",
      details:
        "Leading a cross-functional team of 12 members to develop and deliver product features with a strong focus on performance, scalability, and timely delivery. Technologies: JavaScript, TypeScript, Node.js, NestJS, ReactJS, Next.js, PostgreSQL, DynamoDB, AWS Lambda, AWS EventBridge.",
    },
    {
      company: "MXV Exchange Platform",
      position: "Fullstack Developer",
      duration: "Sep. 2023 – Mar. 2025",
      details:
        "Designed and implemented microservices-based architecture for high-volume trading transactions. Developed scalable backend APIs with ExpressJS and NestJS, integrated Kafka and Redis for real-time data processing, optimized MongoDB and PostgreSQL schemas, and built frontend in Next.js and React Native. Technologies: JavaScript, TypeScript, NodeJS, ExpressJS, NestJS, NextJS, React Native, Kafka, Redis, Nginx, MongoDB, PostgreSQL, Docker.",
    },

    {
      company: "Vitadiary & Traphaco ZMA",
      position: "Freelance Developer",
      duration: "May. 2023 – Jun. 2025",
      details:
        "Developed and optimized UI for VitaDairy's admin management and Traphaco Zalo mini app. Refactored backend logic and fixed critical bugs for loyalty applications. Technologies: JavaScript, TypeScript, NodeJS, NestJS, React.js, AWS S3, AWS RDS, Redis, PostgreSQL.",
    },
    {
      company: "Amai Content",
      position: "Backend Developer",
      duration: "Dec. 2021 – Sep. 2023",
      details:
        "Built transaction management system for automated payments integrated with Vietcombank and A Chau Bank. Developed real-time messaging system for multi-platform content management using Facebook Messenger API. Created backend services using Google Business Profile API and automated workflow for publishing content across multiple social media platforms. Technologies: JavaScript, TypeScript, NodeJS, ExpressJS, MySQL, MongoDB.",
    },
    {
      company: "JUSEI Master",
      position: "Backend Developer",
      duration: "Feb. 2021 – Dec. 2021",
      details:
        "Developed data analysis and statistics features for the national examination for Judo therapy experts. Designed and implemented scalable MongoDB schemas to handle large data sets efficiently. Technologies: TypeScript, NestJS, MongoDB.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have pursued a comprehensive education in computer and information science.",
  item: [
    {
      institution: "VNU - HUS",
      degree: "Computer & Information Science Advanced Program",
      duration: "2018 - 2023",
    },
  ],
};

const additionalSkills = {
  title: "Additional Skills & Tools",
  description: "Other technologies and tools I work with:",
  skillList: [
    "DynamoDB",
    "AWS S3",
    "AWS EC2", 
    "AWS ECS",
    "AWS CloudFront",
    "AWS RDS",
    "AWS Lambda",
    "AWS EventBridge",
    "Puppeteer",
    "Selenium",
    "Windows OS",
    "Unix OS",
    "Visual Studio Code",
    "English (B2 Level)",
  ],
};

const skills = {
  title: "My Skills",
  description: "I have experience with the following technologies:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },

    {
      icon: <FaReact />,
      name: "React",
    },

    {
      icon: <FaReact />,
      name: "React Native",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNestjs />,
      name: "Nest.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiApachekafka />,
      name: "Apache Kafka",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJS",
    },
    {
      icon: <SiAmazonaws />,
      name: "AWS",
    },
    {
      icon: <SiNginx />,
      name: "Nginx",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiGitlab />,
      name: "GitLab",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
    {
      icon: <SiTrello />,
      name: "Trello",
    },
  ],
};

const Resumes = () => {
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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="additional-skills">Additional Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w--[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w--[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 mt-6">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4x6 font-bold">{skills.title}</h3>
                  <p className="max-w-[600px text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="p-2">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="additional-skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{additionalSkills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {additionalSkills.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {additionalSkills.skillList.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[#232329] rounded-xl p-4 flex justify-center items-center min-h-[80px]"
                      >
                        <span className="text-white text-sm text-center">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 py-3 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 ">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resumes;
