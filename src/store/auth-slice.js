import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    // states
    name: 'auth',
    initialState: { isLoggedIn: false },

    reducers: {
        // functions Event listeners to update above states
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    }
});


export const authActions = authSlice.actions;

export default authSlice;