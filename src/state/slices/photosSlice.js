import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiKey } from "../../utils/getApiKey";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async ({ roverName, date }, { rejectWithValue }) => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName.toLowerCase()}/photos?earth_date=${date}&api_key=${getApiKey()}`
    );
    if (response.statusCode === 200) {
      const data = await response.json();
      return data.photos;
    } else {
      const error = await response.json();
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  photos: null,
  error: null,
};

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.data.error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export const { setError } = photosSlice.actions;

export default photosSlice.reducer;
