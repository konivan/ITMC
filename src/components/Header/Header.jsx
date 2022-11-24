import React from "react";

import style from "./Header.module.scss";

import {Button} from "../UI/Button/Button"
import { MyButton } from "../UI/MyButton/MyButton";
import { List } from "./List";

export const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.column}>
            <img src="img/header/logoITMC.svg" alt="logo" />
            <div className={style.burger}></div>
          </div>
          <List />
          <div className={style.column}>
            <div className={style.item}>
              <Button>Заказать</Button>
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
