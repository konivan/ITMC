import React, { useEffect, useState } from "react";

import Carousel from "../../../../components/UI/Carousel/Carousel";

import { getSchedule } from "../../../../utils/schedule";

import style from "./OrderInfo.module.scss";

const OrderInfo = ({ currentOrder }) => {
  const userName = localStorage.getItem("name");
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(getSchedule(currentOrder));
  }, [currentOrder]);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>{currentOrder?.name}</h1>
        <div className={style.text}>
          <p>{currentOrder?.category}</p>
        </div>
        <div className={style.buttons}>
          <button>Отменить проект</button>
          <img src="img/Lk/edit.svg" alt="editIcon" />
          <button>Редактировать</button>
        </div>
      </div>

      <Carousel gallery={currentOrder.gallery} />

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
            {schedule.map((el) => {
              return <p key={el}>{el};</p>;
            })}
          </div>
        </div>
      </div>

      <div className={style.description}>
        <p>{currentOrder.description}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
