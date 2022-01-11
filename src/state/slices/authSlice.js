import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUserName: '',
    currentApiKey: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        currentUserName: (state, action) => {
            state.currentUserName = action.payload;
        },
        currentApiKey: (state, action) => {
            state.currentApiKey = action.payload;
        },
    },
})

export const { currentUserName, currentApiKey } = authSlice.actions

export default authSlice.reducer
