import React from "react";

import ProgressTracker from "../../../../components/UI/ProgressTracker/ProgressTracker";

import style from "./OrderList.module.scss";

const Order = ({ order }) => {
  return (
    <div className={style.orderWrapper}>
      <div className={style.orderImg}>
        <img src={order.image} alt="orderLogo" />
      </div>
      <div className={style.orderText}>
        <div className={style.orderTitle}>
          <h1 style={{ color: "#2F3A4A" }}>{order.name}</h1>
        </div>
      </div>
      <div className={style.progressTracker}>
        <ProgressTracker orderStatus={order.status} />
      </div>
    </div>
  );
};

export default Order;
