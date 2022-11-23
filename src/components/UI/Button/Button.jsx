import React from 'react';
import style from './Button.module.scss'

export const Button = (props) => {
    return (
        <div>
            <button className={style.btn}>{props.children}</button>
        </div>
    );
};

