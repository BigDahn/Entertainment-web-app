import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: [],
  email: "",
  password: "",
  isAuthenticated: false,
  isLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "signUp": {
      return {
        ...state,
        user: action.payload,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case "login": {
      return {
        ...state,
        isAuthenticated:
          state.email === action.payload.email &&
          state.password === action.payload.password
            ? true
            : false,
      };
    }
  }
}
function Authentication({ children }) {
  const [{ user, email, password, isAuthenticated, isLoading }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user,
        email,
        password,
        isAuthenticated,
        isLoading,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context used outside the parent context");
  return context;
}

export { useAuth, Authentication };
