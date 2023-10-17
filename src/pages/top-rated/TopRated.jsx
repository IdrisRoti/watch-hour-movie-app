import React, {useState, useEffect} from 'react';
import './top-rated.scss';
import Movies from './../../components/movies/Movies';
import Hero from '../../components/hero/Hero';
import { fetchData } from '../../utils/fetchData'

const TopRated = () => {
    const [topRatedVideos, setTopRatedVideos] = useState([]);

    useEffect(() => {
      fetchData('/movie/top_rated')
      .then((response) => response && setTopRatedVideos(response.data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <Hero video={topRatedVideos[3]}/>
      <Movies header='Top Rated Movies' videos={topRatedVideos}/>
  </div>
  )
}

export default TopRated