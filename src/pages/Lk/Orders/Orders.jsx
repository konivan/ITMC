import React, { useEffect, useMemo, useState } from "react";
import style from "./Orders.module.scss";
import { Bar } from "../Bar/Bar";
import { NavLink } from "react-router-dom";
import OrderList from "./OrderList/OrderList";
import OrderInfo from "./OrderInfo/OrderInfo";
import Page404 from "../../Page404/Page404";

export const Orders = (props) => {
  const [orderData, setOrderData] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const globalToken = localStorage.getItem("globalToken");

  const url = `${props.URL}orders/order/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${globalToken}`,
      Accept: "application/json",
    },
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setOrderData(data.results);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const searchedOrders = useMemo(() => {
    return orderData?.filter((orders) =>
      orders.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );
  }, [inputValue, orderData]);

  // if (localStorage.getItem('globalToken') === null) {
  //   return <Page404/>;
  // }

  return (
    <section className={style.main} id="Orders">
      <div className={style.wrapper}>
        <div className={style.container}>
          <Bar name={props.name} />
          <div className={style.row}>
            <div className={style.column}>
              <h2>Ваши заказы</h2>
              <NavLink to="/LkCreateOrder">
                <button>
                  <img src="img/Lk/UnionX.svg" alt="UnionX" />
                  <span>Заказать</span>
                </button>
              </NavLink>
            </div>
            <div className={style.orders}>
              <div>
                <input
                  value={inputValue}
                  placeholder="Поиск..."
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <OrderList
                  orderData={searchedOrders}
                  URL={props.URL}
                  globalToken={globalToken}
                  setCurrentOrder={setCurrentOrder}
                />
              </div>
              {currentOrder && <OrderInfo currentOrder={currentOrder} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
