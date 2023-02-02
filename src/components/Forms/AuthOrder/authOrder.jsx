import React, { useState } from "react";
import style from "./authOrder.module.scss";

import { Icon } from "@iconify/react";

const AuthOrder = (props) => {
  const [description, setDescription] = useState("");

  if (!props.showAuthOrders) {
    return null;
  }

  return (
    <main className={style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <Icon
          className={style.closeBtn}
          icon="mingcute:close-fill"
          color="white"
          width="20"
          height="20"
          inline={true}
          onClick={props.onClose}
        />
        <header className={style.modalHeader}>
          <h2 className={style.modalTitle}>Заказать услугу</h2>
        </header>
        <section className={style.orderLogoWrapper}>
          <div
            onClick={() => {
              props.setOrderType("IT");
            }}
            className={props.orderType === "IT" ? style.active : null}
          >
            <h2
              style={{
                display: props.orderType === "IT" ? "contents" : "none",
              }}
            >
              IT разработка
            </h2>
            <img alt="IT logo" src="img/forms/IT.svg" />
          </div>
          <div
            onClick={() => {
              props.setOrderType("M");
            }}
            className={props.orderType === "M" ? style.active : null}
          >
            <h2
              style={{ display: props.orderType === "M" ? "contents" : "none" }}
            >
              Маркетинг
            </h2>
            <img alt="M logo" src="img/forms/M.svg" />
          </div>
          <div
            onClick={() => {
              props.setOrderType("C");
            }}
            className={props.orderType === "C" ? style.active : null}
          >
            <h2
              style={{ display: props.orderType === "C" ? "contents" : "none" }}
            >
              Крипто
            </h2>
            <img alt="C logo" src="img/forms/C.svg" />
          </div>
        </section>
        <section className={style.modalInputsWrapper}>
          <div className={style.modalInputs}>
            <div>
              <span>Вы вошли как:</span>
              <p>+7 (925) 540-39-56</p>
            </div>
            <div>
              <span>{localStorage.getItem("name")}</span>
              <p>Nikitam@gmail.com</p>
            </div>
          </div>
          <section className={style.modalDescSection}>
            <div className={style.modalDescWrapper}>
              <span>Описание</span>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                placeholder="Кратко опишите ваш проект"
              ></textarea>
            </div>
          </section>
        </section>
        <button className={style.enterBtn}>Оставить заявку</button>
      </div>
    </main>
  );
};

export default AuthOrder;
