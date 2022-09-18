import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import {usePopulartvtopQuery} from '../services/Api'

import Phototv from "./Phototv";

const TvPopular  = () => {
  
const {data, isLoading, error} =usePopulartvtopQuery()

    return(
      <>
      <div className="popular-text">
        <Typography variant='h4' sx={{color:'white'}} >Popular</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel itemsToScroll={1} itemsToShow={5} pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
        {
          error?(<>error</>)
          :isLoading?(<>Loading</>)
          :(data.results.map((movies) => {
            return <Phototv key={movies.id} tvs={movies} />
          }))
        }
        </Carousel>
        </div>
      </>
    )
} 

export default TvPopular;