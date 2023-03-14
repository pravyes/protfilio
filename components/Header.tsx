import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
type Props = {}

function Header({}: Props) {
  return (
   <nav className="sticky top-0 p-5   flex items-start  justify-center md:justify-between max-w-[70%] mx-auto z-20 xl:items-center ">
    <motion.div  initial={{ x: -500, opacity: 0, scale: 0.5 }}
    animate={{ x:0, opacity: 1, scale: 1 }}
    transition={{ duration: 2.5 }} className="flex space-x-9 flex-row items-center">
    <SocialIcon url="https://twitter.com/pravyes" 
    fgColor='gray'
    bgColor='transparent'
    className='hover:bg-orange-200  rounded-full'
    />
    {/* <SocialIcon url="https://facebook.com/pravyes" 
    fgColor='gray'
    bgColor='transparent'
    className='hover:bg-orange-200 rounded-full'
    /> */}
    <SocialIcon url="https://discord.com/channels/1052948862840606781/1052948863306178582" 
    fgColor='gray'
    // bgColor='transparent'
    className='hover:bg-orange-200 rounded'
    />
     <SocialIcon url="https://www.linkedin.com/in/pravesh-shiwakoti-b11360154" 
    fgColor='gray'
    bgColor='transparent'
    className='hover:bg-orange-200 rounded-full'
    />
    <SocialIcon url="https://github.com/pravyes" 
    fgColor='gray'
    bgColor='transparent'
    className='hover:bg-orange-200 rounded-full'
    />
     {/* <SocialIcon url="https://youtube.com/jaketrent" 
    fgColor='gray'
    bgColor='transparent'
    className='hover:bg-orange-200  rounded-full'
    /> */}
    
   
    </motion.div>
    <Link href ='#contact'>
    <motion.div  initial={{ x: 500, opacity: 0, scale: 0.5 }}
    animate={{ x:0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }} className="flex flex-row items-center text-gray-300 cursor-pointer hover:bg-orange-200 rounded-full ">
   {/* <SocialIcon className="cursor-pointer "
   network='email'
   fgColor='gray'
   bgColor='transparent'/> */}

   <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">Get in touch</p>
    </motion.div>
    </Link>

   
   </nav>
   
    )
}

export default Header