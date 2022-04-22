import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiKey } from "../../utils/getApiKey";

export const roverMetaInfoApi = createApi({
  reducerPath: "roverMetaInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nasa.gov/mars-photos/api/v1/manifests/",
  }),
  endpoints: (builder) => ({
    getRoverMetaInfo: builder.query({
      query: (roverName) => {
        return `${roverName.toLowerCase()}?api_key=${getApiKey()}`;
      },
    }),
  }),
});

export const { useGetRoverMetaInfoQuery } = roverMetaInfoApi;
