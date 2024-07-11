"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";

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
    title: "Address",
    description: "Ha Noi, Vietnam",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const [personalInfo, setPersonalInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", personalInfo.firstname);
    formData.append("lastname", personalInfo.lastname);
    formData.append("email", personalInfo.email);
    formData.append("phone", personalInfo.phone);
    formData.append("service", personalInfo.service);
    formData.append("message", personalInfo.message);

    axios
      .post("https://api.trephuongbac.com/users/send-email", formData)
      .then((res) => {
        toast({
          title: "Message sent successfully!",
          description: "I will contact you soon!",
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[38px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Work together</h3>
              <p className="text-white/60">Cooperation would be valuable.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  onChange={(e) =>
                    setPersonalInfo((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }))
                  }
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  onChange={(e) =>
                    setPersonalInfo((prev) => ({
                      ...prev,
                      lastname: e.target.value,
                    }))
                  }
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  onChange={(e) =>
                    setPersonalInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  onChange={(e) =>
                    setPersonalInfo((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              </div>

              <Select
                onValueChange={(e) => {
                  setPersonalInfo((prev) => ({
                    ...prev,
                    service: e,
                  }));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="mobile-development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                onChange={(e) =>
                  setPersonalInfo((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-3">
              {info.map((item, index) => (
                <li key={index} className="flex gap-4 items-center mb-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xl text-white">{item.title}</p>
                    <h3 className="text-white/60">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
