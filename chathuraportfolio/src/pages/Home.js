import React from 'react'
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";
import {Grid} from '@mui/material'
import Hero from '../assets/thara.jpg'

export default function Home() {
  return (
    <div className='max-w-auto h-[600px] w-full py-4 px-4 relative'>
    <Grid container spacing={4} justifyContent={'center'} >
       <Grid item xs={12} sm={12} md={7} lg={8}>
        <div className='pl-40 sm:px-8 sm:pr-10 md:pl-28'>
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
        
      
       </Grid>

       <Grid item xs={12} sm={12} md={5} lg={4}>
         <img src={Hero}  className='pr-4 w-[500px] h-[500px] rounded-full sm:px-4'/>
       </Grid>


    </Grid>



    <Grid container>
      <Grid item>
      <div className='flex space-x-4 pl-40 pt-10'>
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

    </Grid>

    </div>
      
    
  )
}
