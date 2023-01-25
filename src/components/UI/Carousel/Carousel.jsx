import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./Carousel.module.scss";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        boxShadow: "5px 4px 12px rgba(119, 129, 146, 0.15)",
        borderRadius: 100,
        padding: 20,
        zIndex: 3,
        marginTop: -110,
        marginLeft: 25,
        width: 45,
        height: 45,
      }}
      onClick={onClick}
    >
      <img
        style={{
          width: 7,
          height: 10,
          position: "absolute",
          bottom: 16,
          right: 19,
          transform: "rotate(180deg)",
        }}
        src="img/Lk/arrow.svg"
        alt=""
      />
    </div>
  );
}

function SampleNewxtArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "white",
        boxShadow: "0px 4px 12px rgba(119, 129, 146, 0.15)",
        borderRadius: 100,
        padding: 20,
        zIndex: 3,
        marginTop: -110,
        marginRight: 25,
        width: 45,
        height: 45,
      }}
      onClick={onClick}
    >
      <img
        style={{
          width: 7,
          height: 10,
          position: "absolute",
          bottom: 16,
          right: 19,
        }}
        src="img/Lk/arrow.svg"
        alt=""
      />
    </div>
  );
}

const Carousel = ({ gallery }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNewxtArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return gallery.length < 4 ? (
    <div className={style.blockWithoutCarousel}>
      {gallery.map((image, i) => {
        return (
          <div key={i} className={style.imageWrapper}>
            <img src={image.image} alt="galeryImage" />
          </div>
        );
      })}
    </div>
  ) : (
    <div className={style.carouselWrapper}>
      <Slider {...settings}>
        {gallery.map((image, i) => {
          return (
            <div key={i} className={style.imageWrapper}>
              <img src={image.image} alt="galeryImage" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
