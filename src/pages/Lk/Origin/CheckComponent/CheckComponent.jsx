import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./CheckComponent.module.scss";

const CheckComponent = ({item}) => {
  return (
    <div className={style.box}>
      <div className={style.column}>
        <h2>Счет на оплату</h2>
        <span>{item.price} руб</span>
        <span>itmc</span>
        <p>Description</p>
        <span
          className={
            item.status === "paid"
              ? style.paid
              : item.status === "processing"
              ? style.processing
              : style.rejected
          }
        >
          {item.status}
        </span>
        {item.status !== "paid" ? (
          <button>
            <a href={item.pay_url} target="_blank" rel="noopener noreferrer">
              Оплатить
            </a>
          </button>
        ) : (
          <button>
            <NavLink to="/Orders">Перейти в заказ</NavLink>
          </button>
        )}
      </div>
      <div className={style.column}>
        <img src="img/Lk/sideBarIcon.svg" alt="sideBarIcon" />
      </div>
    </div>
  );
};

export default CheckComponent;