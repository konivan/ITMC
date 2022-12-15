import React from 'react';
import style from './MyButton.module.scss'

export const MyButton = (props) => {
    return (
        <div>
            <button onClick={() => props.works !== 'works' ? props.setShowAuth(true) : 0} className={style.myBtn}>{props.children}</button>
        </div>
    );
};

