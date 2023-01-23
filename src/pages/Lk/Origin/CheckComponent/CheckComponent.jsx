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
      <span>{item.received_money} руб</span>
      <span className={style.paid}>{item.status}</span>
    </div>
  );
};

export default CheckComponent;