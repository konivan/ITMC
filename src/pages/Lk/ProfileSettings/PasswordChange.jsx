import React, { useState } from "react";
import { Alert } from "../../../components/UI/Alert/Alert";

import style from "./ProfileSettings.module.scss";

const PasswordChange = (props) => {
  const [alert, setAlert] = useState("");

  const sendChangings = async () => {
    if (props.password !== props.repeatPassword) {
      return setAlert("Пароли не совпадают");
    }

    if (!props.password || !props.repeatPassword) {
      return setAlert("Введите данные");
    }

    const formData = new FormData();
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
    <div className={style.passwordChangeBox}>
      <div className={style.alert}>
        <Alert alert={alert} setAlert={setAlert} styling={true} />
      </div>
      <h2>Смена пароля</h2>

      <div>
        <p>Пароль</p>
        <input
          type="password"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
        <p>Подтвердите пароль</p>
        <input
          type="password"
          value={props.repeatPassword}
          onChange={(e) => props.setRepeatPassword(e.target.value)}
        />
      </div>

      <div onClick={sendChangings} className={style.buttons}>
        <div className={style.item}>
          <button>
            <img src="img/newLk/edit.svg" alt="editIcon" />
            <span>Применить и сохранить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
