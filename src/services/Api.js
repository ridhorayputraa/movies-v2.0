import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const key = '?api_key=f2e349fe9e8ecced437343534e51774f'
const eng = '&language=en-US&append_to_response=images&include_image_language=en'


export const movies = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),

    endpoints: (builder) => ({
        upcoming: builder.query({
            query: () => `movie/upcoming${key}`
        }),
        details: builder.query({
            query: (movieId) => `movie/${movieId}/videos${key}`
        }),
        detailsdesc: builder.query({
            query: (movieId) => `https://api.themoviedb.org/3/movie/${movieId}${key}`
        }),
        populer: builder.query({
            query: () => `movie/popular${key}&page=2`

        }),
        trending: builder.query({
            query: () => `/trending/all/day${key}`
        }),
        toprated: builder.query({
            query: () => `movie/top_rated${key}${eng}`
        }),
        original: builder.query({
            query: () => `/trending/all/day${key}&page=2`
        }),
    }),

})

export const {
    useUpcomingQuery,
    usePopulerQuery,
    useTopratedQuery,
    useDetailsQuery,
    useTrendingQuery,
    useDetailsdescQuery,
    useOriginalQuery,
} = movies;