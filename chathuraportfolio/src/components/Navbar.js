import React, { useState } from 'react'
import Logo from '../assets/logo.jpg';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

export default function  () {

    const [nav,setNav] = useState(false);

    const links = [
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
      
        {
            id:4,
            link:'service'
        },
        {
            id:5,
            link:'portfolio'
        },
        {
            id:6,
            link:'contact'
        },

    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-gray-700 '>
     <div className='flex gap-4'>
     <img className='w-18 h-16 pl-4 rounded-full' src={Logo}/>

     <div className='hidden md:hidden lg:block text-bold'>
         <h2 className='pt-3  text-black/60 text-2xl'>
       Chathura
        <span className='text-orange-700 '>Jayawardhana</span>
        </h2>
       </div>

     
        </div> 

        <ul className='hidden md:flex'>

        {links.map(({id,link})=>(
           <li key={id} className='px-4 text-xl  cursor-pointer font-bold  text-black/60 capitalize hover:scale-105 duration-200'>
           <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
        )) }


           
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
           {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
         
        {nav && (
          <ul className='flex flex-col justify-center items-center absolute
          top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
             {links.map(({id,link})=>(
             <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>

              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
              </li>
          )) }
          </ul>

        )}

       
    </div>
  )
}

