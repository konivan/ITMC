import React, { useEffect, useState } from "react";

import ProgressTracker from "../../../../components/UI/ProgressTracker/ProgressTracker";

import style from "./OrderList.module.scss";

const Order = ({ order, URL, globalToken }) => {
  const [contract, setContract] = useState("");

  const url = `${URL}/contracts/${order.id}/condition/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${globalToken}`,
      Accept: "application/json",
    },
  };

  const fetchContracts = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setContract(data);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <div className={style.orderWrapper}>
      <div className={style.orderImg}>
        <img src={order.image} alt="orderLogo" />
      </div>
      <div className={style.orderText}>
        <div className={style.orderTitle}>
          <h1 style={{color: '#2F3A4A'}}>{order.name}</h1>
        </div>
        <p>{order.description}</p>
      </div>
      <ProgressTracker contractStatus={contract.status} />
    </div>
  );
};

export default Order;
