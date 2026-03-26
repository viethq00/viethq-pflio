"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-accent/10 blur-[60px] scale-75" />

      {/* Avatar — centered inside the same box as the SVGs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
        }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="relative w-[240px] h-[240px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden">
          <Image
            src="/assets/avatar.png"
            priority
            quality={100}
            fill
            alt="Ha Quoc Viet"
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* Outer animated dash circle */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.5 } }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.circle
          cx="253"
          cy="253"
          r="235"
          stroke="#00ff99"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>

      {/* Inner counter-rotating dotted ring */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5 } }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="185"
          stroke="rgba(0,191,255,0.3)"
          strokeWidth="1.5"
          strokeDasharray="8 22"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* Outer slow tiny dots */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.8, duration: 0.5 } }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="248"
          stroke="rgba(0,255,153,0.1)"
          strokeWidth="1"
          strokeDasharray="2 28"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
