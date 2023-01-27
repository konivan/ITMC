import React, { useEffect, useState } from "react";

import ProgressTracker from "../../../../components/UI/ProgressTracker/ProgressTracker";

import style from "./OrderList.module.scss";

const Order = ({ order, URL, globalToken }) => {
  const [orderStatus, setOrderStatus] = useState("");

  const url = `${URL}orders/order/${order.id}/condition/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${globalToken}`,
      Accept: "application/json",
    },
  };

  const fetchOrderStatus = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setOrderStatus(data?.results[0]?.status);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    fetchOrderStatus();
  }, []);

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
        <ProgressTracker orderStatus={orderStatus} />
      </div>
    </div>
  );
};

export default Order;
