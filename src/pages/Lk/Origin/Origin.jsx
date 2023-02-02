import React, { useState, useEffect } from "react";
import CheckComponent from "./CheckComponent/CheckComponent";
import style from "./Origin.module.scss";
import { Bar } from "../Bar/Bar";
import Page404 from "../../Page404/Page404";

export const Origin = (props) => {
  const [checks, setChecks] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(true);

  useEffect(() => {
    const url = `${props.URL}orders/paychecks/history_payments/`;
    const reqOptions = {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("globalToken")}`,
        Accept: "application/json",
      },
    };

    const fetchChecks = async () => {
      try {
        const res = await fetch(url, reqOptions);
        const data = await res.json();
        setChecks(data);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchChecks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (localStorage.getItem("globalToken") === null) {
    return <Page404 />;
  }

  return (
    <section className={style.main}>
      <div className={style.wrapper}>
        <div className={style.container}>
            <Bar name={props.name} />
            <div className={style.row}>
              {checks?.map((item, index) => (
                <CheckComponent key={`${item} ${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};
