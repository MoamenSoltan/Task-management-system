import React from 'react'
import { FaPlus } from "react-icons/fa";

const AddUser = () => {
  return (
    <button className='p-10 text-white text-3xl rounded-full bg-purple-500 fixed bottom-10 right-10 hover:scale-105 transition-all '>
       <FaPlus /> 

    </button>
  )
}

export default AddUser