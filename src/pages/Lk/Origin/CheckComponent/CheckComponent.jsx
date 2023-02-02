import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./CheckComponent.module.scss";

const CheckComponent = ({item}) => {
  return (
    <div className={style.box}>
      <div className={style.column}>
        <span>Счет на оплату</span>
        <span>{item.price} руб</span>
        <span>{item.order.name}</span>
        <p>{item.order.description}</p>
        <span style={{background: item.status === "paid" ? '#35A669' : null}}>
          {item.status === "paid" ? "Оплачено" : "Ожидает оплаты"}
        </span>
        {item.status !== "paid" ? (
          <button>
            <a href={item.pay_url} target="_blank" rel="noopener noreferrer">
              Оплатить
            </a>
          </button>
        ) : (
          <button style={{background: '#755CDD'}}>
            <NavLink to="/Orders">Перейти в заказ</NavLink>
          </button>
        )}
      </div>
      <div className={style.column}>
        <img src={item.order.image} alt="sideBarIcon" height='100' width="100"/>
      </div>
    </div>
  );
};

export default CheckComponent;