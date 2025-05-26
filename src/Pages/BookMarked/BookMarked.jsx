import { useEffect, useState } from "react";
import { useEntertainment } from "../../context/Entertainment";
import SearchBar from "../../ui/SearchBar";
import NotFound from "../../ui/NotFound";
import BoomarkedList from "./BoomarkedList";

function BookMarked() {
  const { fetchedData, dispatch } = useEntertainment();

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    dispatch({ type: "bookmark_search", payload: searchName });
  }, [dispatch, searchName, setSearchName]);

  return (
    <main className="grid gap-3 pb-8">
      <SearchBar
        type={"text"}
        placeholder="Search for bookmarked shows"
        className="w-[99%] relative pl-10 py-[0.3rem] outline-none text-white"
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
      />
      {fetchedData
        .filter((s) => s.isBookmarked)
        .filter((s) => s.category === "Movie").length < 1 &&
      fetchedData
        .filter((s) => s.isBookmarked)
        .filter((s) => s.category === "TV Series").length < 1 ? (
        <NotFound />
      ) : (
        <BoomarkedList />
      )}
    </main>
  );
}

export default BookMarked;
