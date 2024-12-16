import React from 'react'
import SearchBar from './SearchBar'
import Profile from './Profile'

const NavBar = () => {
  return (
    <div className='w-full   z-50 h-[8vh] drop-shadow-lg bg-gray-200 px-10 flex justify-between items-center'>
        <h1 className='font-semibold text-xl text-gray-600'>To Do </h1>
        {/* <SearchBar/> */}
        <Profile />
    </div>
  )
}

export default NavBar