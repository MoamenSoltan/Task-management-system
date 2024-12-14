import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";


const NoteCard = ({title,description,date}) => {
  return (
    <div className=' md:w-2/5 lg:w-1/5 sm:w-1/2  h-[35vh] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-all'>
        <h2 className='text-xl h-[20%]'>{title}</h2>
        <p className='mt-10 w-[80%] h-[30%]'>{description}</p>
        
              <p className=' mt-10 font-bold text-2xl '>{date}</p>
       

        <div className='w-full  p-4 flex justify-between items-center '>
            <button className='p-2 rounded-lg bg-red-500 text-white hover:scale-105'><IoTrashBinSharp /></button>

            <button className='p-2 rounded-lg bg-blue-500 text-white hover:scale-105'><GrUpdate />
            </button>
        </div>
    </div>
  )
}

export default NoteCard