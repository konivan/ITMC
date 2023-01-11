import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Bar.module.scss"

export  const Bar = () => {
    return (
        <div className={style.row}>
        <div className={style.column}>
          <img src="img/lk/icon.svg" alt="icon" />
          <span>Никита</span>
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
                className={style.two}
                src="img/lk/UnionTwo.svg"
                alt="UnionTwo"
              />
              <span>Счета</span>
            </li>
            <li>
              <img
                className={style.three}
                src="img/lk/Group.svg"
                alt="UnionOne"
              />
              <span>Корректировка задания</span>
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
              <img
                className={style.one}
                src="img/lk/vector.svg"
                alt="vector"
              />
              <span>Связь с менеджером</span>
            </li>
            <li>
              <img
                className={style.two}
                src="img/lk/trusted.svg"
                alt="trusted"
              />
              <span>Ваши договоры</span>
            </li>
            <li>
              {/* <img className={style.three} src="img/lk/UnionTwo.svg" alt="UnionTwo" /> */}
              {/* <span>Услуги</span> */}
            </li>
          </ul>
        </div>
        <div className={style.column}>
          <img src="img/lk/exit.svg" alt="exit" />
          <span>Свернуть панель</span>
        </div>
      </div>
    );
};

