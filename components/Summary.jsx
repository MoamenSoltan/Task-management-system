import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Summary = () => {
    const {users,currentUser}=useSelector(state=>state.users)
    const {notes}=useSelector(state=>state.notes)
    const dispatch = useDispatch()

    let alluserCount=users.length
    let allNotesCount=notes.length
    let adminCount=0
    let userCount=0
    users.forEach(user => {
        if(user.role==="admin")
            adminCount++
        if(user.role==="user")
            userCount++
    });

  return (
    <div className='w-full  p-4 drop-shadow-lg ring-2 ring-blue-500 border-blue-500'>
        {currentUser.role==="user" && 
        <h1>The current number of Notes is :{allNotesCount} </h1>}
        {currentUser.role==="admin" && 
       <div>
         <h1>The Total number of Users is :{alluserCount} </h1>
         <h1>The current number of Admins is :{adminCount} </h1>
         <h1>The current number of users is :{userCount}</h1>
        
        </div>}
    </div>
  )
}

export default Summary