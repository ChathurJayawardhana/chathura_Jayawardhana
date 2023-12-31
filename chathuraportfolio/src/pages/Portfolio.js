import React from "react";
import chatapp from "../assets/portfolio/chatapp.jpeg";
import recipyapp from "../assets/portfolio/recipyapp.jpeg";
import cjfashion from "../assets/portfolio/cjfashion.jpeg";
import wether from "../assets/portfolio/weatherapp.jpeg";

const Portfolio = () => {
  const repositories = [
    // Add your GitHub repository URLs here
    "https://github.com/ChathurJayawardhana/chat_app",
    "https://github.com/ChathurJayawardhana/recipee_app",
    "https://github.com/ChathurJayawardhana/Cj_Fashion",
    "https://github.com/ChathurJayawardhana/weathercj",
  ];

  const portfolios = [
    {
      id: 1,
      src: chatapp,
    },
    {
      id: 2,
      src: recipyapp,
    },
    {
      id: 3,
      src: cjfashion,
    },
    {
      id: 4,
      src: wether,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-white w-full  md:h-screen pt-12"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full py-16 px-8 ">
        <div className="pb-8">
        <h3 className='text-orange-500 font-bold text-2xl text-center pt-6'>Portfolio</h3>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <a href={repositories[id - 1]} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105 font-2xl font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
