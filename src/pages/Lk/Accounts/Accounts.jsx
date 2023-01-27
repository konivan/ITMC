import React from 'react';
import style from "./Accounts.module.scss"
import { Bar } from "../Bar/Bar";
import Page404 from '../../Page404/Page404';

export const Accounts = ({name}) => {
    if (localStorage.getItem('globalToken') === null) {
        return <Page404/>;
      }
    return (
        <section className={style.main}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <Bar name={name}/>
                    <div className={style.row}>
                        <h2>Счета</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

