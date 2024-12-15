import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { closeAddNotes } from "../Redux/Slices/modalSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setNote, fetchNotes, addNote } from "../Redux/Slices/notesSlice";
const ModalAddNotes = () => {
  const { notes, note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //     //  const {name,value}=e.target
  //     // setNote({...note,[name]:value})

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "https://67597b75099e3090dbe1d697.mockapi.io/api/notes",
      note
    );
    // dispatch(fetchNotes([note]))
    // console.log("notes after last update",notes);
    dispatch(addNote(note));

    dispatch(setNote({ title: "", description: "", date: "" }));
    setTimeout(() => window.location.reload(), 200);
    dispatch(closeAddNotes());
  };

  // const {AddNotesModal}=useSelector(state=>state.modals)

  return (
 
      
        <>
          <h1 className="absolute top-10 text-2xl">Enter note Details below</h1>
          <button
            onClick={() => dispatch(closeAddNotes())}
            className="absolute top-2 left-2 text-2xl"
          >
            <IoCloseCircleOutline />
          </button>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 flex-nowrap w-[60%] justify-center"
          >
            <input
              type="text"
              name="title"
              className="input-style "
              placeholder="title"
              value={note.title}
              onChange={(e) =>
                dispatch(setNote({ [e.target.name]: e.target.value }))
              }
            />

            <textarea
              name="description"
              placeholder="Description"
              value={note.description}
              className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-all"
              onChange={(e) =>
                dispatch(setNote({ [e.target.name]: e.target.value }))
              }
            ></textarea>

            <button
              type="submit"
              className=" bg-blue-500 min-w-2/3 m-auto p-2 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-110"
            >
              Add Note
            </button>
          </form>
        </>
    
  );
};

export default ModalAddNotes;
