import React from "react";
import Order from "./Order";

import style from "./OrderList.module.scss";

const OrderList = ({ URL, globalToken, orderData, setCurrentOrder }) => {
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${globalToken}`,
      Accept: "application/json",
    },
  };

  const fetchOrderById = async (id) => {
    try {
      const res = await fetch(`${URL}orders/order/${id}/`, reqOptions);
      const data = await res.json();

      setCurrentOrder(data);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <div className={style.orderListWrapper}>
      {orderData?.map((order) => {
        return (
          <div key={order.id} onClick={() => fetchOrderById(order.id)}>
            <Order order={order} URL={URL} globalToken={globalToken} />
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
