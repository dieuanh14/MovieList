import React from "react";
import { Carousel } from "flowbite-react";
import styles from '../css/App.css'
import st from '../assets/st.jpeg'

function MyCarousel() {
  return (
    <div
      className="
	h-56 sm:h-64 xl:h-80 2xl:h-96 carousell container"
    >
      <Carousel style={{height:'400px'}} className=" carousel">
        <img className="img"
          src={st}
          alt="..."
        />
        <img className="img"
          src="https://www.glenbrookcinema.com.au/imagesDB/movies/Spider-ManNoWayHomeSlideRated.jpg"
          alt="..."
        />
        <img
          src="https://cdn.wallpapersafari.com/68/96/5r4S3j.jpg"
          alt="..."
        />
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/minions-rise-of-gru.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5"
          alt="..."
        />
        <img
          src="http://images1.fanpop.com/images/image_uploads/Order-of-the-Phoenix-harry-potter-931094_1680_1050.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default MyCarousel;
