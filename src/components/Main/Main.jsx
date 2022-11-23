import React from "react";

import style from "./Main.module.scss";

import { ButtonPink } from "../UI/ButtonPink/ButtonPink";

export const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <section className={style.row}>
          <div className={style.container}>
            <div className={style.column}>
              <h1>ITMC</h1>
              <div className={style.item}>
                <div className={style.box}>
                  <span>IT</span>
                  <span>Marketing</span>
                  <span>Crypto</span>
                </div>
                <p>Студия независимых разработчиков </p>
              </div>
            </div>
            <p className={style.text}>Студия независимых разработчиков</p>
          </div>
        </section>
        <section className={style.services}>
          <div className={style.container}>
            <h2>Наши услуги</h2>
            <div className={style.row}>
              <div className={style.column}>
                <img src="./img/services/code.png" alt="code" />
                <img src="./img/services/codeMobile.png" alt="codeMobile" />
                <div className={style.item}>
                  <p>IT</p>
                  <p>Описание услуги</p>
                  <ButtonPink>Заказать</ButtonPink>
                </div>
              </div>
              <div className={style.column}>
                <img src="./img/services/unsplash.png" alt="unsplash" />
                <img src="./img/services/unsplashMobile.png" alt="unsplashMobile" />
                <div className={style.item}>
                  <p>Marketing</p>
                  <p>Описание услуги</p>
                  <ButtonPink>Заказать</ButtonPink>
                </div>
              </div>
              <div className={style.column}>
                <img src="./img/services/head.png" alt="head" />
                <img src="./img/services/headMobile.png" alt="headMobile" />
                <div className={style.item}>
                  <p>Marketing</p>
                  <p>Описание услуги</p>
                  <ButtonPink>Заказать</ButtonPink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
