import React, { useState } from 'react';
import style from "./LkHeader.module.scss";
import { NavLink } from "react-router-dom";

const LkHeader = ({styling}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={style.columnRow} style={styling === true ? {position: 'absolute', left: '300px', width: '1600px', marginTop: '16px'} : null}>
    <div className={style.column}>
      <NavLink to="/LkCreateOrder">
        <button>
          <img src="img/newLk/add.svg" alt="add" />
          <span>Сделать заказ</span>
        </button>
      </NavLink>
    </div>
    <div className={style.userName}>
      <img
        onClick={() => setShow(!show)}
        src="img/newLk/arrowdown.svg"
        alt="arrowdown"
      />
      <span>{localStorage.getItem("name")}</span>
      <img src="img/lk/icon.svg" alt="icon" />
      {show && (
        <div className={style.item}>
          <div className={style.box}>
            <img src="img/newLk/setting.svg" alt="setting" />
            <NavLink to="/ProfileSettings">Настройки</NavLink>
          </div>
          <div className={style.box}>
            <img src="img/newLk/logoutcurve.svg" alt="logoutcurve" />
            <NavLink to="/" onClick={() => {
                setTimeout(() => {
                  window.location.reload();
                }, 0);
              }}>Выход</NavLink>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default LkHeader;