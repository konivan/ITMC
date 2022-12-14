import React from "react";
import style from "./Team.module.scss";
import { PERSON } from "./constant";
export const Team = () => {
  return (
    <section className={style.team} id= "header">
      <div className={style.wrapper}>
        <div className={style.container}>
          <h2>Команда</h2>
          <div className={style.row}>
            {PERSON.map((item, index) => (
              <div key={`${item} ${index}`} className={style.column}>
                <img src={item.img} alt={item.alt} />
                <span>{item.name}</span>
                <span>{item.post}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
