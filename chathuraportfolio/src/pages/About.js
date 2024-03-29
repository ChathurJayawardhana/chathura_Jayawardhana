import React from 'react';
import Aboutimg from '../assets/logo.jpg';
import Technical from '../components/Technical'
import Testimonials from '../components/Testimonials';

export default function About() {
  return (
    <div name="about" className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full  px-8'>
      <h3 className='text-orange-500 font-bold text-2xl text-center pt-4'> About Me</h3>
      <div className='w-[1520] mx-auto pt-6 pr-6 flex flex-col items-center'>
        <div className='pt-4'>
          <div className='bg-gray-500 px-3 py-3 rounded-full'>
           <img src={Aboutimg} className='w-[150px] h-[150px] rounded-full object-cover' alt='Profile' />
          </div>
        
        </div>

        <div className='flex flex-col justify-center pt-8 md:text-3xl sm:text-2xl lg:text-2xl text-black'>
          <p className='px-8 text-center'>
            I work as a <b>Frontend</b> and <b>React </b> developer and have worked with data analysts using
            <b>PowerBI</b> and as well as <b>Figma</b> design. I enjoy hearing things out. I've gained a lot of knowledge
            by paying close attention. I've discovered how to combine work and life. I am a very content individual. I
            had exciting dreams and ended up studying BSc applied mathematics & Computing at the University of Jaffna in
            Sri Lanka.
          </p>
        </div>
      </div>
       
     <div className=''>
     <Technical/>
     </div>
     <div >
      {/*<Testimonials/>*/}
     </div>
         
    </div>
  );
}
