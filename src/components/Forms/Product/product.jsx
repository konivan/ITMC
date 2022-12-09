import React from "react";
import style from './product.module.scss';

import { Icon } from '@iconify/react';


const Product = (props) => {
  const productDescription = [
    'Мы разработали крипто проект на основе bitcoin. Для этого мы использовали языки программирования java script, type script в основу базы данных легла Postgress SQL.',
    'Мы разработали крипто проект на основе solana и выпустили свой токен masd. Для этого мы использовали языки программирования java script, type script, python, а также мы разработали мета вселенную на основе Unreal engine 4, в основу базы данных легла Postgress SQL.',
    'Мы разработали крипто проект на основе solana. Выпустив свой токен на основе solana.  Для этого мы использовали языки программирования java script в основу базы данных легла Postgress SQL.',
    'Мы сделали полностью децентрализованный маркетплейс с возможностью минтинга NFT. На основе tron. В основу стека для разработки лег язык программирования java script, а в основу базы данных легла Postgress SQL.'
  ]
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
            <span>{props.productTitle}</span>
            <div>
              {props.productIcon.map((item) => (
                <img src={item} alt="Icon" />
              ))}
            </div>
          </section>
        </main>
        <section className={style.fullDescription}>
          <p>
            {}
          </p>
        </section>
      </div>
    </main>
  );
};

export default Product;