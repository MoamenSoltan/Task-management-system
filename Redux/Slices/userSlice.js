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
      fetchUsers: (state, action) => {
        const newUsers = action.payload;
        const existingUserIds = state.users.map(user => user.id);
        const uniqueUsers = newUsers.filter(user => !existingUserIds.includes(user.id));
        state.users = [...state.users, ...uniqueUsers];
      },
        setUsers : (state,action) => {
            state.users = action.payload; // Replace users
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload; // Fixed typo (it was updating `error` instead of `page`)
        },
        incrementPage : (state) => {
            state.page = state.page + 1;
        },
        toggleHasMore : (state) => {
            state.hasMore = !state.hasMore;
        },
        addUser: (state, action) => {
            state.users = [action.payload, ...state.users];
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
            state.sideBar = !state.sideBar;
        }
    }
})

// Export actions
export const { fetchUsers, addUser, updateUser, deleteUser, setLoading, setError, incrementPage, toggleHasMore, setCurrentUser, toggleSideBar, setUsers, setPage } = usersSlice.actions;

export default usersSlice.reducer;
