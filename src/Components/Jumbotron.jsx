import React from "react";

import { Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import Skeleton from "react-loading-skeleton";


const Jumbotron = ({movie, tv}) => {

    const urlHeader = 'https://image.tmdb.org/t/p/original/'
   

   
     
   
return(
<>

    <div className="card-wrapper-Jumbotron">
        <div className="Jumbotron-Card">
           <div className="Card-Text">
           {
                tv === 'tv'? <Link  to={`/detail/tv/${movie.id}`  }  >
                <Typography className="Header_Jumbotron" sx={{color:'#f1efef', marginBottom:'0.4em'}}  variant='h4'>{movie.title || movie.name}</Typography>  
            </Link> : 
            <Link   to={ `/detail/movie/${movie.id}` }  >
            <Typography sx={{color:'#f1efef', marginBottom:'0.4em'}}  variant='h4'>{movie.title || movie.name}</Typography>  
            </Link>
             }

           
            
            <div className='jumbotron-details'>
            <p className="Text-TypoGrapghy-details"   >{movie.original_language === 'ja'? 'Japanese' : movie.original_language === 'en'? 'English' : movie.original_language === 'hi'? 'Hindi' : movie.original_language === 'es'? 'Spanish' : movie.original_language === 'ko' ? 'Korean' : movie.original_language === 'it' ? 'Italian' : ''  }<span class="dot"></span></p>
            <p className="Text-TypoGrapghy-details"   >{movie.release_date }<span class="dot"></span></p>
            <p className="Text-TypoGrapghy-details"   >{movie.vote_average}</p>
            </div>
            <Typography className="Text-TypoGrapghy" sx={{paddingTop:'0.9em'}}  variant='body1' >{movie.overview}</Typography>
            </div>
             <div className="Jumbotron-Card-Image">
             {
                tv === 'tv'? <Link className="Jumbotron-Card-Image"  to={`/detail/tv/${movie.id}`  }  >
            <img alt='videos' src={`${urlHeader}${movie.backdrop_path}`}   />
            </Link> : 
            <Link className="Jumbotron-Card-Image"  to={ `/detail/movie/${movie.id}` }  >
            <img alt='videos' src={`${urlHeader}${movie.backdrop_path}`}   />
            </Link>
             }
             
            </div>

        </div>
    </div>

</>
)
}

export default Jumbotron;