import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users :[] , 
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
    loading : false , 
    error : null ,
    hasMore :true,
    page : 1 ,
    sideBar:false
}

const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers : {
        fetchUsers : (state,action)=>{
            state.users = [...state.users,...action.payload]
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
          addUser: (state, action) => {
            state.users.push(action.payload);
          },
          deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
          },
          updateUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
              state.users[index] = action.payload;
            }
          },
          setCurrentUser : (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
          },
          toggleSideBar : (state) => {
            state.sideBar = !state.sideBar
          }
    }
})

//these are our actions 
export const { fetchUsers, addUser, updateUser, deleteUser, setLoading, setError,incrementPage ,toggleHasMore,setCurrentUser,toggleSideBar} = usersSlice.actions;
export default usersSlice.reducer;
//export default can take any name afterwards , only once per file