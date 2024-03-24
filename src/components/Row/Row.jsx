import React from "react";
import style from "./Row.module.scss";

export const Row = () => {
  return (
    <section className={style.row}>
      <div className={style.container}>
        <div className={style.column}>
          <h1>ITMC</h1>
          <div className={style.item}>
            <div className={style.box}>
              <span>IT</span>
              <span>Marketing</span>
              <span>Crypto</span>
            </div>
            <p>First NFT axie staking</p>
          </div>
        </div>
        <p className={style.text}>First NFT axie staking</p>
      </div>
    </section>
  );
};
