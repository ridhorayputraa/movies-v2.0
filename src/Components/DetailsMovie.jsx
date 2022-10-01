import React from "react";
import {useDetailsQuery} from '../services/Api'

import { useParams } from "react-router-dom";


import '../styles/style.css'
import Trailer from "./Trailer";
import PopularSection from "./PopularSection";
import Movierecomend from "./MovieRecomend";
import Footer from "./Footer";
import TvOnAir from "./Tvonair";

const Detailmovies = () => {
const {Id} = useParams()

const { data, error, isLoading} = useDetailsQuery(Id)


return(
<>
  <div className="Detail-wrapper">
    {/* Conditional rendering disini */}
    {
    error?(<>Eroor!</>)
    : isLoading ? (<>Loading.....</>)
    :data? (
    <>
      <iframe className="Yttrailer" src={`https://www.youtube.com/embed/${ data.results[0] !==undefined?
        data.results[0].key : "vgtBnaqIUpg" } `} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
        title="Embedded youtube" />
      <Trailer />

      <PopularSection />
      <TvOnAir/>
      <section>
        {data.results[0] !== undefined ?
        <Movierecomend /> : ""
        }
      </section>


      <Footer />
    </>
    ): (<>404</>)
    }



  </div>



</>
)
}

export default Detailmovies;