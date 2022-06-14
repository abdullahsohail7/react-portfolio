import React from 'react'
import YImage from '../assets/YImage.png';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name ="Home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className=' max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-2xl sm:text-5xl font-bold text-white'> Mechatronics and Control Engineer
</h2>
<p className='text-gray-500 py-4 max-w-md'>A dynamic, team spirited engineering individual with an extraordinary blend of leadership, business and manufacturing industry knowledge. Creative problem solving and troubleshooting skills complemented by meticulous and creative detail to specifications. 
</p>
<div>
    <Link to='portfolio'
    smooth
    duration={30}
    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        Portfolio <span className='group-hover:rotate-90 duration-300'>
        <MdOutlineKeyboardArrowRight size={25} className ="ml-1"/>
            </span>
    </Link>
</div>
            </div>
<div>
    <img src={YImage} 
    alt="Display 2 " 
    className='rounded-2xl mx-2 w-2/3 md:w-2/3'/>
</div>
        </div>

    </div>
  )
}

export default Home