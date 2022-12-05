import React from 'react';
import style from './ButtonPink.module.scss'

export  const ButtonPink = (props) => {
    const callForm = () => {
        props.setOrderType(props.orderType)
        props.setShowAuthOrders(true)
    }
    return (
        <div>
            <button onClick={() => callForm()} className={style.btnPnk}>{props.children}</button>
        </div>
    );
};

