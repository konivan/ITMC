import React from 'react';
import style from './Button.module.scss'

export const Button = (props) => {
    const callForm = () => {
        if (localStorage.getItem('globalToken') === null) {
            props.setShowAuth(true)
        } else window.location.pathname = '/LkCreateOrder';
    }
    return (
        <div>
            <button onClick={() => callForm()} className={style.btn}>{props.children}</button>
        </div>
    );
};


