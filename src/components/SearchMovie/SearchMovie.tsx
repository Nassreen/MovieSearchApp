import React, { useState, useEffect } from "react";
import "./SearchMovie.css";
import { AiOutlineSearch } from "react-icons/ai";
import { searchFetch } from "../Fetch-API/getFetch";

type Props = {
  searchMovieHandler: Function;
};

const SearchMovie: React.FC<Props> = (props) => {
  const { searchMovieHandler } = props;
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const query = searchItem.length === 0 ? "" : searchItem;

    searchFetch(searchMovieHandler, query);
  }, [searchItem, searchMovieHandler]);

  return (
    <div className="search">
      <div className="input">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search Movie..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchMovie;
