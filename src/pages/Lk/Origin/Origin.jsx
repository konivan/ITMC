import React, { useState, useEffect } from "react";
import CheckComponent from "./CheckComponent/CheckComponent";
import style from "./Origin.module.scss";
import { Bar } from "../Bar/Bar";
import Page404 from "../../Page404/Page404";
import LkHeader from "../../../components/LkHeader/LkHeader";

export const Origin = (props) => {
  const [checks, setChecks] = useState([]);
  const [activeBurger, setActiveBurger] = useState(true);

  useEffect(() => {
    const url = `${props.URL}orders/paycheck/`;
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
        setChecks(data?.results);
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
      <div className={activeBurger === true ? style.burgerActive : style.burger} onClick={() => setActiveBurger(!activeBurger)}><span></span></div>
        <LkHeader styling={true} URL={props.URL}/>
        <div className={style.container}>
          <Bar activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
          <div>
            <h2>Счета на оплату</h2>
          </div>
          <div className={style.row}>
            {checks?.map((item, index) => (
              <CheckComponent
                key={`${item} ${index}`}
                item={item}
                urll={props.URL}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
