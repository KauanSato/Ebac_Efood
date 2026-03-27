import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Locais } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Locais[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query<Locais, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetPratosQuery } = api
export default api
