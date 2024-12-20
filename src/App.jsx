import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import ProtectedRoute from '../components/ProtectedRoute'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PageNoteFound from '../pages/PageNoteFound'
import { ToastContainer } from 'react-toastify';
// TODO: key takeaway from project : use response from backend to set data back for a re-render , look at signup and modalAddNotes and modalDeleteuser
//TODO: better error handling like use alert for error messages , and 'finally' keyword in ry catch to set loading to false
//TODO: signup should set the users state
//TODO: make sure to handle multiple api calls in all of them , check modaldeleteuser 
function App() {


  const { AddNotesModal, DeleteNotesModal, DeleteUsersModal, UpdateNotesModal, UpdateUserModal } = useSelector(state => state.modals);
  const { sideBar } = useSelector(state => state.users);

  // Global handling for modals , instead of only sideBar
  useEffect(() => {
      if (sideBar ||AddNotesModal||DeleteNotesModal||DeleteUsersModal||UpdateNotesModal||UpdateUserModal) {
        document.body.classList.add('overflow-hidden'); // Add Tailwind class to body
      } else {
        document.body.classList.remove('overflow-hidden'); // Remove Tailwind class
      }
  
      return () => {
        document.body.classList.remove('overflow-hidden'); // Clean up on unmount
      }
    }, [sideBar, AddNotesModal,DeleteNotesModal,DeleteUsersModal,UpdateNotesModal,UpdateUserModal])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Protect the dashboard routes */}
      
          <Route 
            path='/admin/*' 
            element={
              <ProtectedRoute>
                <Dashboard userType="admin" />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/user/*' 
            element={
              <ProtectedRoute>
                <Dashboard userType="user" />
              </ProtectedRoute>
            } 
          />
          {/* Public Routes */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Signup />} />
          <Route path='*' element={<PageNoteFound/>} />



        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
