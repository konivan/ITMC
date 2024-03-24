import style from "./Menu.module.scss";
import { Button } from "../../UI/Button";
import { NavLink } from "react-router-dom";

export const Menu = (props) => {
  if (!props.activeBurger) {
    return null;
  }

  return (
    <div className={style.menu}>
       <ul>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 300);
            }, 0);
          }}
        >
          <NavLink to="/#services">Services</NavLink>
        </li>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 900);
            }, 0);
          }}
        >
          <NavLink to="/">Pools</NavLink>
        </li>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 0);
            }, 0);
          }}
        >
          <NavLink to="/team">Team</NavLink>
        </li>
        <li
          onClick={() => {
            setTimeout(() => {
              window.scroll(0, 5000);
            }, 0);
          }}
        >
          <NavLink to="/team">About us</NavLink>
        </li>
        <li>
          <NavLink>Выйти</NavLink>
        </li>
      </ul>
      <Button onClick={props.connectWallet} setShowAuthOrders={props.setShowAuthOrders}>Connect wallet</Button>
    </div>
  );
};
