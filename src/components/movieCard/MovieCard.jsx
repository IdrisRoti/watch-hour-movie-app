import React from 'react'
import './movieCard.scss'
import {AiFillStar} from 'react-icons/ai';

import { Link } from 'react-router-dom'

const MovieCard = ({video}) => {
  return (
    <article className='movie-card'>
        <Link className='link' to={`/movie-details/${video && video.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${video.poster_path}`} alt={video && video.title} />
            <h3 className="movie-title">{video && video.title}</h3>
            <span className="genre">{AiFillStar} {video && video.release_date}</span>
        </Link>
    </article>
  )
}

export default MovieCard