import { useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
function BookmarkedSeries() {
  const hoverRef = useRef(null);
  const { fetchedData, dispatch } = useEntertainment();

  const [name, setName] = useState("");

  function handleBookmarked(name) {
    dispatch({ type: "bookmarked", payload: name });
  }
  return (
    <div>
      {fetchedData
        .filter((s) => s.isBookmarked)
        .filter((s) => s.category === "TV Series").length >= 1 ? (
        <div className="">
          <h3 className="font-Outfit font-light text-white text-[20px] lg:text-[28px]">
            Bookmarked Tv Series
          </h3>
          <div className="grid grid-cols-[164px_164px] py-3 md:grid-cols-[220px_220px_220px]  md:gap-x-[2rem] md:px-2 md:gap-y-[1.2rem] 2xl:grid-cols-[280px_280px_280px_280px] gap-2 justify-evenly md:justify-start  lg:gap-x-[6.5rem] lg:gap-y-[1rem] 2xl:gap-[1.5rem] ">
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
                      className={`font-Outfit text-white cursor-pointer lg:w-[280px] h-[110px] md:w-[200px] md:h-[140px] lg:h-[170px]  2xl:h-[174px]  rounded-lg bg-cover bg-no-repeat relative`}
                      style={{ backgroundImage: `url(${regular.large})` }}
                      ref={hoverRef}
                      onMouseEnter={() => setName(title)}
                      onMouseLeave={() => setName("")}
                    >
                      <section
                        className={`${
                          name === title
                            ? "overflow-hidden flex flex-col px-2 lg:px-3 md:gap-[0.7rem] lg:gap-[1.8rem] 2xl:gap-[1.7rem] py-1 lg:py-2 justify-between"
                            : " overflow-hidden flex flex-col lg:px-3 lg:gap-[0.9rem] px-2 py-1 lg:py-2 justify-between"
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
                            <div className="flex items-center gap-4 opacity-[60%] bg-[#757b87]  border-[#979797] justify-evenly h-10 w-[100px] lg:w-[110px] rounded-full ">
                              <img src="/assets/icon-play.svg" />
                              <h3 className="font-Outfit text-white"> Play</h3>
                            </div>
                          </div>
                        )}
                      </section>
                    </div>
                    <div className="flex flex-col font-Outfit text-white ">
                      <div className="flex gap-1 items-center">
                        <h4 className=" text-[11px] lg:text-[15px] md:text-[13px]">
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
                      <h2 className="md:text-[18px]  text-[14px] font-medium">
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
    </div>
  );
}

export default BookmarkedSeries;
