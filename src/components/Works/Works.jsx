import React from "react";
import { ButtonPink } from "../UI/ButtonPink/ButtonPink";

import style from "./Works.module.scss";

export const Works = (props) => {
  const openProduct = (img, title, icon) => {
    props.setProductImg(img);
    props.setProductTitle(title);
    props.setProductIcon(icon);
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
                openProduct("./img/work/Home.png", "UI Design" ,["./img/work/IT.svg"])
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
                openProduct("./img/work/masdGames.png", "Создание и продвижение криптопроекта MASD GAMES" ,["./img/work/IT.svg", "./img/work/M.svg", "./img/work/C.svg"])
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
              onClick={() => openProduct("./img/work/solana.png", "Создание криптовалюты на основа SOLANA" ,["./img/work/C.svg"])}
            />
            <h4>Создание криптовалюты на основа SOLANA</h4>
            <img src="./img/work/C.svg" alt="C" />
          </div>
          <div className={style.column}>
            <img
              src="./img/work/thrOne.png"
              alt="thrOne"
              onClick={() => openProduct("./img/work/thrOne.png", "WEB-разработка проекта: THR ONE" , ["./img/work/IT.svg", "./img/work/C.svg"])}
            />
            <h4>WEB-разработка проекта: THR ONE</h4>
            <span style={{float: 'right', display : props.setShowProduct ? null : 'none'}}>
              <ButtonPink>
                <a href="/portfolio">Показать еще</a>
              </ButtonPink>
            </span>
            <img src="./img/work/IT.svg" alt="IT" />
            <img src="./img/work/C.svg" alt="C" />
          </div>
        </div>
      </div>
    </section>
  );
};
