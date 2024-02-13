import { createContext, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../App.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export const ThemeContext = createContext(null);

function Layout({ children }) {
  const nav = useNavigate();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="app">
        <div className="header">
          <h1
            className="title"
            onClick={() => {
              nav("/");
            }}
          >
            produly
          </h1>
          <Sidebar />
          <button className="mode-button" onClick={toggleTheme}>
            {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </div>
        <hr className="header-border"></hr>
        <main className="page">{children}</main>
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
