import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "CHANGE_ANTIMODE":
      return { ...state, antimode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: "light",
    antimode: "anti-dark",
  });

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  const changeAntimode = (antimode) => {
    dispatch({ type: "CHANGE_ANTIMODE", payload: antimode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeAntimode, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
