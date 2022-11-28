import React from "react";
import style from './authOrder.module.scss';

import { Icon } from '@iconify/react';


const AuthOrder = (props) => {

    const orderData = {
            "orders": {
                    "name_created": "example_name",
                    "telephone_number": "+79999999999",
                    "telegram": "example_telegram_name",
                    "description": "example_description"
                }
    }

    if (!props.showAuthOrders) {
        return null
    }

const url = 'http://localhost:8000/account/api/orders/'
const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Origin': '*' }
} 

const sendOrder = () => {
    fetch(url, reqOptions, orderData)
    .then((res) => res.json())
    .catch(err => console.log("Error: " + err ))
    
}

    return (
        <main className={style.modal} onClick={props.onClose}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <Icon className={style.closeBtn} icon="mingcute:close-fill" color="white" width="20" height="20" inline={true} onClick={props.onClose}/>
                <header className={style.modalHeader}>
                    <h2 className={style.modalTitle}>Заказать услугу</h2>
                </header>
                <section className={style.orderLogoWrapper}>
                    <h2>{props.orderTitle}</h2>
                    <img alt="checkbox" src="img/forms/IT.svg"/>
                </section>
                <section className={style.modalInputsWrapper}>
                    <div className={style.modalInputs}>
                        <div>
                            <span>Вы вошли как:</span>
                            <p>+7 (925) 540-39-56</p>
                        </div>
                        <div>
                            <span>Можаев Никита</span>
                            <p>Nikitam@gmail.com</p>
                        </div>
                    </div>
                    <section className={style.modalDescSection}>
                        <div className={style.modalDescWrapper}>
                            <span>Описание</span>
                            <textarea onChange={(e) => {orderData.orders.description = e.target.value
                            console.log(orderData)}} placeholder="Кратко опишите ваш проект"></textarea>
                        </div>
                    </section>
                </section>
                <button onClick={sendOrder} className={style.enterBtn}>Оставить заявку</button>
            </div>
        </main>
    )   
}

export default AuthOrder;