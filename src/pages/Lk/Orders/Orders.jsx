import React from "react";
import style from "./Orders.module.scss";
import { Bar } from "../Bar/Bar";

export const Orders = () => {
  return (
    <section className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar />
          <div className={style.row}>
            <div className={style.column}>
              <h2>Ваши заказы</h2>
              <button>
                <img src="img/Lk/UnionX.svg" alt="UnionX" />
                <span>Заказать</span>
              </button>
            </div>
            <div className={style.column}>
              <input placeholder="Поиск..." type="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
