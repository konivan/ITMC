import React from 'react';
import style from "./Dogovor.module.scss"
import { Bar } from "../Bar/Bar";

export  const Dogovor = (props) => {
    
    return (
        <section className={style.main}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <Bar name={props.name}/>
                    <div className={style.row}>
                        <h2>Ваши договоры</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

