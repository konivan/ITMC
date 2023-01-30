import React, { useEffect, useState } from "react";
import style from "./Dogovor.module.scss";
import { Bar } from "../Bar/Bar";
import { NavLink } from "react-router-dom";
import Page404 from "../../Page404/Page404";

export const Dogovor = (props) => {
  const [managers, setManagers] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(true);

  let globalToken = localStorage.getItem("globalToken");

  const url = `${props.URL}managers/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${globalToken}`,
      Accept: "application/json",
    },
  };

  const fetchManagers = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setManagers(data);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  console.log(managers);

  if (globalToken === null) {
    return <Page404 />;
  }

  return (
    <section className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div
            className={
              !sideBarOpen ? `${style.sideBarOpened}` : `${style.sideBarClosed}`
            }
          >
            <Bar name={props.name} />
            <img
              onClick={() => setSideBarOpen(!sideBarOpen)}
              src="img/Lk/sideBarIcon.svg"
              alt="sideBarIcon"
            />
          </div>
          <div className={style.row}>
            <h2>Ваши договоры</h2>
            <div className={style.cards}>
              {managers?.map((manager) => {
                return (
                  <div key={manager.id} className={style.column}>
                    <img src="img/lk/icon.svg" alt="Avatar" />
                    <h4>
                      {manager.first_name} {manager.last_name}
                    </h4>
                    <a href="tel:+7 925 540 3956">{manager?.phone}</a>
                    <span>Менеджер вашего проекта</span>
                    <div className={style.item}>
                      <NavLink to="/Orders">
                        <button>Проверить готовность</button>
                      </NavLink>
                    </div>
                    <div className={style.item}>
                      <button>
                        <a href="mailto:charomlimb@itmc.space">
                          Оставить жалобу
                        </a>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
