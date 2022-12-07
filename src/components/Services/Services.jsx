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
                  setShowOrders={props.setShowOrders}
                  setOrderType={props.setOrderType}
                  orderType={'IT'}
                  order={'IT разработка'}
                  setOrder={props.setOrder}
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
                  setShowOrders={props.setShowOrders}
                  setOrderType={props.setOrderType}
                  orderType={'M'}
                  order={'Маркетинг'}
                  setOrder={props.setOrder}
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
                  setShowOrders={props.setShowOrders}
                  setOrderType={props.setOrderType}
                  orderType={'C'}
                  order={'Крипто'}
                  setOrder={props.setOrder}
                >
                  Заказать
                </ButtonPink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
