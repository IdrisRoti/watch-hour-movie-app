import React from 'react'
import './movies.scss'

import MovieCard from '../movieCard/MovieCard';

const Movies = ({header, videos}) => {

  return (
    <main className='movies'>
        <div className="container">
            <div className="header">
                <h2 className="header-title">{header}</h2>
            </div>
            <div className="movie-list">
                {videos && videos.map((video) => {
                    return <MovieCard key={video?.id} video={video}/>
                })}
            </div>
        </div>
    </main>
  )
}

export default Movies