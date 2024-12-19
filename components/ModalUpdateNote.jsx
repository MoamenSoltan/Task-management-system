/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { closeUpdateNotes } from '../Redux/Slices/modalSlice';
import { updateNote } from '../Redux/Slices/notesSlice';

const ModalUpdateNote = ({ note }) => {
  const dispatch = useDispatch();
  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    description: note.description,
  });

  // Update the note state as soon as the prop `note` changes
  useEffect(() => {
    setUpdatedNote({ title: note.title, description: note.description });
  }, [note]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`https://67597b75099e3090dbe1d697.mockapi.io/api/notes/${note.id}`, updatedNote);
      // Fetch the updated notes list after successful update
     
      dispatch(updateNote({
        id: note.id, 
        updatedData: response.data
      }));  

      dispatch(closeUpdateNotes());  // Close the modal after updating
    } catch (error) {
      console.log("Error fetching notes:", error);
      alert('Failed to update note. Please try again.')
      
    }
  };

  return (
    <div className='flex flex-col p-4 w-full items-center justify-center'>
      <h1 className='text-2xl font-bold'>Edit Note</h1>
      <input
        type="text"
        value={updatedNote.title}
        onChange={(e) => setUpdatedNote({ ...updatedNote, title: e.target.value })}
        className="input-style mb-10"
        placeholder="Title"
      />
      <textarea
        value={updatedNote.description}
        onChange={(e) => setUpdatedNote({ ...updatedNote, description: e.target.value })}
        className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-all"
        placeholder="Description"
      />
      <div className='flex justify-between p-4 w-[80%]'>
        <button onClick={handleUpdate} className='p-2 rounded-lg bg-blue-500 text-white hover:scale-105'>
          SAVE
        </button>
        <button className='p-2 rounded-lg bg-gray-200 text-black hover:scale-105' onClick={() => dispatch(closeUpdateNotes())}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default ModalUpdateNote;
