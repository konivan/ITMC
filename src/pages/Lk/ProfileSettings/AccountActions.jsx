import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Alert } from "../../../components/UI/Alert/Alert";

import style from "./ProfileSettings.module.scss";

const AccountActions = (props) => {
  const [alert, setAlert] = useState("");

  const sendChangings = async () => {
    if (props.password !== props.repeatPassword) {
      return setAlert("Пароли не совпадают");
    }

    const formData = new FormData();
    props.logoImg && formData.append("photo", props.logoImg);
    props.email && formData.append("email", props.email);
    props.name && formData.append("username", props.name);
    props.password && formData.append("password", props.password);

    const url = `${props.URL}account/users/me/`;

    const reqOptions = {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("globalToken")}`,
      },
      body: formData,
    };

    try {
      const res = await fetch(url, reqOptions);

      if (res.ok) {
        localStorage.setItem("name", props.name);
        localStorage.setItem("password", props.password);
        setAlert("Данные успешно изменены!");
        setTimeout(() => {
          window.location.pathname = "/Orders";
        }, 1000);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log("Error: " + err);
      setAlert("Ошибка при выполнении запроса");
    }
  };

  return (
    <div className={style.accountActions}>
      <div className={style.alert}>
        <Alert alert={alert} setAlert={setAlert} styling={true} />
      </div>
      <div>
        <h2>Действия с аккаунтом</h2>
        <p>
          Действия с аккаунтом предназначены для смены общих данных ( логина,
          пароля ) а так же для его удаления, просим вас не удалять аккаунты без
          нужды.
        </p>

        <div className={style.accountActionButtons}>
          <div className={style.item}>
            <button>
              <img src="img/newLk/edit.svg" alt="editIcon" />
              <span onClick={sendChangings}> Применить и сохранить</span>
            </button>
            <button>
              <img src="img/newLk/noteremove.svg" alt="noteremove" />
              <NavLink to="/Orders">
                <span>Отменить</span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
