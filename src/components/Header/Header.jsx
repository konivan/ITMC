import React from "react";

import style from "./Header.module.scss";

import { Button } from "../UI/Button/Button";
import { MyButton } from "../UI/MyButton/MyButton";
import { List } from "./List";
import { Menu } from "./Menu/Menu";
import { useState } from "react";

export const Header = (props) => {
  const [activeBurger, setActiveBurger] = useState(false);
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.column}>
            <a href="/">
              <img src="img/header/logoITMC.svg" alt="logo" />
            </a>
            <div className={style.item}>
            <img onClick={() => props.setShowAuth(true)} className={style.lk} src="img/header/lk.svg" alt="lk" />
            <div className={activeBurger === true ? style.burgerActive : style.burger} onClick={() => setActiveBurger(!activeBurger)}>
              <span></span>
              <div onClick={(e) => e.stopPropagation()}>
                <Menu setShowOrders={props.setShowOrders} activeBurger={activeBurger}/>
              </div>
            </div>
            </div>
            </div>
          <List />
          <div className={style.column}>
            <div className={style.item}>
              <Button setShowOrders={props.setShowOrders}>Заказать</Button>
            </div>
            <div style={{display: 'none'}} className={style.item}>
              <MyButton setShowAuth={props.setShowAuth}>Войти</MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
