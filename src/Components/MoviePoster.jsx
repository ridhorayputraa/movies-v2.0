import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviePoster({movie}) {
 const urlawal = 'https://image.tmdb.org/t/p/original/'

    return (
    <div className='poster_wrapper'>
      <Link  className="poster_image" to={`/detail/${movie.id}`}  >
        <img  width='283px' src={`${urlawal}${movie.poster_path}`}/>
        </Link>
    </div>
  )
}
