
// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here (e.g., userReducer, lessonsReducer)
import userReducer from './userSlice/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
