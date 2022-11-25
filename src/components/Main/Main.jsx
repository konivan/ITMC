import React from "react";

import style from "./Main.module.scss";

import { Row } from "../Row/Row";
import { Services } from "../Services/Services";
import { Works } from "../Works/Works";

export const Main = (props) => {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <Row />
        <Services setShowAuthOrders={props.setShowAuthOrders} setOrderTitle={props.setOrderTitle}/>
        <Works />
      </div>
    </main>
  );
};
