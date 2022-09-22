//  <PopularSection/>
// useNewQuery

import React from "react";
import Jumbotron from "../Components/Jumbotron";

import {useNewQuery} from '../services/Api'


import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'


import Continous from "../Components/ContinuosWatching";
import TvPopular from "../Components/TvPopular";
import TvOnAir from "../Components/Tvonair";
import TvTrending from "../Components/TvTrending";
import Footer from "../Components/Footer";
import Trending from "../Components/Trending";


const Popular = () => {
 
    const {data, error, isLoading}= useNewQuery();
   
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
      <Trending/>
          <TvOnAir/>
          <TvTrending/>
           <Continous/>
           </div>
           <Footer/>
        </div>
    )
}

export default Popular;