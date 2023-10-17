import React, { useState } from "react";
import "./searchPage.scss";
import Movies from "./../../components/movies/Movies";
import { BiSearchAlt2 } from "react-icons/bi";
import { fetchData } from "../../utils/fetchData";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    fetchData(
      `search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
    ).then((response) => setSearchResult(response.data.results));

    setSearchValue("");
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSubmit={handleSearch}
            id="search"
          />
          <BiSearchAlt2 onClick={handleSearch} />
        </div>
        <Movies header="Search result" videos={searchResult} />
      </div>
    </div>
  );
};

export default SearchPage;
