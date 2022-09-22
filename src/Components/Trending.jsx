import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import {useTrendingQuery} from '../services/Api'
import ThumbnailsMovie from "./ThumbnailsMovie";

const Trending  = () => {
const {data, isLoading, error} = useTrendingQuery()

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
        <Typography variant='h4' sx={{color:'white'}} >Trending</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel itemsToScroll={1} breakPoints={breakPoints.map((data) => {
        return data
       })} pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
        {
          error?(<>error</>)
          :isLoading?(<>Loading</>)
          :(data.results.map((movies) => {
            return <ThumbnailsMovie key={movies.id} movie={movies} />
          }))
        }
        </Carousel>
        </div>
      </>
    )
} 

export default Trending;