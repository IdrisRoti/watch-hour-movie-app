import React, {useState, useEffect} from 'react'
import Movies from './../../components/movies/Movies';
import Hero from '../../components/hero/Hero';
import { fetchData } from '../../utils/fetchData'

const Upcoming = () => {
    const [upcomingVideos, setUpcomingVideos] = useState([]);

    useEffect(() => {
      fetchData('/movie/upcoming')
      .then((response) => response && setUpcomingVideos(response.data.results))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
    <Hero video={upcomingVideos[3]}/>
    <Movies header='Upcoming Movies' videos={upcomingVideos}/>
  </div>
  )
}

export default Upcoming