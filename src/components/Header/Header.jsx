import React from "react";

import style from "./Header.module.scss";

import { Button } from "../UI/Button/Button";
import { MyButton } from "../UI/MyButton/MyButton";
import { List } from "./List";
import { Menu } from "./Menu/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.column}>
            <NavLink to="/" onClick={() => {
            setTimeout(() => {
              window.scroll(0, 0);
            }, 0);
          }}>
              <img src="img/header/logoITMC.svg" alt="logo" />
            </NavLink>
            <div className={style.item}>
            <img onClick={() => props.setShowAuth(true)} style={{display: props.isAuth ? 'none' : null}} className={style.lk} src="img/header/lk.svg" alt="lk" />
            <div className={activeBurger === true ? style.burgerActive : style.burger} onClick={() => setActiveBurger(!activeBurger)}>
              <span></span>
              <div onClick={(e) => e.stopPropagation()}>
                <Menu setShowAuthOrders={props.setShowAuthOrders} setIsAuth={props.setIsAuth} isAuth={props.isAuth} activeBurger={activeBurger}/>
              </div>
            </div>
            </div>
            </div>
          <List />
          <div className={style.column}>
            <div className={style.item}>
              <Button setShowAuthOrders={props.setShowAuthOrders}>Заказать</Button>
            </div>
            <div className={style.item}>
              {!props.isAuth ? <MyButton setShowAuth={props.setShowAuth}>Войти</MyButton> :
              <div>
                <img className={style.userIcon} src="img/header/user.svg" alt="user-icon"/>
                <div className={style.dropdown}>
                  <NavLink to="Lk">
                    <span>Личный кабинет</span>
                  </NavLink>
                  <span onClick={() => props.setIsAuth(false)}>Выйти</span>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
