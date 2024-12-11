import NavBar from "../components/NavBar"
import { Route,Routes } from "react-router-dom"
import AdminDashboard from "./AdminDashboard"
import UserDashboard from "./UserDashboard"

const Dashboard = ({userType}) => {
  // const storedUser = JSON.parse(localStorage.getItem('user'));
  // console.log(storedUser);
  
  return (
    <div className="">
      <NavBar/>
      

      <Routes>

        {/* conditional rendering of the route based on the usertype */}

        {userType==="admin" && <Route path="dashboard" element={<AdminDashboard />} />}

        {userType==="user" && <Route path="dashboard" element={<UserDashboard/>}/>}

      </Routes>

      
    </div>
  )
}

export default Dashboard