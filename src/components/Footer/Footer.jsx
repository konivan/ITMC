import style from "./Footer.module.scss";
import { IMG } from "./constant";
import { Button } from "../UI/Button/Button";
import { MyButton } from "../UI/MyButton/MyButton";
import { connectWallet } from "../../utils/connectWallet";

export const Footer = (props) => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.box}>
              <div className={style.column}>
                <div className={style.item}>
                  <span>Закажите у нас проект</span>
                  <span>уже сегодня!</span>
                </div>
                <Button>
                  Заказать
                </Button>
              </div>
              <div className={style.column}>
                <img src="img/footer/logo.svg" alt="logo" />
                <p>Ул. Покрышкина 8к2</p>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.column}>
              <img src="img/footer/logo.svg" alt="logo" />
              <p>Ул. Покрышкина 8к2</p>
            </div>
            <div className={style.column}>
              <div className={style.item}>
                {props.userAddress ? (
                  <span>
                    {props.userAddress.substring(0, 6) +
                      "..." +
                      props.userAddress.slice(-4)}
                  </span>
                ) : (
                  <MyButton
                    onClick={() => connectWallet(props.setUserAddress)}
                  >
                    Connect wallet
                  </MyButton>
                )}
              </div>
              <div className={style.item}>
                {IMG.map((item, index) => (
                  <a
                    target={item.target}
                    rel={item.rel}
                    href={item.href}
                    key={`${item} ${index}`}
                  >
                    <img src={item.img} alt={item.alt} />
                  </a>
                ))}
              </div>
            </div>
            <div className={style.column}>
              <h4>Contacts</h4>
              <div className={style.item}>
                <a href="tel:+7 925 104 5382">+7 925 104 5382</a>
                <a href="tel:+7 925 540 3956">+7 925 540 3956</a>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.item}>
                <span>Закажите у нас проект</span>
                <span>уже сегодня!</span>
              </div>
              <Button>
                Заказать
              </Button>
            </div>
            <div className={style.column}>
              <a href="#header">
                <img src="img/footer/icon.svg" alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
