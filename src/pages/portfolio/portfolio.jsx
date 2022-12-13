import React from "react";
import style from "./Portfolio.module.scss";

import { Works } from "../../components/Works/Works";

export const Portfolio = (props) => {
  return (
    <main className={style.main}>
      <div className={style.wrapper} id="header">
        <Works setProductTitle={props.setProductTitle} setProductIcon={props.setProductIcon} setShowProduct={props.setShowProduct} setProductImg={props.setProductImg}/>
      </div>
    </main>
  );
};