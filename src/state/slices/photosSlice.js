import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiKey } from "../../utils/getApiKey";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async ({ roverName, date, camera }) => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos?earth_date=${date}&api_key=${getApiKey()}`
    );
    const data = await response.json();
    console.log(data);
    return data.photos.filter((item) => item.camera.name === camera);
  }
);

const initialState = {
  photos: [],
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.photos = [];
    });
  },
});

export default photosSlice.reducer;
