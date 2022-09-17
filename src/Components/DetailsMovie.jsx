import React, { useEffect } from "react";
import {useDetailsQuery} from '../services/Api'

import { useParams, useNavigate } from "react-router-dom";


import '../styles/style.css'
import Trailer from "./Trailer";
import PopularSection from "./PopularSection";

const Detailmovies = () =>  {
    const {Id} = useParams() 
  
    const { data, error, isLoading} = useDetailsQuery(Id)
  
    
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
     
      src={`https://www.youtube.com/embed/${data.results[0].key
      }`}
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
     </>): <>404</>
       }
      
        <Trailer/>
       <PopularSection />
                    
    
         </div>
 
           
         
    </>
)
}

export default Detailmovies;