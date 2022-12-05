import React from "react";

import style from "./Header.module.scss";

import { Button } from "../UI/Button/Button";
import { MyButton } from "../UI/MyButton/MyButton";
import { List } from "./List";

export const Header = (props) => {
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
            <div className={style.burger}></div>
            </div>
            </div>
          <List />
          <div className={style.column}>
            <div className={style.item}>
              <Button setShowOrders={props.setShowOrders}>Заказать</Button>
            </div>
            <div className={style.item}>
              <MyButton setShowAuth={props.setShowAuth}>Войти</MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
