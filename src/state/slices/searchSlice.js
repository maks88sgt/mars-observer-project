import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AVAILABLE_ROVERS_LIST} from "../../constants/rovers";

const initialState = {
    currentRover: AVAILABLE_ROVERS_LIST[0],
    currentCamera: '',
    startDate: null,
    endDate: null,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        currentRover: (state, action) => {
            state.currentRover = action.payload;
        },
        currentCamera: (state, action) => {
            state.currentCamera = action.payload;
        },
        startDate: (state, action) => {
            state.startDate = action.payload;
        },
        endDate: (state, action) => {
            state.endDate = action.payload;
        }
    },
})

export const { currentRover, currentCamera, startDate, endDate } = searchSlice.actions

export default searchSlice.reducer
