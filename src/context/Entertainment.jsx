import { createContext, useContext, useReducer } from "react";
import data from "../data.json";

const EntertainmentContext = createContext();

console.log();

const initialState = {
  data: data,
  trending: data.filter((s) => s.isTrending),
  movies: data.filter((s) => s.category === "Movie"),
  series: data.filter((s) => s.category === "TV Series"),
};

function reducer(state, action) {
  switch (action.type) {
    case " ": {
      return {};
    }
  }
}

function EntertainmentApp({ children }) {
  const [{ data, trending, movies, series }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <EntertainmentContext.Provider
      value={{
        data,
        trending,
        movies,
        series,
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
