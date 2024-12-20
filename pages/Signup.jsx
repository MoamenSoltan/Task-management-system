import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { setCurrentUser, addUser,setPage } from "../Redux/Slices/userSlice";
import axios from "axios";
import { fetchUsers, setUsers, setLoading, incrementPage, toggleHasMore } from "../Redux/Slices/userSlice";
import {  toast } from 'react-toastify';


const Signup = () => {
  const { currentUser, users, loading, hasMore, page } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    verifyEmail: "",
    password: "",
    role: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // At least 8 characters

  const validate = () => {
    if (!user.name || !user.email || !user.password || !user.role || !user.verifyEmail) {
      setError("All fields must be provided");
      return false;
    } else if (user.email !== user.verifyEmail) {
      setError("Emails are not identical");
      return false;
    } else if (!emailRegex.test(user.email)) {
      setError("Enter a valid email");
      return false;
    } else if (!passwordRegex.test(user.password)) {
      setError("Enter a valid password, 8 characters containing numbers and characters");
      return false;
    }
    setError(null);
    return true;
  };

  // const getUsers = async () => {
  //   dispatch(setLoading(true));

  //   try {
  //     const response = await axios.get(
  //       `https://67597b75099e3090dbe1d697.mockapi.io/api/users?page=${page}&limit=2`
  //     );
  //     // Append new users to existing users in the state
  //     dispatch(setUsers([...users, ...response.data]));
      
     
      
  //   } catch (error) {
  //     console.log("Error fetching users:", error);
  //     dispatch(setLoading(false));
  //     alert("Failed to load users. Please try again.");
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setPage(1))
    const isValid = validate();
    if (!isValid) return;

    try {
      const response = await axios.post("https://67597b75099e3090dbe1d697.mockapi.io/api/users", user);
      dispatch(setCurrentUser(response.data));
      dispatch(setUsers([...users, response.data]));

      toast.success("User registered successfully!");

      console.log("last user :", response.data);
      console.log("updated  users :", users);

      

      // Immediately refetch the users after successful signup
      // await getUsers(); // Ensure that the new user is appended to the user list

      // Navigate to the appropriate dashboard based on role
      if (user.role === "admin") navigate("/admin/dashboard");
      else if (user.role === "user") navigate("/user/dashboard");
    } catch (error) {
      toast.error("an error occurred")
      console.log(error);
    }
  };

  return (
    <div className="min-w-full h-[100vh] flex justify-center bg-gray-600">
      <div className="w-[400px] h-[75vh] rounded-lg p-10 m-auto bg-white drop-shadow-lg text-center">
        <h1 className="font-semibold mb-20">Signup</h1>
        <form className="flex flex-col gap-10 flex-nowrap justify-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="input-style"
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Email"
            className="input-style"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Confirm Email"
            className="input-style"
            value={user.verifyEmail}
            onChange={(e) => {
              setUser({ ...user, verifyEmail: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-style"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <div className="flex m-auto gap-2">
            <label htmlFor="admin">Admin</label>
            <input
              className="mr-10"
              type="radio"
              name="role"
              value="admin"
              checked={user.role === "admin"}
              onChange={() => {
                setUser({ ...user, role: "admin" });
              }}
            />
            <label htmlFor="user">User</label>
            <input
              type="radio"
              name="role"
              value="user"
              checked={user.role === "user"}
              onChange={() => {
                setUser({ ...user, role: "user" });
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-1/3 m-auto p-2 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-110"
          >
            Signup
          </button>
        </form>

        {error && <h2 className="font-semibold mt-2 text-red-500">{error}</h2>}

        <h2 className="text-gray-800 font-semibold">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
