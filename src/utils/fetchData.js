import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"

const options = {
    url: BASE_URL,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_REACT_APP_BEARER_TOKEN
    }
  };
  
export const fetchData = async (url) => {
    const response = await axios.get(`${BASE_URL}${url}`, options)
    return response;
}
