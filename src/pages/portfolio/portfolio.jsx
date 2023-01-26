import React from "react";
import style from "./Portfolio.module.scss";

import { Works } from "../../components/Works/Works";
import { PORTFOLIO } from "./constant";

export const Portfolio = () => {

  return (
    <section className={style.main}>
      <div className={style.wrapper} id="header">
        <Works data={PORTFOLIO}/>
      </div>
    </section>
  );
};