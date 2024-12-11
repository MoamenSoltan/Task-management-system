import React from 'react'
import { IoIosSearch } from "react-icons/io";



const SearchBar = () => {
  return (
    <div className='flex justify-center items-center w-[20%]  '>
        <div className="p-1 w-[100%] flex items-center bg-white  rounded-lg shadow-md">
            <input type="text" placeholder="Search" className="w-full p-2 outline-none"/>
            <IoIosSearch className='text-xl'/>

        </div>    
    </div>
  
  )
}

export default SearchBar