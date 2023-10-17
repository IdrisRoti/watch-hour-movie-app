import React,{useState, useEffect} from 'react'
import Movies from './../../components/movies/Movies';
import Hero from '../../components/hero/Hero';
import { fetchData } from '../../utils/fetchData'

const Popular = () => {
    const [popularVideos, setPopularVideos] = useState([]);

    useEffect(() => {
      fetchData('/movie/popular')
      .then((response) => response && setPopularVideos(response.data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
    <Hero video={popularVideos[3]}/>
    <Movies header='Popular Movies' videos={popularVideos}/>
  </div>
  )
}

export default Popular