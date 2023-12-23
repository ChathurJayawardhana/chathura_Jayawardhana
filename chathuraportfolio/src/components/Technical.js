import React from "react";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import reactImage from "../assets/skills/react.png";
import Mui from "../assets/skills/Mui.jpg";
import graphql from "../assets/skills/graphql.png";
import github from "../assets/skills/github.png";
import tailwind from "../assets/skills/tailwind.png";
import Node from "../assets/skills/node.png";
import Redux from "../assets/skills/Redux.png";
import Mongo from "../assets/skills/Mongodb-PNG-Image-HD.png";
import Figma from "../assets/skills/Figma.png"

const Experience = () => {
  const techs = [
   
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Mui,
      title: "Mui",
      style: "shadow-blue-400",
    },
  
  
    {
      id: 9,
      src: Node,
      title: "Node Js",
      style: "shadow-green-400",
    },
    {
        id: 10,
        src: Redux,
        title: "Redux",
        style: "shadow-purple-400",
      },
      {
        id: 11,
        src: Mongo,
        title: "MongoDb",
        style: "shadow-green-400",
      },
      {
        id: 12,
        src: Figma,
        title: "Figma",
        style: "shadow-pink-400",
      },



  ];

  return (
    <div
      name="experience"
      className="bg-white w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black pt-6 ">
      <h3 className='text-green-700 font-bold text-2xl px-4 pt-2'><u>Technical Skils</u></h3>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 font-bold md:text-xl lg:text-2xl hidden sm:block">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;