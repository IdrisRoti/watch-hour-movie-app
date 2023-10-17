import './App.scss'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import TopRated from './pages/top-rated/TopRated';
import Popular from './pages/popular/Popular';
import Upcoming from './pages/upcoming/Upcoming';
import SearchPage from './pages/search/SearchPage';
import MovieDetails from './pages/movieDetails/MovieDetails';


function App() {

  const Layout = () => {
    return (
    <>
    <Nav />
    <div>
      <Outlet /> 
    </div>
    </> 
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/top-rated",
          element: <TopRated />,
        },
        {
          path: "/popular",
          element: <Popular />,
        },
        {
          path: "/upcoming",
          element: <Upcoming />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/movie-details/:id",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
