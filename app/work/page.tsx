"use client";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'CodeBites',
    description: 'Microlearning platform focused on development',
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: ".NET" }
    ],
    image: '/assets/work/codebites-thumb.png',
    live: 'https://code-bites-six.vercel.app',
    github: 'https://github.com/SergiNavarr/CodeBites'
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Eventflow',
    description: 'A social network focused on community events. It has all the basic functionalities of a social network and a live chat powered by SignalR.',
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: ".NET" }
    ],
    image: '/assets/work/eventflow.png',
    live: 'https://eventflow-opal.vercel.app/',
    github: 'https://github.com/SergiNavarr/Frontend_Eventflow'
  },
  {
    num: '03',
    category: 'fullstack',
    title: "Tutuca´s",
    description: 'Ecommerce',
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "Strapi" }
    ],
    image: '/assets/work/tutucas.png',
    live: 'https://ecommerce-tutucas.vercel.app/',
    github: 'https://github.com/SergiNavarr/ecommerce-tutucas'
  },
]

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) =>{
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay:2.4, duration:0.4 , ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h3 className="text-accent">{project.category} project</h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/*Buttons*/}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-contain bg-primary" alt={project.title}/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full
                  justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex justify-center
                  items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}