import React from 'react'
import Hero from '../assets/thara.jpg'
import bgimage from '../assets/banner2.gif'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

export default function  () {
  const sectionStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(70%)',
     
  };
  
  return (
    <div name="home" className='w-auto   py-16 px-4 z-10' style={sectionStyle}>
      
       
       <div className='w-[1520] mx-auto grid md:grid-cols-2 z-10' >
         <img className='w-[300px] rounded-full mx-auto my-4' src={Hero}/>
         <div className='flex flex-col justify-center'>
          <>
       
           <h1 className='sm:text-6xl md:text-5xl  lg:text-4xl font-bold text-white'>Hi,I'm  <span className='text-orange-700'>Chathura Jayawardhana</span></h1>
           <p className='pt-8 md:text-4xl sm:text-4xl lg:text-3xl text-white'>"Front-End & MERN Stack Developer"</p>
          </>
          <div>
                <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 mt-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
             Contact Me
              <span className="group-hover:rotate-90 duration-300">
                < MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
                </div>
                 
         </div>
       </div>
      
    </div>
  )
}
