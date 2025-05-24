import { useEffect, useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";

function Home() {
  const { dispatch, fetchedData } = useEntertainment();

  const hoverRef = useRef(null);
  const [name, setName] = useState("");
  function handleBookmarked(name) {
    dispatch({ type: "bookmarked", payload: name });
  }

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch({ type: "search", payload: searchName });
  }, [dispatch, searchName, setSearchName]);

  return (
    <>
      <SearchBar
        type={"text"}
        placeholder="Search for movies or Tv series"
        className="w-[99%] relative pl-10 py-[0.3rem]  outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
      {searchName ? (
        <main className="grid gap-3">
          <div>
            {fetchedData.filter((s) => s.title.includes(searchName)).length <=
            0 ? (
              <NotFound />
            ) : (
              <h3 className="font-Outfit text-[20px] md:text-[32px] font-light text-white">
                Found{" "}
                {fetchedData.filter((s) => s.title.includes(searchName)).length}{" "}
                {fetchedData.filter((s) => s.title.includes(searchName))
                  .length > 1
                  ? "results"
                  : "result"}{" "}
                for {`"${searchName}"`}{" "}
              </h3>
            )}
          </div>
          <div className="grid grid-cols-[164px_164px] md:grid-cols-[220px_220px_220px] px-1 2xl:grid-cols-4 gap-4 justify-evenly md:justify-start md:gap-x-[2.4rem] lg:gap-x-[6rem] 2xl:gap-4">
            {fetchedData.map((s, i) => {
              const { title, year, rating, category, thumbnail, isBookmarked } =
                s;
              const { regular } = thumbnail;

              return (
                <section className="flex flex-col gap-1">
                  <div
                    key={i}
                    className={`font-Outfit text-white cursor-pointer h-[110px] md:h-[140px] lg:w-[280px]  lg:h-[174px] rounded-lg bg-cover bg-no-repeat relative`}
                    style={{ backgroundImage: `url(${regular.large})` }}
                    ref={hoverRef}
                    onMouseEnter={() => setName(title)}
                    onMouseLeave={() => setName("")}
                  >
                    <section
                      className={`${
                        name === title
                          ? "overflow-hidden flex flex-col px-3 2xl:gap-[1.7rem] md:gap-[0.5rem] lg:gap-[1.6rem] py-2 justify-between"
                          : " overflow-hidden flex flex-col px-3 2xl:gap-[0.9rem] py-2 justify-between"
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
                        <div className="justify-center flex transition ease-linear duration-700 2xl:translate-x-3 ">
                          <div className="flex items-center gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly h-10 w-[110px] rounded-full ">
                            <img src="/assets/icon-play.svg" />
                            <h3 className="font-Outfit text-white"> Play</h3>
                          </div>
                        </div>
                      )}
                    </section>
                  </div>
                  <div className="flex flex-col font-Outfit text-white ">
                    <div className="flex gap-2">
                      <h4 className="text-[11px] lg:text-[15px]">
                        {year} &#46;{" "}
                      </h4>
                      <h4 className="flex items-center gap-1 text-[11px] md:text-[13px] lg:text-[15px] font-medium">
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
                      <h4 className="text-[11px] md:text-[13px] lg:text-[15px]">
                        {rating}
                      </h4>
                    </div>
                    <h2 className=" text-[14px] md:text-[18px] font-medium">
                      {title}
                    </h2>
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      ) : (
        <main className="grid grid-rows-1 gap-4">
          <div className="max-h-[300px] max-w-[120rem] overflow-hidden grid gap-3 overflow-y-hidden ">
            <h2 className="font-Outfit text-white text-[20px] md:text-[32px] ">
              Trending
            </h2>
            <article className="grid grid-cols-[240px_240px_240px_240px_240px]  md:grid-cols-[470px_470px_470px_470px_470px] lg:grid-cols-[450px_450px_450px_450px_450px] gap-3 lg:gap-5 overflow-x-scroll overflow-hidden ">
              {fetchedData
                .filter((s) => s.isTrending)
                .map((s, i) => {
                  const {
                    title,
                    year,
                    rating,
                    category,
                    thumbnail,
                    isBookmarked,
                  } = s;
                  const { trending } = thumbnail;

                  return (
                    <>
                      <div
                        key={i}
                        className={`font-Outfit text-white cursor-pointer  h-[140px] md:h-[230px] rounded-lg bg-cover bg-no-repeat relative`}
                        style={{ backgroundImage: `url(${trending.large})` }}
                        ref={hoverRef}
                        onMouseEnter={() => setName(title)}
                        onMouseLeave={() => setName("")}
                        //onClick={() => alert("kkk")}
                      >
                        <section
                          className={`${
                            name === title
                              ? "overflow-hidden flex flex-col px-3 gap-[0.2rem] md:gap-[2.5rem] lg:gap-[2.7rem] py-3 justify-between"
                              : " overflow-hidden flex flex-col px-3 gap-[2.9rem] md:gap-[7.5rem] lg:gap-[7.9rem] py-3 justify-between "
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
                            <div className="justify-center flex transition ease-linear duration-700 2xl:translate-x-3 ">
                              <div className="flex items-center gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly w-[100px] h-10 md:w-[110px] rounded-full ">
                                <img src="/assets/icon-play.svg" />
                                <h3 className="font-Outfit text-white">
                                  {" "}
                                  Play
                                </h3>
                              </div>
                            </div>
                          )}
                          <div className="flex flex-col ">
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
                            <h2 className=" text-[15px] md:text-[24px]">
                              {title}
                            </h2>
                          </div>
                        </section>
                      </div>
                    </>
                  );
                })}
            </article>
          </div>
          <div className="max-w-[120rem]">
            <h3 className="font-Outfit font-light text-white text-[20px] md:text-[32px]">
              Recommended for you
            </h3>
            <div className="grid grid-cols-[164px_164px]  md:grid-cols-[220px_220px_220px]  md:gap-x-[2rem] md:gap-y-[1.2rem] 2xl:grid-cols-4 2xl:gap-x-[1rem] py-4  gap-2 justify-evenly md:justify-evenly lg:justify-start lg:gap-x-[7rem]">
              {fetchedData
                .filter((s) => !s.isTrending)
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
                    <section className="flex flex-col gap-1" key={i}>
                      <div
                        className={`font-Outfit text-white cursor-pointer  h-[110px] md:w-[200px] md:h-[140px] lg:w-[280px]  lg:h-[174px] rounded-lg bg-cover bg-no-repeat relative`}
                        style={{ backgroundImage: `url(${regular.large})` }}
                        ref={hoverRef}
                        onMouseEnter={() => setName(title)}
                        onMouseLeave={() => setName("")}
                        //onClick={() => alert("kkk")}
                      >
                        <section
                          className={`${
                            name === title
                              ? "overflow-hidden flex flex-col px-1 lg:px-2 2xl:px-3  md:px-1.5 gap-[0.2rem] md:gap-[1rem] lg:gap-[2rem] 2xl:gap-[1.7rem] py-1 2xl:py-2 justify-between"
                              : " overflow-hidden flex flex-col px-1 lg:px-2 md:px-1.5 2xl:px-3 2xl:gap-[0.9rem] py-1 2xl:py-2 justify-between"
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
                            <div className="justify-center flex transition ease-linear duration-700 2xl:translate-x-3 ">
                              <div className="flex items-center lg:gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly h-10 w-[100px] lg:w-[110px] rounded-full ">
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
                        <div className="flex gap-2 items-center">
                          <h4 className=" text-[11px] md:text-[13px] lg:text-[15px]">
                            {year} &#46;{" "}
                          </h4>
                          <h4 className="flex items-center gap-1 text-[11px] md:text-[13px] lg:text-[15px] font-medium">
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
                          <h4 className=" text-[11px] md:text-[13px] lg:text-[15px]">
                            {rating}
                          </h4>
                        </div>
                        <h2 className=" text-[14px] md:text-[18px] font-medium">
                          {title}
                        </h2>
                      </div>
                    </section>
                  );
                })}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Home;
