import React from "react";
import style from "./Dogovor.module.scss";
import { Bar } from "../Bar/Bar";
import { NavLink } from "react-router-dom";

export const Dogovor = (props) => {
  return (
    <section className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar name={props.name} />
          <div className={style.row}>
            <h2>Ваши договоры</h2>
            <div className={style.cards}>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button>
                    <a href="mailto:charomlimb@itmc.space">Оставить жалобу</a>
                  </button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
              <div className={style.column}>
                <img src="img/lk/icon.svg" alt="Avatar" />
                <h4>Никита Можаев</h4>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
                <span>Менеджер вашего проекта</span>
                <div className={style.item}>
                  <NavLink to="/Orders">
                    <button>Проверить готовность</button>
                  </NavLink>
                </div>
                <div className={style.item}>
                  <button><a href="mailto:charomlimb@itmc.space">Оставить жалобу</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
