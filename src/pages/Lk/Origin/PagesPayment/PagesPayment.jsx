import React, { useState, useEffect } from "react";
import CheckComponent from "../CheckComponent/CheckComponent";
import style from "./PagesPayment.module.scss";
import { Bar } from "../../Bar/Bar";
import { NavLink } from "react-router-dom";

export const PagesPayment = (props) => {
  const [checks, setChecks] = useState();

  useEffect(() => {
    const url = `${props.URL}orders/paychecks/for_payment/`;
    const reqOptions = {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('globalToken')}`,
        Accept: "application/json",
      },
    };

    const fetchChecks = async () => {
      try {
        const res = await fetch(url, reqOptions);
        const data = await res.json();
        setChecks(data);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchChecks();
  }, []);
  console.log(checks)
  return (
    <section className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar name={props.name} />
          <div className={style.row}>
            <h2>Все счета</h2>
            <div className={style.itemContainer}>
              <div className={style.item}>
                <NavLink to="/PagesPayment">
                  <span>К оплате</span>
                </NavLink>
                <NavLink to="/Origin">
                  <span>История</span>
                </NavLink>
              </div>
              <div className={style.item}>
                <div className={style.box}>
                  <input type="checkbox" className={style.lastCheckBox} />
                  <span>Номер счета</span>
                  <span>Время и дата</span>
                  <span>Торговая точка / Оперция</span>
                  <span>Сумма</span>
                  <span>Получено</span>
                  <span>Статус</span>
                </div>
              </div>
              {checks?.map((item, index) => (
                <CheckComponent key={`${item} ${index}`} item={item}/>
              ))}
            </div>
            <button>Оплатить</button>
          </div>
        </div>
      </div>
    </section>
  );
};
