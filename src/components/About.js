import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { FaCss3Alt } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import ShimmerProductCard from "./ShimmerProductCard";

const About = () => {
  return (
    <div className="h-screen grid place-content-center  text-center">
      <h1 className="py-2 text-3xl lg:text-5xl font-bold text-blue-700 ">Shop Hub</h1>
      <p className="sm:text-xl lg:text-3xl font-semibold">E Commerce Web Application</p>
      <p className="text-sm lg:py-2 text-gray-500">Created by Saikumar Darisetti</p>
      <div className="flex justify-center my-2 text-gray-600 text-lg cursor-pointer">
        <div className="px-1" ><FaHtml5 /><MdHtml /></div>
        <div className="px-1" ><FaCss3Alt /><MdCss /></div>
        <div className="px-1" ><IoLogoJavascript /></div>
        <div className="px-1" ><FaReact /></div>
        <div className="px-1" ><TbBrandRedux /></div>
        <div className="px-1" ><SiTailwindcss /></div>
        <div className="px-1" ><IoLogoFirebase /></div>
        <div className="px-1" ><FaGithub /></div>
      
      </div>
      
    </div>
  );
};

export default About;
