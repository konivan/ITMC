import React, { useState } from "react";
import style from './order.module.scss';

import { Icon } from '@iconify/react';


const Order = (props) => {

    const [name, setName] = useState('')
    const [telegram, setTelegram] = useState('')
    const [description, setDescription] = useState('')

    const orderData = {
        orders: {
          name_created: name,
          telephone_number: telegram,
          telegram: telegram,
          description: description,
        },
      };


    if (!props.showOrders) {
        return null
    }

    const url = `${props.URL}api/orders/`;
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(orderData),
    };

    const sendOrder = () => {
      if (description !== '' && telegram !== '' && name !== '') {
      fetch(url, reqOptions, orderData)
        .then((res) => res.json())
        .then(() => {
            setName('')
            setTelegram('')
            setDescription('')
            props.setShowOrders(false)
        })
        .catch((err) => console.log("Error: " + err));
      } else return alert('Заполните все поля')
    };

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
            <h2>IT разработка</h2>
            <img alt="checkbox" src="img/forms/IT.svg" />
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
                    setTelegram(e.target.value)
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
                    setDescription(e.target.value)
                  }}
                  value={description}
                  placeholder="Кратко опишите ваш проект"
                ></textarea>
              </div>
            </section>
          </section>
          <button onClick={sendOrder} className={style.enterBtn}>Оставить заявку</button>
        </div>
      </main>
    );
}

export default Order;