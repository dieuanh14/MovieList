import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import Nav from "./Nav";
import FooterComponent from "./FooterComponent";
import MovieDetail from './MovieDetail';
import SearchBar from "./SearchBar";
import movieData from '../data.json';

export default function MainComponent() {

  return (
    <div>
      <Nav />
      {/* <MovieDetail/> */}
      {/* <SearchBar data={movieData}/> */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <FooterComponent/>
    </div>
  );
}
