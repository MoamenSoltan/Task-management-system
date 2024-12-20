import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../Redux/Slices/notesSlice';
import { closeDeleteNotes, ToggleDeleteNotes } from '../Redux/Slices/modalSlice';
import { toast } from 'react-toastify';
const ModalDeleteNote = () => {
    
    const {deleteNoteId}=useSelector(state=>state.modals)
    
    const dispatch = useDispatch();
    const handleDelete = async () => {
    try {
        console.log(deleteNoteId);
        
      await axios.delete(`https://67597b75099e3090dbe1d697.mockapi.io/api/notes/${deleteNoteId}`);
      dispatch(deleteNote(deleteNoteId));
//      dispatch(deleteNote(response.data.id));

      dispatch(closeDeleteNotes())
      toast.success('Note deleted successfully');
    } catch (error) {
      toast.error("an error occurred")
     
      
    }
  }

  return (
    <div className='flex flex-col p-4 w-full items-center justify-center '>
        <h1 className='text-2xl font-bold'>Are you sure you want to delete this note?</h1>
        <div className='flex justify-between p-4 w-[80%]'>
          <button onClick={handleDelete} className='p-2 rounded-lg bg-red-500 text-white hover:scale-105'>DELETE</button>
          <button className='p-2 rounded-lg bg-gray-200 text-black hover:scale-105' onClick={()=>dispatch(closeDeleteNotes())}>CANCEL</button>
        </div>
    </div>
  )
}

export default ModalDeleteNote