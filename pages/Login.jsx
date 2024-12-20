import { useState} from "react"
import {useNavigate} from 'react-router'
import { Link } from "react-router"
import { setCurrentUser,fetchUsers } from "../Redux/Slices/userSlice"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
// validation func returns a bool 
const Login = () => {

  const dispatch=useDispatch()


  const navigate=useNavigate()
  const [error, setError] = useState(null)
  const [user, setUser] = useState({
    email:"",
   
    password:"",
    
  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  //atleast 8 characters

  const validate=()=>{
    if (!user.email||!user.password) {
      setError("all fields must be provided")
      //TODO: validate returns a boolean value
      return false
    }
      
   
      

     else if(!emailRegex.test(user.email))
      {
        setError("enter a valid Email")
        return false
      }
      

     else if(!passwordRegex.test(user.password))
      {
        setError("Enter a valid password , 8 Characters , containing numbers and characters")
        return false
      }
    setError(null)

    return true
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const isValid=validate()
    if(!isValid)
      return;
    try {
      dispatch(setCurrentUser({...user,role:"user"}))
      
      navigate('/user/dashboard')
      toast.success("logged in successfully")
    
      
    } catch (error) {
      console.log(error)
      toast.error("failed to login")
    }

  }
  return (
    <div className='min-w-full h-[100vh] flex  justify-center  bg-gray-600 '>
      
      <div className="w-[400px] h-[75vh] rounded-lg p-10 m-auto bg-white drop-shadow-lg text-center">

      <h1 className="font-semibold mb-20 ">Login</h1>
      <form className='flex flex-col gap-10 flex-nowrap  justify-center' onSubmit={handleSubmit} >
        
       

        <input type="text" placeholder='Email' className="input-style" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}} />

       

        <input type="password" placeholder='Password' className="input-style" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/>

      
        
        <button type="submit"  className=" bg-blue-500 w-1/3 m-auto p-2 rounded-md text-white hover:bg-blue-800 transition-all hover:scale-110" >Login</button>
      </form>

      {error&& <h2 className="font-semibold mt-2 text-red-500">{error}</h2>}

      <h2 className="mt-10 text-gray-800 font-semibold">Don't have an account? {<Link className="text-blue-500" to={"/signup"}>Signup</Link>} </h2>
      </div>
      
    </div>
  )
}

export default Login