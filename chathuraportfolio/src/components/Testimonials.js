import React from 'react'
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
    
]

  return (
    <div className='max-w-[1520px] m-auto px-4 py-8'>
    <h1 className='text-green-700 font-bold text-2xl px-4 pt-2'><u>Testimonials</u></h1>
      

    </div>
  )
}
