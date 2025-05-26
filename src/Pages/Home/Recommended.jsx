import { useRef, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";

function Recommended() {
  const { dispatch, fetchedData } = useEntertainment();

  const hoverRef = useRef(null);
  const [name, setName] = useState("");
  function handleBookmarked(name) {
    dispatch({ type: "bookmarked", payload: name });
  }
  return (
    <div className="max-w-[120rem]">
      <h3 className="font-Outfit font-light text-white text-[20px] md:text-[32px]">
        Recommended for you
      </h3>
      <div className="grid grid-cols-[164px_164px]  md:grid-cols-[220px_220px_220px]  md:gap-x-[2rem] md:gap-y-[1.2rem] 2xl:grid-cols-4 2xl:gap-x-[1rem] py-4  gap-2 justify-evenly md:justify-evenly lg:justify-start lg:gap-x-[7rem]">
        {fetchedData
          .filter((s) => !s.isTrending)
          .map((s, i) => {
            const { title, year, rating, category, thumbnail, isBookmarked } =
              s;
            const { regular } = thumbnail;

            return (
              <section className="flex flex-col gap-1" key={i}>
                <div
                  className={`font-Outfit text-white cursor-pointer  h-[110px] md:w-[200px] md:h-[140px] lg:w-[280px]  lg:h-[174px] rounded-lg bg-cover bg-no-repeat relative`}
                  style={{ backgroundImage: `url(${regular.large})` }}
                  ref={hoverRef}
                  onMouseEnter={() => setName(title)}
                  onMouseLeave={() => setName("")}
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
                          <h3 className="font-Outfit text-white"> Play</h3>
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
  );
}

export default Recommended;
