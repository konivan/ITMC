import style from "./List.module.scss";
import { NavLink } from "react-router-dom";

export const List = () => {
  return (
    <nav className={style.menu}>
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
      </ul>
    </nav>
  );
};
