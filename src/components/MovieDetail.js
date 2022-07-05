import React, { useState } from "react";
import data from "../data.json";
import MyCard from "./MyCard";
import { Card } from "flowbite-react";

export default function MovieDetail() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const list = data.map((item) => {
    return <MyCard key={item.maPhim} data={item} />;
  });
  const Text = () => (
    <div>
      <p>{list.tenPhim}</p>
    </div>
  );
  return (
    <div>
      <button className="btn btn-danger" onClick={onClick}>
        Click me
      </button>
      {showText ? <Text /> : null}
    </div>
  );
}

