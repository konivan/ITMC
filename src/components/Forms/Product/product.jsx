import React from "react";
import style from './product.module.scss';

import { Icon } from '@iconify/react';


const Product = (props) => {
  if (!props.showProduct) {
    return null;
  }

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
        <main className={style.mainWrapper}>
          <section className={style.productImageWrapper}>
            <img alt="product" src={props.productImg} />
          </section>
          <section className={style.ProductDesc}>
            <span>Создание и продвижение криптопроекта MASD GAMES</span>
            <div>
              {props.productIcon.map((item) => (
                <img src={item} alt="Icon" />
              ))}
            </div>
          </section>
        </main>
        <section className={style.fullDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Product;