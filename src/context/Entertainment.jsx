import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import data from "../data.json";

const EntertainmentContext = createContext();

console.log(data);

const initialState = {
  data: data,
  fetchedData: [],
  isLoading: true,
  trending: data.filter((s) => s.isTrending),
  movies: data.filter((s) => s.category === "Movie"),
  series: data.filter((s) => s.category === "TV Series"),
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: false,
        fetchedData: state.data,
        movies: state.fetchedData.filter((s) => s.category === "Movie"),
      };
    }
    case "search": {
      return {
        ...state,
        data:
          action.payload === ""
            ? state.fetchedData
            : state.data.filter((s) => s.title.includes(action.payload)),
      };
    }
    case "Search_series": {
      return {
        ...state,
        series:
          action.payload === ""
            ? data.filter((s) => s.category === "TV Series")
            : data
                .filter((s) => s.category === "TV Series")
                .filter((s) => s.title.includes(action.payload)),
      };
    }
    case "Movies_Search": {
      return {
        ...state,
        movies:
          action.payload === ""
            ? state.data.filter((s) => s.category === "Movie")
            : state.data
                .filter((s) => s.category === "Movie")
                .filter((s) => s.title.includes(action.payload)),
      };
    }
    case "bookmarked": {
      const newData = state.data.map((s) => {
        if (s.title === action.payload) {
          return {
            ...s,
            isBookmarked: !s.isBookmarked,
          };
        }
        return s;
      });

      console.log(newData);
      return {
        ...state,
        data: newData,
        fetchedData: state.data.map((s) => {
          if (s.title === action.payload) {
            return {
              ...s,
              isBookmarked: !s.isBookmarked,
            };
          }
          return s;
        }),
        movies: state.data.filter((s) => s.category === "Movie"),
        // trending: state.data.filter((s) => s.isTrending),
      };
    }
  }
}

function EntertainmentApp({ children }) {
  const [{ data, trending, movies, series, isLoading, fetchedData }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <EntertainmentContext.Provider
      value={{
        data,
        trending,
        movies,
        series,
        isLoading,
        fetchedData,
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
