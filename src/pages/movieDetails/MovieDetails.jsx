import React, {useState, useEffect} from 'react'
import './movieDetails.scss'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../utils/fetchData'
import {AiFillStar, AiFillPlayCircle} from 'react-icons/ai';
import Movies from './../../components/movies/Movies';

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [similarMovies, setSimilarMovies] = useState([])

    const {id} = useParams();

    useEffect(() => {
      fetchData(`movie/${id}`)
        .then((response) => setMovie(response.data))
        .catch(err => console.log(err));

        fetchData(`movie/${id}/similar`)
        .then((response) => setSimilarMovies(response.data.results))
        .catch(err => console.log(err))

    }, [id])
    

  return (
    <section className='movie-details'>
        <div className="container">
            <div className="top">
              <div className="image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie?.title} />
                <button className="play-btn"><AiFillPlayCircle /> Watch Trailer</button>
              </div>
              <div className="details">
                <div className="movie-header">
                  <h1 className="movie-name">{movie?.title}</h1>
                  <span> <AiFillStar />{movie?.vote_average}</span>
                </div>
                <span className="release-date">{ movie?.release_date } | { movie?.original_language } | {movie?.runtime} mins</span>
                <div className="overview">{movie?.overview}</div>
                <div className="extra-detail">
                    <h3>Genre:</h3> {movie?.genres?.map((genre) => {
                      return <span>{genre.name}</span>
                    })}
                </div>
              </div>
          </div>

          <div className="bottom">
            <Movies header="You may also like" videos={similarMovies}/>
          </div>
      </div>
    </section>
  )
}

export default MovieDetails