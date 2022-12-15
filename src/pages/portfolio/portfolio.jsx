import React from "react";
import style from "./Portfolio.module.scss";

import { Works } from "../../components/Works/Works";
// import { useEffect } from "react";
// import { useState } from "react";

export const Portfolio = () => {
  // useEffect(() => {
  //   const url = `http://185.26.96.45:8000/gallery/show/`;
  //   const reqOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch(url, reqOptions)
  //   .then((res) => {return res.text()})
  //   .then((body) => console.log(body))
  //   .catch((err) => console.log("Error: " + err));
  // }, []);
  
  const data = [
    {
img: './img/work/Home.png',
titles: 'Title'
},
{
  img: './img/work/thrOne.png',
  titles: 'ThR'
}
]
  return (
    <section className={style.main}>
      <div className={style.wrapper} id="header">
        <Works data={data}/>
      </div>
    </section>
  );
};