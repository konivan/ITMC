import React from "react";
import ProgressTracker from "../../../../components/UI/ProgressTracker/ProgressTracker";

import style from "./OrderList.module.scss";

const OrderList = () => {
  return (
    <div className={style.orderListWrapper}>
      <div className={style.orderWrapper}>
        <div className={style.orderImg}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS4K-5wZT50QWf7QtHmMu3LlHItJrbw8xsw&usqp=CAU"
            alt="icon"
          />
        </div>
        <div className={style.orderText}>
          <div className={style.orderTitle}>
            <h2>King bot</h2>
            <div className={style.orderPercent}></div>
          </div>
          <p>Игра внутри Telegram</p>
        </div>
        <ProgressTracker />
      </div>
    </div>
  );
};

export default OrderList;
