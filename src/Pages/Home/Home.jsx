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
        className="w-full relative pl-10 py-[0.3rem] outline-none text-white"
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
              <h3 className="font-Outfit text-[32px] font-light text-white">
                Found{" "}
                {fetchedData.filter((s) => s.title.includes(searchName)).length}{" "}
                results of {`"${searchName}"`}{" "}
              </h3>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {fetchedData.map((s, i) => {
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
        </main>
      ) : (
        <main className="grid grid-rows-1 gap-4">
          <div className="max-h-[300px] max-w-[120rem] overflow-hidden grid gap-3 overflow-x-scroll ">
            <h2 className="font-Outfit text-white text-[32px]">Trending</h2>
            <article className="grid grid-cols-[450px_450px_450px_450px_450px]  gap-5   ">
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
                        className={`font-Outfit text-white cursor-pointer  h-[230px] rounded-lg bg-cover bg-no-repeat relative`}
                        style={{ backgroundImage: `url(${trending.large})` }}
                        ref={hoverRef}
                        onMouseEnter={() => setName(title)}
                        onMouseLeave={() => setName("")}
                        //onClick={() => alert("kkk")}
                      >
                        <section
                          className={`${
                            name === title
                              ? "overflow-hidden flex flex-col px-3 gap-[2.7rem] py-3 justify-between"
                              : " overflow-hidden flex flex-col px-3 gap-[7.9rem] py-3 justify-between "
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
                            <h2 className="text-[24px]">{title}</h2>
                          </div>
                        </section>
                      </div>
                    </>
                  );
                })}
            </article>
          </div>
          <div className="">
            <h3 className="font-Outfit font-light text-white text-[32px]">
              Recommended for you
            </h3>
            <div className="grid grid-cols-4 gap-7 py-4">
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
      )}
    </>
  );
}

export default Home;
