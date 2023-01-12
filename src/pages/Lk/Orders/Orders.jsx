import React, { useEffect, useState } from "react";
import style from "./Orders.module.scss";
import { Bar } from "../Bar/Bar";
import { NavLink } from "react-router-dom";

export const Orders = () => {
  const [globalToken, setGlobalToken] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const userData = {
    username: "admin",
    password: "admin"
  }

  const url1 = `http://127.0.0.1:8000/api/token/`;
  const reqOptions1 = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
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



  const url = `http://127.0.0.1:8000/orders/order/`;
  const reqOptions = {
    method: "GET",
    headers: {
      "authorization": `Bearer ${globalToken?.access}`,
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, reqOptions);
        const data = await res.json();
        setOrderData(data?.result[0])
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchData();
  }, [globalToken]);


  return (
    <section className={style.main} id="Orders">
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar />
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
            <div className={style.column}>
              <input placeholder="Поиск..." type="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
