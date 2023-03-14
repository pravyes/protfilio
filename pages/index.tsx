import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { UserCircleIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
    overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#F7AB0A]/80' >
      <Head>
        <title>Create Next App</title>
        </Head>
        
        <Header/>
        <section  id="hero" className='snap-start'>
          <Hero/>
          
        </section>

        <section className="snap-center " id="about">
          <About/>
        </section>

        {/* <section id='experience' className='snap-center'>
          <WorkExperience/>
        </section> */}

        <section id='skills' className='snap-start'>
          <Skills/>
        </section>

        <section id='project' className='snap-start'>
          <Projects />
          </section>

          <section id='contact' className='snap-start'>
            <ContactMe/>
          </section>
       {/* <Link href='#hero'>
        <footer className='grid grid-flow-row sticky bottom-5 m-20 w-full cursor-pointer animate-bounce'>
        <div className=' ite ms-center justify-center-start hover:scale-100 ease-in duration-500'>
                <UserCircleIcon className='text-[#f7AB0A] h-10 w-10 justify-center animate-pulse  m-10 rounded-full filter grayscale hover:grayscale-0'/>
            </div>
          <div className='flex items-center justify-self-start hover:scale-100 ease-in duration-500'>
            <img className='h-10 w-10 m-10 rounded-full filter grayscale hover:grayscale-0 zoom' src=" https://media-exp1.licdn.com/dms/image/C5603AQHz2LdZ8mZDEA/profile-displayphoto-shrink_800_800/0/1615276844263?e=1674086400&v=beta&t=gl6nbarDFvzzTWyZB1t4HXU44z0VAdTonNkt9iOQ4A8" alt="" />

          </div>
        </footer>
       
       </Link> */}

      




      
    </div>
  )
}
