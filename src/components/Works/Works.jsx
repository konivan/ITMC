import React from "react";

import style from "./Works.module.scss";

export const Works = () => {
  return (
    <section className={style.works} id="works">
      <div className={style.container}>
        <h2>Наши работы</h2>
        <div className={style.row}>
          <div className={style.column}>
            <img src="./img/work/Home.png" alt="Home" />
            <h4>UI Design</h4>
            <img src="./img/work/IT.svg" alt="IT" />
          </div>
          <div className={style.column}>
            <img src="./img/work/masdGames.png" alt="" />
            <h4>Создание и продвижение криптопроекта MASD GAMES</h4>
            <img src="./img/work/IT.svg" alt="IT" />
            <img src="./img/work/M.svg" alt="M" />
            <img src="./img/work/C.svg" alt="C" />
          </div>
          <div className={style.column}>
            <img src="./img/work/solana.png" alt="solana" />
            <h4>Создание криптовалюты на основа SOLANA</h4>
            <img src="./img/work/C.svg" alt="" />
          </div>
          <div className={style.column}>
            <img src="./img/work/thrOne.png" alt="thrOne" />
            <h4>WEB-разработка проекта: THR ONE</h4>
            <img src="./img/work/IT.svg" alt="IT" />
            <img src="./img/work/C.svg" alt="C" />
          </div>
        </div>
      </div>
    </section>
  );
};
