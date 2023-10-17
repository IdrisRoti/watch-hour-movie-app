import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"

const options = {
    url: BASE_URL,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjk2NzYzZGI1MjcxMjE4ZTI3OTMxNzhhYzliN2U1ZiIsInN1YiI6IjY1MjI1OTA2OTVjMGFmMDBlM2NmYWNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kus09g3WgNjb7Yk1QzmJ0XfB6gc3zR3VfVW-xfkoFMw'
    }
  };
  
export const fetchData = async (url) => {
    const response = await axios.get(`${BASE_URL}${url}`, options)
    return response;
}
