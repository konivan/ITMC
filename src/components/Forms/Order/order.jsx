import React, { useState } from "react";
import style from './order.module.scss';

import { Icon } from '@iconify/react';


const Order = (props) => {

    const [name, setName] = useState('')
    const [telegram, setTelegram] = useState('')
    const [description, setDescription] = useState('')

    if (!props.showOrders) {
        return null
    }

    return (
      <main className={style.modal} onClick={props.onClose}>
        <div
          className={style.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
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
            <h2>{props.order}</h2>
            <img
              alt="checkbox"
              src={
                props.order === "IT разработка"
                  ? "img/forms/IT.svg"
                  : props.order === "Маркетинг"
                  ? "img/forms/M.svg"
                  : "img/forms/C.svg"
              }
            />
          </section>
          <section className={style.modalInputsWrapper}>
            <div className={style.modalInputs}>
              <div className={style.modalEmailWrapper}>
                <span>Ваше имя</span>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  placeholder="Введите имя"
                ></input>
              </div>
              <div className={style.modalPasswordWrapper}>
                <span>Номер телефона или Telegram</span>
                <input
                  onChange={(e) => {
                    setTelegram(e.target.value);
                  }}
                  value={telegram}
                  type="email"
                  placeholder="Введите ваш номер"
                ></input>
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
          <button className={style.enterBtn}>
            Оставить заявку
          </button>
        </div>
      </main>
    );
}

export default Order;