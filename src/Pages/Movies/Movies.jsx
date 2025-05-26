import React, { useEffect, useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";
import MovieList from "./MovieList";

function Movies() {
  const { movies, dispatch } = useEntertainment();

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch({ type: "Movies_Search", payload: searchName });
  }, [dispatch, searchName, setSearchName]);

  return (
    <main className="flex flex-col gap-2">
      {" "}
      <SearchBar
        type={"text"}
        placeholder="Search for movies"
        className="w-[99%] relative pl-10 py-[0.3rem] outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
      {searchName && (
        <div>
          {movies.length <= 0 ? (
            <NotFound />
          ) : (
            <h3 className="font-Outfit text-[20px] md:text-[32px] font-light text-white">
              Found {movies.length} results of {`"${searchName}"`}{" "}
            </h3>
          )}
        </div>
      )}
      <MovieList />
    </main>
  );
}

export default Movies;
