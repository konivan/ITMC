import React from 'react';
import style from "./CheckComponent.module.scss";

const CheckComponent = ({item}) => {
  return (
    <div className={style.box}>
      <input type="checkbox" className={style.lastCheckBox} />
      <span>№32467</span>
      <span>{item.created.slice(0, 10)}</span>
      <span>itmc</span>
      <span>{item.price} руб</span>
      <span>{item.received_money === undefined ? item.received_money : 0} руб</span>
      <span
        className={
          item.status === "paid"
            ? style.paid
            : item.status === "processing"
            ? style.processing
            : style.rejected
        }
      >
        {item.status}
      </span>
      <button>
        <a href={item.pay_url} target="_blank">Оплатить</a>
      </button>
    </div>
  );
};

export default CheckComponent;