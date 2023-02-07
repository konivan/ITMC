import React, { useEffect, useState } from "react";
import style from "./Team.module.scss";
import { PERSON } from "./constant";

export const Team = (props) => {
  const [team, setTeam] = useState();

  useEffect(() => {
    const fetchTeam = async () => {
      const url = `${props.URL}managers/comands-photo/`;
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
        setTeam(data?.result);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchTeam();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className={style.team} id="header">
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
          <div className={style.row} id="row">
            <h2>О нас</h2>
            <div className={style.column}>
              <p>
                Компания ITMC является первой компанией, которая максимально
                погружается в ваш продукт и делает работу не по ТЗ, а по вашим
                пожеланиям. Также у нас есть система трекинга, которая вам
                позволит удобно и эргономично отслеживать ваш проект.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
