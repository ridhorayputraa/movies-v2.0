import React from "react";
import Jumbotron from "../Components/Jumbotron";


import {useTopratedQuery} from '../services/Api'


import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

import Upcoming from "../Components/Upcoming";
import Trending from "../Components/Trending";
import Original from "../Components/Original";
import Continous from "../Components/ContinuosWatching";
import Footer from "../Components/Footer";
import TvOnAir from "../Components/Tvonair";


const Home = () => {
 
    const {data, error, isLoading}= useTopratedQuery();
  

    return (
        <div className="home">
        <div className='carousel'>
        <Carousel  pagination={false}  enableAutoPlay={true} autoPlaySpeed={9000}   > 
           {
            error?(<>error</>)
            :isLoading?(<>Loading.....</>)
            :(data.results.map((movies) => {
    
                return  <Jumbotron key={movies.id} movie={movies} /> 
            
            }))
           }
           </Carousel>
           </div>
           <div className="border">
           <Trending/>
          <TvOnAir/>
           <Upcoming/>
           <Original/>
           <Continous/>
           </div>
           <Footer/>
        </div>
    )
}

export default Home;