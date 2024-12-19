import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios';
import { deleteNote } from '../Redux/Slices/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import ModalTemplate from './ModalTemplate';
import ModalDeleteNote from './ModalDeleteNote';
import { ToggleDeleteNotes,closeDeleteNotes,ToggleUpdateNotes,closeUpdateNotes } from '../Redux/Slices/modalSlice';
import ModalUpdateNote from './ModalUpdateNote';
import { Scrollbar } from 'react-scrollbars-custom';



const NoteCard = ({id,title,description,date}) => {
  Modal.setAppElement('#root'); // Required for accessibility
  const {DeleteNotesModal,UpdateNotesModal,noteToUpdate}=useSelector(state=>state.modals)
  const {sideBar}= useSelector(state=>state.users)

  const dispatch = useDispatch()
  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`https://67597b75099e3090dbe1d697.mockapi.io/api/notes/${id}`);
  //     dispatch(deleteNote(id));
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const handleDelete = () => {
    dispatch(ToggleDeleteNotes(id))
  }

  const handleUpdate = () => {
    dispatch(ToggleUpdateNotes({ id, title, description })); 
  }

  // flex-auto , to make a div grow and shrink , but takes into account the original size , unlike flex-1 

  return (
    <div className={` md:w-2/5 lg:w-1/5 ${sideBar &&"-z-10"} sm:w-1/2  h-[35vh] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col flex-auto flex-nowrap items-center p-4 hover:scale-105 transition-all`}>
        <h2 className='text-xl h-[20%]'>{title}</h2>
        
        <Scrollbar style={{ width: 200, height: 250 }}>
          <p className='mt-10 text-sm w-[80%] h-[50%] overflow-auto'>{description}</p>
        </Scrollbar>
        
              <p className=' mt-10 font-bold text-2xl '>{date}</p>
       

        <div className='w-full  p-4 flex justify-between items-center '>
            <button onClick={handleDelete} className='p-2 rounded-lg bg-red-500 text-white hover:scale-105'><IoTrashBinSharp /></button>

            <button onClick={handleUpdate} className='p-2 rounded-lg bg-blue-500 text-white hover:scale-105'><GrUpdate />
            </button>
        </div>

        {/* Delete Note Modal */}
        <Modal
        isOpen={ DeleteNotesModal}
        onRequestClose={closeDeleteNotes}
        contentLabel="Modal Delete Notes"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ModalTemplate>
           <ModalDeleteNote />
        </ModalTemplate>
      </Modal>

        {/* Update Modal */}
        <Modal
        isOpen={UpdateNotesModal}
        onRequestClose={() => dispatch(closeUpdateNotes())}
        contentLabel="Modal Update Notes"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ModalTemplate>
          <ModalUpdateNote note={noteToUpdate} />
        </ModalTemplate>
      </Modal>

    </div>
  )
}

export default NoteCard