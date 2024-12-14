import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice"
import resourceReducer from "./Slices/resourceSlice"
import modalReducer from "./Slices/modalSlice"
const store = configureStore({
    reducer: {
      modals:modalReducer,
      users: userReducer,
      resources: resourceReducer,
    },
  });
  
  export default store;