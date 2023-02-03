import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./CheckComponent.module.scss";

const CheckComponent = ({item, urll}) => {
  const [checkUrl, setCheckUrl] = useState();

  const payCheck = async (id) => {
    const url = `${urll}orders/paycheck/${id}/pay_paycheck/`;
    const reqOptions = {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("globalToken")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setCheckUrl(data);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  if (checkUrl !== undefined) {
    window.location.replace(checkUrl);
  };

  return (
    <div className={style.box}>
      <div className={style.column}>
        <span>Счет на оплату</span>
        <span>{item.price} руб</span>
        <span>{item.order.name}</span>
        <p>{item.order.description}</p>
        <span style={{ background: item.status === "paid" ? "#35A669" : null }}>
          {item.status === "paid" ? "Оплачено" : "Ожидает оплаты"}
        </span>
        {item.status !== "paid" ? (
          <a href={checkUrl} target="_blank" rel="noopener noreferrer">
            <button
              onClick={() => {
                payCheck(item.id);
              }}
            >
              Оплатить
            </button>
          </a>
        ) : (
          <NavLink to="/Orders">
            <button style={{ background: "#755CDD" }}>Перейти в заказ</button>
          </NavLink>
        )}
      </div>
      <div className={style.column}>
        <img
          src={item.order.image}
          alt="sideBarIcon"
          height="100"
          width="100"
        />
      </div>
    </div>
  );
};

export default CheckComponent;