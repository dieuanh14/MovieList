import React, { useState } from "react";
import styles from "../css/App.css";
import Moviedata from "../data.json";
import data from "../data.json";
import SearchIcon from "@mui/icons-material/Search";
import MyCard from "./MyCard";
export default function ({ data,setList }) {
  const [filteredData, setFilteredData] = useState("");
  const handleFilter = (event) => {
    const searchMovie = event.target.value.toLowerCase();
    setFilteredData(event.target.value);
    const newFilter = data.filter((item) => {
      return item.tenPhim.toLowerCase().includes(searchMovie);
    });
    setList(newFilter);
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search a movie"
          onChange={handleFilter}
          value={filteredData || ""}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
    
    </div>
  );
}
