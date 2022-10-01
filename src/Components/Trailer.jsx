import React from "react";
import { useDetailsdescQuery } from "../services/Api";
import { useParams } from "react-router-dom";

const Trailer = () => {
    const {Id} = useParams() 
    const {data, error, isLoading} = useDetailsdescQuery(Id)
    
    return (
        <>
    <div className="desc-details-wrapper">
        
          {
            error?(<>Ada Error disini loh</>)
            : isLoading ? (<>Loading...</>)
            :data?(
           <>
              <h1 style={{borderBottom:'#910b0b 2px solid', color:'white', marginBottom:'0.2em'}} className="desc-Details1">{data.title}</h1>
              <h3 className="desc-Details">Description</h3>
              <p className="desc-Details">{data.overview}</p>
              </>
              )
              :(<>404</>)
             
              
            
         }
         
         </div>
        </>
    )
}

export default Trailer