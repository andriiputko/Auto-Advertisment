import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6574c25fb2fbb8f6509ca104.mockapi.io/',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=12`,
    }),
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = api;