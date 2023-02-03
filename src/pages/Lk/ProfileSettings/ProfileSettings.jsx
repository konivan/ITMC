import React, { useEffect, useState } from "react";

import PasswordChange from "./PasswordChange";
import PersonalData from "./PersonalData";
import { Bar } from "../Bar/Bar";

import style from "./ProfileSettings.module.scss";
import AccountActions from "./AccountActions";
import { NavLink } from "react-router-dom";
import { Alert } from "../../../components/UI/Alert/Alert";

const ProfileSettings = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [alert, setAlert] = useState("");

  const url = `${props.URL}account/users/me/`;
  const reqOptions = {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("globalToken")}`,
    },
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch(url, reqOptions);
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  // console.log(userData);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={style.main}>
      <div className={style.alert}>
        <Alert alert={alert} setAlert={setAlert} styling={true} />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div
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
          </div>

          <div>
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
                <span>{userData?.username}</span>
                <div className={style.profileImage}>
                  <img src={`${props.URL}${userData?.photo}`} alt="icon" />
                </div>
                {show && (
                  <div className={style.item}>
                    <div className={style.box}>
                      <img src="img/newLk/setting.svg" alt="setting" />
                      <span>Настройки</span>
                    </div>
                    <div className={style.box}>
                      <img src="img/newLk/logoutcurve.svg" alt="logoutcurve" />
                      <span>Выход</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={style.dataWrapper}>
              <PersonalData URL={props.URL} />
              <div>
                <PasswordChange
                  URL={props.URL}
                  alert={alert}
                  setAlert={setAlert}
                />
                <AccountActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
