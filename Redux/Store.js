import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice"
import resourceReducer from "./Slices/resourceSlice"
import modalReducer from "./Slices/modalSlice"
import notesReducer from "./Slices/notesSlice"
const store = configureStore({
    reducer: {
      modals:modalReducer,
      users: userReducer,
      resources: resourceReducer,
      notes : notesReducer
    },
  });
  
  export default store;