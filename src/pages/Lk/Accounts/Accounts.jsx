import React from 'react';
import style from "./Accounts.module.scss"
import { Bar } from "../Bar/Bar";

export const Accounts = () => {
    return (
        <section className={style.main}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <Bar/>
                    <div className={style.row}>
                        <h2>Счета</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

