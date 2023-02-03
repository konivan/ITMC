import React, { useState } from "react";
import style from "./Bar.module.scss";
import { NavLink } from "react-router-dom";

export const Bar = (props) => {

  return (
    <div className={style.row} >
      <div className={style.container}>
        <div className={style.column}>
          <img src="img/header/logoITMC.svg" alt="iclogoITMCon" />
        </div>
        <div className={style.column}>
          <ul>
            <li>
              <div>
                <img src="img/newLk/shoppingcart.svg" alt="shoppingcart" />
                <NavLink to="/Orders">
                  <span>Заказы</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div>
                <img src="img/newLk/shoppingcart.svg" alt="shoppingcart" />
                <NavLink to="/Origin">
                  <span>Счета</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div>
                <img src="img/newLk/shoppingcart.svg" alt="shoppingcart" />
                <a href="https://t.me/Proodduct_manager7">Менеджеры</a>
              </div>
            </li>
            <li>
              {/* <div>
                <img src="img/newLk/shoppingcart.svg" alt="shoppingcart" />
                <NavLink to="/Dogovor">
                  <span>Договора</span>
                </NavLink>
              </div> */}
            </li>
          </ul>
        </div>
        <div className={style.exit}>
          <NavLink to="/">
            <span
              onClick={() => {
                setTimeout(() => {
                  window.location.reload();
                }, 0);
              }}
            >
              Вернуться назад
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
