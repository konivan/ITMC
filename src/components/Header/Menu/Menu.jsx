import React from "react";

import style from "./Menu.module.scss";

import { Button } from "../../UI/Button";

import { NavLink } from "react-router-dom";

export const Menu = (props) => {
  if (!props.activeBurger) {
    return null;
  }

  return (
    <div className={style.menu}>
       <ul>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 300);
            }, 0);
          }}
        >
          <NavLink to="/#services">Услуги</NavLink>
        </li>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 900);
            }, 0);
          }}
        >
          <NavLink to="/">Портфолио</NavLink>
        </li>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 0);
            }, 0);
          }}
        >
          <NavLink to="/team">Команда</NavLink>
        </li>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 5000);
            }, 0);
          }}
        >
          <NavLink to="/team">О нас</NavLink>
        </li>
        <li style={{display: !props.isAuth ? 'none' : null}}>
          <NavLink onClick={() => {
                    localStorage.setItem('auth', 'false');
                    props.setIsAuth(false);
                    localStorage.removeItem('name');
                    localStorage.removeItem('password');
                  }}>Выйти</NavLink>
        </li>
      </ul>
      <Button setShowAuthOrders={props.setShowAuthOrders}>Заказать</Button>
    </div>
  );
};
