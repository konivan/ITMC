import React, { useState, useEffect } from 'react';
import style from "./LkHeader.module.scss";
import { NavLink } from "react-router-dom";

const LkHeader = ({styling, URL}) => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      const url = `${URL}account/users/me/`;
      const reqOptions = {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("globalToken")}`,
        },
      };
      try {
        const res = await fetch(url, reqOptions);
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchUserData();
  }, []);
  console.log(userData)
  return (
    <div className={style.columnRow} >
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
      <img src={`${URL}${userData?.photo}`} alt="icon" width='45px' height='40px' style={{borderRadius: '50%'}}/>
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