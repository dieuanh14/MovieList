import React, { Component, useState } from "react";
import data from "../data.json";
import SearchBar from "./SearchBar";
import Text1 from "./Tex1";
import MyCard from "./MyCard";
export default function Movies() {
  const [_list, setList] = useState(data);
  const list = _list.map((item) => {
    return <MyCard key={item.maPhim} data={item} />;
  });

  return (
    <div className="contain container">
      <Text1 />
      <SearchBar data={data} setList={setList} />
      <div className="movie-lists">{list}</div>
    </div>
  );
}
