import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
    const response = await fetch('/fakeApi/posts');
    return response.data;
})
