import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import data from "../data.json";

const EntertainmentContext = createContext();

console.log(data.filter((s) => s.title.includes("sd")));

const initialState = {
  data: data,
  trending: data.filter((s) => s.isTrending),
  movies: data.filter((s) => s.category === "Movie"),
  series: data.filter((s) => s.category === "TV Series"),
};

function reducer(state, action) {
  switch (action.type) {
    case "search": {
      console.log(action.payload);
      return {
        ...state,
        data:
          action.payload === ""
            ? data
            : data.filter((s) => s.title.includes(action.payload)),
      };
    }
  }
}

function EntertainmentApp({ children }) {
  const [{ data, trending, movies, series }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [searchName, setSearchName] = useState("");

  return (
    <EntertainmentContext.Provider
      value={{
        data,
        trending,
        movies,
        series,
        searchName,
        setSearchName,
        dispatch,
      }}
    >
      {children}
    </EntertainmentContext.Provider>
  );
}

function useEntertainment() {
  const context = useContext(EntertainmentContext);
  if (context === undefined)
    throw new Error("Context used outside the parent context");
  return context;
}

export { useEntertainment, EntertainmentApp };
