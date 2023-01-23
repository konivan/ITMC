import React, { useState, useEffect } from "react";
import CheckComponent from "./CheckComponent/CheckComponent";
import style from "./Origin.module.scss";
import { Bar } from "../Bar/Bar";
import { MySelect } from "../../../components/UI/Select/MySelect";
import { NavLink } from "react-router-dom";

export const Origin = (props) => {
  const [selectedSort, setSelectedSort] = useState("");
  const [checks, setChecks] = useState([]);
  const [reserveChecks, setReserveChecks] = useState();

  useEffect(() => {
    const url = `${props.URL}orders/paychecks/`;
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
        setChecks(data?.results);
        setReserveChecks(data?.results);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchChecks();
  }, []);

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
                <span>История</span>
              </div>
              <div className={style.item}>
                <select>
                  <option value="">Все торговые точки и операции</option>
                </select>
                <input type="text" placeholder="Поиск по номеру счета" />
                <MySelect
                  value={selectedSort}
                  checks={checks}
                  selectedSort={selectedSort}
                  setChecks={setChecks}
                  setSelectedSort={setSelectedSort}
                  reserveChecks={reserveChecks}
                  defaultValue="Фильтр"
                  option={[
                    { value: "Сначала новые", name: "Сначала новые" },
                    { value: "Отмененные", name: "Отмененные" },
                    { value: "Оплаченные", name: "Оплаченные" },
                    { value: "Выставленные", name: "Выставленные" },
                  ]}
                />
                <select>
                  <option value="text">Действия</option>
                </select>
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
              {checks.map((item, index) => (
                <CheckComponent key={`${item} ${index}`} item={item}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
