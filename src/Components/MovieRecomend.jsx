// useTvrecomendQuery



import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'
import { useParams } from "react-router-dom";

import {useMovierecomendQuery} from '../services/Api'

import MoviePoster from "./MoviePoster";

const Movierecomend = () => {
    const {Id} = useParams()
const {data, isLoading, error} = useMovierecomendQuery(Id)
    return(
      <>
      <div className="popular-text">
        <Typography variant='h4' sx={{color:'white'}} >Recomendations</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel itemsToScroll={1} itemsToShow={5} pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
        {
          error?(<>error</>)
          :isLoading?(<>Loading</>)
          :(data.results.map((movies) => {
            return <MoviePoster key={movies.id} movie={movies}  />
          }))
        }
        </Carousel>
        </div>
      </>
    )
} 

export default Movierecomend;