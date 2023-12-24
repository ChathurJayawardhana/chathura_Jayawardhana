import React from 'react'
import react from '../assets/skills/react.png';
import figma from '../assets/skills/Figma.png';
import network from '../assets/skills/network.jpg';
import power from '../assets/skills/PowerBi.jpg';




export default function Service() {

const service = [
    {
        id:1,
        src:react,
        Title:"Web Development",
        description:"I'll Develop all Kind Of Web Development Using React and Mern Stack projects"
    },
    {
        id:2,
        src:figma,
        Title:"UI-UX Designe",
        description:"I'll Designe all of Web interfaces using Figma"
    },
      
    {
        id:4,
        src:network,
        Title:"Network TroubleShooting",
        description:"I'll solving all Network Problems "
    },
    {
        id:5,
        src:power,
        Title:"Data Analyst",
        description:"I'll Analyst all data analyst Project Using   "
    },
    
]

  return (
    <div name="service" className='w-full bg-white py-16 px-8'>
       <h3 className='text-orange-500 font-bold text-2xl text-center'>Services</h3>
       <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 py-4 px-4 pl-12 shadow-md shadow-gray-600 rounded-lg'>
        {
            service.map((item)=>(
                <div className='border-none hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300  text-black/60 py-4 px-4'>
               <div className='flex items-center pl-20'>
               <img src={item.src} className='w-[75px] h-[75px] '/> 
                </div>
                
                <div>
                    <h3 className='pt-6 px-10 text-2xl font-bold'>{item.Title}</h3>
                    <p className='pt-6 px-10  font-bold'>{item.description}</p>
                </div>
              </div>
            ))
        }
       
       </div>
    </div>
  )
}