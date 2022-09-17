import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Skeleton from 'react-loading-skeleton'

import {useTrendingQ} from '../services/Api'
import {useTopratedQuery} from '../services/Api'


import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'
import PopularSection from "../Components/PopularSection";
import Upcoming from "../Components/Upcoming";
import Trending from "../Components/Trending";
import Original from "../Components/Original";


const Home = () => {
 
    const {data, error, isLoading}= useTopratedQuery();
   
    return (
        <div className="home">
        <div className='carousel'>
        <Carousel  pagination={false}  enableAutoPlay={true} autoPlaySpeed={10000}   > 
           {
            error?(<>error</>)
            :isLoading?(<>Loading</>)
            :(data.results.map((movies) => {
    
                return  <Jumbotron key={movies.id} movie={movies} /> 
            
            }))
           }
           </Carousel>
           </div>
           <div className="border">
           <PopularSection/>
           <Upcoming/>
           <Trending/>
           <Original/>
           </div>
        </div>
    )
}

export default Home;