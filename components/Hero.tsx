import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Photo from '../assest/photo.png'
import Image from 'next/image'


type Props = {}

export default function Hero({}: Props) {

    const [text, count] =useTypewriter({
        words:[
            "Hi, The Name's Pravesh Shiwakoti",
            "Guy-who-Loves-To-.tsx",
            "<LovesToCodeMore/>"
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen top-42 mt-2 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Image className='relative   rounded-full h-80 w-80 mx-auto object-cover cursor-pointer scale-75 hover:scale-100 ease-in duration-500'
         src={Photo.src} alt="" />
       <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Software Developer</h2>
       
        <h1 className='text-2xl lg:text-3xl font-semibold px-8'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5 mb-10'>
            
            <Link href="#about"><button className="heroButton">About</button></Link>
            {/* <Link href="#experience"><button className="heroButton">Experience</button></Link> */}
            <Link href="#skills"><button className="heroButton">Skills</button></Link>
            <Link href="#project"><button className="heroButton">Project</button></Link>
            <Link href="#contact"><button className="heroButton">Contact</button></Link>
        </div>
        </div>
        </div>
  )
}