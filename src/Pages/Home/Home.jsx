import { useEffect, useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";

function Home() {
  const { data, trending, dispatch } = useEntertainment();

  const hoverRef = useRef(null);

  const Recommended = data.filter((s) => !s.isTrending);

  const [name, setName] = useState("");
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
          <h3 className="font-Outfit text-[32px] font-light text-white">
            Found {data.length} results of {`"${searchName}"`}{" "}
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {data.map((s, i) => {
              const { title, year, rating, category, thumbnail } = s;
              const { regular } = thumbnail;

              return (
                <div key={i} className="flex flex-col gap-1">
                  <img
                    src={regular.large}
                    className="w-[280px] h-[174px] rounded-md"
                  />
                  <div className="flex flex-col justify-center items-start  overflow-hidden max-h-[295px] font-Outfit font-light text-white ">
                    <div className="flex gap-1 items-start">
                      {" "}
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
                    <h2 className="text-[18px]">{title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      ) : (
        <main className="grid gap-2">
          <div className="max-h-[295px] overflow-hidden grid gap-3 ">
            <h2 className="font-Outfit text-white text-[32px]">Trending</h2>
            <article className="grid grid-cols-[450px_450px_450px_450px_450px]  gap-5 overflow-hidden ">
              {trending.map((s, i) => {
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
                          : " overflow-hidden flex flex-col px-3 gap-[7.9rem] py-3 justify-between"
                      }`}
                    >
                      <div className="flex items-end justify-end">
                        <button className="h-8 w-8 bg-black opacity-35 rounded-full flex items-center justify-center cursor-pointer ">
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
                );
              })}
            </article>
          </div>
          <div className="">
            <h3 className="font-Outfit font-light text-white text-[32px]">
              Recommended for you
            </h3>
            <div className="grid grid-cols-4 gap-7 py-4">
              {Recommended.map((s, i) => {
                const { title, year, rating, category, thumbnail } = s;
                const { regular } = thumbnail;

                return (
                  <div key={i} className="flex flex-col gap-1">
                    <img
                      src={regular.large}
                      className="w-[280px] h-[174px] rounded-md"
                    />
                    <div className="flex flex-col justify-center items-start  overflow-hidden max-h-[295px] font-Outfit font-light text-white ">
                      <div className="flex gap-1 items-start">
                        {" "}
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
                      <h2 className="text-[18px]">{title}</h2>
                    </div>
                  </div>
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
