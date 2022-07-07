import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import Nav from "./Nav";
import FooterComponent from "./FooterComponent";
import SearchBar from "./SearchBar";
import movieData from "../data.json";
import Text1 from "./Tex1";
import ReactSwitch from "react-switch";
import { createContext } from "react";
import AnimateRoutes from "./AnimateRoutes";

export const ThemeContext = createContext(null);

function MainComponent() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="switch">
          <Nav />
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            className="switch-btn"
          />
        </div>
        {/* <SearchBar data={movieData}/> */}
        {/* <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes> */}
        <AnimateRoutes/>
        <FooterComponent />
      </div>
    </ThemeContext.Provider>
  );
}
export default MainComponent;
