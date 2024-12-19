import NavBar from "../components/NavBar"
import { Route, Routes, Navigate } from "react-router-dom"
import AdminDashboard from "./AdminDashboard"
import UserDashboard from "./UserDashboard"
import { useSelector } from 'react-redux'
import PageNoteFound from "./PageNoteFound"

const Dashboard = ({ userType }) => {
  const { currentUser } = useSelector(state => state.users);

  // Check if user type matches current user's role
  if (!currentUser || currentUser.role !== userType) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="">
      <NavBar />
      <Routes>
        {userType === "admin" && (
          <Route path="dashboard" element={<AdminDashboard />} />
        )}
        {userType === "user" && (
          <Route path="dashboard" element={<UserDashboard />} />
        )}
         <Route path='*' element={<PageNoteFound/>} />
      </Routes>
    </div>
  )
}

export default Dashboard
