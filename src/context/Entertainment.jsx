import { createContext, useContext, useReducer } from "react";
import data from "../data.json";

const EntertainmentContext = createContext();

const initialState = {
  data: data,
  trending: data.filter((s) => s.isTrending),
};

function reducer(state, action) {
  switch (action.type) {
    case " ": {
      return {};
    }
  }
}

function EntertainmentApp({ children }) {
  const [{ data, trending }, dispatch] = useReducer(reducer, initialState);

  return (
    <EntertainmentContext.Provider
      value={{
        data,
        trending,
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
