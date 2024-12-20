import React from 'react';
import { IoTrashBinSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleDeleteUser, ToggleUpdateUser } from '../Redux/Slices/modalSlice';  // Correctly import

const UserCard = ({ id, name, email, role }) => {
  const dispatch = useDispatch();
const {DeleteUserModal}=useSelector(state=>state.users)

  const handleDelete = () => {
    dispatch(ToggleDeleteUser(id));  // Dispatch the correct action for delete
    console.log('DeleteUserModal:', DeleteUserModal);



  };

  const handleUpdate = () => {
    dispatch(ToggleUpdateUser({ id, name, email }));  // Dispatch the correct action for update
  };

  return (
    <div className='w-full m-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-all'>
      <h2 className='text-xl h-[20%]'>id :{id}</h2>
      <h2 className='text-xl'>role : {role}</h2>
      <h1 className='mt-10 h-[30%]'>{name}</h1>
      <p className='mt-10 font-bold text-2xl'>{email}</p>

      <div className='w-full p-4 flex justify-between items-center '>
        <button onClick={handleDelete} className='p-2 rounded-lg bg-red-500 text-white hover:scale-105'>
          <IoTrashBinSharp />
        </button>

        <button onClick={handleUpdate} className='p-2 rounded-lg bg-blue-500 text-white hover:scale-105'>
          <GrUpdate />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
