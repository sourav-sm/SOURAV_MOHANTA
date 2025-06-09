import React, { useEffect, useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContetent from "../../compnents/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import pic from "../../pic.png";
import { SiLeetcode } from "react-icons/si";


import Card from "../../compnents/Card";


import {FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { SiFreelancer } from "react-icons/si";
import { MdFileDownload } from "react-icons/md";
import { LuCoffee } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

const About=()=>{
  return(
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      <h1 className="text-6xl  bg-gray-900 font-bold text-yellow-400 flex justify-center items-center">About Me</h1>
      <div className="grid lg:grid-cols-2  items-start mt-10 px-4">
        <div className="flex flex-col gap-6 items-center md:items-start mb-8 p-6 bg-gray-900">
             <div className="mt-5 flex space-x-6">
               <div className="w-80 h-80 p-1 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 ">
                  <img src={pic} alt=""  className="w-full h-full rounded-full"/>
               </div>
               <div className="space-y-3">
                  <h1 className="text-white font-bold text-5xl">Sourav</h1>
                  <h2 className="text-yellow-400 text-3xl font-bold">Software Engineer</h2>
                  <div className="flex">
                    <IoLocation size={24} className="text-yellow-400"/>
                    <h2 className="text-2xl text-gray-300 font-semibold">Pune India</h2>
                  </div>
                  <h2 className="flex text-2xl text-gray-300 font-semibold">
                    <IoMdMailUnread size={24} className="text-yellow-400"/>
                     souravmohanta4428@gmail.com
                  </h2>
                  <h2 className="flex text-2xl text-gray-300 font-semibold">
                    <SiFreelancer size={24} className="text-yellow-400"/>
                    Available for Freelance
                  </h2>
                  <a href="https://drive.google.com/file/d/1YsC9mmL9hz2NkE_2c65EbWyzWHCDl2J1/view" target="_blank" className="flex bg-gray-800 p-2 justify-center items-center rounded-xl text-2xl text-yellow-400 font-semibold">
                    <MdFileDownload size={24} className="text-yellow-400"/>
                    <h2>Download Resume</h2>
                  </a>
               </div>
             </div>
             <div className="bg-gray-800 p-5 rounded-2xl">
                  <h2 className="text-yellow-400 font-bold text-3xl mb-3">About Me</h2>
                  <p className="text-gray-300 text-2xl font-semibold">Passionate full-stack developer with 5+ years of experience building web applications. I specialize in React, Next.js, and modern JavaScript frameworks, creating responsive and performant user interfaces.
                    <br/>
                     My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations. I'm constantly learning new technologies and contributing to open-source projects.</p>
             </div>
             <div className="grid grid-cols-3 gap-6 w-full">
                <div className="bg-gray-800 p-8 flex flex-col justify-center items-center">
                  <IoCodeSlash className="text-yellow-400" size={24}/>
                  <h2 className="text-white text-4xl font-bold mt-2">50+</h2>
                  <h2 className="text-gray-400 text-2xl font-semibold">Projects</h2>
                </div>
                <div className="bg-gray-800 p-8 flex flex-col justify-center items-center">
                   <LuCoffee className="text-yellow-400" size={24}/>
                   <h2 className="text-white text-4xl font-bold mt-2">500+</h2>
                   <h2 className="text-gray-400 text-2xl font-semibold">cups of Tea</h2>
                </div>
                <div className="bg-gray-800 p-8 flex flex-col justify-center items-center">
                  <GoPeople className="text-yellow-400" size={24}/>
                  <h2 className="text-white text-4xl font-bold mt-2">100+ </h2>
                   <h2 className="text-gray-400 text-2xl font-semibold">Happy Client</h2>
                </div>
             </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-2xl">
           <div className="text-yellow-400 flex justify-between p-4">
             <div className="text-4xl flex gap-2 font-bold">
               <FaGithub/>
               Github Stats
             </div>
             <a href="https://github.com/sourav-sm" target="_blank" className="text-2xl">
              @sourav-sm
             </a>
           </div>
           <div className="grid grid-cols-2 gap-4 text-yellow-400">
            <Card
               icon={<FaRegStar size={24}/>}
               value={200}
               label={"stars Earned"}
            />
            <Card
               icon={<FaCodeFork size={24}/>}
               value={25}
               label={"Forks"}
            />
            <Card
             icon={<IoCodeSlash size={24}/>}
             value={1000}
             label={"Commits"}
            />
            <Card
               icon={<FaGithub size={24}/>}
               value={150}
               label={"Repositories"}/>
           </div>

           {/* commit history */}
           <div className="bg-gray-800 border-gray-700 mt-5 p-4 rounded-xl">
            github commit records 
           </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About;
