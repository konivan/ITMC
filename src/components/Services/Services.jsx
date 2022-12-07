import React from "react";

import style from "./Services.module.scss";
import { ButtonPink } from "../UI/ButtonPink/ButtonPink";

export const Services = (props) => {
  return (
    <section className={style.services} id="services">
      <div className={style.container}>
        <h2>Наши услуги</h2>
        <div className={style.row}>
          <div className={style.column}>
            <div className={style.item}>
              <p>IT</p>
              <p>Описание услуги</p>
              <ButtonPink
                setShowAuthOrders={props.setShowAuthOrders}
                setOrderType={props.setOrderType}
                orderType={"IT"}
              >
                Заказать
              </ButtonPink>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.item}>
              <p>Marketing</p>
              <p>Описание услуги</p>
              <ButtonPink
                setShowAuthOrders={props.setShowAuthOrders}
                setOrderType={props.setOrderType}
                orderType={"M"}
              >
                Заказать
              </ButtonPink>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.item}>
              <p>Crypto</p>
              <p>Описание услуги</p>
              <ButtonPink
                setShowAuthOrders={props.setShowAuthOrders}
                setOrderType={props.setOrderType}
                orderType={"C"}
              >
                Заказать
              </ButtonPink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
