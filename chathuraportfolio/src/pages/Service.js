import React from 'react'
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";



export default function Service() {

const service = [
    {
        id:1,
        src:<FaReact/>,
        Title:"Web Development",
        description:"I'll Develop all Kind Of Web Development Using React and Mern Stack projects"
    },
    {
        id:2,
        src:<FaFigma/>,
        Title:"UI-UX Designe",
        description:"I'll Designe all of Web interfaces using Figma"
    },
      {
        id:3,
        src:<FaWordpress/>,
        Title:"WordPress Developing",
        description:"I'll develop all kind of Wordpress websites and store with premium design"
    },
    {
        id:4,
        src:<FaNetworkWired/>,
        Title:"Network TroubleShooting",
        description:"I'll solving all Network Problems "
    },
    {
        id:5,
        src:<SiPowerbi/>,
        Title:"Data Analyst",
        description:"I'll Analyst all data analyst Project Using   "
    },
    
]

  return (
    <div name="service" className='w-full bg-white py-16 px-8'>
       <h3 className='text-orange-500 font-bold text-2xl text-center'>Services</h3>
       <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 py-4 px-4'>
        {
            service.map((item)=>(
                <div className='border-none hover:scale-105 duration-300 bg-orange-600 text-white py-4 px-4 '>
                <p  className='w-[100px] h-[100px]'>{item.src}</p> 
                <div>
                    <h3>{item.Title}</h3>
                    <p>{item.description}</p>
                </div>
              </div>
            ))
        }
       
       </div>
    </div>
  )
}