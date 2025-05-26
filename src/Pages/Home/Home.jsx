import { useEffect, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";
import Trending from "./Trending";
import Recommended from "./Recommended";
import MovieSearch from "./MovieSearch";

function Home() {
  const { dispatch, fetchedData } = useEntertainment();

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
          <MovieSearch />
        </main>
      ) : (
        <main className="grid grid-rows-1 gap-4">
          <Trending />
          <Recommended />
        </main>
      )}
    </>
  );
}

export default Home;
