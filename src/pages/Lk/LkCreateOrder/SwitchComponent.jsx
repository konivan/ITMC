import React, { useState } from "react";
import style from "./LkCreateOrder.module.scss";

export const SwitchComponent = ({item, setAllTime, allTime}) => {
    const [check, setCheck] = useState(false);


    return (
    <div className={style.item} style={{opacity: check === true ? null : '0.5'}}>
        <label className={style.switch}>
          <input onClick={() => {
          setCheck(!check)
        }} type="checkbox"/>
          <span className={style.slider}></span>
        </label>
        <label>{item}</label>
        <input className={style.timeInput} placeholder="00:00" readOnly={check === true ? "" : "no"}/>
        —
        <input className={style.timeInput} placeholder="00:00" readOnly={check === true ? "" : "no"}/>
        <input onClick={() => {
          setAllTime(!allTime);
          console.log(allTime)
        }} type="checkbox" className={style.lastCheckBox} disabled={check === true ? "" : "no"}/>
        <label>Круглосуточно</label>
    </div>
    )
}