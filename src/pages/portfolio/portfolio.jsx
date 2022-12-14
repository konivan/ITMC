import React from "react";
import style from "./Portfolio.module.scss";

import { Works } from "../../components/Works/Works";
import { useEffect } from "react";

export const Portfolio = (props) => {
  useEffect(() => {
    const url = `http://185.26.96.45:8000/account/api/portfolio`;
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, reqOptions)
    .then((res) => res.json())
    .catch((err) => console.log("Error: " + err));
  }, []);

  return (
    <main className={style.main}>
      <div className={style.wrapper} id="header">
        <Works
          setProductTitle={props.setProductTitle}
          setProductIcon={props.setProductIcon}
          setShowProduct={props.setShowProduct}
          setProductImg={props.setProductImg}
        />
      </div>
    </main>
  );
};