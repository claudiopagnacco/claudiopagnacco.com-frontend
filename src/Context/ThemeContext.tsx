import { createContext } from "react";

export const ThemeContext = createContext({
    setTheme: '',
    setStateTheme: (theme: boolean) => {},
  });