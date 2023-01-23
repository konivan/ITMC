import React from "react";

import Carousel from "../../../../components/UI/Carousel/Carousel";

import style from "./OrderInfo.module.scss";

const OrderInfo = ({ currentOrder }) => {
  const userName = localStorage.getItem("name");

  // const obj = {};

  // for (const key in currentOrder.conference) {
  //   if (key.includes("_start") || key.includes("_end")) {
  //     obj[key] = currentOrder.conference[key];
  //   }
  // }

  // for (const key in obj) {
  //   obj[key]?.substring(0, 6)
  //   console.log(obj[key]);
  // }
  //  console.log(obj);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>{currentOrder?.name}</h1>
        <div className={style.text}>
          <div className={style.percent}>2%</div>
          <p>{currentOrder?.description}</p>
          <p className={style.dot}>.</p>
          <p>{currentOrder?.category}</p>
        </div>
        <div className={style.buttons}>
          <button>Отменить проект</button>
          <img src="img/Lk/edit.svg" alt="" />
          <button>Редактировать</button>
        </div>
      </div>

      <Carousel />

      <div className={style.info}>
        <div>
          <div className={style.userInfo}>
            <img src="img/Lk/user.svg" alt="userLogo" />
            <p>{userName}</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/Lk/phone.svg" alt="phoneLogo" />

            <p>{currentOrder?.contact.phone}</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/Lk/email.svg" alt="emailLogo" />
            <p>{currentOrder?.contact.email}</p>
          </div>
        </div>
        <div>
          <div className={style.userInfo}>
            <img src="img/Lk/web.svg" alt="webLogo" />
            <p>{currentOrder?.contact.domain}</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/Lk/time.svg" alt="timeLogo" />
            <p>пн,вт 12:00–0:00; ср,чт,пт 12:00–3:00; сб, вс выходной</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
