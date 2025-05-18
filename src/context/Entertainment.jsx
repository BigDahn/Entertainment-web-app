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
  trending: [],
  movies: [],
  series: [],
  isBookmarked: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: false,
        fetchedData: state.data,
        movies: state.fetchedData.filter((s) => s.category === "Movie"),
        series: state.fetchedData.filter((s) => s.category === "TV Series"),
      };
    }
    case "search": {
      return {
        ...state,
        fetchedData:
          action.payload === ""
            ? state.data
            : state.data.filter((s) => s.title.includes(action.payload)),
      };
    }
    case "Search_series": {
      return {
        ...state,
        series:
          action.payload === ""
            ? state.data.filter((s) => s.category === "TV Series")
            : state.data
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

      console.log(
        state.fetchedData
          .filter((s) => s.title != action.payload)
          .filter((s) => s.category === "Movie" && s.isBookmarked)
      );

      console.log(
        state.fetchedData
          .filter((s) => s.title != action.payload)
          .filter((s) => s.category === "Movie" && s.isBookmarked)
      );

      return {
        ...state,
        data: newData,
        fetchedData: state.fetchedData.map((s) => {
          if (s.title === action.payload) {
            return {
              ...s,
              isBookmarked: !s.isBookmarked,
            };
          }
          return s;
        }),
        movies: state.movies.map((s) => {
          if (s.title === action.payload) {
            return {
              ...s,
              isBookmarked: !s.isBookmarked,
            };
          }
          return s;
        }),
        series: state.series.map((s) => {
          if (s.title === action.payload) {
            return {
              ...s,
              isBookmarked: !s.isBookmarked,
            };
          }
          return s;
        }),
        isBookmarked: state.data.filter((s) => s.title != action.payload),
      };
    }
  }
}

function EntertainmentApp({ children }) {
  const [
    { data, trending, movies, series, isLoading, isBookmarked, fetchedData },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <EntertainmentContext.Provider
      value={{
        isBookmarked,
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
