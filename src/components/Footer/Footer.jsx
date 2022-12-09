import React from "react";

import style from "./Footer.module.scss";

import { IMG, TEXT } from "./constant";

import { Button } from "../UI/Button/Button";

export const Footer = (props) => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.box}>
              <div className={style.column}>
                <div className={style.item}>
                  <span>Закажите у нас проект</span>
                  <span>уже сегодня!</span>
                </div>
                <Button setShowAuthOrders={props.setShowAuthOrders}>
                  Заказать
                </Button>
              </div>
              <div className={style.column}>
                <img src="img/footer/logo.svg" alt="logo" />
                <p>Ул. Покрышкина 8к2</p>
                <p>+7 925 104 5382</p>
                <p>+7 925 540 3956</p>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.column}>
              <img src="img/footer/logo.svg" alt="logo" />
              <p>Ул. Покрышкина 8к2</p>
              <p>+7 925 104 5382</p>
              <p>+7 925 540 3956</p>
            </div>
            <div className={style.column}>
              <div className={style.item}>
                <img
                  src="img/footer/lk.svg"
                  alt="lk"
                  // onClick={() => props.setShowAuth(true)}
                  // onClick={() => props.setShowAuth(true)}
                />
                <span>Личный кабинет</span>
              </div>
              <div className={style.item}>
                {IMG.map((item, index) => (
                  <a
                    target={item.target}
                    rel={item.rel   }
                    href={item.href}
                    key={`${item} ${index}`}
                  >
                    <img src={item.img} alt={item.alt} />
                  </a>
                ))}
              </div>
            </div>
            <div className={style.column}>
              {TEXT.map((item, index) => (
                <ul key={`${item} ${index}`}>
                  <li>
                    <a href={item.href}>{item.text}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className={style.column}>
              <div className={style.item}>
                <span>Закажите у нас проект</span>
                <span>уже сегодня!</span>
              </div>
              <Button setShowAuthOrders={props.setShowAuthOrders}>
                Заказать
              </Button>
            </div>
            <div className={style.column}>
              <a href="#header">
                <img src="img/footer/icon.svg" alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
