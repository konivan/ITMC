import React from 'react';
import style from './MyButton.module.scss'

export const MyButton = (props) => {
    return (
        <div>
            <button className={style.myBtn}>{props.children}</button>
        </div>
    );
};

