import React from 'react'
import './hero.scss';
import {AiFillStar} from 'react-icons/ai';

const Hero = ({video}) => {
  const MyBackgroundImage = `https://image.tmdb.org/t/p/w500${video && video && video.backdrop_path}`;
  
  return (
    <div className='hero' style={{
      backgroundImage: `url(${MyBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '600px',
    }}>
        <div className="container">
            <div className="hero-details">
                <h1 className="poster-title">{video && video.title}</h1>
                <div className="ratings">
                    <AiFillStar />
                    <span>{video && video.vote_average.toFixed(1)}</span>
                </div>
                <p className="poster-details">{video && video.overview}</p>
                <button>Watch Trailer</button>
            </div>
        </div>
    </div>
  )
}

export default Hero