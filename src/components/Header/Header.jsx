import { useState } from "react";
import { WalletSDK } from "@roninnetwork/wallet-sdk";
import style from "./Header.module.scss";

import { Button } from "../UI/Button/Button";
import { MyButton } from "../UI/MyButton/MyButton";
import { List } from "./List";
import { Menu } from "./Menu/Menu";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  const [activeBurger, setActiveBurger] = useState(false);
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("adress")
  );

  const connectWallet = async () => {
    function checkRoninInstalled() {
      if ("ronin" in window) {
        return true;
      }
      window.open("https://wallet.roninchain.com", "_blank");
      return false;
    }
    const sdk = new WalletSDK();
    await sdk.connectInjected();

    const isInstalled = checkRoninInstalled();
    if (isInstalled === false) {
      return;
    }

    const accounts = await sdk.requestAccounts();
    if (accounts) {
      localStorage.setItem("adress", accounts[0]);
      setUserAddress(accounts[0]);
    }
  };

  const disconnectWallet = () => {
    localStorage.removeItem("addres");
    setUserAddress();
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
                    setShowAuthOrders={props.setShowAuthOrders}
                    setIsAuth={props.setIsAuth}
                    isAuth={props.isAuth}
                    activeBurger={activeBurger}
                    connectWallet={connectWallet}
                  />
                </div>
              </div>
            </div>
          </div>
          <List />
          <div className={style.column}>
            <div className={style.item}>
              <Button
                setShowAuthOrders={props.setShowAuthOrders}
                setShowAuth={props.setShowAuth}
              >
                Заказать
              </Button>
            </div>
            <div className={style.item}>
              {userAddress ? (
                <span>
                  {userAddress.substring(0, 6) + "..." + userAddress.slice(-4)}
                </span>
              ) : (
                <MyButton
                  onClick={connectWallet}
                  setShowAuth={props.setShowAuth}
                >
                  Connect wallet
                </MyButton>
              )}
              {userAddress ? (
                <div className={style.dropdown} onClick={disconnectWallet}>
                  Disonnect wallet
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
