"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiTypescript, SiNestjs,
  SiDocker, SiApachekafka, SiRedis, SiMysql, SiPostgresql,
  SiExpress, SiAmazonaws, SiNginx, SiGit, SiGithub, SiGitlab,
  SiJira, SiTrello,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Fullstack developer based in Vietnam — 5 years building scalable web and mobile applications. Passionate about clean architecture, performance, and shipping products that make an impact.",
  info: [
    { fieldName: "Name", fieldValue: "Ha Quoc Viet" },
    { fieldName: "Phone", fieldValue: "+84 83536 6950" },
    { fieldName: "Experience", fieldValue: "5 Years" },
    { fieldName: "Nationality", fieldValue: "Vietnamese" },
    { fieldName: "Email", fieldValue: "viethq00@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available ✓" },
    { fieldName: "Languages", fieldValue: "English (B2), Vietnamese" },
  ],
};

const experience = {
  title: "My Experience",
  description: "5 years across fintech, trading platforms, e-commerce, and more.",
  item: [
    {
      company: "CMC Global",
      position: "Fullstack Developer & Technical Leader",
      duration: "Mar 2025 — Present",
      details: "Leading 12-person cross-functional team. Technologies: TypeScript, NestJS, ReactJS, Next.js, PostgreSQL, DynamoDB, AWS Lambda, EventBridge.",
    },
    {
      company: "MXV Exchange Platform",
      position: "Fullstack Developer",
      duration: "Sep 2023 — Mar 2025",
      details: "Microservices architecture for high-volume trading. Technologies: NestJS, Next.js, React Native, Kafka, Redis, MongoDB, PostgreSQL, Docker.",
    },
    {
      company: "Vitadiary & Traphaco ZMA",
      position: "Freelance Developer",
      duration: "May 2023 — Jun 2025",
      details: "Admin UI and Zalo Mini App. Technologies: NestJS, React.js, AWS S3, AWS RDS, Redis, PostgreSQL.",
    },
    {
      company: "Amai Content",
      position: "Backend Developer",
      duration: "Dec 2021 — Sep 2023",
      details: "Payment integration (Vietcombank, ACB), Facebook Messenger API, Google Business API. Technologies: ExpressJS, MySQL, MongoDB.",
    },
    {
      company: "JUSEI Master",
      position: "Backend Developer",
      duration: "Feb 2021 — Dec 2021",
      details: "Data analysis features for national exam prep app. Technologies: TypeScript, NestJS, MongoDB.",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Formal education in computer & information science.",
  item: [
    {
      institution: "VNU — Hanoi University of Science",
      degree: "Bachelor's — Computer & Information Science Advanced Program",
      duration: "2018 — 2023",
    },
  ],
};

const skills = {
  title: "Technical Skills",
  description: "Core technologies I work with on a daily basis.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3 />, name: "CSS3", color: "text-blue-400" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
    { icon: <FaReact />, name: "React", color: "text-cyan-400" },
    { icon: <FaReact />, name: "React Native", color: "text-cyan-300" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
    { icon: <SiNestjs />, name: "Nest.js", color: "text-red-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-400" },
    { icon: <SiDocker />, name: "Docker", color: "text-blue-400" },
    { icon: <SiApachekafka />, name: "Apache Kafka", color: "text-white" },
    { icon: <SiRedis />, name: "Redis", color: "text-red-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
    { icon: <SiMysql />, name: "MySQL", color: "text-blue-400" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-500" },
    { icon: <SiExpress />, name: "ExpressJS", color: "text-white/70" },
    { icon: <SiAmazonaws />, name: "AWS", color: "text-orange-400" },
    { icon: <SiNginx />, name: "Nginx", color: "text-green-400" },
    { icon: <SiGit />, name: "Git", color: "text-orange-500" },
    { icon: <SiGithub />, name: "GitHub", color: "text-white" },
    { icon: <SiGitlab />, name: "GitLab", color: "text-orange-400" },
    { icon: <SiJira />, name: "Jira", color: "text-blue-500" },
    { icon: <SiTrello />, name: "Trello", color: "text-blue-400" },
  ],
};

const additionalSkills = {
  title: "Additional Tools",
  description: "Supporting technologies and tools in my workflow.",
  skillList: [
    "DynamoDB", "AWS S3", "AWS EC2", "AWS ECS", "AWS CloudFront",
    "AWS RDS", "AWS Lambda", "AWS EventBridge", "Puppeteer", "Selenium",
    "Unix / Linux", "Visual Studio Code", "English B2", "Agile / Scrum",
  ],
};

const Resumes = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      className="min-h-[80px] py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-10 xl:gap-[60px]">
          {/* Tab list */}
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto xl:mx-0 gap-2 bg-transparent p-0">
            {["experience", "education", "skills", "additional-skills", "about"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="w-full capitalize py-3 px-5 rounded-xl text-left justify-start text-white/60 data-[state=active]:text-accent data-[state=active]:bg-accent/10 data-[state=active]:border-l-2 data-[state=active]:border-accent hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {tab.replace("-", " ")}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="text-center xl:text-left">
                  <span className="text-accent/70 text-sm tracking-widest uppercase">Career</span>
                  <h3 className="text-3xl xl:text-4xl font-bold mt-1">{experience.title}</h3>
                  <p className="text-white/50 mt-2 text-sm">{experience.description}</p>
                </div>
                <ScrollArea className="h-[420px] pr-2">
                  <div className="flex flex-col gap-4">
                    {experience.item.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1, duration: 0.4 } }}
                        className="glass-card rounded-xl p-6 hover:box-glow transition-all duration-300 group"
                      >
                        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-200">
                              {item.position}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                              <span className="text-white/60 text-sm">{item.company}</span>
                            </div>
                          </div>
                          <span className="text-accent/80 text-sm font-medium bg-accent/8 px-3 py-1 rounded-full border border-accent/20 whitespace-nowrap shrink-0">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">{item.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="text-center xl:text-left">
                  <span className="text-accent/70 text-sm tracking-widest uppercase">Background</span>
                  <h3 className="text-3xl xl:text-4xl font-bold mt-1">{education.title}</h3>
                  <p className="text-white/50 mt-2 text-sm">{education.description}</p>
                </div>
                {education.item.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
                    className="glass-card rounded-xl p-8 hover:box-glow transition-all duration-300 group max-w-[600px]"
                  >
                    <span className="text-accent text-sm font-semibold bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {item.duration}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-4 mb-3 group-hover:text-accent transition-colors duration-200">
                      {item.degree}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="text-center xl:text-left">
                  <span className="text-accent/70 text-sm tracking-widest uppercase">Expertise</span>
                  <h3 className="text-3xl xl:text-4xl font-bold mt-1">{skills.title}</h3>
                  <p className="text-white/50 mt-2 text-sm">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3">
                  {skills.skillList.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, transition: { delay: index * 0.03, duration: 0.3 } }}
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full aspect-square glass-card rounded-xl flex flex-col justify-center items-center gap-2 hover:box-glow hover:border-accent/30 transition-all duration-300 group p-3">
                            <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize font-medium">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Additional skills */}
            <TabsContent value="additional-skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="text-center xl:text-left">
                  <span className="text-accent/70 text-sm tracking-widest uppercase">Toolkit</span>
                  <h3 className="text-3xl xl:text-4xl font-bold mt-1">{additionalSkills.title}</h3>
                  <p className="text-white/50 mt-2 text-sm">{additionalSkills.description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {additionalSkills.skillList.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.04, duration: 0.3 } }}
                      className="glass-card rounded-xl px-4 py-3 flex justify-center items-center text-center hover:box-glow hover:border-accent/30 hover:text-accent transition-all duration-300 group cursor-default"
                    >
                      <span className="text-white/70 text-sm group-hover:text-accent transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-accent/70 text-sm tracking-widest uppercase">Personal</span>
                  <h3 className="text-3xl xl:text-4xl font-bold mt-1">{about.title}</h3>
                  <p className="max-w-[600px] text-white/50 py-3 mx-auto xl:mx-0 text-sm leading-relaxed">
                    {about.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-[640px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: index * 0.08, duration: 0.4 } }}
                      className="glass-card rounded-xl px-5 py-4 flex items-center justify-center xl:justify-start gap-4 hover:border-accent/25 hover:box-glow transition-all duration-300 group"
                    >
                      <span className="text-white/40 text-sm min-w-[90px] group-hover:text-accent/70 transition-colors duration-200">
                        {info.fieldName}
                      </span>
                      <span className="text-white font-medium text-sm">{info.fieldValue}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resumes;
