// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        login(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token); // Save token to localStorage
        },
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token'); // Remove token from localStorage
        },
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;