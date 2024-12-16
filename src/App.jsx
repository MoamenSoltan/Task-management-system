import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import ProtectedRoute from '../components/ProtectedRoute'

function App() {
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

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
