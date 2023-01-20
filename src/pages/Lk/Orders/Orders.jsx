import React, { useEffect, useState } from "react";
import style from "./Orders.module.scss";
import { Bar } from "../Bar/Bar";
import { NavLink } from "react-router-dom";
import OrderList from "./OrderList/OrderList";
import OrderInfo from "./OrderInfo/OrderInfo";

export const Orders = (props) => {
  const [globalToken, setGlobalToken] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const userData = {
    username: localStorage.getItem("name"),
    password: localStorage.getItem("password"),
  };

  const url1 = `${props.URL}api/token/`;
  const reqOptions1 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url1, reqOptions1, userData);
        const token = await res.json();
        setGlobalToken(token);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchData();
  }, []);

  const url = `${props.URL}orders/order/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${globalToken?.access}`,
      Accept: "application/json",
    },
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setOrderData(data?.results[0]);
    } catch (err) {
      console.log("Error: " + err);
    }
  };
  if (orderData === null) {
    fetchOrders();
  }

  return (
    <section className={style.main} id="Orders">
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar name={props.name} />
          <div className={style.row}>
            <div className={style.column}>
              <h2>Ваши заказы</h2>
              <button>
                <NavLink to="/LkCreateOrder">
                  <img src="img/Lk/UnionX.svg" alt="UnionX" />
                  <span>Заказать</span>
                </NavLink>
              </button>
            </div>
            <div className={style.orders}>
              <div>
                <input placeholder="Поиск..." type="text" />
                <OrderList />
              </div>
              <OrderInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
