import Toggle from "./library/toggle";

import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext.tsx";

const DarkMode = () => {
  const { stateTheme, setStateTheme } = useContext(ThemeContext);

  if (stateTheme) {
    document.querySelector("html").setAttribute("data-theme", "dark");
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
  } else {
    document.querySelector("html").setAttribute("data-theme", "light");
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff');
  }

  const toggleTheme = () => {
    const isCurrentDark = stateTheme === true;
    setStateTheme(isCurrentDark ? false : true);

    if (isCurrentDark) {
      localStorage.setItem("selectedTheme", "light");
    } else {
      localStorage.setItem("selectedTheme", "dark");
    }
  };

  return (
    <>
      <Toggle
        className="DarkMode"
        onChange={toggleTheme}
        checked={stateTheme === true}
      />
    </>
  );
};

export default DarkMode;
// <input onChange={toggleTheme} defaultChecked={ selectedTheme === "dark" } type="checkbox" />
