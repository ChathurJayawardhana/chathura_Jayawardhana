import React from 'react';
import { FaFigma, FaReact, FaWordpress, FaNetworkWired } from 'react-icons/fa';
import { SiPowerbi } from 'react-icons/si';

export default function Service() {

const service = [
    {
      id: 1,
      icon: <FaReact />,
      title: 'Web Development',
      description: "I'll Develop all Kind Of Web Development Using React and Mern Stack projects",
    },
    {
      id: 2,
      icon: <FaFigma />,
      title: 'UI-UX Designe',
      description: "I'll Designe all of Web interfaces using Figma",
    },
    {
      id: 3,
      icon: <FaWordpress />,
      title: 'WordPress Developing',
      description: "I'll develop all kinds of Wordpress websites and store with premium design",
    },
    {
      id: 4,
      icon: <FaNetworkWired />,
      title: 'Network TroubleShooting',
      description: "I'll solving all Network Problems ",
    },
    {
      id: 5,
      icon: <SiPowerbi />,
      title: 'Data Analyst',
      description: "I'll Analyst all data analyst Project Using ",
    },
    
]

  return (
    <div name="service" className="w-full bg-white py-16 px-8">
      <h3 className="text-orange-500 font-bold text-2xl text-center">Services</h3>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 py-4 px-4 pl-12">
        {service.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-4"
          >
            {item.icon}
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}