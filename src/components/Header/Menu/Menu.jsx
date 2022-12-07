import React from "react";

import style from "./Menu.module.scss";

import { Button } from "../../UI/Button";

import { MENU } from "../Menu/constant";

export const Menu = (props) => {
  if (!props.activeBurger) {
    return null;
  }

  return (
    <div className={style.menu}>
      <ul>
      {MENU.map((item, index) => (
            <li key={`${item} ${index}`}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
      </ul>
      <Button setShowOrders={props.setShowOrders}>Заказать</Button>
    </div>
  );
};
