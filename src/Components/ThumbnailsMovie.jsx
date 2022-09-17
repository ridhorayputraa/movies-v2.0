import React from "react";

import { Link } from "react-router-dom";

const ThumbnailsMovie = ({movie: movie}) => {

    const urlHeader = 'https://image.tmdb.org/t/p/original/'

    return(
        <>
            <div className="Thumbnails-wrapper">
            <Link  className="Thumbnails-wrapper" to={`/detail/${movie.id}`}  >
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

export default ThumbnailsMovie