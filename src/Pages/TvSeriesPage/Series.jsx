import { useEffect, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";
import SeriesList from "./SeriesList";

function Series() {
  const { dispatch, series } = useEntertainment();
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch({ type: "Search_series", payload: searchName });
  }, [dispatch, searchName, setSearchName]);

  return (
    <main className="flex flex-col gap-2">
      <SearchBar
        type={"text"}
        placeholder="Search for TV series"
        className="w-[99%] relative pl-10 py-[0.3rem] outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
      {searchName && (
        <div>
          {series.length <= 0 ? (
            <NotFound />
          ) : (
            <h3 className="font-Outfit text-[20px] md:text-[32px] font-light text-white">
              Found {series.length} results of {`"${searchName}"`}{" "}
            </h3>
          )}
        </div>
      )}
      <SeriesList />
    </main>
  );
}

export default Series;
