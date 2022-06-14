import React from 'react'

import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
  return (
    <div name="Portfolio" id="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen'>
        <div className='max-w-screen-md p-4 mx-auto flex flex-col justify-center  w-full h-full'>
            <div className='pb-8 py-4'>
                <p className='text-4xl  font-bold inline-table border-b-4 border-red-500'>Portfolio</p>
                <p className='py-6'>My Projects</p>


            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-orange-500 rounded-lg'>
                    <img src={reactWeather} 
                    alt="" 
                    className='rounded-sm hover:scale-105 duration-300'/>
                    <div className='flex flex-row justify-center items-center bg-gradient-to-r from-black-500 to-gray-500 rounded-sm mix-blend-color-dodge'>
                        <button className=' w-1/2 px-4 py-2 m-4  rounded-sm hover:scale-105 duration-300 text-orange-300 font-bold  '>Code</button>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio