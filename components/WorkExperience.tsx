
import React,{Component} from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

// import Marquee from "react-fast-marquee";

type Props = {
  
}

export default function WorkExperience({}: Props) {
  // const slideLeft = () => {
  //   var slider = document.getElementById('slider');
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };

  // const slideRight = () => {
  //   var slider = document.getElementById('slider!');
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

  return (
    <motion.div className='flex  relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        {/* flex flex-col relative h-screen  text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center */}
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Experience</h3>
        {/* <ChevronLeftIcon   onClick={slideLeft}  className=' h-1/3 w-1/3 hover:text-orange-200 ' /> */}
       
        <div   className='  flex  gap-5  p-10 snap-x   snap-mandatory  scrollbar-thin  scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80 hover:' >
       
            
       <ExperienceCard />
       <ExperienceCard/>
       <ExperienceCard/>
       <ExperienceCard/>
       
       
   </div>
       
       
        {/* <ChevronRightIcon  onClick={slideRight}  className='decoration-red-700 h-1/3 w-1/3 cursor-pointer  hover:text-orange-200 '/> */}
        </motion.div>
  )
}