import React from 'react';
import style from './ButtonPink.module.scss'

export  const ButtonPink = (props) => {
    const callForm = () => {
        if (localStorage.getItem('globalToken') === null) {
            props.setShowAuth(true)
        } else window.location.pathname = '/LkCreateOrder';
    }
    return (
        <div>
            <button onClick={() => callForm()} className={style.btnPnk}>{props.children}</button>
        </div>
    );
};

