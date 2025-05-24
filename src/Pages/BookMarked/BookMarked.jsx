import React, { useEffect, useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";

function BookMarked() {
  const hoverRef = useRef(null);
  const { fetchedData, dispatch } = useEntertainment();

  const [name, setName] = useState("");

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch({ type: "bookmark_search", payload: searchName });
  }, [dispatch, searchName, setSearchName]);

  function handleBookmarked(name) {
    dispatch({ type: "bookmarked", payload: name });
  }

  console.log(
    fetchedData
      .filter((s) => s.isBookmarked)
      .filter((s) => s.category === "TV Series")
  );

  return (
    <main className="grid gap-3">
      <SearchBar
        type={"text"}
        placeholder="Search for bookmarked shows"
        className="w-[99%] relative pl-10 py-[0.3rem] outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
      {fetchedData.length < 1 ? (
        <NotFound />
      ) : (
        <>
          {fetchedData
            .filter((s) => s.isBookmarked)
            .filter((s) => s.category === "Movie").length >= 1 && (
            <div className="">
              <h3 className="font-Outfit font-light text-white text-[20px] lg:text-[32px]">
                Bookmarked Movies
              </h3>
              <div className="grid grid-cols-[164px_164px] lg:grid-cols-[280px_280px_280px_280px] gap-2 justify-evenly lg:justify-start lg:gap-x-[4rem] py-3">
                {fetchedData
                  .filter((s) => s.isBookmarked)
                  .filter((s) => s.category === "Movie")
                  .map((s, i) => {
                    const {
                      title,
                      year,
                      rating,
                      category,
                      thumbnail,
                      isBookmarked,
                    } = s;
                    const { regular } = thumbnail;

                    return (
                      <section className="flex flex-col gap-1">
                        <div
                          key={i}
                          className={`font-Outfit text-white cursor-pointer lg:w-[280px]  h-[110px] lg:h-[174px] rounded-lg bg-cover bg-no-repeat relative`}
                          style={{ backgroundImage: `url(${regular.large})` }}
                          ref={hoverRef}
                          onMouseEnter={() => setName(title)}
                          onMouseLeave={() => setName("")}
                          //onClick={() => alert("kkk")}
                        >
                          <section
                            className={`${
                              name === title
                                ? "overflow-hidden flex flex-col lg:px-3 lg:gap-[1.7rem] lg:py-2 py-1 px-2 justify-between"
                                : " overflow-hidden flex flex-col lg:px-3 lg:gap-[0.9rem] lg:py-2 py-1 px-2 justify-between"
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
                              <div className="justify-center flex transition ease-linear duration-700 lg:translate-x-3 ">
                                <div className="flex items-center gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly h-10 w-[100px] lg:w-[110px] rounded-full ">
                                  <img src="/assets/icon-play.svg" />
                                  <h3 className="font-Outfit text-white">
                                    {" "}
                                    Play
                                  </h3>
                                </div>
                              </div>
                            )}
                          </section>
                        </div>
                        <div className="flex flex-col font-Outfit text-white ">
                          <div className="flex gap-1 items-center">
                            <h4 className=" text-[11px] lg:text-[15px]">
                              {year} &#46;{" "}
                            </h4>
                            <h4 className="flex items-center gap-1 text-[11px] lg:text-[15px] font-medium">
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
                            <h4 className=" text-[11px] lg:text-[15px]">
                              {rating}
                            </h4>
                          </div>
                          <h2 className="lg:text-[18px] text-[14px] font-medium">
                            {title}
                          </h2>
                        </div>
                      </section>
                    );
                  })}
              </div>
            </div>
          )}

          {fetchedData
            .filter((s) => s.isBookmarked)
            .filter((s) => s.category === "TV Series").length >= 1 ? (
            <div className="">
              <h3 className="font-Outfit font-light text-white text-[20px] lg:text-[32px]">
                Bookmarked Tv Series
              </h3>
              <div className="grid grid-cols-[164px_164px] lg:grid-cols-4 lg:gap-7 gap-2 justify-evenly py-4">
                {fetchedData
                  .filter((s) => s.isBookmarked)
                  .filter((s) => s.category === "TV Series")
                  .map((s, i) => {
                    const {
                      title,
                      year,
                      rating,
                      category,
                      thumbnail,
                      isBookmarked,
                    } = s;
                    const { regular } = thumbnail;

                    return (
                      <section className="flex flex-col gap-1">
                        <div
                          key={i}
                          className={`font-Outfit text-white cursor-pointer lg:w-[280px] w-[164px] h-[110px]  lg:h-[174px] rounded-lg bg-cover bg-no-repeat relative`}
                          style={{ backgroundImage: `url(${regular.large})` }}
                          ref={hoverRef}
                          onMouseEnter={() => setName(title)}
                          onMouseLeave={() => setName("")}
                          //onClick={() => alert("kkk")}
                        >
                          <section
                            className={`${
                              name === title
                                ? "overflow-hidden flex flex-col px-2 py-1 lg:px-3 lg:gap-[1.7rem] lg:py-2 justify-between"
                                : " overflow-hidden flex flex-col px-2 py-1 lg:px-3 lg:gap-[0.9rem] lg:py-2 justify-between"
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
                              <div className="justify-center flex transition ease-linear duration-700 lg:translate-x-3 ">
                                <div className="flex items-center gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly h-10 w-[100px] lg:w-[110px] rounded-full ">
                                  <img src="/assets/icon-play.svg" />
                                  <h3 className="font-Outfit text-white">
                                    {" "}
                                    Play
                                  </h3>
                                </div>
                              </div>
                            )}
                          </section>
                        </div>
                        <div className="flex flex-col font-Outfit text-white ">
                          <div className="flex gap-1 items-center">
                            <h4 className=" text-[11px] lg:text-[15px]">
                              {year} &#46;{" "}
                            </h4>
                            <h4 className="flex items-center gap-1 text-[11px] lg:text-[15px] font-medium">
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
                            <h4 className=" text-[11px] lg:text-[15px]">
                              {rating}
                            </h4>
                          </div>
                          <h2 className="lg:text-[18px]  text-[14px] font-medium">
                            {title}
                          </h2>
                        </div>
                      </section>
                    );
                  })}
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </main>
  );
}

export default BookMarked;
