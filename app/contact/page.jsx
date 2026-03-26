"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+84 83536 6950",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "viethq00@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Ha Noi, Vietnam",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstname: "", lastname: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(personalInfo).forEach(([key, val]) => formData.append(key, val));

    axios
      .post("https://api.trephuongbac.com/users/send-email", formData)
      .then(() => {
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        setPersonalInfo({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      })
      .catch((err) => console.log("Error:", err))
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      className="py-12 xl:py-16"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
          className="text-center xl:text-left mb-12"
        >
          <span className="text-accent/70 text-sm tracking-widest uppercase font-medium">Contact</span>
          <h2 className="h2 mt-2">
            Let&apos;s <span className="text-accent">Work Together</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-[500px] mx-auto xl:mx-0 text-sm leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and I&apos;ll respond promptly.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }}
            className="flex-1 order-2 xl:order-none"
          >
            <form
              className="glass-card rounded-2xl p-8 xl:p-10 flex flex-col gap-5 hover:box-glow transition-all duration-300"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First name"
                  value={personalInfo.firstname}
                  onChange={(e) => setPersonalInfo((p) => ({ ...p, firstname: e.target.value }))}
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={personalInfo.lastname}
                  onChange={(e) => setPersonalInfo((p) => ({ ...p, lastname: e.target.value }))}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo((p) => ({ ...p, email: e.target.value }))}
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo((p) => ({ ...p, phone: e.target.value }))}
                />
              </div>

              <Select
                value={personalInfo.service}
                onValueChange={(v) => setPersonalInfo((p) => ({ ...p, service: v }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="system-architecture">System Architecture</SelectItem>
                    <SelectItem value="technical-leadership">Technical Leadership</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[180px] resize-none"
                placeholder="Tell me about your project..."
                value={personalInfo.message}
                onChange={(e) => setPersonalInfo((p) => ({ ...p, message: e.target.value }))}
              />

              <Button
                type="submit"
                size="md"
                disabled={loading}
                className="self-start min-w-[160px] relative overflow-hidden group"
              >
                <span className="relative z-10">{loading ? "Sending…" : "Send Message"}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5 } }}
            className="flex flex-col gap-4 order-1 xl:order-none xl:w-[300px] xl:justify-center"
          >
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.8 + index * 0.1, duration: 0.4 } }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:box-glow hover:border-accent/25 transition-all duration-300 group"
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider font-medium mb-0.5">{item.title}</p>
                  <h3 className="text-white font-medium text-sm xl:text-base">{item.description}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
