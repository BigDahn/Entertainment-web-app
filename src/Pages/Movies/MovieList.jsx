import { useEntertainment } from "../../context/Entertainment";
import Movie from "./Movie";

function MovieList() {
  const { movies } = useEntertainment();

  return (
    <div className="grid gap-3   max-w-[120rem]">
      {movies.length > 0 && (
        <h3 className="font-Outfit font-light text-[20px] md:text-[32px] text-white">
          Movies
        </h3>
      )}
      <Movie />
    </div>
  );
}

export default MovieList;
