import React, { useEffect, useMemo, useState } from "react";

import OrderList from "./OrderList/OrderList";
import OrderInfo from "./OrderInfo/OrderInfo";
import Page404 from "../../Page404/Page404";

import { Bar } from "../Bar/Bar";
import LkHeader from "../../../components/LkHeader/LkHeader";

import style from "./Orders.module.scss";

export const Orders = (props) => {
  const [orderData, setOrderData] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [activeBurger, setActiveBurger] = useState(true);

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

  if (localStorage.getItem("globalToken") === null) {
    return <Page404 />;
  }

  return (
    <section className={style.main} id="Orders">
      <div className={style.wrapper}>
        <div className={style.container}>
          {/* <div
            className={
              !sideBarOpen ? `${style.sideBarOpened}` : `${style.sideBarClosed}`
            }
          >
            <Bar name={props.name} />
            <img
              onClick={() => setSideBarOpen(!sideBarOpen)}
              src="img/Lk/sideBarIcon.svg"
              alt="sideBarIcon"
            />
          </div> */}
          <Bar
            name={props.name}
            activeBurger={activeBurger}
            setActiveBurger={setActiveBurger}
          />
          <div
            className={
              activeBurger === true ? style.burgerActive : style.burger
            }
            onClick={() => setActiveBurger(!activeBurger)}
          >
            <span></span>
          </div>
          <div className={style.row}>
            <LkHeader URL={props.URL}/>
            <div className={style.orders}>
              <div className={style.searchInput}>
                <OrderList
                  orderData={searchedOrders}
                  URL={props.URL}
                  globalToken={globalToken}
                  setCurrentOrder={setCurrentOrder}
                />
              </div>
              {currentOrder && (
                <OrderInfo
                  orderData={orderData}
                  setOrderData={setOrderData}
                  currentOrder={currentOrder}
                  setCurrentOrder={setCurrentOrder}
                  URL={props.URL}
                  globalToken={globalToken}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
