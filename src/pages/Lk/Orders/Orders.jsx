import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import { Bar } from "../Bar/Bar";
import OrderList from "./OrderList/OrderList";
import OrderInfo from "./OrderInfo/OrderInfo";
import Page404 from "../../Page404/Page404";

import style from "./Orders.module.scss";

export const Orders = (props) => {
  const [orderData, setOrderData] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [show, setShow] = useState(false);

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          <Bar name={props.name} />
          <div className={style.row}>
            <div className={style.columnRow}>
              <div className={style.column}>
                <NavLink to="/LkCreateOrder">
                  <button>
                    <img src="img/newLk/add.svg" alt="add" />
                    <span>Сделать заказ</span>
                  </button>
                </NavLink>
              </div>
              <div className={style.userName}>
                <img
                  onClick={() => setShow(!show)}
                  src="img/newLk/arrowdown.svg"
                  alt="arrowdown"
                />
                <span>{localStorage.getItem("name")}</span>
                <img src="img/lk/icon.svg" alt="icon" />
                {show && (
                  <div className={style.item}>
                    <div className={style.box}>
                      <img src="img/newLk/setting.svg" alt="setting" />
                      <NavLink to="/ProfileSettings">Настройки</NavLink>
                    </div>
                    <div className={style.box}>
                      <img src="img/newLk/logoutcurve.svg" alt="logoutcurve" />
                      <span>Выход</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

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
