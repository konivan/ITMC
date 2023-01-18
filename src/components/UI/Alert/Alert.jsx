import React from 'react';
import style from './Alert.module.scss'

export const Alert = (props) => {
    return (
      <div
        className={style.container}
        style={{ display: props.alert !== "" ? "flex" : "none",
        position: props.style === true ? 'fixed' : 'static' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <img src="img/forms/Alert.svg" alt="error" />
          <span>{props.alert}</span>
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
