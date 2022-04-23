import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiKey } from "../../utils/getApiKey";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nasa.gov/mars-photos/api/v1/rovers/",
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (roverName, date) => {
        return `${roverName.toLowerCase()}/photos?earth_date=${date}&api_key=${getApiKey()}`;
      },
    }),
  }),
});

export const { useGetPhotos } = photosApi;
