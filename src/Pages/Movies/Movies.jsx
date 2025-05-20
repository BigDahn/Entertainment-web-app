import React, { useEffect, useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";

function Movies() {
  const { movies, dispatch } = useEntertainment();

  console.log(movies);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch({ type: "Movies_Search", payload: searchName });
    console.log(searchName);
  }, [dispatch, searchName, setSearchName]);

  const hoverRef = useRef(null);
  const [name, setName] = useState("");
  function handleBookmarked(name) {
    dispatch({ type: "bookmarked", payload: name });
  }

  return (
    <main className="flex flex-col gap-2">
      {" "}
      <SearchBar
        type={"text"}
        placeholder="Search for movies"
        className="w-full relative pl-10 py-[0.3rem] outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
      {searchName && (
        <div>
          {movies.length <= 0 ? (
            <NotFound />
          ) : (
            <h3 className="font-Outfit text-[32px] font-light text-white">
              Found {movies.length} results of {`"${searchName}"`}{" "}
            </h3>
          )}
        </div>
      )}
      <div className="grid gap-3">
        {movies.length > 0 && (
          <h3 className="font-Outfit font-light text-[32px] text-white">
            Movies
          </h3>
        )}
        <div className="grid grid-cols-[280px_280px_280px_280px] gap-3">
          {movies.map((s, i) => {
            const { title, year, rating, category, thumbnail, isBookmarked } =
              s;
            const { regular } = thumbnail;
            return (
              <section className="flex flex-col gap-1">
                <div
                  key={i}
                  className={`font-Outfit text-white cursor-pointer w-[280px]  h-[174px] rounded-lg bg-cover bg-no-repeat relative`}
                  style={{ backgroundImage: `url(${regular.large})` }}
                  ref={hoverRef}
                  onMouseEnter={() => setName(title)}
                  onMouseLeave={() => setName("")}
                  //onClick={() => alert("kkk")}
                >
                  <section
                    className={`${
                      name === title
                        ? "overflow-hidden flex flex-col px-3 gap-[1.7rem] py-2 justify-between"
                        : " overflow-hidden flex flex-col px-3 gap-[0.9rem] py-2 justify-between"
                    }`}
                  >
                    <div className="flex items-end justify-end">
                      <button
                        className="h-8 w-8 bg-black opacity-35 rounded-full flex items-center justify-center cursor-pointer "
                        onClick={() => handleBookmarked(title)}
                      >
                        {isBookmarked ? (
                          <img src="/assets/icon-bookmark-full.svg" />
                        ) : (
                          <img src="/assets/icon-bookmark-empty.svg" />
                        )}
                      </button>
                    </div>
                    {name === title && (
                      <div className="justify-center flex transition ease-linear duration-700 translate-x-3 ">
                        <div className="flex items-center gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly h-10 w-[110px] rounded-full ">
                          <img src="/assets/icon-play.svg" />
                          <h3 className="font-Outfit text-white"> Play</h3>
                        </div>
                      </div>
                    )}
                  </section>
                </div>
                <div className="flex flex-col font-Outfit text-white ">
                  <div className="flex">
                    <h4 className="text-[15px]">{year} &#46; </h4>
                    <h4 className="flex items-center gap-1 text-[15px] font-medium">
                      {category === "Movie" ? (
                        <img
                          src="/assets/icon-category-movie.svg"
                          className="w-[12px] h-[12px]"
                        />
                      ) : (
                        <img
                          src="/assets/icon-category-tv.svg"
                          className="w-[12px] h-[12px]"
                        />
                      )}
                      {category} &#46;
                    </h4>
                    <h4 className="text-[15px]">{rating}</h4>
                  </div>
                  <h2 className="text-[18px] font-extralight">{title}</h2>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Movies;
