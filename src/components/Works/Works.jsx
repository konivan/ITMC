import React from "react";

import style from "./Works.module.scss";

export const Works = (props) => {
  const openProduct = (img, icon) => {
    props.setProductImg(img);
    props.setProductIcon(icon)
    props.setShowProduct(true);
  }
  return (
    <section className={style.works} id="works">
      <div className={style.container}>
        <h2>Наши работы</h2>
        <div className={style.row}>
          <div className={style.column}>
            <img
              src="./img/work/Home.png"
              alt="Home"
              onClick={() =>
                openProduct("./img/work/Home.png", ["./img/work/IT.svg"])
              }
            />
            <h4>UI Design</h4>
            <img src="./img/work/IT.svg" alt="IT" />
          </div>
          <div className={style.column}>
            <img
              src="./img/work/masdGames.png"
              alt=""
              onClick={() =>
                openProduct("./img/work/masdGames.png", ["./img/work/IT.svg", "./img/work/M.svg", "./img/work/C.svg"])
              }
            />
            <h4>Создание и продвижение криптопроекта MASD GAMES</h4>
            <img src="./img/work/IT.svg" alt="IT" />
            <img src="./img/work/M.svg" alt="M" />
            <img src="./img/work/C.svg" alt="C" />
          </div>
          <div className={style.column}>
            <img
              src="./img/work/solana.png"
              alt="solana"
              onClick={() => openProduct("./img/work/solana.png", ["./img/work/C.svg"])}
            />
            <h4>Создание криптовалюты на основа SOLANA</h4>
            <img src="./img/work/C.svg" alt="" />
          </div>
          <div className={style.column}>
            <img
              src="./img/work/thrOne.png"
              alt="thrOne"
              onClick={() => openProduct("./img/work/thrOne.png", ["./img/work/IT.svg", "./img/work/C.svg"])}
            />
            <h4>WEB-разработка проекта: THR ONE</h4>
            <img src="./img/work/IT.svg" alt="IT" />
            <img src="./img/work/C.svg" alt="C" />
          </div>
        </div>
      </div>
    </section>
  );
};
