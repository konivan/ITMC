import React from "react";
import Carousel from "../../../../components/UI/Carousel/Carousel";

import style from "./OrderInfo.module.scss";

const OrderInfo = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>King Bot</h1>
        <div className={style.text}>
          <div className={style.percent}>2%</div>
          <p>Игра внутри Telegram</p>
          <p className={style.dot}>.</p>
          <p>Backend</p>
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
            <p>Иван Иванов</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/Lk/phone.svg" alt="phoneLogo" />
            <p>+7 777 821-88-01</p>
          </div>
          <div className={style.userInfo}>
            <img src="img/Lk/email.svg" alt="emailLogo" />
            <p>info@itmc.space</p>
          </div>
        </div>
        <div>
          <div className={style.userInfo}>
            <img src="img/Lk/web.svg" alt="webLogo" />
            <p>itmc.space</p>
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
