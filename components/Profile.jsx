import React from 'react'
import { CgProfile } from "react-icons/cg";
import SideProfile from './SideProfile';


const Profile = () => {
    let profileBar=false
  return (
    <div className='rounded-full'>
        <button className='hover:drop-shadow-xl' onClick={()=>{}}><CgProfile className='text-5xl text-gray-600'/></button>

        {profileBar && <SideProfile/>}

    </div>
  )
}

export default Profile