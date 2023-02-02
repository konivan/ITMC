import React from 'react';
import style from './Alert.module.scss'

export const Alert = (props) => {
    let successAlert = false;
    if (props.alert === 'Заказ успешно отправлен!' || props.alert === 'Пользователь создан!') {
      successAlert = true;
    };

    return (
      <div
        className={style.container}
        style={{ display: props.alert !== "" ? "flex" : "none",
        position: props.styling === true ? 'fixed' : 'static',
        background: successAlert === true ? '#84D65A' : null}}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <img src={successAlert === true ? "img/forms/Success.svg" : "img/forms/Alert.svg"} alt="error" />
          <span style={{color: successAlert === true ? '#2B641E' : null}}>{props.alert}</span>
        </div>
        <img
          src="img/forms/Close.svg"
          alt="close"
          onClick={() => {
            props.setAlert("");
          }}
        />
      </div>
    );
};
