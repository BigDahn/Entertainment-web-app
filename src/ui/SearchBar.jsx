import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEntertainment } from "../context/Entertainment";

function SearchBar() {
  const { dispatch, searchName, setSearchName, data } = useEntertainment();
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  const [pathName, setPathName] = useState("");

  useEffect(() => {
    dispatch({ type: "search", payload: searchName });
  }, [dispatch, searchName]);

  useEffect(() => {
    if (currentPath === "home") {
      setPathName("Search for movies or Tv series");
    } else if (currentPath === "movies") {
      setPathName("Search for movies");
      setSearchName("");
    } else if (currentPath === "series") {
      setPathName("Search for Tv series");
    } else {
      setPathName("Search for bookmarked shows");
    }
  }, [currentPath, setSearchName]);

  return (
    <div className="flex items-center py-2 font-Outfit font-light ">
      <img src="/assets/icon-search.svg" className="relative w-[24px] " />
      <input
        type="text"
        placeholder={pathName}
        className="w-full relative pl-10 py-[0.3rem] outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
