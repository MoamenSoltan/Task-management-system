import React from 'react'
import { CgProfile } from "react-icons/cg";
import SideProfile from './SideProfile';
import { toggleSideBar } from '../Redux/Slices/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const Profile = () => {
  const {sideBar,currentUser}=useSelector(state=>state.users)
   
  const dispatch = useDispatch()
  return (
    <div className=' flex z-50 p-4 w-[20%] justify-center items-center gap-4 '>
        <button className='hover:drop-shadow-xl' onClick={()=>{dispatch(toggleSideBar())}}><CgProfile className='text-5xl text-gray-600'/></button>
        <h1 className='text-xl'>Welcome <span className='font-semibold'>{currentUser.name}</span></h1>
        {sideBar && <SideProfile className = {"z-auto"} />}

    </div>
  )
}

export default Profile