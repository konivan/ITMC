import { React } from "react";
import style from "./auth.module.scss";

import { Icon } from "@iconify/react";
import { useState } from "react";

const Auth = (props) => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authData = {
    password: password,
    username: username,
  };

  if (!props.showAuth) {
    return null;
  }

  const url = `http://127.0.0.1:8000/api/token/`;
  const reqOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  };

  const auth = () => {
    if (password !== "" && username !== "") {
      fetch(url, reqOptions, authData)
        .then((res) => {
          if (res.status !== 200) {
            alert("Неправильное имя пользователя или пароль");
          } else {
            setPassword("");
            setUsername("");
            props.setIsAuth(true);
            props.setShowAuth(false);
            return alert("Вы вошли");
          }
        })
        .catch((err) => console.log("Error: " + err));
    } else return alert("Заполните все поля");
  };

  const openAuthorization = () => {
    props.setShowAuthorization(true);
    return props.setShowAuth(false);
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
          <h2 className={style.modalTitle}>Войти</h2>
          <h2
            onClick={() => openAuthorization()}
            className={style.modalTitle}
            style={{ color: "#454545" }}
          >
            Зарегистрироваться
          </h2>
        </header>
        <section className={style.modalInputsWrapper}>
          <div className={style.modalInputs}>
            <div className={style.modalEmailWrapper}>
              <span>Имя пользователя</span>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                  props.setname(e.target.value);
                }}
                value={username}
                placeholder="Введите имя"
              />
            </div>
            <div className={style.modalPasswordWrapper}>
              <span>Пароль</span>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Введите пароль"
              />
            </div>
          </div>
          <div className={style.checkboxContainer}>
            <input
              onClick={() => setActiveCheckbox(!activeCheckbox)}
              onChange={() => {
                return 0;
              }}
              checked={activeCheckbox}
              type="checkbox"
              className={style.checkboxInput}
            ></input>
            {activeCheckbox ? (
              <img
                className={style.checkboxSvg}
                alt="checkbox"
                onClick={() => setActiveCheckbox(!activeCheckbox)}
                src="img/forms/Union.svg"
              />
            ) : null}
            <span className={style.checkmark}>Запомнить меня</span>
          </div>
        </section>
        <button onClick={auth} className={style.enterBtn}>
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

export default Auth;
