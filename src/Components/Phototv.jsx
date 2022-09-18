import React from "react";

import { Link } from "react-router-dom";

const Phototv = ({tvs: movie}) => {

    const urlHeader = 'https://image.tmdb.org/t/p/original/'

    return(
        <>
            <div className="Thumbnails-wrapper">
            {/* {`/detail/${movie.id}`} */}
            <Link  className="Thumbnails-wrapper" to={`/detail/tv/${movie.id}`} >
                <img className="card_poster" src={`${urlHeader}${movie.backdrop_path}`} />
                <div className="centered">
               <p className='centered-text'>
                {movie.title}
                </p>
                </div>
                </Link>
            </div>    
        </>
    )
}

export default Phototv