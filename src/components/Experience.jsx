import React from 'react'
import Excel from "../assets/MExcel.png"
import Sheets from "../assets/Sheets.png"
import SQL from "../assets/sql4.png"
import Matlab from "../assets/Matlab.png"
import react from "../assets/react.png"
import Python from "../assets/Python.png"
import java from "../assets/javascript.png"
import autocad from "../assets/Ac.png"
import solid from "../assets/sw1.png"
const Experience = () => {
    const techs=[
        {
            id:1,
            src:Excel,
            title: "Microsoft Excel",
            style : "shadow-green-500"
        },

        {
            id:2,
            src:Sheets,
            title: "Google Sheets",
            style : "shadow-green-800"
        },

        {
            id:3,
            src:SQL,
            title: "SQL",
            style : "shadow-orange-500"
        },

        {
            id:4,
            src:Matlab,
            title: "Matlab",
            style : "shadow-blue-500"
        },

        {
            id:5,
            src:react,
            title: "React",
            style : "shadow-purple-500"
        },

        {
            id:6,
            src:Python,
            title: "Python",
            style : "shadow-yellow-400"
        },
        {
        id:7,
        src:java,
        title: "JavaScript",
        style : "shadow-blue-400"
    },

    {
        id:8,
        src:autocad,
        title: "Autocad",
        style : "shadow-red-800"
    },

    {
        id:9,
        src:solid,
        title: "SolidWorks",
        style : "shadow-pink-400"
    },
    ]
  return (

    <div name = "Experience" id="experience" className='bg-gradient-to-b from-gray-800 to-black w-full max-h-full'>
        <div className='max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-yellow-500 inline'>
                    Experience
                </p>
                <p className='text-white py-4'>
                    Online Softwares I've Worked on:
                </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({id, src, title, style}) =>(
                        
                        
                        <div key={id}
                        className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} 
                    alt="" 
                    size={20}
                    className='flex flex-row justify-center items-center w-20 h-2/3 mx-auto'/>
                    
                        <p className=' mt-2  '>{title}</p>
                        
                    
                        


                    
                    
                </div>
                        
                        
                        
                        
                        
                        
                        
                        ))}
                
                        


                    
                    
                
               
            </div>
        </div>
    </div>
  );
};

export default Experience