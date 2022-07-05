import React, { Component,useState } from "react";
import { Card } from "flowbite-react";
import styles from "../css/App.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import data from "../data.json";
import SearchBar from "./SearchBar";
import MyCard from "./MyCard";
export default function Movies() {
  const [_list, setList] = useState(data);
  const list = _list.map((item) => {
    return <MyCard key={item.maPhim} data={item} />;
  });
  const Text = () => (
    <div>
      <p>{list}</p>
    </div>
  );
  return (
    <div className="contain container">
      <h1>Trending Movies</h1>
      <SearchBar data={data}
        setList={setList}
      />

      <div className="movie-lists">{list}</div>

    </div>
  );
}
