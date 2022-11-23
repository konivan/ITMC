import React from 'react';
import style from './ButtonPink.module.scss'

export  const ButtonPink = (props) => {
    return (
        <div>
            <button className={style.btnPnk}>{props.children}</button>
        </div>
    );
};

