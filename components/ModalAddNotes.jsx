import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { closeAddNotes } from '../Redux/Slices/modalSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const ModalAddNotes = () => {

    const [note,setNote] = useState({
        title: "",
        description: "",
        
    })
    const handleChange = (e) => {
        const {name,value}=e.target
        setNote({...note,[name]:value})
        
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://67597b75099e3090dbe1d697.mockapi.io/api/notes",note)
        setNote({title: "",description: "",date: ""})
        dispatch(closeAddNotes())
    }


    
    // const {AddNotesModal}=useSelector(state=>state.modals)
    const dispatch = useDispatch() 
 
  return (
    <div className='w-screen h-screen fixed bg-half-transparent top-0 right-0 flex items-center justify-center'>
        <div className='w-[50%] h-[50%] rounded-lg justify-center items-center drop-shadow bg-white p-4 flex flex-col'>
        <h1 className='absolute top-10 text-2xl'>Enter note Details below</h1>
        <button onClick={()=>dispatch(closeAddNotes())
        } className='absolute top-2 left-2 text-2xl'><IoCloseCircleOutline /></button>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 flex-nowrap w-[60%] justify-center'>
            <input type="text" name='title' className='input-style ' placeholder='title' value={note.title} onChange={(e)=>setNote({...note,title:e.target.value})}/>

           <textarea name="description" placeholder='Description' value={note.description} className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-all" onChange={handleChange}>

           </textarea>

           

           <button type="submit"  className=" bg-blue-500 min-w-2/3 m-auto p-2 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-110" >Add Note</button>

        </form>
        </div>
    </div>
  )
}

export default ModalAddNotes