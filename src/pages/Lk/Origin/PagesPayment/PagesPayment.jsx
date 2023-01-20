import React from "react";
import style from "./PagesPayment.module.scss";
import { Bar } from "../../Bar/Bar";
import { NavLink } from "react-router-dom";

export const PagesPayment = (props) => {
  return (
    <section className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar name={props.name} />
          <div className={style.row}>
            <h2>Все счета</h2>
            <div className={style.itemContainer}>
              <div className={style.item}>
                <NavLink to="/PagesExhibited">
                  <span>Выставленные</span>
                </NavLink>
                <NavLink to="/PagesPayment">
                  <span>К оплате</span>
                </NavLink>
                <NavLink to="/Origin">
                  <span>История</span>
                </NavLink>
              </div>
              <div className={style.item}>
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
