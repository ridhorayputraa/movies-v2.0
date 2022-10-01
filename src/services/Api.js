import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
const key = process.env.REACT_APP_TMDB_KEY
const eng = '&language=en-US&append_to_response=images&include_image_language=en'


export const movies = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),

    endpoints: (builder) => ({
        // Film
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

        movierecomend: builder.query({
            query: (movieId) => `movie/${movieId}/recommendations${key}&page=1`
        }),
        topratedmovies: builder.query({
            query: () => `movie/top_rated${key}&page=2`
        }),
        populermovies: builder.query({
            query: () => `movie/popular${key}&page=1`

        }),
        


        // TV
        populartv: builder.query({
            query: () => `tv/popular${key}&page=2`
        }),
        detailstv: builder.query({
            query: (tvId) => `tv/${tvId}/videos${key}`
        }),
       
        detailsdesctv: builder.query({
            query: (tvId) => `tv/${tvId}${key}`
        }),
        
        topratedtv: builder.query({
            query: () => `tv/top_rated${key}&page=2`
        }),
        populartvtop: builder.query({
            query: () => `tv/popular${key}&page=1`
        }),
       
        tvrecomend: builder.query({
            query: (tvId) => `tv/${tvId}/recommendations${key}&page=1`
        }),
        onair: builder.query({
            query: () => `tv/on_the_air${key}&page=2`
        }),
        tvtrending: builder.query({
            query: () => `tv/top_rated${key}&page=1`
        }),
        new: builder.query({
            query: () => `tv/on_the_air${key}&page=3`
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
    usePopulartvQuery,
    useDetailstvQuery,
    useDetailsdesctvQuery,
    useTopratedtvQuery,
    usePopulartvtopQuery,
    useTvrecomendQuery,
    useMovierecomendQuery,
    useOnairQuery,
    useNewQuery,
    useTvtrendingQuery,
    useTopratedmoviesQuery,
    usePopulermoviesQuery,
} = movies;