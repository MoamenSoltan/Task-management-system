import React from 'react'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { ToggleAddNotes,closeAddNotes } from '../Redux/Slices/modalSlice';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import ModalAddNotes from './ModalAddNotes';
import ModalTemplate from './ModalTemplate';

Modal.setAppElement('#root'); // Required for accessibility

const AddNote = () => {
  const {AddNotesModal}=useSelector(state=>state.modals)
  const dispatch = useDispatch()




  return (
  <>
    <button onClick={()=>{dispatch(ToggleAddNotes()) ;console.log(AddNotesModal);
    }}  className='p-10 text-white text-3xl rounded-full bg-blue-500 fixed bottom-10 right-10 hover:scale-105 transition-all '>
       <FaPlus /> 

    </button>

    <Modal
        isOpen={ AddNotesModal}
        onRequestClose={closeAddNotes}
        contentLabel="Example Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <ModalTemplate>
           <ModalAddNotes/>
        </ModalTemplate>
      </Modal>
  
  </>
  )
}

export default AddNote