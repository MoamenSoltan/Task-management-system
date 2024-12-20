import NoteCard from '../components/NoteCard'
// import { getNotes } from '../store/GetNotes'
import React, { useEffect , useState} from 'react'
import axios from 'axios'
import { ClipLoader } from 'react-spinners';
import EmptyNotes from '../components/EmptyNotes';
import AddNote from '../components/AddNote';
import { useSelector,useDispatch } from 'react-redux';
import { fetchNotes,incrementPage,setLoading,toggleHasMore } from '../Redux/Slices/notesSlice';




const UserDashboard = () => {




  const {notes,loading,hasMore,page}=useSelector(state=>state.notes)
  const {currentUser,sideBar}=useSelector(state=>state.users)
  const dispatch=useDispatch()

  // //TODO: useState([]) only not array of objects
  // const [notes, setNotes] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [page, setPage] = useState(1)
  // const [hasMore, setHasMore] = useState(true)
  

  // TODO: getnotes can be in a different file or store for better organization

const getNotes = async ()=>{
  if (loading)
    return;
  dispatch(setLoading(true))
  
  // TODO: handle errors properly.
  try {
      const response = await axios.get(`https://67597b75099e3090dbe1d697.mockapi.io/api/notes?page=${page}&limit=8`)
      //TODO: This is a paginated API endpoint , page parameter and limit parameter
      //wouldn't work on react strict mode
      
      if(response.data.length>0){
        dispatch(fetchNotes(response.data))//like setNotes in useState
        dispatch(incrementPage())

      }else {
        dispatch(toggleHasMore())
      }
      
        dispatch(setLoading(false))      
    } catch (error) {
      console.log("Error fetching notes:", error);
      dispatch(setLoading(false)) 
      alert('Failed to load notes. Please try again.')
      
    }
  // instead of setting isloading to false in catch , make a 'finally statement 

}


  

  //TODO: Don’t make useEffect itself async.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{//TODO: get notes must be preceeded by await , therefore make an async func inside useeffect (because useeffect cant be async directly)

      getNotes()
    
    console.log("Current User : ",currentUser);
    
   

  

  },[])

  useEffect(() => {
    console.log("Updated notes: ", notes);
  }, [notes]); // This runs whenever 'notes' changes
  
  return (
    
     loading ? ( <div className="w-full h-screen fixed flex justify-center items-center inset-0">
      <ClipLoader size={50} color="#3498db" loading />
    </div>) :notes.length===0 ?
     (<div>
      <EmptyNotes/> <AddNote/>
     </div>): ( 
      <>
       
      <div className='flex  justify-center items-center flex-row  flex-wrap gap-5 p-4 mt-10'>
  {notes.map((note)=>(
    <NoteCard key={note.id}id={note.id} title={note.title} description={note.description} date={note.createdAt} />
  ))}
</div>




{hasMore &&!loading && <div className='w-full flex justify-center'>
  <button onClick={()=>{getNotes()}} className='mt- 10 bg-blue-500 w-36 m-auto p-2 rounded-md my-10 text-white hover:bg-blue-800 transition-all hover:scale-110 '>Load more</button></div>}

  {!sideBar && <AddNote/>}
  {/* TODO: fix for addnote overlapping , by conditional rendering */}

</>) 

   
    
  )
}

export default UserDashboard