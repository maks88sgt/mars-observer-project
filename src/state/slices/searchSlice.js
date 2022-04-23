import { createSlice } from "@reduxjs/toolkit";
import { AVAILABLE_ROVERS_LIST } from "../../constants/rovers";

const initialState = {
  currentRover: AVAILABLE_ROVERS_LIST[0],
  currentCamera: null,
  selectedDate: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    currentRover: (state, action) => {
      state.currentRover = action.payload;
    },
    currentCamera: (state, action) => {
      state.currentCamera = action.payload;
    },
    selectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { currentRover, currentCamera, selectedDate } =
  searchSlice.actions;

export default searchSlice.reducer;
