import React, { useState } from "react";
import style from "./Origin.module.scss";
import { Bar } from "../Bar/Bar";
import { MySelect } from "../../../components/UI/Select/MySelect";

export const Origin = (props) => {
  const [selectedSort, setSelectedSort] = useState("");
  let arr = [
    { title: "abc", date: new Date("2019-06-28") },
    { title: "cba", date: new Date("2019-06-10") },
    { title: "bca", date: new Date("2019-06-22") },
  ];

  if (selectedSort === "По названию") {
    arr.sort((a, b) => a.title.localeCompare(b)); // сортировка по алфавиту
  } else if (selectedSort === "По дате") {
    arr.sort((a, b) => b.date - a.date); // сортировка по дате
  }

  return (
    <section className={style.main}>
      <div className={style.wrapper} id="header">
        <div className={style.container}>
          <Bar name={props.name} />
          <div className={style.row}>
            <h2>Все счета</h2>
            <div className={style.itemContainer}>
              <div className={style.item}>
                <span>Выставленные</span>
                <span>К оплате</span>
                <span>История</span>
              </div>
              <div className={style.item}>
                <select>
                  <option value="">Все торговые точки и операции</option>
                </select>
                <input type="text" placeholder="Поиск по номеру счета" />
                <MySelect
                  value={selectedSort}
                  setSelectedSort={setSelectedSort}
                  defaultValue="Фильтр"
                  option={[
                    { value: "По названию", name: "По названию" },
                    { value: "По дате", name: "По дате" },
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
