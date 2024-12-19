import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNoteFound = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
        <h1 className='text-xl text-gray-600'>Page Not Found</h1>
        <p className='text-gray-400'>The page you're looking for doesn't exist.</p>
        <button onClick={()=>navigate(-1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Go back</button>
 
    </div>
  )
}

export default PageNoteFound