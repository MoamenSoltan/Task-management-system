
import {BrowserRouter,Route,Routes} from 'react-router'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import EmptyNotes from '../components/EmptyNotes'
import NavBar from '../components/NavBar'


function App() {
  

  return (
  
   <div>
      <BrowserRouter>
    
      <Routes>

        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

        {/* TODO: nested routing */}
        <Route path='/admin/*' element={<Dashboard userType="admin"/>}/>
        <Route path='/user/*' element={<Dashboard userType="user"/>}/>

        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>


      </Routes>
      
      
      
      </BrowserRouter>
   </div>
  )
}

export default App
