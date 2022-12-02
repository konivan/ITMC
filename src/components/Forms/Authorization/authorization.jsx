import React, { useState } from "react";
import style from "./authorization.module.scss";

import { Icon } from "@iconify/react";

const Authorization = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const authorizationData = {
    email: email,
    username: username,
    password: password,
  };

  if (!props.showAuthorization) {
    return null;
  }

  const url = "http://localhost:8000/account/auth/users/";
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(authorizationData),
  };

  const authorization = () => {
    if (password === repeatPassword) {
      fetch(url, reqOptions, authorizationData)
        .then((res) => {
          if (res.status === 400) {
            return alert("Error: " + res.statusText);
          } else {
            setUsername("");
            setEmail("");
            setPassword("");
            setRepeatPassword("");
            props.setShowAuthorization(false);
            return alert('Пользователь создан');
          }
        })
        .catch((err) => console.log("Error: " + err));
    } else alert('Пароли не совпадают');
  };

  const openAuth = () => {
    props.setShowAuth(true);
    return props.setShowAuthorization(false);
  };

  return (
    <main className={style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <Icon
          className={style.closeBtn}
          icon="mingcute:close-fill"
          color="white"
          width="20"
          height="20"
          inline={true}
          onClick={props.onClose}
        />
        <header className={style.modalHeader}>
          <h2
            onClick={() => openAuth()}
            className={style.modalTitle}
            style={{ color: "#454545" }}
          >
            Войти
          </h2>
          <h2 className={style.modalTitle}>Зарегистрироваться</h2>
        </header>
        <section className={style.modalInputsWrapper}>
          <div className={style.modalInputs}>
            <div className={style.modalEmailWrapper}>
              <span>Ваше имя</span>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                placeholder="Введите имя"
              />
            </div>
            <div className={style.modalPasswordWrapper}>
              <span>E-mail</span>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Введите E-mail"
              />
            </div>
            <div className={style.modalPasswordWrapper}>
              <span>Пароль</span>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type='password'
                placeholder="Придумайте пароль"
              />
            </div>
            <div className={style.modalPasswordWrapper}>
              <span>Подтвердите пароль</span>
              <input
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                }}
                type='password'
                value={repeatPassword}
                placeholder="Повторите пароль"
              />
            </div>
          </div>
        </section>
        <button onClick={authorization} className={style.enterBtn}>
          Войти
        </button>
        <section className={style.spanSection}>
          <span className={style.lineSpan}></span>
          <span className={style.secondarySpan}>Или</span>
          <span className={style.lineSpan}></span>
        </section>
        <section className={style.socialsWrapper}>
          <span>Войти через</span>
          <div className={style.socialsBtnWrapper}>
            <button className={style.googleBtn}>
              <Icon
                icon="flat-color-icons:google"
                width="25"
                height="22"
                inline={true}
              />
              Google
            </button>
            <button className={style.telegramBtn}>
              <Icon
                icon="icon-park-outline:telegram"
                color="white"
                width="21"
                height="22"
                inline={true}
              />
              Telegram
            </button>
            <button className={style.vkBtn}>
              <Icon
                icon="ion:logo-vk"
                color="white"
                width="24"
                height="23"
                inline={true}
              />
              Вконтакте
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Authorization;
