import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AddNotesModal: false,
  DeleteNotesModal: false,
  DeleteUsersModal: false,
  deleteNoteId: null,
  deleteUserId: null,
  UpdateNotesModal: false,
  noteToUpdate: { id: null, title: "", description: "" },
  UpdateUserModal: false,  // Store for Update User Modal
  userToUpdate: { id: null, name: "", email: "" }, // User data to be updated
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    ToggleAddNotes: (state) => {
      state.AddNotesModal = !state.AddNotesModal;
    },
    closeAddNotes: (state) => {
      state.AddNotesModal = false;
    },
    ToggleDeleteNotes: (state, action) => {
      state.DeleteNotesModal = !state.DeleteNotesModal;
      if (action.payload) {
        state.deleteNoteId = action.payload;  // Set the note to delete
      }
    },
    closeDeleteNotes: (state) => {
      state.DeleteNotesModal = false;
      state.deleteNoteId = null;
    },
    ToggleDeleteUser: (state, action) => {
      state.DeleteUsersModal = !state.DeleteUsersModal;
      if (action.payload) {
        state.deleteUserId = action.payload;  // Set the user ID to be deleted
      }
    },
    closeDeleteUser: (state) => {
      state.DeleteUsersModal = false;
      state.deleteUserId = null;  // Clear the user ID when the modal is closed
    },
    ToggleUpdateNotes: (state, action) => {
      state.UpdateNotesModal = !state.UpdateNotesModal;
      if (action.payload) {
        state.noteToUpdate = { ...action.payload };
      }
    },
    closeUpdateNotes: (state) => {
      state.UpdateNotesModal = false;
      state.noteToUpdate = { id: null, title: "", description: "" };
    },
    ToggleUpdateUser: (state, action) => {
      state.UpdateUserModal = !state.UpdateUserModal;
      if (action.payload) {
        state.userToUpdate = { ...action.payload };  // Set the user data to update
      }
    },
    closeUpdateUser: (state) => {
      state.UpdateUserModal = false;
      state.userToUpdate = { id: null, name: "", email: "" };
    },
  },
});

export const {
  ToggleAddNotes,
  closeAddNotes,
  ToggleDeleteNotes,
  closeDeleteNotes,
  ToggleDeleteUser,
  closeDeleteUser,
  ToggleUpdateNotes,
  closeUpdateNotes,
  ToggleUpdateUser,
  closeUpdateUser,
} = modalSlice.actions;

export default modalSlice.reducer;
