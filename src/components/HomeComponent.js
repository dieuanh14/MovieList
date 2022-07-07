import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import Nav from "./Nav";
import Movies from "./Movies";
import data from "../data.json";
import { motion } from "framer-motion";

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
        <MyCarousel />
        <Movies list={data} />
        </motion.div>
      </div>
    );
  }
}
