import { ExpandIcon } from "lucide-react";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/viethq00/",
  },
  { icon: <FaGithub />, path: "https://github.com/viethq00" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
