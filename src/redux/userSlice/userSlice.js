
// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    name: '',
    role: 'student', // example default role
    progress: {}, // you could track lesson progress here
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    updateProgress: (state, action) => {
      state.progress[action.payload.lessonId] = action.payload.progress;
    },
    logout: (state) => {
      state.id = null;
      state.name = '';
      state.role = '';
      state.progress = {};
    },
  },
});

export const { setUser, updateProgress, logout } = userSlice.actions;
export default userSlice.reducer;
