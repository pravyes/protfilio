import { motion } from 'framer-motion'
import React from 'react'
import Photo1 from '../assest/photo1.jpg'



type Props = {}

export default function About({}: Props) {
  return (
    <div className='z-30 top-11 flex flex-col relative h-screen  text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='invisible md:visible absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3> 
        <motion.img initial={{ x: -200, opacity: 0,  }}
    
    transition={{ duration: 1.5 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{once:true}}
     src={Photo1.src} alt=""
      className='  -mb-20  md:mb-0 flex-shrink-0 w-26 h-56 object-cover md:object-contain rounded-t-2xl rounded-r-2xl md:rounded-lg
      md:w-64 md:h-200 xl:w-[500px] xl:h-[650px] cursor-pointer hover:scale-100 ease-in duration-500'
      />
      <div className='space-y-10  px-10 md:px-10'>
        <h4 className='hidden md:block text-4xl md:text-2xl font-semibold '>
           Here is A little Background</h4>
           <p className='block  text-sm  md:text-xl sp justify-items-stretch'>I am a self taught software developer with a unique background in accounting. I have expertise in a range of front-end and back-end technologies, including JavaScript, React, Redux, React Native, .NET Web API, Node.js, Express, Entity Framework Core, SQL, MongoDB, AWS, and Firebase.

My experience in software development includes working on several major projects in web publishing, video streaming, blogs, and chatbots. I have demonstrated my ability to apply my technical skills to real-world problems, creating robust and efficient applications that meet client needs.</p>
      </div>
       
        </div>
  )
}