import React, { useState } from "react";
import { Alert } from "../../../components/UI/Alert/Alert";

import style from "./ProfileSettings.module.scss";

const PersonalData = (props) => {
  const [alert, setAlert] = useState("");

  const handleChangePhoto = (e) => {
    let inputFile = e.target.files[0];
    props.setLogoImg(e.target.files[0]);
    let path = URL.createObjectURL(inputFile);
    let image = new Image();
    image.src = path;
    image.onload = function () {
      props.setFile(path);
    };
  };

  const sendChangings = async () => {
    const formData = new FormData();
    props.logoImg && formData.append("photo", props.logoImg);
    props.email && formData.append("email", props.email);
    props.name && formData.append("username", props.name);

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
        setAlert("Данные успешно изменены!");
        setTimeout(() => {
          window.location.pathname = "/Orders";
        }, 1000);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log("Error: " + err);
      setAlert(
        "Введите правильное имя пользователя. Оно может содержать только буквы, цифры и знаки @/./+/-/_."
      );
    }
  };

  return (
    <div className={style.personalDataWrapper}>
      <div className={style.alert}>
        <Alert alert={alert} setAlert={setAlert} styling={true} />
      </div>

      <h1>Личные данные</h1>
      <div className={style.inputWrapper}>
        {props.file === undefined ? (
          <div>
            <img src="img/newLk/camera.png" alt="cameraIcon" />
            <p>Смена фотографии</p>
          </div>
        ) : (
          <img
            src={`${props.file}`}
            alt="yourPhoto"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              marginTop: 0,
            }}
          />
        )}
        <input
          onChange={(e) => handleChangePhoto(e)}
          accept="image/*"
          placeholder="Загрузить фото"
          type="file"
          name="file"
        />
      </div>
      <div>
        <p>Имя пользователя</p>
        <input
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          type="text"
        />
        <p>Электронная почта</p>
        <input
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          type="email"
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

export default PersonalData;
