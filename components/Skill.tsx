
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;

}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>

        <img 
              
        src="data:image/png;base64,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" alt="" 
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
         filter group-hover:grayscale trasation duration-300 ease-in-out '
        />
      <div className='absolute opacity-0 group-hover:opacity-80
      transition duration-300 ease-in-out group-hover:bg-orange-300 h-24 w24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p></div>
          
      </div>
              </div>
  )
}

export default Skill