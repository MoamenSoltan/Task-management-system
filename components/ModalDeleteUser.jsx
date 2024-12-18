import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux/Slices/userSlice"; // Import deleteUser action
import { closeDeleteUser } from "../Redux/Slices/modalSlice";  // Ensure correct import for closing modal
import axios from "axios";
import { setCurrentUser } from "../Redux/Slices/userSlice";

const ModalDeleteUser = ({ isOpen, onClose, userId }) => {

  const {currentUser}=useSelector(state=>state.users)
  const dispatch = useDispatch();

  // Handle delete user action
  const handleDelete = async () => {
    try {
      // Make API request to delete the user
     const response =  await axios.delete(`https://67597b75099e3090dbe1d697.mockapi.io/api/users/${userId}`);
      
      // Dispatch action to update Redux store and remove the user
      dispatch(deleteUser(userId));
       // dispatch(deleteUser(response.data.id)); //could be used instead of userId

      if(currentUser.id===userId) 
        dispatch(setCurrentUser(null))  // Log out the user if he deleted his account

      // Close the modal after deletion
      onClose();
    } catch (error) {
      console.log(error);  // Log error if delete fails
    }
  };

  if (!isOpen) return null;  // If modal is not open, return null (don't render the modal)

  return (
    <div className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this user?</h2>
        
        {/* Buttons for confirmation or cancellation */}
        <div className="flex justify-between">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteUser;
