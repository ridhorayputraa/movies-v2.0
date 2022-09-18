import React from "react";
import Jumbotron from "../Components/Jumbotron";

import {useTopratedtvQuery} from '../services/Api'


import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import Upcoming from "../Components/Upcoming";
import Trending from "../Components/Trending";
import Original from "../Components/Original";
import Continous from "../Components/ContinuosWatching";
import TvPopular from "../Components/TvPopular";


const Series = () => {
 
    const {data, error, isLoading}= useTopratedtvQuery();
   
    return (
        <div className="home">
        <div className='carousel'>
        <Carousel  pagination={false}  enableAutoPlay={true} autoPlaySpeed={10000}   > 
           {
            error?(<>error</>)
            :isLoading?(<>Loading</>)
            :(data.results.map((movies) => {
    
                return  <Jumbotron key={movies.id} movie={movies} tv={'tv'} /> 
            
            }))
           }
           </Carousel>
           </div>
           <div className="border">
       <TvPopular/>
           <Upcoming/>
           <Trending/>
           <Original/>
           <Continous/>
           </div>
        </div>
    )
}

export default Series;