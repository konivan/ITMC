import React from "react";

import style from "./LkCreateOrder.module.scss";

const Contacts = ({
  setAlert,
  phone,
  email,
  domain,
  telegram,
  setPhone,
  setEmail,
  setDomain,
  setTelegram,
}) => {
  const phoneHandler = (e) => {
    setPhone(e.target.value);
    var re = /^[\d\+][\d\(\)\ -]{9,14}\d$/;
    if (!re.test(e.target.value)) {
      setAlert("Некорректный номер");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if (!re.test(e.target.value)) {
      setAlert("Некорректный email");
    }
  };

  const telegramHandler = (e) => {
    setTelegram(e.target.value);
    var re = /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/;
    if (!re.test(e.target.value)) {
      setAlert("Некорректный telegram");
    }
  };

  return (
    <div className={style.row}>
      <span>Контакты</span>
      <input
        placeholder="Номер телефона"
        type="tel"
        value={phone}
        onChange={(e) => {
          phoneHandler(e);
        }}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => {
          emailHandler(e);
        }}
      />
      <input
        placeholder="Домен, если есть"
        value={domain}
        onChange={(e) => {
          setDomain(e.target.value);
        }}
      />
      <input
        placeholder="Telegram"
        value={telegram}
        onChange={(e) => {
          telegramHandler(e);
        }}
      />
    </div>
  );
};

export default Contacts;
