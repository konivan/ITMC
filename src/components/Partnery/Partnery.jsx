import React from 'react';

import style from './Partnery.module.scss'

export const Partnery = () => {
    return (
        <section className={style.partnery}>
            <div className={style.container}>
                <h2>Наши партнеры</h2>
                <div className={style.column}>
                    <img src="img/partnery/mexc.svg" alt="mexc" />
                    <img src="img/partnery/aiLab.svg" alt="aiLab" />
                </div>
                <div className={style.column}>
                    <img src="img/partnery/mts.svg" alt="mts" />
                    <img src="img/partnery/masd.svg" alt="masd" />
                    <img src="img/partnery/sheksna.svg" alt="sheksna" />
                </div>
            </div>
        </section>
    );
};

