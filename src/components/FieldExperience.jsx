import React from 'react'
import OpM from "../assets/OpM.png"
import SPM from "../assets/SPM.png"
import EPM from "../assets/EPM.png"
import PO from "../assets/PO.jpeg"
import SE from "../assets/SE.jpeg"
import TL from "../assets/TL.png"

const FieldExperience = () => {
    const techs=[
        {
            id:1,
            src:OpM,
            title: "Operations Management",
            style : "shadow-blue-500"
        },

        {
            id:2,
            src:SPM,
            title: "Supply Chain Management",
            style : "shadow-red-800"
        },

        {
            id:3,
            src:EPM,
            title: "Engineering Management",
            style : "shadow-yellow-500"
        },
        {
            id:4,
            src:PO ,
            title: "Product Ownership",
            style : "shadow-yellow-500"
        },
        {
            id:5,
            src:SE ,
            title: "Sales Engineering",
            style : "shadow-cyan-500"
        },
        {
            id:6,
            src:TL ,
            title: "Team Leadership",
            style : "shadow-violet-500"
        },

        
    ]
  return (

    <div name = "FieldExperience" className='bg-gradient-to-b from-black to-gray-800 w-full max-h-full'>
        <div className='max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-green-500 inline'>
                    Field Experience
                </p>
                <p className='text-white py-4'>
                    I have Field Expertise in the following:
                </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({id, src, title, style}) =>(
                        
                        
                        <div key={id}
                        className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} 
                    alt="" 
                    size={20}
                    className='flex flex-row justify-center items-center w-20 h-2/3 mx-auto'/>
                    
                        <p className=' text-sm mt-1  '>{title}</p>
                        
                    
                        


                    
                    
                </div>
                        
                        
                        
                        
                        
                        
                        
                        ))}
                
                        


                    
                    
                
               
            </div>
        </div>
    </div>
  );
};

export default FieldExperience