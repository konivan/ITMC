import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Bar.module.scss";

export const Bar = ({ activeBurger, setActiveBurger }) => {
  if (!activeBurger) {
    return null;
  }

  return (
    <div className={style.row}>
      <div className={style.container}>
        <div className={style.column}>
          <div>
            <img src="img/header/logoITMC.svg" alt="iclogoITMCon" />
          </div>
          <div onClick={() => setActiveBurger(!activeBurger)}>
            <img src="img/newlk/close_icon.png" alt="close_icon" />
          </div>
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
        {/* <div className={style.exit}>
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
        </div> */}
      </div>
    </div>
  );
};
