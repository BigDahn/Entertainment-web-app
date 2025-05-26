import { useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
function Trending() {
  const { dispatch, fetchedData } = useEntertainment();

  const hoverRef = useRef(null);
  const [name, setName] = useState("");
  function handleBookmarked(name) {
    dispatch({ type: "bookmarked", payload: name });
  }
  return (
    <div className="max-h-[300px] max-w-[120rem] overflow-hidden grid gap-3 overflow-y-hidden ">
      <h2 className="font-Outfit text-white text-[20px] md:text-[32px] ">
        Trending
      </h2>
      <article className="grid grid-cols-[240px_240px_240px_240px_240px]  md:grid-cols-[470px_470px_470px_470px_470px] lg:grid-cols-[450px_450px_450px_450px_450px] gap-3 lg:gap-5 overflow-x-scroll overflow-hidden ">
        {fetchedData
          .filter((s) => s.isTrending)
          .map((s, i) => {
            const { title, year, rating, category, thumbnail, isBookmarked } =
              s;
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
                      <h2 className=" text-[15px] md:text-[24px]">{title}</h2>
                    </div>
                  </section>
                </div>
              </>
            );
          })}
      </article>
    </div>
  );
}

export default Trending;
