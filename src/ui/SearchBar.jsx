import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  const [pathName, setPathName] = useState("");

  useEffect(() => {
    if (currentPath === "home") {
      setPathName("Search for movies or Tv series");
    } else if (currentPath === "movies") {
      setPathName("Search for movies");
    } else if (currentPath === "series") {
      setPathName("Search for Tv series");
    } else {
      setPathName("Search for bookmarked shows");
    }
  }, [currentPath]);

  return (
    <div className="flex items-center py-2 font-Outfit font-light">
      <img src="/assets/icon-search.svg" className="absolute w-[24px] " />
      <input
        type="text"
        placeholder={pathName}
        className="w-full relative pl-10 py-[0.3rem] outline-none text-white"
      />
    </div>
  );
}

export default SearchBar;
