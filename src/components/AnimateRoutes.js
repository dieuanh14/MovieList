import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import {AnimatePresence} from 'framer-motion';

export default function AnimateRoutes() {
  const location = useLocation();
  return (
	<AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/home" element={<HomeComponent />} />
      <Route path="/about" element={<AboutComponent />} />
      <Route path="/contact" element={<ContactComponent />} />
    </Routes>
	</AnimatePresence>
  );
}
