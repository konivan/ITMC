import React from "react";
import style from "./Bar.module.scss";
import { NavLink } from "react-router-dom";

export const Bar = (props) => {
  return (
    <div className={style.row}>
      <div className={style.column}>
        <img src="img/lk/icon.svg" alt="icon" />
        <span>{localStorage.getItem("name")}</span>
      </div>
      <div className={style.column}>
        <div className={style.item}>
          <span>ЗАКАЗЫ</span>
          <img src="img/lk/siteBar.svg" alt="siteBar" />
        </div>
      </div>
      <div className={style.column}>
        <ul>
          <li>
            <img
              className={style.one}
              src="img/lk/UnionOne.svg"
              alt="UnionOne"
            />
            <NavLink to="/Orders">
              <span>Ваши заказы</span>
            </NavLink>
          </li>
          <li>
            <img
              className={style.three}
              src="img/lk/UnionTwo.svg"
              alt="UnionOne"
            />
            <NavLink to="/Origin">
              <span>Счета</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.column}>
        <div className={style.item}>
          <span>Поддержка</span>
          <img src="img/lk/siteBar.svg" alt="siteBar" />
        </div>
        <ul>
          <li>
            <img className={style.one} src="img/lk/vector.svg" alt="vector" />
            <span><a href="https://t.me/charonlimb">Связь с менеджером</a></span>
          </li>
          <li>
            <img className={style.two} src="img/lk/trusted.svg" alt="trusted" />
            <NavLink to="/Dogovor">
              <span>Ваши договоры</span>
            </NavLink>
          </li>
          <li>
            {/* <img className={style.three} src="img/lk/UnionTwo.svg" alt="UnionTwo" /> */}
            {/* <span>Услуги</span> */}
          </li>
        </ul>
      </div>
      <div className={style.column}>
        <img src="img/lk/exit.svg" alt="exit" />
        <NavLink to="/">
          <span onClick={() => {
            setTimeout(() => {
              window.location.reload();
            }, 0);
          }}>Вернуться назад</span>
        </NavLink>
      </div>
    </div>
  );
};
