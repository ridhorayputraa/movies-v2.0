import React from "react";
import Jumbotron from "../Components/Jumbotron";

import {useTopratedtvQuery} from '../services/Api'


import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'


import Continous from "../Components/ContinuosWatching";
import TvPopular from "../Components/TvPopular";
import TvOnAir from "../Components/Tvonair";
import TvTrending from "../Components/TvTrending";
import Footer from "../Components/Footer";


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
          <TvOnAir/>
          <TvTrending/>
           <Continous/>
           </div>
           <Footer/>
        </div>
    )
}

export default Series;