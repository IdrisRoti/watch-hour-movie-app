import React,{useEffect, useState} from 'react'
import './home.scss'
import Hero from '../../components/hero/Hero'
import Movies from '../../components/movies/Movies'
import { fetchData } from '../../utils/fetchData'

const Home = () => {
  const [trendVideos, setTrendVideos] = useState([]);

  useEffect(() => {
    fetchData('trending/movie/day')
    .then((response) => response && setTrendVideos(response.data.results))
    .catch((err) => console.log(err))
}, [])

  return (
    <div className='home'>
      <Hero video={trendVideos[0]}/>
      <Movies header='Trending this week' videos={trendVideos}/>
    </div>
  )
}

export default Home
