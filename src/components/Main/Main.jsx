import React from "react";

import style from "./Main.module.scss";

import { Row } from "../Row/Row";
import { Services } from "../Services/Services";
import { Works } from "../Works/Works";

export const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <Row />
        <Services />
        <Works />
      </div>
    </main>
  );
};
