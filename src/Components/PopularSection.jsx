import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import {usePopulerQuery} from '../services/Api'
import ThumbnailsMovie from "./ThumbnailsMovie";

const PopularSection  = () => {
  
const {data, isLoading, error} = usePopulerQuery()
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
        <Typography variant='h4' sx={{color:'white'}} >Popular</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel breakPoints={breakPoints.map((data) => {
        return data
       })}itemsToScroll={1}  pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
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

export default PopularSection;