

import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import {useOriginalQuery} from '../services/Api'
import ThumbnailsMovie from "./ThumbnailsMovie";

const Original  = () => {
const {data, isLoading, error} = useOriginalQuery()

    return(
      <>
      <div className="popular-text">
        <Typography variant='h4' sx={{color:'white'}} >Original</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel itemsToScroll={1} itemsToShow={5} pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
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

export default Original;