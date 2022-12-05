import React from "react";

import style from "./Menu.module.scss";
import { Button } from "../../UI/Button";

export const Menu = (props) => {

    if (!props.activeBurger) {
        return null
    }

    return (
        <ul className={style.menu}>
            <li><a href="#works">Портфолио</a></li>
            <li><a href="/">О нас</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><Button setShowOrders={props.setShowOrders}>Заказать</Button></li>
        </ul>
    )
}