import React from "react";
import { Card } from "flowbite-react";
import { useState } from "react";
import ReactPlayer from "react-player";
import {motion} from 'framer-motion';

export default function MyCard(props) {
  const [favourites, setFavourites]=useState([]);
  const [showText, setShowText] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const onClick = () => setShowText(true);
  const onTrailer = () => setShowTrailer(true);
  const Text = () => (
    <div className="rating">
      <p>Rating: {props.data.danhGia}</p>
      <p>Pulic Date: {props.data.ngayKhoiChieu}</p>
    </div>
  );
  const Trailer = () => {
    return(
    <div style={{marginTop:'8px'}}>
      { <ReactPlayer controls url={props.data.trailer} width='340px' height='170px' /> }
      
    </div>
    )
    console.log(props.data.trailer)
  };
  const handleChangeProductQuantity = (maPhim, value) => {
    const movies = this.state.movies.map((item) => {
      if (item.id === maPhim) {
        return { ...item, quantity: item.quantity + value };
      }
      return item;
    });
    this.setState({ movies });
  };
  return (
    <div className="movie" >

      <div className="max-w-sm col" >
        <Card
         imgSrc={props.data.hinhAnh} className="img-container">
          <div className="item">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {props.data.tenPhim}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {props.data.moTa}
            </p>
            <div className="btn_grp">
              <button className="btn btn-success" onClick={onClick}>
                View More
              </button>
              <button className="btn btn-danger" onClick={onTrailer}>
                Watch Trailer
              </button>
              {showText ? <Text /> : null}
              {showTrailer ? <Trailer /> : null}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
