import React from "react";
import { Carousel } from "flowbite-react";
import styles from "../css/App.css";
import st from "../assets/st.jpeg";

function MyCarousel() {
  return (
    <div
      className="
	h-56 sm:h-64 xl:h-80 2xl:h-96 carousell container"
    >
      <Carousel style={{ height: "400px" }} className=" carousel">
        <img className="img" src={st} alt="..." />
        <img
          className="img"
          src="https://s3-eu-west-1.amazonaws.com/kneelbeforeblog/wp-content/uploads/2021/12/16012701/Spidey-banner-Cropped.jpg"
          alt="..."
        />
        <img
          src="https://i.pinimg.com/originals/6d/c5/0b/6dc50b59e59c1403ac1155ea079eb308.jpg"
          alt="..."
        />
        <img
          src="https://gameranx.com/wp-content/uploads/2022/06/maxresdefault-1.jpg"
          alt="..."
        />
        <img
          src="https://cutewallpaper.org/27/avengers-hd-dual-monitor-wallpaper/1093932457.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default MyCarousel;
