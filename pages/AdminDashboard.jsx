import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setLoading, incrementPage, toggleHasMore } from "../Redux/Slices/userSlice";
import axios from "axios";
import UserCard from "../components/UserCard";
import { ClipLoader } from "react-spinners";
import EmptyUsers from "../components/EmptyUsers";
import AddUser from "../components/AddUser";
import { ToggleDeleteUser, closeDeleteUser, ToggleUpdateUser, closeUpdateUser } from "../Redux/Slices/modalSlice";
import ModalDeleteUser from "../components/ModalDeleteUser";
import ModalUpdateUser from "../components/ModalUpdateUser";

const AdminDashboard = () => {
  const { users, loading, hasMore, page } = useSelector((state) => state.users);
  const { DeleteUsersModal, UpdateUserModal, userToUpdate ,deleteUserId} = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const getUsers = async () => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get(
        `https://67597b75099e3090dbe1d697.mockapi.io/api/users?page=${page}&limit=2`
      );
      dispatch(fetchUsers(response.data));
      if (response.data.length > 0) {
        dispatch(incrementPage());
      } else {
        dispatch(toggleHasMore());
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = (id) => {
    dispatch(ToggleDeleteUser(id)); // Open delete modal with user ID
  };

  const handleUpdate = (user) => {
    dispatch(ToggleUpdateUser(user)); // Open update modal with user data
  };

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen fixed flex justify-center items-center inset-0">
          <ClipLoader size={50} color="#3498db" loading={loading} />
        </div>
      ) : users.length === 0 ? (
        <div>
          <EmptyUsers /> 
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {users.map((user) => (
            <div className="p-4 w-[80%]" key={user.id}>
              <UserCard
                id={user.id}
                name={user.name}
                email={user.email}
                onDelete={() => handleDelete(user.id)} // Pass delete handler
                onUpdate={() => handleUpdate(user)} // Pass update handler
              />
            </div>
          ))}
        </div>
      )}

      {hasMore && !loading && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => {
              getUsers();
            }}
            className="mt-10 bg-blue-500 w-36 m-auto p-2 rounded-md my-10 text-white hover:bg-blue-800 transition-all hover:scale-110"
          >
            Load more
          </button>
        </div>
      )}

      {/* Delete User Modal */}
      <ModalDeleteUser
        isOpen={DeleteUsersModal}
        onClose={() => dispatch(closeDeleteUser())}
        userId={deleteUserId}
      />

      {/* Update User Modal */}
      <ModalUpdateUser
        isOpen={UpdateUserModal}
        onClose={() => dispatch(closeUpdateUser())}
        user={userToUpdate ? userToUpdate : null}  // Pass user data to update modal
      />
    </div>
  );
};

export default AdminDashboard;
