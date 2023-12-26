import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactmeLayout from '../components/ContactmeLayout';

export default function Contact() {

    const contactme = [
        {
            id:1,
            name:"My Address",
            icon:<FaLocationDot/>,
            detail:"No 07,Kadahapola,Horombawa"
        },
        
        {
            id:3,
            name:"Call Me",
            icon:<FaPhone/>,
            detail:"0712592625"
        },
        {
            id:4,
            name:"Mail Me",
            icon:<IoMail/>,
            detail:"chathura9798@gmail.com"
        },
    ]

  return (
    <div name="contact" className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full  px-8'>
        <h3 className='text-orange-500 font-bold text-2xl text-center pt-16'>Contact</h3>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 pt-8 py-4 px-4  shadow-md shadow-green-300 rounded-lg'>
            {contactme.map((item)=>(
                <div key={item.id} className='pt-4 bg-gradient-to-r bg-green-200'>

                    
                  <div className='px-8 flex justify-center text-xl '>{item.icon}</div>
                  
                  

                
                    <div  className='px-8 flex justify-center pt-3 text-black font-md'>{item.detail}</div>
                    
                    
                </div>
            ))}
           
        </div>
        <div>
            <ContactmeLayout/>
        </div>
    </div>
  )
}
