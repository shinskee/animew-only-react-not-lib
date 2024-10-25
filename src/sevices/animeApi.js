import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.anilibria.tv/v3/',
    prepareHeaders:  headers => {
        headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
    }}),
  endpoints: (builder) => ({
    getUpdates: builder.query({
      query: (page) => `title/updates?page=${page}&limit=8`,
    }),
    getFavorites: builder.query({
        query: () => `https://anilibria.top/api/v1/accounts/users/me/favorites/releases`,
      }),
      getSearch: builder.query({
        query: (searchText) => `title/search?search=${searchText}&limit=24`,
      }),
      addFavorite: builder.query({
        query: (id) => ({
            url: `https://anilibria.top/api/v1/accounts/users/me/favorites`,
            method: `POST`,
            body: [{release_id: Number(id)}]
        }),
      }),
      deleteFavorite: builder.query({
        query: (id) => ({
            url: `https://anilibria.top/api/v1/accounts/users/me/favorites`,
            method: `DELETE`,
            body: [{release_id: Number(id)}]
        })
      }),
      getCatalogReleases: builder.query({
        query: ({page, sortValue}) => `https://anilibria.top/api/v1/anime/catalog/releases?page=${page}&limit=24&f[sorting]=${sortValue}`,
      }),
      getCatalogSort: builder.query({
        query: () => `https://anilibria.top/api/v1/anime/catalog/references/sorting`,
      }),
      getTitle: builder.query({
        query: (id) => `title?id=${id}`,
      }),
  }),
})

export const { useGetUpdatesQuery, useLazyGetFavoritesQuery,
    useGetFavoritesQuery,
     useLazyGetSearchQuery, useGetSearchQuery,
    useLazyAddFavoriteQuery, useLazyDeleteFavoriteQuery,
    useGetCatalogReleasesQuery,
    useLazyGetCatalogReleasesQuery,
    useGetCatalogSortQuery,
    useGetTitleQuery
 } = animeApi