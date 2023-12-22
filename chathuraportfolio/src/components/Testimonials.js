import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import girl from '../assets/Testimonial/girl.jpg';
import jehan from '../assets/Testimonial/jehan.webp';
import maduka from '../assets/Testimonial/maduka.webp';
import mbatush from '../assets/Testimonial/mbatush.webp';
import sampath from '../assets/Testimonial/sampath.jpeg';

export default function Testimonials() {
  const topClient = [
    {
      id:1,
      name:"Jehan",
      position:"Fiver Client",
      comment:"Great Seller-Responsiive,Communicative and willing to interate and converge towards a satisfactory output.Would Recomond",
      src:jehan,

  },
  {
      id:2,
      name:"Maduka",
      position:"Fiver Client",
      comment:"Great Seller-Responsiive,Communicative and willing to interate and converge towards a satisfactory output.Would Recomond",
      src:maduka,
  },
  {
    id:3,
    name:"mbatush",
    position:"Fiver Client",
    comment:"Great Seller-Responsiive,Communicative and willing to interate and converge towards a satisfactory output.Would Recomond",
    src:mbatush,
},
{
  id:4,
  name:"Fionajr",
  position:"Fiver Client",
  comment:"Great Seller-Responsiive,Communicative and willing to interate and converge towards a satisfactory output.Would Recomond",
  src:girl,
},
{
id:5,
name:"Sampath",
position:"CEO-SMP",
comment:"Great Seller-Responsiive,Communicative and willing to interate and converge towards a satisfactory output.Would Recomond",
src:sampath,
},
  
  ];

  return (
    <div className='max-w-screen-lg mx-auto p-2 z-1 flex flex-col justify-center w-full h-full '>
      <h1 className='text-green-700 font-bold text-2xl px-4 pt-2 '><u>Testimonials</u></h1>
      <div className='lg:hidden w-full py-6'>
        {/* For small screens, display one column */}
        <Splide options={{ perPage: 1, gap: "1rem", drag: "free", arrows: "false" }}>
          {topClient.map((item) => (
            <SplideSlide key={item.id}>
              <div className='border-none hover:scale-105 duration-300 bg-black text-white py-4 px-4 z-5'>
                <div className='flex justify-between item-center'>
                  <div>
                    <h2 className='text-2xl'>{item.name}</h2>
                    <p className='pt-4 text-xl'>{item.position}</p>
                  </div>
                  <div>
                    <img src={item.src} className='w-[50px] h-[50px] rounded-full' alt={item.name} />
                  </div>
                </div>
                <div>
                  <p className='pt-4'>{item.comment}</p>
                  <div className='pt-2 flex'>
                  <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
    </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className='hidden lg:flex max-w-[1520px] m-auto py-6  '>
        {/* For medium and larger screens, display two columns */}
        <Splide options={{ perPage:3, gap: "1rem", drag: "free", arrows: "false" }}>
          {topClient.map((item) => (
            <SplideSlide key={item.id}>
              <div className='border-none  hover:scale-105 duration-300 bg-black text-white py-4 px-4 mr-4'>
                <div className='flex justify-between item-center'>
                  <div>
                    <h2 className='text-2xl'>{item.name}</h2>
                    <p className='pt-4 text-xl'>{item.position}</p>
                  </div>
                  <div>
                    <img src={item.src} className='w-[50px] h-[50px] rounded-full' alt={item.name} />
                  </div>
                </div>
                <div>
                  <p className='pt-4'>{item.comment}</p>
                  <div className='pt-2 flex'>
                  <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
    </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
