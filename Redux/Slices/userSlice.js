import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users :[] , 
    loading : false , 
    error : null ,
    hasMore :true,
    page : 1 ,
}

const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        fetchUsers : (state,action)=>{
            state.users = [...state.users,...action.payload]
        },
        addUser : (state,action)=>{
            state.users.push(action.payload)
        },
        updateUser : (state,action)=>{
            const index = state.users.findIndex(user => user.id === action.payload.id)
            if(index!== -1)
                state.users[index] = action.payload
        },
        deleteUser : (state,action)=>{
            state.users = state.users.filter(user=>user.id !== action.payload)
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
          }
    }
})

//these are our actions 
export const { fetchUsers, addUser, updateUser, deleteUser, setLoading, setError,incrementPage ,toggleHasMore} = usersSlice.actions;
export default usersSlice.reducer;