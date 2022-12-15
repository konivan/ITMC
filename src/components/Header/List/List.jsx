import React from 'react';
import style from './List.module.scss'

import { NavLink } from 'react-router-dom';

export  const List = () => {
    return (
        <nav className={style.menu}>
        <ul>
            <li onClick={() => {
              setTimeout(() => {
                window.scroll(0, 900)
              }, 0)
            }}>
              <NavLink to="/">Портфолио</NavLink>
            </li>
            <li onClick={() => {
              setTimeout(() => {
                window.scroll(0, 2000)
              }, 0)
            }}>
              <NavLink to="/team">О нас</NavLink>
            </li>
            <li onClick={() => {
              setTimeout(() => {
                window.scroll(0, 0)
              }, 0)
            }}>
              <NavLink to="/team">Команда</NavLink>
            </li>
            <li onClick={() => {
              setTimeout(() => {
                window.scroll(0, 100)
              }, 0)
            }}>
              <NavLink to="/#services">Услуги</NavLink>
            </li>
        </ul>
      </nav>
    );
};

