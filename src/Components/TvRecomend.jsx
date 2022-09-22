// useTvrecomendQuery



import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'
import { useParams } from "react-router-dom";

import {useTvrecomendQuery} from '../services/Api'

import MoviePoster from "./MoviePoster";
import Skeleton from "react-loading-skeleton";

const Tvrecomend = () => {
    const {Id} = useParams()
const {data, isLoading, error} = useTvrecomendQuery(Id)
   
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 290, itemsToShow: 2  },
  { width: 630, itemsToShow: 5 },
  { width: 1150, itemsToShow: 5},
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
]

return(
      <>
      <div className="popular-text">
        <Typography variant='h4' sx={{color:'white'}} >Recomendations</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel itemsToScroll={1} breakPoints={breakPoints.map((data) =>{
       return data
       }
       )} pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
        {
          error?(<>error</>)
          :isLoading?(<> <Skeleton/> </>)
          :(data.results.map((movies) => {
            return <MoviePoster key={movies.id} movie={movies} tv={'tv'} />
          }))
        }
        </Carousel>
        </div>
      </>
    )
} 

export default Tvrecomend;