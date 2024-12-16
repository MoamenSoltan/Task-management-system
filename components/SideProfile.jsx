import React, { useEffect } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { setCurrentUser, toggleSideBar } from '../Redux/Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LuLogOut } from "react-icons/lu";




const SideProfile = () => {
  const dispatch = useDispatch();
  const {currentUser,sideBar}=useSelector(state=>state.users)


  const handleLogout = ()=>{
    dispatch(setCurrentUser(null))
    dispatch(toggleSideBar())
  }
  useEffect(() => {
    if (sideBar) {
      document.body.classList.add('overflow-hidden'); // Add Tailwind class to body
    } else {
      document.body.classList.remove('overflow-hidden'); // Remove Tailwind class
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // Clean up on unmount
    }
  }, [sideBar])



  return (
    //TODO: fixed to overlap the other elements
    <div className=' w-screen h-screen z-50 fixed bg-half-transparent top-0 right-0'>
       <div className='z-50 w-[400px]  bg-white float-right h-screen p-4'>

        <button className='text-xl' onClick={()=>{dispatch(toggleSideBar())}}><MdOutlineCancel />
        </button>

        <div className='flex flex-col gap-2 justify-start items-center p-4'>
            <h1 className='text-2xl '>Profile management</h1>
        </div>
        {/* TODO: add other profile options */}

        <div className='flex p-4 flex-col h-screen gap-96'>
          
        <form className='w-full p-5 flex flex-col gap-10'>
         <div>
         <label htmlFor="">Name</label>
         <input type="text" placeholder='Name' className='input-style' value={currentUser.name} onChange={(e)=>{dispatch(setCurrentUser({...currentUser,name:e.target.value}))}} />
         </div>

         <div>
          <label htmlFor="email">E-mail</label>
         <input id="email" type="email" placeholder='Email' className='input-style' value={currentUser.email} onChange={(e)=>{dispatch(setCurrentUser({...currentUser,email:e.target.value}))}} />

         </div>

         <button onClick={()=>{dispatch(toggleSideBar())}}  className=" bg-blue-500 w-1/3 m-auto p-2 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-110" >Done</button>

         
        </form>

        <button className='bg-red-500 w-14 p-4 rounded-lg text-white text-2xl' onClick={()=>{handleLogout()}} ><LuLogOut /></button>
        </div>


       </div>
    </div>
  )
}

export default SideProfile