import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AddNotesModal : false
}

const modalSlice = createSlice({
    name : 'modals',
    initialState,
    reducers : {
        
          ToggleAddNotes : (state) => {
            state.AddNotesModal = !state.AddNotesModal;
          },
          closeAddNotes : (state) => {
            state.AddNotesModal = false;
          },

    }
})

//these are our actions 
export const { ToggleAddNotes,closeAddNotes} = modalSlice.actions;
export default modalSlice.reducer;