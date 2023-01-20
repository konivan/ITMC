import React from "react";

import Slider from "react-slick";

import style from "./Carousel.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
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
        zIndex: 8,
        marginTop: -110,
        marginLeft: 25,
      }}
      onClick={onClick}
    >
      <img
        style={{ position: "absolute", bottom: 15, right: 15 }}
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
        zIndex: 8,
        marginTop: -110,
        marginRight: 25,
      }}
      onClick={onClick}
    >
      <img
        style={{ position: "absolute", bottom: 15, right: 15 }}
        src="img/Lk/arrow.svg"
        alt=""
      />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  nextArrow: <SampleNewxtArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Carousel = () => {
  return (
    <div className={style.carouselWrapper}>
      <Slider {...settings}>
        <div className={style.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0d9be8f0ffd8fc7161fa82d51d262742-5334041-images-thumbs&n=13"
            alt=""
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0d9be8f0ffd8fc7161fa82d51d262742-5334041-images-thumbs&n=13"
            alt=""
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0d9be8f0ffd8fc7161fa82d51d262742-5334041-images-thumbs&n=13"
            alt=""
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0d9be8f0ffd8fc7161fa82d51d262742-5334041-images-thumbs&n=13"
            alt=""
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0d9be8f0ffd8fc7161fa82d51d262742-5334041-images-thumbs&n=13"
            alt=""
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src="https://avatars.mds.yandex.net/i?id=0d9be8f0ffd8fc7161fa82d51d262742-5334041-images-thumbs&n=13"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
