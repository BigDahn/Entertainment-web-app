import React from "react";
import { useEntertainment } from "../../context/Entertainment";

function Series() {
  const { series } = useEntertainment();

  console.log(series);
  return (
    <div className="grid gap-3">
      <h3 className="font-Outfit font-light text-[32px] text-white">
        Tv Series
      </h3>
      <div className="grid grid-cols-[280px_280px_280px_280px] gap-3">
        {series.map((s, i) => {
          const { title, year, rating, category, thumbnail } = s;
          const { regular } = thumbnail;
          return (
            <div key={i}>
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
  );
}

export default Series;
