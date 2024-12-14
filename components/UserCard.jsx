import React from 'react'

import { IoTrashBinSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";


const UserCard = ({id,name,email}) => {
  return (
    <div className='w-full m-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-all'>
    <h2 className='text-xl h-[20%]'>id :{id}</h2>
    <h1 className='mt-10 h-[30%]'>{name}</h1>
    
          <p className=' mt-10 font-bold text-2xl '>{email}</p>
   

    <div className='w-full  p-4 flex justify-between items-center '>
        <button className='p-2 rounded-lg bg-red-500 text-white hover:scale-105'><IoTrashBinSharp /></button>

        <button className='p-2 rounded-lg bg-blue-500 text-white hover:scale-105'><GrUpdate />
        </button>
    </div>
</div>
  )
}

export default UserCard