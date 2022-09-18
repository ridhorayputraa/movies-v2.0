import React,{useEffect} from "react";
import {useDetailstvQuery} from '../services/Api'

import { Navigate, useParams} from "react-router-dom";


import '../styles/style.css'
import PopularSection from "./PopularSection";
import TvTrailer from "./TvTrailer";
import TvPopular from "./TvPopular";
import Tvrecomend from "./TvRecomend";

const DetailTv = () =>  {
    const {Id} = useParams() 
  
    const { data, error, isLoading} = useDetailstvQuery(Id)

return(
    <>
      <div className="Detail-wrapper">
       {/* Conditional rendering disini */}
       {
            error?(<>Ada Error disini loh</>)
            : isLoading ? (<>Loading dulu yah</>)
            :data? ( 
              <>
              <iframe
            className="Yttrailer"
     
      src={` https://www.youtube.com/embed/${  data.results[1] !== undefined? data.results[0].key : "ER8wXRhZW1k" 
      }`}
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
     </>): <>404</>
       }
      
        <TvTrailer/>
       <Tvrecomend/>
       <TvPopular/>
                    
    
         </div>
 
           
         
    </>
)
}

export default DetailTv;