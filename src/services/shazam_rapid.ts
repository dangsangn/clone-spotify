import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const shazamApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        `7c4cdb73a2msh9e72eadf3fb9cf4p1e090cjsnf80d2c025ad8`
      );
      headers.set("X-RapidAPI-Host", `shazam-core.p.rapidapi.com`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldChat: builder.query<any, void>({
      query: () => `/charts/world`,
    }),
  }),
  reducerPath: "shazamApi",
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWorldChatQuery } = shazamApi;
