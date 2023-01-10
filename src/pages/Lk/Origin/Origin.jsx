import React from "react";
import style from "./Origin.module.scss";
import {Bar} from "../Bar/Bar"

export const Origin = (props) => {
  return (
    <section className={style.main}>
      <div className={style.wrapper} id="header">
        <div className={style.container}>
          <Bar/>
          <div className={style.row}>
            <h2>Все счета</h2>
            <div className={style.itemContainer}>
              <div className={style.item}>
                <span>Выставленные</span>
                <span>К оплате</span>
                <span>История</span>
              </div>
              <div className={style.item}>
                <select>
                  <option value="">Все торговые точки и операции</option>
                </select>
                <input placeholder="Поиск по номеру счета" />
                <select>
                  <option value="">Фильтры</option>
                  <option value="">По дате</option>
                </select>
                <select>
                  <option value="text">Действия</option>
                </select>
                <div className={style.box}>
                    <input type="checkbox" className={style.lastCheckBox} />
                    <span>Номер счета</span>
                    <span>Время и дата</span>
                    <span>Торговая точка / Оперция</span>
                    <span>Сумма</span>
                    <span>Получено</span>
                    <span>Статус</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
