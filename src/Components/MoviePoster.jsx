import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

export default function MoviePoster({movie, tv}) {
 const urlawal = 'https://image.tmdb.org/t/p/original/'

    return (
    <div className='poster_wrapper'>
 

        {
                tv === 'tv'? <Link className="poster_image"  to={`/detail/tv/${movie.id}`  }  >
                <img alt={movie.original_title} width='283px' className="card_poster" src={`${urlawal}${movie.poster_path}` || <Skeleton/>}/>
            </Link> : 
            <Link className="poster_image"  to={ `/detail/movie/${movie.id}` }  >
            <img  width='283px' alt={movie.original_title} className="card_poster" src={`${urlawal}${movie.poster_path}`}/>
            </Link>
             }

    </div>
  )
}
