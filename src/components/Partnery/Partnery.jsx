import React from 'react';

import style from './Partnery.module.scss'

export const Partnery = () => {
    return (
      <section className={style.partnery}>
        <div className={style.container}>
          <h2>Наши партнеры</h2>
          <div className={style.column}>
            <a target="_blank" href="http://www.sheksna-shipping.ru/"><img src="img/partnery/sheksna.svg" alt="sheksna" /></a>
            <a target="_blank" href="https://mtservicesltd.com/"><img src="img/partnery/mts.svg" alt="mts" /></a>
            <a target="_blank" href="https://masd.games/"><img src="img/partnery/masd.svg" alt="masd" /></a>
          </div>
          <div className={style.column}>
            <a target="_blank" href="https://www.mexc.com/ru-RU"><img src="img/partnery/mexc.svg" alt="mexc" /></a>
            <a target="_blank" href="http://killnet73.ru/"><img src="img/partnery/aiLab.svg" alt="aiLab" /></a>
          </div>
        </div>
      </section>
    );
};

