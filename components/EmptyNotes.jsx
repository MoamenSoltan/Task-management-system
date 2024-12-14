import React from 'react'
import emptySVG from "../data/empty.svg"
//TODO: inset-0 fixed flex justify-center items-center inset-0
const EmptyNotes = () => {
  return (
    <div className='fixed flex justify-center items-center inset-0 w-screen h-screen '>
        <div>
            <img src={emptySVG} className='w-40' alt='Empty Notes'/>
            <h1 className='text-xl text-gray-600'>No notes yet!</h1>
            <p className='text-gray-400'>Add some by clicking the plus icon on the bottom right.</p>
        </div>
    </div>
  )
}

export default EmptyNotes