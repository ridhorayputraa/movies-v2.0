

import React from "react";

import { Typography } from "@mui/material";

import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import {usePopulartvQuery} from '../services/Api'

import Phototv from "./Phototv";

const Continous  = () => {
const {data, isLoading, error} = usePopulartvQuery()

    return(
      <>
      <div className="popular-text">
        <Typography variant='h4' sx={{color:'white'}} >Watch Again</Typography>
        </div>
       <div className="popular-thumbnails">
       <Carousel itemsToScroll={1} itemsToShow={5} pagination={false}  enableAutoPlay={true} autoPlaySpeed={12000} >
        {
          error?(<>error</>)
          :isLoading?(<>Loading</>)
          :(data.results.map((tv) => {
            return <Phototv key={tv.id}  tvs={tv} />
          }))
        }
        </Carousel>
        </div>
      </>
    )
} 

export default Continous;