import React, { useState } from "react";

import style from "./ProfileSettings.module.scss";

const PasswordChange = (props) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  

  const sendChangings = async () => {
    if (password !== repeatPassword) {
      return props.setAlert("Пароли не совпадают");
    }

    const formData = new FormData();
    formData.append("password", password);

    const url = `${props.URL}account/users/me/`;
    // const results = {};
    const reqOptions = {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("globalToken")}`,
      },
      body: formData,
    };

    try {
      const res = await fetch(url, reqOptions);
      // console.log(res);

      // if(res.ok) {
      //   localStorage.setItem('name', name)
      // }
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  // console.log(password, repeatPassword);

  return (
    <div className={style.passwordChangeBox}>
      <h2>Смена пароля</h2>

      <div>
        <p>Пароль</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Подтвердите пароль</p>
        <input
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
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
