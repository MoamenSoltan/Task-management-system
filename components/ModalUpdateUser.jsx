import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeUpdateUser } from "../Redux/Slices/modalSlice";  // Correctly import closeUpdateUser
import { updateUser } from "../Redux/Slices/userSlice";
import axios from "axios";

const ModalUpdateUser = ({ isOpen, onClose, user }) => {
  const dispatch = useDispatch();

  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
  });

  useEffect(() => {
    setUpdatedUser({ name: user.name, email: user.email });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://67597b75099e3090dbe1d697.mockapi.io/api/users/${user.id}`,
        updatedUser
      );
      dispatch(updateUser(response.data));
      onClose();  // Close the modal after updating
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
  
    <div className='w-screen h-screen fixed bg-half-transparent top-0 right-0 flex items-center justify-center'>
   
    <div className="modal-overlay fixed inset-0 flex justify-center items-center">
      <div className="modal-content bg-white p-6 rounded-md shadow-lg">
        <h2>Update User</h2>
        <input
          type="text"
          name="name"
          value={updatedUser.name}
          onChange={handleChange}
          className="p-2 border-2 border-gray-300 rounded-md w-full mb-4"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={updatedUser.email}
          onChange={handleChange}
          className="p-2 border-2 border-gray-300 rounded-md w-full mb-4"
          placeholder="Email"
        />
        <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded-md mt-2">
          Save Changes
        </button>
        <button onClick={onClose} className="bg-gray-300 p-2 rounded-md mt-2 ml-2">
          Cancel
        </button>
      </div>
    </div>
    </div>

    
    

    
  );
};

export default ModalUpdateUser;
