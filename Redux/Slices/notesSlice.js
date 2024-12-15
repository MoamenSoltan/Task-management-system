import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // users :[] , 
    // loading : false , 
    // error : null ,
    // hasMore :true,
    // page : 1 ,
    notes:[],
    note:{title:"", description:"",id: null},
    loading : false , 
    error : null ,
    hasMore :true,
    page : 1 ,

}

const notesSlice = createSlice({
    name : 'notes',
    initialState,
    reducers : {
        fetchNotes : (state,action)=>{
            state.notes = [...state.notes,...action.payload]
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
          },
          incrementPage : (state) => {
            state.page = state.page+1;
          },
          toggleHasMore : (state) => {
            state.hasMore = !state.hasMore;
          },
          setNote:(state,action)=>{
            state.note={...state.note,...action.payload}
          },
          deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload); // Remove the deleted note
          },
          addNote: (state, action) => {
            state.notes = [action.payload, ...state.notes]; // Add new note to the start of the list
          },
          updateNote: (state, action) => {
            const index = state.notes.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
              state.notes[index] = action.payload.updatedData; // Update the note in the array
            }
          }

    }
})

//these are our actions 
export const { fetchNotes,setError,setLoading,toggleHasMore,incrementPage,setNote,deleteNote,addNote,updateNote} = notesSlice.actions;
export default notesSlice.reducer;
//export default can take any name afterwards , only once per file