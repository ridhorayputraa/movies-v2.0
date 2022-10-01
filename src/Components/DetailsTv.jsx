import React from "react";
import {useDetailstvQuery} from '../services/Api'

import {  useParams} from "react-router-dom";


import '../styles/style.css'

import TvTrailer from "./TvTrailer";
import TvPopular from "./TvPopular";
import Tvrecomend from "./TvRecomend";
import Footer from "./Footer";
import TvOnAir from "./Tvonair";

const DetailTv = () =>  {
    const {Id} = useParams() 
  
    const { data, error, isLoading} = useDetailstvQuery(Id)

return(
    <>
      <div className="Detail-wrapper">
       {/* Conditional rendering disini */}
       {
            error?(<>Erorrr</>)
            : isLoading ? (<>Loading....</>)
            :data? ( 
              <>
              <iframe
            className="Yttrailer"
     
      src={` https://www.youtube.com/embed/${  data.results[0] !== undefined? data.results[0].key : "ER8wXRhZW1k" 
      }`}
     
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />


        <TvTrailer/>
           
     

       <TvPopular/>
         <TvOnAir/>

       <section>
        {data.results[0] !== undefined ?
       <Tvrecomend/> : ""
        
        }

</section>

       <Footer/>

     </>): <>404</>
       }
      
                    
    
         </div>
 
           
         
    </>
)
}

export default DetailTv;