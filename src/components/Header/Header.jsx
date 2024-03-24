import { useState } from "react";
import style from "./Header.module.scss";
import { Button } from "../UI/Button/Button";
import { MyButton } from "../UI/MyButton/MyButton";
import { List } from "./List";
import { Menu } from "./Menu/Menu";
import { NavLink } from "react-router-dom";
import { connectWallet } from "../../utils/connectWallet";

export const Header = (props) => {
  const [activeBurger, setActiveBurger] = useState(false);

  const disconnectWallet = () => {
    localStorage.removeItem("addres");
    props.setUserAddress();
  };

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.column}>
            <NavLink
              to="/"
              onClick={() => {
                setTimeout(() => {
                  window.scroll(0, 0);
                }, 0);
              }}
            >
              <img src="img/header/logoITMC.svg" alt="logo" />
            </NavLink>
            <div className={style.item}>
              <img
                onClick={connectWallet}
                className={style.lk}
                src="img/header/lk.svg"
                alt="lk"
              />
              <div
                className={
                  activeBurger === true ? style.burgerActive : style.burger
                }
                onClick={() => setActiveBurger(!activeBurger)}
              >
                <span></span>
                <div onClick={(e) => e.stopPropagation()}>
                  <Menu
                    activeBurger={activeBurger}
                    connectWallet={() => connectWallet(props.setUserAddress)}
                  />
                </div>
              </div>
            </div>
          </div>
          <List />
          <div className={style.column}>
            <div className={style.item}>
              <Button>
                Заказать
              </Button>
            </div>
            <div className={style.item}>
              {props.userAddress ? (
                <>
                <span>
                  {props.userAddress.substring(0, 6) + "..." + props.userAddress.slice(-4)}
                </span>
                <img className={style.lk}
                onClick={disconnectWallet}
                src="img/header/lk.svg"
                alt="lk"/>
                </>
              ) : (
                <MyButton
                  onClick={() => connectWallet(props.setUserAddress)}>
                  Connect wallet
                </MyButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
