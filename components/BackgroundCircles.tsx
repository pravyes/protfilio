import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{  opacity: 0,  }}
    animate={{  scale: [1, 2, 3, 3, 2, 1], opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0] }}
    transition={{ duration: 5.5 }} className='relative top-32 flex justify-center items-center'>
        
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
        <div className="absolute border border-[#333333] opacity-2 rounded-full h-[300px] w-[300px] mt-52 animate-ping "/>
        <div className="absolute border border-[#333333] decoration-7 opacity-5 rounded-full h-[500px] w-[500px]  mt-52 animate-pulse"/>
        {/* <div className="absolute border border-[#49483b] opacity-2 rounded-full h-[800px] w-[800px] mt-52 animate-pulse "/> */}
       
    </motion.div>
  )
} 