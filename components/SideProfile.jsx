import React from 'react'
import { MdOutlineCancel } from "react-icons/md";


const SideProfile = () => {
  return (
    //TODO: fixed to overlap the other elements
    <div className='w-screen h-screen  fixed bg-half-transparent top-0 right-0'>
       <div className='w-[25%] bg-white float-right h-screen p-4'>

        <button className='text-xl' onClick={()=>{}}><MdOutlineCancel />
        </button>

        <div className='flex flex-col gap-2 justify-start items-center p-4'>
            <h1 className='text-2xl '>Profile management</h1>
        </div>
        {/* TODO: add other profile options */}
       </div>
    </div>
  )
}

export default SideProfile