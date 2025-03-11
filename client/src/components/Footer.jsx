import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img width={150} src={assets.logo} alt="Logo" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Created by @Mrsoni | All rights reserved.
      </p>
      <div className="flex gap-2.5">
        <a href="https://www.facebook.com/share/1FDE4RymaV/" target="_blank" rel="noopener noreferrer">
          <img className="cursor-pointer" src={assets.facebook_icon} width={35} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/mr_soni.odt?igsh=dG9vaG40cnlnYnJn" target="_blank" rel="noopener noreferrer">
          <img className="cursor-pointer" src={assets.instagram_icon} width={35} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
