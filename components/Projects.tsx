
import React from 'react'

type Props = {}

function Projects({}: Props) {
 
    
  return (
    <div className='h-screen relative z-50 flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center '>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl '>projects</h3>
        

        <div className='top-24  relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-9 scrollbar-thin  scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80'>

            
                <div className='w-screen hover:cursor-zoom-in flex-shrink-0 snap-center flex flex-col spay5 items-center justify-center p-20 md:p-44 h-screen'>

                    <img src="https://www.ifwwebstudio.com/images/blog/full/complete-website-project-faster.jpg" alt="" />
                <div className='container mx-auto space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-2xl font-semibold text-center '>
                    <span className='underline decoration-amber-600 upp'>Case study </span> 
                        
                        : App Maker</h4>
                        <p className=' text-lg text-justify w-fit  '>App Maker is a new, low-code development environment for G Suite that lets you build a wide range of apps for your business and customize processes to help you be more efficient. Building apps in App Maker is easy</p>
                </div>
                </div>
            



        </div>

        <div className='w-full absolute top-[30%] bg-[#473c25] left-0 h-[500px] -skew-y-12'></div>
        
      
       </div>
  )
}

export default Projects