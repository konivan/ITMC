import React from "react";

import ProgressTracker from "../../../../components/UI/ProgressTracker/ProgressTracker";

import style from "./OrderList.module.scss";

const Order = ({ order }) => {
  return (
    <div className={style.orderWrapper}>
      <div className={style.progressTracker}>
        <ProgressTracker orderStatus={order.status} />
      </div>
      <div className={style.orderText}>
        <div className={style.orderTitle}>
          <h4 style={{ color: "##FFFFFF", fontSize: "30px", width: "154px" }}>{order.name}</h4>
        </div>
      </div>
      <div className={style.orderImg}>
        <img src={order.image} alt="orderLogo" />
      </div>
    </div>
  );
};

export default Order;
