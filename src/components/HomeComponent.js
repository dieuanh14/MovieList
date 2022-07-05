import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import Nav from "./Nav";
import Movies from "./Movies";
import data from "../data.json";
import MovieDetail from './MovieDetail'

export default class HomeComponent extends Component {
 
  render() {
    return (
      <div>
        <MyCarousel />
        <Movies list={data} />
      </div>
    );
  }
}
