import React from 'react'
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";
import {Grid} from '@mui/material'
import Hero from '../assets/thara.jpg'

export default function Home() {
  return (
    <div className='py-6 pt-16'>
    <Grid container spacing={4} justifyContent={'center'} >
       <Grid item xs={12} md={6} lg={7} xl={8}>
        <div className='pt-20 pl-40 '>
        <h2 className='text-4xl sm:text-7xl  font-bold text-black'>
                I am a Frontend Developer
            </h2>
            <p className='text-orange-800 py-4 max-w-md'>
            "Hello, I'm  a frontend developer dedicated to 
            crafting seamless, user-centric web experiences. 
            With expertise in HTML, CSS, JavaScript and ReactJS I specialize
             in translating design concepts into elegant and responsive interfaces."
            </p>
        </div>
        <div className='flex space-x-4'>
                <div>
                <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                < MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
                </div>
               <div>
               <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                < MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
               </div>
                
            </div>
      
       </Grid>

       <Grid item xs={12} md={6} lg={5} xl={4}>
         <img src={Hero}  className='pr-4 w-[500px] h-[500px] rounded-full sm:px-4'/>
       </Grid>


    </Grid>

    </div>
      
    
  )
}
