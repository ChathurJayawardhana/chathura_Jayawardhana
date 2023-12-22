import React from 'react'
import Hero from '../assets/thara.jpg'

export default function  () {
  return (
    <div name="home" className='w-full bg-white py-16 px-4'>
      
       
       <div className='w-[1520] mx-auto grid md:grid-cols-2'>
         <img className='w-[300px] rounded-full mx-auto my-4' src={Hero}/>
         <div className='flex flex-col justify-center'>
          <>
       
           <h1 className=' md:text-4xl sm:text-3xl lg:text-6xl font-bold py-'>Hi,I'm Chathura Jayawardhana</h1>
           <p className='pt-8 md:text-3xl sm:text-2xl lg:text-4xl text-orange-800'>"Front-End & MERN Stack Developer"</p>
          </>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold w-[200px] rounded-md  my-6 mx-auto md:mx-0 py-3'>
            Contact Me
          </button>
                 
         </div>
       </div>
      
    </div>
  )
}
