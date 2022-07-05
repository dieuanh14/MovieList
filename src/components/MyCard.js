import React from "react";
import { Card } from "flowbite-react";
import { useState } from "react";

export default function MyCard(props) {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const Text = () => (
    <div>
      <p>Rating: {props.data.danhGia}</p>
      <p>Pulic Date: {props.data.ngayKhoiChieu}</p>
    </div>
  );

  return (
    <div>
      <div className="max-w-sm col">
        <Card imgSrc={props.data.hinhAnh} className="card">
        <div className="item">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {props.data.tenPhim}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.data.moTa}
          </p>
          <div>
            <button className="btn btn-success" onClick={onClick}>
              View More
            </button>
            {showText ? <Text /> : null}
          </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
