import { ExpandIcon } from "lucide-react";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaGithub />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
