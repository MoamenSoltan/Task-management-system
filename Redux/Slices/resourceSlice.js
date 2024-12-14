// src/redux/slices/resourceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resources: [],
  loading: false,
  error: null,
};

const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    fetchResources: (state, action) => {
      state.resources = action.payload;
    },
    addResource: (state, action) => {
      state.resources.push(action.payload);
    },
    updateResource: (state, action) => {
      const index = state.resources.findIndex(resource => resource.id === action.payload.id);
      if (index !== -1) state.resources[index] = action.payload;
    },
    deleteResource: (state, action) => {
      state.resources = state.resources.filter(resource => resource.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchResources, addResource, updateResource, deleteResource, setLoading, setError } = resourceSlice.actions;
export default resourceSlice.reducer;
