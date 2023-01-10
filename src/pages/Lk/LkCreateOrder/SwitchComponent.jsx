import React, { useState } from "react";
import style from "./LkCreateOrder.module.scss";

export const SwitchComponent = ({item}) => {
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
        <input className={style.timeInput} placeholder="00:00" readOnly={check === true ? "" : "false"}/>
        —
        <input className={style.timeInput} placeholder="00:00" readOnly={check === true ? "" : "false"}/>
        <input type="checkbox" className={style.lastCheckBox} disabled={check === true ? "" : "false"}/>
        <label>Круглосуточно</label>
    </div>
    )
}