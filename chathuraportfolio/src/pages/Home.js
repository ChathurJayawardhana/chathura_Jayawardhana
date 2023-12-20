import React from 'react'
import Hero from '../assets/thara.jpg'

export default function  () {
  return (
    <div className='w-full bg-white py-16 px-4'>
      
       
       <div className='w-[1520] mx-auto grid md:grid-cols-2'>
         <img className='w-[400px] rounded-full mx-auto my-4' src={Hero}/>
         <div className='flex flex-col justify-center'>
          <>
       
           <h1 className='md:text-4xl sm:text-3xl  text-6xl font-bold py-'>  I am a Frontend Developer</h1>
           <p className='pt-8'>"Hello, I'm  a frontend developer dedicated to 
            crafting seamless, user-centric web experiences. 
            With expertise in HTML, CSS, JavaScript and ReactJS I specialize
             in translating design concepts into elegant and responsive interfaces."</p>
          </>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Contact Me
          </button>
                 
         </div>
       </div>
      
    </div>
  )
}
